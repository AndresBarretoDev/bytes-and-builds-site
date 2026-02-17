'use server';

import { z } from 'zod';
import { getResend } from '@/lib/resend';

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre inválido'),
  company: z.string().optional(),
  email: z.string().email('Correo inválido'),
  phone: z.string().min(7, 'Teléfono inválido'),
  service: z.string().min(2, 'Servicio requerido'),
  message: z.string().min(10, 'Mensaje demasiado corto'),
  privacy: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }) }),
});

const FROM = 'Bytes & Builds <sistema@updates.bytesandbuilds.com>';
const TO = 'info@bytesandbuilds.com';

export type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactEmail(formData: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg = Object.values(first).flat().find(Boolean) ?? 'Datos inválidos';
    return { success: false, error: String(msg) };
  }

  const { name, company, email, phone, service, privacy, message } = parsed.data;

  const html = `
    <h2>Nuevo contacto desde bytesandbuilds.com</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Servicio:</strong> ${escapeHtml(service)}</p>
    <p><strong>Política de privacidad:</strong> ${escapeHtml(privacy.toString())}</p>
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
