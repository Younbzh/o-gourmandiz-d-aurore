/**
 * Lien WhatsApp vers Aurore, avec un message déjà écrit si besoin.
 *
 * On passe par api.whatsapp.com et pas par wa.me : la redirection de wa.me
 * abîmait les émojis (📌, 📅, 🎂…), qui arrivaient chez Aurore en losanges « ? ».
 * Le lien direct, testé par Aurore le 16 octobre 2026, les affiche correctement.
 */

import { siteConfig } from '../config/siteConfig';

export const lienWhatsApp = (message?: string) =>
  `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}` +
  (message ? `&text=${encodeURIComponent(message)}` : '');
