import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import BrandArcs from '@/components/BrandArcs';
import { CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const VALUES = [
  { title: 'Prevenção', text: 'Antecipar riscos e criar ambientes de trabalho mais seguros.' },
  { title: 'Excelência', text: 'Qualidade e profissionalismo em cada serviço prestado.' },
  { title: 'Confiança', text: 'Relações construídas com transparência e resultados.' },
  { title: 'Conformidade', text: 'Sua empresa sempre em dia com as normas regulamentadoras.' },
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
        crumb="Sobre"
        title="Gente que entende de norma e de gente."
        image="/images/sobre-hero.jpg"
        imageAlt="Trabalhadores em canteiro de obras vistos de cima"
      />

      {/* Quem somos */}
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-12">
          <motion.span {...reveal} className="label lg:col-span-3">
            Quem somos
          </motion.span>
          <motion.p {...reveal} className="display-md text-2xl text-brand-navy sm:text-3xl lg:col-span-8 lg:text-4xl">
            Desde 2022, a GB Consultoria ajuda empresas de {CITY} e região a cumprir as normas regulamentadoras e proteger seus colaboradores, com gestão de documentos, emissão de laudos obrigatórios e treinamentos NR.
          </motion.p>
        </div>
      </section>

      {/* Missão */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <BrandArcs
          tone="dark"
          className="absolute -bottom-80 -left-40 -z-10 h-[800px] w-[800px] opacity-[0.07]"
        />
        <div className="container section grid gap-8 lg:grid-cols-12">
          <motion.span {...reveal} className="label label-light lg:col-span-3">
            Missão
          </motion.span>
          <motion.blockquote {...reveal} className="lg:col-span-8">
            <p className="display-md text-2xl sm:text-3xl lg:text-[2.25rem]">
              Promover a segurança e a saúde no ambiente de trabalho, garantindo que empresas estejam em conformidade e, principalmente, protegendo a vida e o bem-estar de seus colaboradores.
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-brand-green" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                Prevenção que salva, excelência que transforma
              </span>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-brand-paper">
        <div className="container grid gap-8 lg:grid-cols-12">
          <motion.span {...reveal} className="label lg:col-span-3">
            Valores
          </motion.span>
          <motion.ol {...revealGroup} className="grid gap-x-12 border-t border-brand-line sm:grid-cols-2 lg:col-span-8">
            {VALUES.map((value, index) => (
              <motion.li key={value.title} variants={fadeUp} className="flex gap-5 border-b border-brand-line py-7">
                <span className="font-heading text-sm font-bold text-brand-green tabular-nums">0{index + 1}</span>
                <div>
                  <h2 className="font-heading text-xl font-extrabold tracking-tight text-brand-navy">{value.title}</h2>
                  <p className="mt-2 text-brand-muted">{value.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
