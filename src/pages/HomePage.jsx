import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import BrandArcs from '@/components/BrandArcs';
import SectionHeader from '@/components/SectionHeader';
import Marquee from '@/components/Marquee';
import { SERVICES } from '@/lib/services';
import { WHATSAPP_URL, CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const MARQUEE_ITEMS = [
  'AVCB', 'CLCB', 'PGR', 'PCMSO', 'NR 05', 'NR 06', 'NR 11', 'NR 12', 'NR 23', 'NR 33', 'NR 35',
];

const FACTS = [
  { value: '2022', label: 'ano em que começamos a atender empresas da região' },
  { value: '3', label: 'frentes de trabalho: gestão, emissão e treinamentos' },
  { value: '7', label: 'normas regulamentadoras com treinamento certificado' },
];

const REASONS = [
  {
    title: 'Atendimento personalizado',
    text: 'Nenhuma empresa é igual à outra. Entendemos sua operação antes de propor qualquer documento ou treinamento.',
  },
  {
    title: 'Profissionais qualificados',
    text: 'Equipe técnica que acompanha as mudanças nas normas regulamentadoras e traduz a lei para o seu dia a dia.',
  },
  {
    title: 'Foco em prevenção e resultados',
    text: 'Antecipamos riscos para evitar acidentes, multas e paralisações. Segurança boa é a que ninguém percebe.',
  },
  {
    title: 'Clareza e agilidade na entrega',
    text: 'Prazos definidos, comunicação direta e documentação sempre pronta para auditorias e fiscalizações.',
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
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <BrandArcs
          tone="dark"
          className="absolute -right-48 -top-40 -z-10 h-[720px] w-[720px] opacity-[0.08] sm:-right-32 lg:right-[38%] lg:-top-64 lg:h-[900px] lg:w-[900px]"
        />

        <div className="container grid items-center gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <span className="label label-light mb-6">
              {CITY} e região
              <span aria-hidden="true" className="h-px w-8 bg-white/30" />
              desde 2022
            </span>
            <h1 className="display text-[2.75rem] sm:text-6xl lg:text-7xl">
              Sua empresa em dia.
              <br />
              <span className="text-brand-green">Sua equipe protegida.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Consultoria de segurança do trabalho que cuida dos documentos obrigatórios, emite o que a lei exige e treina sua equipe nas normas regulamentadoras.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link to="/contato" className="btn btn-primary btn-lg">
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow text-white hover:text-brand-green"
              >
                <WhatsAppIcon className="h-5 w-5" />
                ou fale agora no WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative lg:col-span-5"
          >
            <img
              src="/images/hero-equipe.jpg"
              alt="Equipe de trabalhadores com capacetes e coletes refletivos em canteiro de obras, vistos de cima"
              className="h-[300px] w-full rounded-tl-[6rem] rounded-br-[6rem] object-cover sm:h-[380px] lg:h-[540px]"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
            <div className="absolute -bottom-5 -left-3 rounded-full border border-white/15 bg-brand-navy-deep px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.18em] sm:left-6">
              Documentos <span className="text-brand-green">+</span> Treinamentos
            </div>
          </motion.div>
        </div>

        <div className="stripe" aria-hidden="true" />
      </section>

      {/* Letreiro com o que atendemos */}
      <Marquee items={MARQUEE_ITEMS} />

      {/* Serviços: lista editorial, sem cards */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            number="01"
            label="Serviços"
            title="Três frentes, um objetivo: sua operação segura e dentro da lei."
          />

          <motion.ol {...revealGroup} className="mt-14 border-t border-brand-line lg:mt-20">
            {SERVICES.map((service, index) => (
              <motion.li key={service.id} variants={fadeUp} className="group border-b border-brand-line">
                <Link
                  to={`/servicos#${service.id}`}
                  className="grid gap-4 py-8 transition-colors lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-10 lg:hover:bg-brand-paper lg:-mx-6 lg:px-6"
                >
                  <span className="display text-4xl text-brand-green/35 tabular-nums transition-colors group-hover:text-brand-green lg:col-span-2 lg:text-5xl">
                    0{index + 1}
                  </span>
                  <div className="lg:col-span-4">
                    <h3 className="display-md text-2xl text-brand-navy sm:text-3xl">{service.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-brand-muted lg:col-span-5">{service.description}</p>
                  <span className="flex items-center text-brand-green lg:col-span-1 lg:justify-end">
                    <span className="link-arrow text-sm lg:hidden">
                      Ver detalhes
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-brand-line transition-colors group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-white lg:flex">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Sobre: foto circular ecoando o logo + fatos */}
      <section className="section bg-brand-paper">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <motion.div {...reveal} className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-square">
              <BrandArcs className="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] opacity-90" />
              <img
                src="/images/equipe.jpg"
                alt="Dois profissionais com capacete conversando em canteiro de obras"
                className="relative h-full w-full rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-7 lg:pl-8">
            <span className="label mb-5">
              02
              <span aria-hidden="true" className="h-px w-8 bg-brand-green/50" />
              Sobre a GB
            </span>
            <h2 className="display-md text-3xl text-brand-navy sm:text-4xl lg:text-[2.75rem]">
              Desde 2022 ajudando empresas de {CITY} e região a cumprir as normas e proteger quem faz o trabalho acontecer.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
              A GB Consultoria de Segurança do Trabalho oferece soluções especializadas em saúde e segurança do trabalho, auxiliando empresas a cumprirem as normas regulamentadoras e protegerem seus colaboradores.
            </p>

            <dl className="mt-10 grid gap-6 border-t border-brand-line pt-8 sm:grid-cols-3">
              {FACTS.map((fact) => (
                <div key={fact.value}>
                  <dt className="display text-4xl text-brand-green tabular-nums">{fact.value}</dt>
                  <dd className="mt-2 text-sm leading-snug text-brand-muted">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <Link to="/sobre" className="link-arrow mt-10 text-base">
              Conheça a GB
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Por que a GB: título fixo à esquerda, lista numerada à direita */}
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                number="03"
                label="Por que a GB"
                title="Segurança do trabalho sem burocracia e sem surpresa."
                text="Trabalhamos lado a lado com a sua equipe para que conformidade deixe de ser preocupação e vire rotina."
                className="lg:block lg:[&>div:first-child]:mb-5"
              />
            </div>
          </div>

          <motion.ol {...revealGroup} className="lg:col-span-7">
            {REASONS.map((reason, index) => (
              <motion.li
                key={reason.title}
                variants={fadeUp}
                className="grid gap-3 border-t border-brand-line py-7 sm:grid-cols-12 sm:gap-6 last:border-b"
              >
                <span className="font-heading text-sm font-bold text-brand-green tabular-nums sm:col-span-2 sm:pt-1">
                  0{index + 1}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="font-heading text-xl font-extrabold tracking-tight text-brand-navy">{reason.title}</h3>
                  <p className="mt-2 leading-relaxed text-brand-muted">{reason.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>
    </>
  );
};

export default HomePage;
