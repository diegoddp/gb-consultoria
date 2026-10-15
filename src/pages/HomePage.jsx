import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL, CITY } from '@/lib/contact';
import { fadeUp, reveal } from '@/lib/motion';

const SERVICE_PANELS = [
  {
    id: 'gestao-documentos',
    title: 'Gestão de Documentos de SST',
    text: 'Organizamos e mantemos atualizada toda a documentação obrigatória da sua empresa, pronta para auditorias e fiscalizações.',
    items: ['Controle de prazos e validades', 'Organização centralizada', 'Atualização conforme a legislação'],
    tone: 'bg-brand-green-soft',
  },
  {
    id: 'emissao-documentos',
    title: 'Emissão de Documentos',
    text: 'Elaboramos e emitimos os documentos que a lei exige para sua empresa funcionar com segurança.',
    items: ['AVCB', 'CLCB', 'PGR', 'PCMSO'],
    tone: 'bg-brand-blue-soft',
  },
  {
    id: 'treinamentos-nr',
    title: 'Treinamentos NR',
    text: 'Capacitamos sua equipe nas normas regulamentadoras, com certificado ao final.',
    items: ['NR 05', 'NR 06', 'NR 11', 'NR 12', 'NR 23', 'NR 33', 'NR 35'],
    tone: 'bg-brand-paper',
  },
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>GB Consultoria de Segurança do Trabalho - Tietê/SP</title>
        <meta
          name="description"
          content="Consultoria em segurança do trabalho em Tietê/SP e região. Gestão e emissão de documentos SST (PGR, PCMSO, AVCB, CLCB) e treinamentos NR para sua empresa."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="lg:col-span-7">
            <h1 className="title-hero">
              Sua empresa em dia. <span className="text-brand-green">Sua equipe protegida.</span>
            </h1>
            <p className="lead mt-8 max-w-xl">
              Documentos de segurança do trabalho e treinamentos NR para empresas de {CITY} e região.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contato" className="btn btn-primary">
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <img
              src="/images/hero-equipe.jpg"
              alt="Equipe de trabalhadores com capacetes e coletes refletivos em canteiro de obras, vistos de cima"
              className="h-[320px] w-full rounded-3xl object-cover sm:h-[420px] lg:h-[560px]"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </section>

      {/* Serviços em painéis grandes */}
      <section className="section bg-white pt-0 lg:pt-0">
        <div className="container">
          <motion.div {...reveal} className="mb-12 max-w-3xl lg:mb-16">
            <span className="label">O que fazemos</span>
            <h2 className="title-2 mt-3">Três serviços que mantêm sua empresa segura e dentro da lei.</h2>
          </motion.div>

          <div className="space-y-6">
            {SERVICE_PANELS.map((panel) => (
              <motion.article
                key={panel.id}
                {...reveal}
                className={`panel grid gap-8 lg:grid-cols-12 lg:items-center ${panel.tone}`}
              >
                <div className="lg:col-span-6">
                  <h3 className="title-3">{panel.title}</h3>
                  <p className="mt-4 text-brand-muted">{panel.text}</p>
                  <Link to={`/servicos#${panel.id}`} className="link-arrow mt-6">
                    Ver detalhes
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
                  {panel.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-brand-navy sm:text-lg"
                    >
                      <Check className="h-4 w-4 text-brand-green" strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section bg-brand-paper">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal} className="lg:col-span-5">
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="h-[360px] w-full rounded-3xl object-cover lg:h-[480px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <motion.div {...reveal} className="lg:col-span-6 lg:col-start-7">
            <span className="label">Sobre a GB</span>
            <h2 className="title-2 mt-3">
              Desde 2022 ajudando empresas a cumprir as normas e proteger quem faz o trabalho acontecer.
            </h2>
            <p className="mt-6 text-brand-muted">
              Consultoria especializada em saúde e segurança do trabalho, com atendimento direto e linguagem clara.
            </p>
            <Link to="/sobre" className="btn btn-navy mt-8">
              Conheça a GB
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
