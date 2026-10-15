import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Handshake, ClipboardCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';
import { cn } from '@/lib/utils';

const VALUES = [
  { icon: Shield, title: 'Prevenção', text: 'Antecipar riscos e criar ambientes de trabalho mais seguros.', panel: 'bg-brand-paper', badge: 'bg-brand-green text-white' },
  { icon: Award, title: 'Excelência', text: 'Qualidade e profissionalismo em cada serviço prestado.', panel: 'bg-brand-paper', badge: 'bg-brand-green text-white' },
  { icon: Handshake, title: 'Confiança', text: 'Relações construídas com transparência e resultados.', panel: 'bg-brand-paper', badge: 'bg-brand-green text-white' },
  { icon: ClipboardCheck, title: 'Conformidade', text: 'Sua empresa sempre em dia com as normas regulamentadoras.', panel: 'bg-brand-paper', badge: 'bg-brand-green text-white' },
];

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a GB Consultoria - Segurança do Trabalho em Tietê/SP</title>
        <meta
          name="description"
          content="Conheça a GB Consultoria, especialista em segurança do trabalho desde 2022. Nossa missão é garantir ambientes seguros e conformidade legal."
        />
      </Helmet>

      <PageHero
        tone="blue"
        crumb="Sobre"
        title="Gente que entende de norma e de gente."
        subtitle={`Consultoria de segurança do trabalho em ${CITY} e região desde 2022.`}
      />

      {/* Quem somos */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal} className="lg:col-span-6">
            <span className="label">Quem somos</span>
            <h2 className="title-2 mt-3">Soluções especializadas em saúde e segurança do trabalho.</h2>
            <p className="mt-6 text-brand-muted">
              A GB Consultoria ajuda empresas a cumprir as normas regulamentadoras e proteger seus colaboradores, com gestão de documentos, emissão de laudos obrigatórios e treinamentos NR.
            </p>
            <Link to="/servicos" className="link-arrow mt-6">
              Ver os serviços
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div {...reveal} className="relative lg:col-span-5 lg:col-start-8">
            <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-brand-green-soft" />
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="relative h-[360px] w-full rounded-3xl object-cover lg:h-[480px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* Missão */}
      <section className="relative isolate overflow-hidden bg-brand-blue-soft">
        <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full border-[56px] border-brand-blue/5" />
        <div className="container section">
          <motion.div {...reveal} className="max-w-4xl">
            <span className="label">Nossa missão</span>
            <p className="title-2 mt-4">
              Promover a segurança e a saúde no ambiente de trabalho, garantindo que empresas estejam em conformidade e, principalmente, protegendo a vida e o bem-estar de seus colaboradores.
            </p>
            <p className="mt-8 text-xl font-semibold text-brand-green sm:text-2xl">
              Prevenção que salva, excelência que transforma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...reveal} className="mb-12 max-w-3xl">
            <span className="label">Nossos valores</span>
            <h2 className="title-2 mt-3">O que guia cada visita, cada documento e cada treinamento.</h2>
          </motion.div>
          <motion.ul {...revealGroup} className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <motion.li key={value.title} variants={fadeUp} className={cn('panel', value.panel)}>
                <span className={cn('inline-flex h-16 w-16 items-center justify-center rounded-2xl', value.badge)}>
                  <value.icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="title-4 mt-6">{value.title}</h3>
                <p className="mt-3 text-brand-ink/80">{value.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
