import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
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
  CITY,
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

      <PageHero crumb="Contato" title="Vamos conversar?" subtitle="Respondemos pelo WhatsApp em horário comercial." />

      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Canais diretos */}
          <motion.aside {...reveal} className="lg:col-span-5">
            <span className="label">Fale direto</span>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="title-2 mt-3 block text-brand-navy transition-colors hover:text-brand-green"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 block break-all text-xl font-semibold text-brand-navy transition-colors hover:text-brand-green sm:text-2xl"
            >
              {EMAIL}
            </a>
            <p className="mt-4 text-brand-muted">{CITY} e região</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" />
                Abrir WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                Instagram
              </a>
            </div>
          </motion.aside>

          {/* Formulário */}
          <motion.div {...reveal} className="panel bg-brand-paper lg:col-span-7">
            <span className="label">Solicite um orçamento</span>
            <p className="mt-3 text-brand-muted">
              Ao enviar, abrimos o WhatsApp com a mensagem pronta para você confirmar.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="field-label">
                    Nome <span className="text-brand-green" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    autoComplete="name"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="field"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="field-label">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    autoComplete="organization"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="field"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="field-label">
                    E-mail <span className="text-brand-green" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="field"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="field-label">
                    WhatsApp <span className="text-brand-green" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="field"
                    placeholder="(15) 99999-9999"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servico" className="field-label">
                  Serviço de interesse
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  className="field cursor-pointer"
                >
                  <option value="">Selecione</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.short}
                    </option>
                  ))}
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="field-label">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="field resize-y"
                />
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
