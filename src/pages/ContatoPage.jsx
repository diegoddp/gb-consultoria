import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
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

const ContatoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha Nome, E-mail e WhatsApp.',
        variant: 'destructive',
      });
      return;
    }

    // Não há backend: a mensagem é montada e enviada pelo WhatsApp do próprio cliente.
    const servicoLabel = SERVICO_LABELS[formData.servico] || 'Não informado';
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

    toast({
      title: 'Abrindo o WhatsApp...',
      description: 'Sua mensagem já está preenchida. É só confirmar o envio no aplicativo.',
    });

    setFormData(INITIAL_FORM);
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
        subtitle={`Solicite um orçamento ou tire suas dúvidas com ${CONTACT_PERSON}. Respondemos pelo WhatsApp.`}
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
            <h2 className="title-3">Solicite um orçamento</h2>
            <p className="mt-3 text-brand-muted">
              Ao enviar, abrimos o WhatsApp com a mensagem pronta para você confirmar.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
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

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary">
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-base text-brand-muted">
                  <span className="text-brand-green">*</span> campos obrigatórios
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContatoPage;
