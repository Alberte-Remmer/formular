"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  await resend.emails.send({
    from: "Kontaktformular <noreply@din-side.dk>",
    to: "alre0003@stud.ek.dk",
    subject: "Ny besked fra kontaktformular",
    html: `
      <h2>Ny besked fra ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Besked:</strong></p>
      <p>${message}</p>
    `,
  });

  return { success: true };
}
