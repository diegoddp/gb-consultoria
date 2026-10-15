import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

/**
 * Topo das páginas internas: fundo claro, trilha de navegação e título grande.
 * Sem imagem para carregar rápido e deixar o conteúdo respirar.
 */
const PageHero = ({ title, subtitle, crumb }) => {
  return (
    <section className="bg-brand-paper">
      <div className="container py-16 lg:py-24">
        <nav aria-label="Trilha de navegação" className="mb-6 flex items-center gap-2 text-base text-brand-muted">
          <Link to="/" className="transition-colors hover:text-brand-green">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-brand-navy">{crumb || title}</span>
        </nav>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="title-1 max-w-4xl">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="lead mt-6 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
