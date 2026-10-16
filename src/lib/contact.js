// Dados de contato centralizados. Altere aqui e todo o site acompanha.
// Telefone, Instagram e endereço conforme a apresentação institucional atualizada (out/2026).
export const COMPANY_NAME = 'GB Consultoria de Segurança do Trabalho';
export const CONTACT_PERSON = 'Gustavo Botelho';
export const WHATSAPP_NUMBER = '5515991769027'; // formato internacional, sem símbolos
export const PHONE_DISPLAY = '(15) 99176-9027';
export const EMAIL = 'contato@gbconsultoriasst.com.br';
export const CITY = 'Tietê - SP';
export const ADDRESS_LINE = 'Rua Francisco Cândido, 56 – Santa Maria';
export const ADDRESS_FULL = `${ADDRESS_LINE} – Tietê/SP`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Francisco Cândido, 56, Santa Maria, Tietê, SP')}`;
export const INSTAGRAM_HANDLE = '@gb.consultorias';
export const INSTAGRAM_URL = 'https://instagram.com/gb.consultorias';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Monta um link do WhatsApp já com a mensagem preenchida. */
export const buildWhatsAppUrl = (text) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const openWhatsApp = (text) => {
  const url = text ? buildWhatsAppUrl(text) : WHATSAPP_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/** Partes do e-mail, para quebrar a linha antes do "@" em telas estreitas. */
export const EMAIL_USER = EMAIL.split('@')[0];
export const EMAIL_DOMAIN = EMAIL.split('@')[1];
