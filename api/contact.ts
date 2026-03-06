import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API = "https://api.resend.com/emails";
const DEFAULT_CONTACT_EMAIL = "nmpiovano@gmail.com";

type ContactBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? DEFAULT_CONTACT_EMAIL;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY");
    res.status(500).json({
      error: "Configuración del servidor incompleta. Revisa RESEND_API_KEY.",
    });
    return;
  }

  let body: ContactBody;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: "Cuerpo de la petición inválido" });
    return;
  }

  const { name, email, subject, message } = body;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !subject?.trim() ||
    !message?.trim()
  ) {
    res.status(400).json({ error: "Todos los campos son obligatorios" });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({ error: "Email inválido" });
    return;
  }

  const html = `
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
    <h3>Mensaje:</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Resend error:", response.status, data);
      res.status(502).json({
        error: "No se pudo enviar el mensaje. Intentá de nuevo más tarde.",
      });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    res.status(500).json({
      error: "Error interno. Intentá de nuevo más tarde.",
    });
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
