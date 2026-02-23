'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { getResend } from '@/lib/resend';

// --- Rate Limiting (in-memory, per IP) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutos

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// --- Turnstile Verification ---
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v1/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    });
    const data = await res.json();
    // DEBUG TEMPORAL — eliminar después de diagnosticar
    console.log('[Turnstile] secret key present:', !!process.env.TURNSTILE_SECRET_KEY);
    console.log('[Turnstile] token length:', token?.length);
    console.log('[Turnstile] siteverify response:', JSON.stringify(data));
    return data.success === true;
  } catch (err) {
    console.error('[Turnstile] fetch error:', err);
    return false;
  }
}

// --- Schema ---
const contactSchema = z.object({
  name: z.string().min(2, 'Nombre inválido'),
  company: z.string().optional(),
  email: z.string().email('Correo inválido'),
  phone: z.string().min(7, 'Teléfono inválido'),
  service: z.string().min(2, 'Servicio requerido'),
  message: z.string().min(10, 'Mensaje demasiado corto'),
  privacy: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }) }),
  turnstileToken: z.string().min(1, 'Verificación de seguridad requerida'),
});

const FROM = 'Bytes & Builds <sistema@updates.bytesandbuilds.com>';
const TO = 'info@bytesandbuilds.com';

export type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactEmail(formData: unknown): Promise<ContactResult> {
  // IP detection (proxy-aware)
  const headersList = await headers();
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ??
    headersList.get('x-real-ip') ??
    'unknown';

  // Rate limit check
  if (!checkRateLimit(ip)) {
    return { success: false, error: 'Demasiados intentos. Intenta de nuevo en 10 minutos.' };
  }

  // Schema validation
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg = Object.values(first).flat().find(Boolean) ?? 'Datos inválidos';
    return { success: false, error: String(msg) };
  }

  const { name, company, email, phone, service, message, turnstileToken } = parsed.data;

  // Turnstile verification
  const isHuman = await verifyTurnstile(turnstileToken, ip);
  if (!isHuman) {
    return { success: false, error: 'No se pudo verificar que eres humano. Intenta de nuevo.' };
  }

  const html = `
    <h2>Nuevo contacto desde bytesandbuilds.com</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Servicio:</strong> ${escapeHtml(service)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const { error } = await getResend().emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Nuevo contacto: ${name}`,
      html,
    });

    if (error) {
      return { success: false, error: error.message ?? 'Error al enviar el correo' };
    }
    return { success: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Error inesperado';
    return { success: false, error: message };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
