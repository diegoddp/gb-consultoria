import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import BrandArcs from '@/components/BrandArcs';
import Marquee from '@/components/Marquee';
import { SERVICES } from '@/lib/services';
import { WHATSAPP_URL, CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const MARQUEE_ITEMS = [
  'AVCB', 'CLCB', 'PGR', 'PCMSO', 'NR 05', 'NR 06', 'NR 11', 'NR 12', 'NR 23', 'NR 33', 'NR 35',
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

        <div className="container grid items-center gap-12 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="lg:col-span-7">
            <h1 className="display text-[2.75rem] sm:text-6xl lg:text-7xl">
              Sua empresa em dia.
              <br />
              <span className="text-brand-green">Sua equipe protegida.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/70 sm:text-xl">
              Documentos de segurança do trabalho e treinamentos NR em {CITY} e região.
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
                WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <img
              src="/images/hero-equipe.jpg"
              alt="Equipe de trabalhadores com capacetes e coletes refletivos em canteiro de obras, vistos de cima"
              className="h-[300px] w-full rounded-tl-[6rem] rounded-br-[6rem] object-cover sm:h-[380px] lg:h-[540px]"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
          </motion.div>
        </div>

        <div className="stripe" aria-hidden="true" />
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* Serviços */}
      <section className="section bg-white">
        <div className="container">
          <motion.span {...reveal} className="label">
            Serviços
          </motion.span>

          <motion.ol {...revealGroup} className="mt-8 border-t border-brand-line">
            {SERVICES.map((service, index) => (
              <motion.li key={service.id} variants={fadeUp} className="group border-b border-brand-line">
                <Link
                  to={`/servicos#${service.id}`}
                  className="grid gap-3 py-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-10"
                >
                  <span className="font-heading text-sm font-bold text-brand-green tabular-nums lg:col-span-1">
                    0{index + 1}
                  </span>
                  <h2 className="display-md text-2xl text-brand-navy transition-colors group-hover:text-brand-green sm:text-3xl lg:col-span-5">
                    {service.title}
                  </h2>
                  <p className="text-brand-muted lg:col-span-5">{service.description}</p>
                  <span className="hidden justify-end text-brand-muted transition-colors group-hover:text-brand-green lg:col-span-1 lg:flex">
                    <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Sobre */}
      <section className="section bg-brand-paper">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <motion.div {...reveal} className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
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

          <motion.div {...reveal} className="lg:col-span-6 lg:col-start-7">
            <span className="label">Sobre a GB</span>
            <p className="display-md mt-6 text-2xl text-brand-navy sm:text-3xl lg:text-[2.5rem]">
              Desde 2022 ajudando empresas a cumprir as normas e proteger quem faz o trabalho acontecer.
            </p>
            <Link to="/sobre" className="link-arrow mt-8 text-base">
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
