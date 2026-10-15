import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrandArcs from '@/components/BrandArcs';
import { fadeUp } from '@/lib/motion';

/**
 * Topo das páginas internas: fundo azul-marinho, título grande à esquerda
 * e foto recortada à direita, com os arcos da marca ao fundo.
 */
const PageHero = ({ title, subtitle, image, imageAlt = '', crumb, label }) => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <BrandArcs
        tone="dark"
        className="absolute -left-40 -top-56 -z-10 h-[620px] w-[620px] opacity-[0.07] lg:-left-24"
      />

      <div className="container grid items-end gap-10 pb-14 pt-10 sm:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7">
          <nav aria-label="Trilha de navegação" className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link to="/" className="transition-colors hover:text-white">Início</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">{crumb || title}</span>
          </nav>

          {label && (
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="label label-light mb-4"
            >
              {label}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="display text-4xl sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <img
              src={image}
              alt={imageAlt}
              className="h-52 w-full rounded-tl-[4rem] rounded-br-[4rem] object-cover sm:h-64 lg:h-72"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        )}
      </div>

      <div className="stripe" aria-hidden="true" />
    </section>
  );
};

export default PageHero;
