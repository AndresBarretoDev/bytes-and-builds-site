import { Resend } from 'resend';

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key?.trim()) {
      throw new Error(
        'RESEND_API_KEY no está definida.'
      );
    }
    _resend = new Resend(key.trim());
  }
  return _resend;
}

export { getResend };
