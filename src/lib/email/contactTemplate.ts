import type { ContactFormData } from "../../types/contact.js";
import { normalizeWhatsApp } from "./normalize.js";

export const buildContactEmail = (data: ContactFormData) => {
  const whatsapp = normalizeWhatsApp(data.whatsapp);
  const whatsappLink = `https://wa.me/${whatsapp}`;

  return {
    subject: `Nouveau message — ${data.name}`,
    html: `
      <h2>Nouveau message depuis le portfolio</h2>

      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p>
        <strong>WhatsApp :</strong>
        <a href="${whatsappLink}" target="_blank">${data.whatsapp}</a>
      </p>

      <hr />

      <p>${data.message.replace(/\n/g, "<br />")}</p>
    `,
  };
};