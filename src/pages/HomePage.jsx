import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, MapPin, Users, Factory, Footprints, Ruler } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ServiceBlocks from '@/components/ServiceBlocks';
import StatsStrip from '@/components/StatsStrip';
import ClientsStrip from '@/components/ClientsStrip';
import MethodSteps from '@/components/MethodSteps';
import { WHATSAPP_URL, CITY, SERVICE_AREA, ADDRESS_LINE, MAPS_URL } from '@/lib/contact';
import { SECTORS } from '@/lib/services';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

// Diferenciais extraídos da apresentação institucional
const REASONS = [
  { icon: Users, title: 'Equipe multidisciplinar', text: 'Engenheiros, médicos e técnicos especializados trabalhando juntos na sua empresa.' },
  { icon: Factory, title: 'Experiência em vários setores', text: 'Engenharia, lavanderia, madeireira, construção civil e indústria química.' },
  { icon: Footprints, title: 'Acompanhamento passo a passo', text: 'Guiamos você pelo que precisa saber e fazer, e cuidamos de todos os detalhes.' },
  { icon: Ruler, title: 'Soluções sob medida', text: 'Não importa o tamanho do projeto: entregamos soluções práticas e eficientes.' },
];

const ABOUT_POINTS = [
  { strong: 'Atendimento em Tietê e região', rest: ', com sede em Tietê/SP' },
  { strong: 'Engenheiro de Segurança e Médico do Trabalho', rest: ' na equipe' },
  { strong: 'Documentos, eSocial, AVCB e treinamentos', rest: ' em um só lugar' },
  { strong: 'Foco em conformidade legal', rest: ' e redução de custos operacionais' },
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>GB Consultoria de Segurança do Trabalho - Tietê e região</title>
        <meta
          name="description"
          content="Consultoria em segurança do trabalho para empresas de Tietê e região: PGR, LTCAT, PCMSO, eSocial SST, AVCB e CLCB, treinamentos NR e palestras para empresas de todos os portes."
        />
      </Helmet>

      {/* Hero com foto */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <img
          src="/images/hero-equipe.jpg"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy-deep/95 via-brand-navy/85 to-brand-navy/40"
        />
        <div className="container flex min-h-[560px] items-center py-20 lg:min-h-[640px]">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <span className="label label-light">Bem-vindo à GB</span>
            <h1 className="title-hero mt-5 text-white">
              Gestão de <span className="text-brand-green-bright">Segurança do Trabalho</span> para empresas de {SERVICE_AREA}.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/85">
              PGR, LTCAT, PCMSO, eSocial, AVCB e treinamentos com uma equipe de engenheiros, médicos e técnicos especializados.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" />
                Fale pelo WhatsApp
              </a>
              <Link to="/servicos" className="btn btn-outline-light">
                Conheça os serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por que a GB */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...reveal}>
            <span className="label">Por que a GB</span>
            <h2 className="title-2 mt-4 max-w-2xl">Trabalhar com a GB é fácil: cuidamos de todos os detalhes.</h2>
          </motion.div>
          <motion.ul {...revealGroup} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <motion.li key={r.title} variants={fadeUp} className="card card-hover min-w-0">
                <span className="icon-box">
                  <r.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="title-4 mt-6">{r.title}</h3>
                <p className="mt-3 text-brand-muted">{r.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Quem somos */}
      <section className="section bg-brand-paper">
        <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal} className="min-w-0">
            <span className="label">Quem somos</span>
            <h2 className="title-2 mt-4">Consultoria de Segurança do Trabalho em {SERVICE_AREA}</h2>
            <p className="mt-6 text-brand-muted">
              Com sede em Tietê, a GB assessora empresas de toda a região na área de Segurança do Trabalho. Por atender setores diversos, temos <strong className="font-semibold text-brand-navy">profundo entendimento das necessidades das empresas</strong> e transferimos esse conhecimento para resolver seus desafios de segurança, gestão de informações e políticas de qualidade.
            </p>
            <ul className="mt-8 space-y-4">
              {ABOUT_POINTS.map((p) => (
                <li key={p.strong} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" strokeWidth={3} aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-brand-navy">{p.strong}</strong>
                    {p.rest}
                  </span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-9 border-l-4 border-brand-green pl-6">
              <p className="title-4">“Segurança no trabalho é a arte de preservar a vida.”</p>
              <p className="mt-2 text-brand-muted">Prevenção que salva, excelência que transforma.</p>
            </blockquote>
            <Link to="/sobre" className="btn btn-navy mt-9">
              Conheça a GB
            </Link>
          </motion.div>

          <motion.div {...reveal} className="relative min-w-0">
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="h-[380px] w-full rounded-2xl object-cover shadow-lg sm:h-[480px] lg:h-[560px]"
              loading="lazy"
              decoding="async"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-xl bg-brand-navy/95 p-5 text-white backdrop-blur transition-colors hover:bg-brand-navy sm:inset-x-auto sm:left-5 sm:max-w-sm"
            >
              <MapPin className="h-7 w-7 shrink-0 text-brand-green-bright" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Atendemos {SERVICE_AREA}</span>
                <span className="block text-base text-white/75">Sede: {ADDRESS_LINE}, {CITY}</span>
              </span>
            </a>
          </motion.div>
        </div>

        <div className="container mt-16">
          <motion.ul {...revealGroup} className="flex flex-wrap justify-center gap-3" aria-label="Setores atendidos">
            {SECTORS.map((s) => (
              <motion.li
                key={s}
                variants={fadeUp}
                className="rounded-full border-2 border-brand-line bg-white px-5 py-2.5 text-base font-semibold text-brand-navy sm:text-lg"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="container mt-16 lg:mt-20">
          <StatsStrip />
        </div>
      </section>

      {/* Clientes */}
      <section className="section bg-white">
        <div className="container">
          <ClientsStrip />
        </div>
      </section>

      {/* Serviços */}
      <section className="section bg-brand-paper">
        <div className="container">
          <motion.div {...reveal} className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
            <span className="label justify-center">Nossos serviços</span>
            <h2 className="title-2 mt-4">Segurança do trabalho, do laudo ao treinamento</h2>
            <p className="lead mt-5">Tudo o que sua empresa precisa para operar com segurança e dentro da lei.</p>
          </motion.div>
          <ServiceBlocks />
        </div>
      </section>

      {/* Método */}
      <section className="section bg-white">
        <div className="container">
          <MethodSteps />
        </div>
      </section>
    </>
  );
};

export default HomePage;
