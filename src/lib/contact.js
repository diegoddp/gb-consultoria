// Dados de contato centralizados. Altere aqui e todo o site acompanha.
export const COMPANY_NAME = 'GB Consultoria de Segurança do Trabalho';
export const WHATSAPP_NUMBER = '5515999146221'; // formato internacional, sem símbolos
export const PHONE_DISPLAY = '(15) 99114-6221';
export const EMAIL = 'gb.consultoriast@gmail.com';
export const CITY = 'Tietê - SP';
export const INSTAGRAM_URL = 'https://instagram.com/gbconsultoriast';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Monta um link do WhatsApp já com a mensagem preenchida. */
export const buildWhatsAppUrl = (text) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const openWhatsApp = (text) => {
  const url = text ? buildWhatsAppUrl(text) : WHATSAPP_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};
