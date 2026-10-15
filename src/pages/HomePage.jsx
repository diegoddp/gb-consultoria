import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, MapPin, Users, Award, Target, Zap } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ServiceBlocks from '@/components/ServiceBlocks';
import StatsStrip from '@/components/StatsStrip';
import { WHATSAPP_URL, CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const REASONS = [
  { icon: Users, title: 'Atendimento personalizado', text: 'Entendemos o porte, o setor e os riscos da sua operação antes de indicar qualquer solução.' },
  { icon: Award, title: 'Profissionais qualificados', text: 'Equipe técnica atualizada nas normas regulamentadoras e na legislação vigente.' },
  { icon: Target, title: 'Foco em prevenção', text: 'Antecipamos riscos para evitar acidentes, multas e paralisações.' },
  { icon: Zap, title: 'Clareza e agilidade', text: 'Prazos definidos e comunicação direta do início ao fim do serviço.' },
];

const ABOUT_POINTS = [
  { strong: 'Atuação desde 2022', rest: ' em saúde e segurança do trabalho' },
  { strong: 'Gestão, emissão e treinamentos', rest: ' em um só lugar' },
  { strong: 'Atendimento em toda a região', rest: ` de ${CITY}` },
  { strong: 'Linguagem clara', rest: ', sem burocracia desnecessária' },
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
              Gestão de <span className="text-brand-green-bright">Segurança do Trabalho</span> para sua empresa em {CITY}.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/85">
              Cuidamos dos documentos obrigatórios, emitimos o que a lei exige e treinamos sua equipe nas normas regulamentadoras.
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
            <h2 className="title-2 mt-4 max-w-2xl">Segurança do trabalho levada a sério, do começo ao fim.</h2>
          </motion.div>
          <motion.ul {...revealGroup} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <motion.li key={r.title} variants={fadeUp} className="card card-hover">
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
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal}>
            <span className="label">Quem somos</span>
            <h2 className="title-2 mt-4">Consultoria de Segurança do Trabalho em {CITY}</h2>
            <p className="mt-6 text-brand-muted">
              A GB Consultoria une conhecimento técnico em saúde e segurança do trabalho a uma leitura prática do dia a dia da sua empresa: <strong className="font-semibold text-brand-navy">menos risco, menos autuação e mais proteção</strong> para quem trabalha.
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
              <p className="title-4">Prevenção que salva, excelência que transforma.</p>
              <p className="mt-2 text-brand-muted">Saúde ocupacional vai muito além de cumprir obrigações legais.</p>
            </blockquote>
            <Link to="/sobre" className="btn btn-navy mt-9">
              Conheça a GB
            </Link>
          </motion.div>

          <motion.div {...reveal} className="relative">
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="h-[380px] w-full rounded-2xl object-cover shadow-lg sm:h-[480px] lg:h-[560px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-xl bg-brand-navy/95 p-5 text-white backdrop-blur sm:inset-x-auto sm:left-5 sm:max-w-sm">
              <MapPin className="h-7 w-7 shrink-0 text-brand-green-bright" aria-hidden="true" />
              <div>
                <p className="font-semibold">Atendimento em {CITY}</p>
                <p className="text-base text-white/75">e cidades da região</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container mt-20 lg:mt-28">
          <StatsStrip />
        </div>
      </section>

      {/* Serviços */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...reveal} className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
            <span className="label justify-center">Nossos serviços</span>
            <h2 className="title-2 mt-4">Segurança do trabalho, do documento ao treinamento</h2>
            <p className="lead mt-5">Três frentes que mantêm sua empresa protegida e dentro da lei.</p>
          </motion.div>
          <ServiceBlocks />
        </div>
      </section>
    </>
  );
};

export default HomePage;
