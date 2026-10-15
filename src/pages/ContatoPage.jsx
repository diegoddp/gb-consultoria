import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram } from 'lucide-react';
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

      <PageHero
        crumb="Contato"
        label="Fale com a GB"
        title="Vamos colocar sua empresa em dia?"
        image="/images/contato-hero.jpg"
        imageAlt="Técnico de segurança com capacete e colete analisando documento em área industrial"
      />

      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Canais diretos */}
          <motion.aside {...reveal} className="lg:col-span-5">
            <span className="label">
              01
              <span aria-hidden="true" className="h-px w-8 bg-brand-green/50" />
              Canais diretos
            </span>

            <div className="mt-8 space-y-8">
              <div>
                <p className="field-label">WhatsApp e telefone</p>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="display mt-1 inline-block text-3xl text-brand-navy transition-colors hover:text-brand-green sm:text-4xl"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="field-label">E-mail</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 inline-block break-all font-heading text-xl font-extrabold tracking-tight text-brand-navy transition-colors hover:text-brand-green sm:text-2xl"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="field-label">Onde atendemos</p>
                <p className="mt-1 font-heading text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl">
                  {CITY} e região
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Abrir WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                Instagram
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.aside>

          {/* Formulário */}
          <motion.div {...reveal} className="lg:col-span-7">
            <span className="label">
              02
              <span aria-hidden="true" className="h-px w-8 bg-brand-green/50" />
              Solicite um orçamento
            </span>
            <p className="mt-4 max-w-lg text-brand-muted">
              Ao enviar, abrimos o WhatsApp com a mensagem pronta para você confirmar.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8" noValidate>
              <div className="grid gap-8 sm:grid-cols-2">
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
                    className="field-line"
                    placeholder="Seu nome"
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
                    className="field-line"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
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
                    className="field-line"
                    placeholder="voce@empresa.com.br"
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
                    className="field-line"
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
                  className="field-line cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
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
                  rows="3"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Conte um pouco sobre sua empresa e o que precisa."
                  className="field-line resize-y"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary btn-lg">
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-xs leading-relaxed text-brand-muted sm:max-w-[260px]">
                  Campos com <span className="text-brand-green">*</span> são obrigatórios. Seus dados são usados apenas para responder ao seu pedido.
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
