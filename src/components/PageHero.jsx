import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

/**
 * Topo das páginas internas: foto de fundo com sobreposição azul-marinho,
 * rótulo, título e trilha de navegação.
 */
const PageHero = ({ label, title, subtitle, crumb, image }) => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy-deep/95 via-brand-navy/85 to-brand-navy/55"
      />

      <div className="container py-16 lg:py-24">
        <nav aria-label="Trilha de navegação" className="mb-6 flex items-center gap-2 text-base text-white/75">
          <Link to="/" className="transition-colors hover:text-white">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-white">{crumb || title}</span>
        </nav>
        {label && <span className="label label-light mb-4">{label}</span>}
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="title-1 max-w-3xl text-white">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
