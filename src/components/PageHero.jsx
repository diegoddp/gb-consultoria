import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

const TONES = {
  blue: 'bg-brand-blue',
  green: 'bg-brand-green',
  navy: 'bg-brand-navy',
};

/**
 * Topo das páginas internas em cor sólida da marca, com detalhe amarelo
 * e círculos decorativos que remetem aos arcos do logo.
 */
const PageHero = ({ title, subtitle, crumb, tone = 'blue' }) => {
  return (
    <section className={cn('relative isolate overflow-hidden text-white', TONES[tone])}>
      <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/10" />
      <div aria-hidden="true" className="absolute -right-4 bottom-[-6rem] -z-10 h-56 w-56 rounded-full bg-brand-amber/90 sm:right-24" />

      <div className="container py-16 lg:py-24">
        <nav aria-label="Trilha de navegação" className="mb-8 flex items-center gap-2 text-base text-white/75">
          <Link to="/" className="transition-colors hover:text-white">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-white">{crumb || title}</span>
        </nav>
        <span aria-hidden="true" className="mb-6 block h-1.5 w-20 rounded-full bg-brand-amber" />
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="title-1 max-w-3xl text-white">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85 sm:text-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
