import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PageHero from '@/components/PageHero';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SERVICES } from '@/lib/services';
import {
  openWhatsApp,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  EMAIL,
  EMAIL_USER,
  EMAIL_DOMAIN,
  CITY,
  ADDRESS_FULL,
  MAPS_URL,
  CONTACT_PERSON,
  INSTAGRAM_HANDLE,
  WHATSAPP_NUMBER,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from '@/lib/contact';
import { reveal } from '@/lib/motion';

const INITIAL_FORM = {
  nome: '',
  empresa: '',
  email: '',
  whatsapp: '',
  servico: '',
  mensagem: '',
};

const SERVICO_LABELS = {
  ...Object.fromEntries(SERVICES.map((s) => [s.id, s.short])),
  outro: 'Outro',
};

const CHANNELS = [
  { icon: Phone, label: `WhatsApp · ${CONTACT_PERSON}`, value: PHONE_DISPLAY, href: `tel:+${WHATSAPP_NUMBER}` },
  { icon: Mail, label: 'E-mail', value: <>{EMAIL_USER}<wbr />@{EMAIL_DOMAIN}</>, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: `Endereço · atendemos ${CITY} e região`, value: ADDRESS_FULL, href: MAPS_URL, external: true },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContatoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(INITIAL_FORM);
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');
  const [botcheck, setBotcheck] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const servicoLabel = SERVICO_LABELS[formData.servico] || 'Não informado';

  const validate = () => {
    if (!formData.nome.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha Nome, E-mail e WhatsApp.',
        variant: 'destructive',
      });
      return false;
    }
    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      toast({
        title: 'E-mail inválido',
        description: 'Confira o endereço de e-mail informado.',
        variant: 'destructive',
      });
      return false;
    }
    return true;
  };

  // Envio principal: e-mail via Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending' || !validate()) return;

    setStatus('sending');
    try {
      // Mesmo formato do exemplo oficial do Web3Forms para React (FormData, sem cabeçalhos)
      const payload = new FormData();
      Object.entries({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Pedido de orçamento pelo site: ${formData.nome.trim()}`,
        from_name: 'Site GB Consultoria',
        replyto: formData.email.trim(),
        Nome: formData.nome.trim(),
        Empresa: formData.empresa.trim() || 'Não informada',
        'E-mail': formData.email.trim(),
        WhatsApp: formData.whatsapp.trim(),
        // Nomes de campo sem acento: o Web3Forms corrompe acentos nos nomes (os valores chegam corretos)
        Interesse: servicoLabel,
        Mensagem: formData.mensagem.trim() || 'Sem mensagem',
      }).forEach(([key, value]) => payload.append(key, value));
      if (botcheck) payload.append('botcheck', 'on');

      const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || `HTTP ${response.status}`);

      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error('Falha ao enviar o formulário:', error);
      setStatus('error');
      toast({
        title: 'Não foi possível enviar',
        description: 'Tente novamente ou envie sua mensagem pelo WhatsApp.',
        variant: 'destructive',
      });
    }
  };

  // Alternativa: abre o WhatsApp com os dados já preenchidos
  const sendViaWhatsApp = () => {
    if (!validate()) return;
    const linhas = [
      'Olá! Vim pelo site e gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${formData.nome.trim()}`,
      formData.empresa.trim() ? `*Empresa:* ${formData.empresa.trim()}` : null,
      `*E-mail:* ${formData.email.trim()}`,
      `*WhatsApp:* ${formData.whatsapp.trim()}`,
      `*Serviço de interesse:* ${servicoLabel}`,
      formData.mensagem.trim() ? `*Mensagem:* ${formData.mensagem.trim()}` : null,
    ].filter((l) => l !== null);
    openWhatsApp(linhas.join('\n'));
  };

  return (
    <>
      <Helmet>
        <title>Contato - GB Consultoria de Segurança do Trabalho</title>
        <meta
          name="description"
          content="Entre em contato com a GB Consultoria em Tietê/SP. Solicite um orçamento para documentação SST, AVCB, CLCB, PGR, PCMSO e treinamentos NR."
        />
      </Helmet>

      <PageHero
        crumb="Contato"
        label="Contato"
        title="Fale com a GB Consultoria"
        subtitle={`Solicite um orçamento ou tire suas dúvidas com ${CONTACT_PERSON}. Respondemos por e-mail ou WhatsApp.`}
        image="/images/hero-equipe.jpg"
      />

      <section className="section bg-brand-paper">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Canais diretos */}
          <motion.aside {...reveal} className="min-w-0 space-y-5 lg:col-span-5">
            {CHANNELS.map((c) => {
              const inner = (
                <>
                  <span className="icon-box">
                    <c.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base text-brand-muted">{c.label}</span>
                    <span className="block text-lg font-semibold text-brand-navy sm:text-xl">{c.value}</span>
                  </span>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="card card-hover flex items-center gap-4 p-5 sm:gap-5 sm:p-8">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="card flex items-center gap-4 p-5 sm:gap-5 sm:p-8">
                  {inner}
                </div>
              );
            })}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:flex-col xl:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1">
                <WhatsAppIcon className="h-5 w-5" />
                Abrir WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex-1">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </motion.aside>

          {/* Formulário */}
          <motion.div {...reveal} className="card min-w-0 lg:col-span-7 lg:p-10">
            {status === 'success' ? (
              <div role="status" aria-live="polite" className="py-6 text-center sm:py-10">
                <CheckCircle2 className="mx-auto h-16 w-16 text-brand-green" aria-hidden="true" />
                <h2 className="title-3 mt-6">Mensagem enviada!</h2>
                <p className="mx-auto mt-3 max-w-md text-brand-muted">
                  Recebemos seu pedido e vamos retornar em breve pelo e-mail ou WhatsApp informado.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline mt-8">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
            <>
            <h2 className="title-3">Solicite um orçamento</h2>
            <p className="mt-3 text-brand-muted">
              Preencha os dados abaixo e retornamos o contato o quanto antes.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              {/* Armadilha anti-spam: invisível para pessoas, robôs costumam marcar */}
              <input
                type="checkbox"
                name="botcheck"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="field-label">
                    Nome <span className="text-brand-green" aria-hidden="true">*</span>
                  </label>
                  <input type="text" id="nome" name="nome" autoComplete="name" value={formData.nome} onChange={handleInputChange} className="field" required aria-required="true" />
                </div>
                <div>
                  <label htmlFor="empresa" className="field-label">Empresa</label>
                  <input type="text" id="empresa" name="empresa" autoComplete="organization" value={formData.empresa} onChange={handleInputChange} className="field" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="field-label">
                    E-mail <span className="text-brand-green" aria-hidden="true">*</span>
                  </label>
                  <input type="email" id="email" name="email" autoComplete="email" inputMode="email" value={formData.email} onChange={handleInputChange} className="field" required aria-required="true" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="field-label">
                    WhatsApp <span className="text-brand-green" aria-hidden="true">*</span>
                  </label>
                  <input type="tel" id="whatsapp" name="whatsapp" autoComplete="tel" inputMode="tel" value={formData.whatsapp} onChange={handleInputChange} className="field" placeholder="(15) 99999-9999" required aria-required="true" />
                </div>
              </div>

              <div>
                <label htmlFor="servico" className="field-label">Serviço de interesse</label>
                <select id="servico" name="servico" value={formData.servico} onChange={handleInputChange} className="field cursor-pointer">
                  <option value="">Selecione</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>{s.short}</option>
                  ))}
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="field-label">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="4" value={formData.mensagem} onChange={handleInputChange} className="field resize-y" />
              </div>

              {status === 'error' && (
                <div role="alert" className="flex items-start gap-3 rounded-lg border-2 border-red-200 bg-red-50 p-4 text-base text-red-800">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    Não conseguimos enviar agora. Tente de novo em instantes ou use o botão do WhatsApp abaixo, que leva os mesmos dados.
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'} aria-busy={status === 'sending'}>
                  {status === 'sending' ? (
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-5 w-5" aria-hidden="true" />
                  )}
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                </button>
                <button type="button" onClick={sendViaWhatsApp} className="btn btn-outline" disabled={status === 'sending'}>
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar pelo WhatsApp
                </button>
              </div>
              <p className="text-base text-brand-muted">
                <span className="text-brand-green">*</span> campos obrigatórios
              </p>
            </form>
            </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContatoPage;
