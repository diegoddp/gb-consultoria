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

// Web3Forms: envia o formulário de contato por e-mail para a caixa cadastrada na conta.
// Esta chave é pública por design (só permite enviar para o e-mail da conta), pode ficar no código.
export const WEB3FORMS_ACCESS_KEY = '8f496c72-928a-4585-8a56-620bda9671c0';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
// Chave compartilhada do hCaptcha fornecida pelo Web3Forms para o plano gratuito.
// Exige ativar "Block Spam > hCaptcha" no painel do Web3Forms.
export const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

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
