import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '@/lib/services';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

/** Faixa "Alguns de nossos clientes", com os logos da apresentação institucional. */
const ClientsStrip = ({ className = '' }) => (
  <div className={className}>
    <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
      <span className="label justify-center">Alguns de nossos clientes</span>
      <h2 className="title-3 mt-4">Empresas de diversos setores confiam na GB</h2>
    </motion.div>
    <motion.ul {...revealGroup} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {CLIENTS.map((c) => (
        <motion.li
          key={c.name}
          variants={fadeUp}
          className="flex h-28 items-center justify-center overflow-hidden rounded-xl border border-brand-line p-3 sm:h-32"
          style={{ backgroundColor: c.bg }}
        >
          <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" />
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

export default ClientsStrip;
