import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '@/lib/motion';

// Números tirados da apresentação institucional, sem estimativas.
const STATS = [
  { value: '2022', label: 'início das atividades' },
  { value: '5', label: 'setores atendidos' },
  { value: '8', label: 'treinamentos oferecidos' },
  { value: '3', label: 'eventos de SST enviados ao eSocial' },
];

const StatsStrip = () => (
  <motion.div
    {...reveal}
    className="grid grid-cols-2 gap-y-10 rounded-2xl bg-brand-navy px-6 py-10 text-center text-white shadow-xl lg:grid-cols-4 lg:divide-x lg:divide-white/15 lg:py-12"
  >
    {STATS.map((s) => (
      <div key={s.label} className="px-4">
        <p className="font-heading text-4xl font-bold sm:text-5xl">{s.value}</p>
        <p className="mt-2 text-base text-white/75 sm:text-lg">{s.label}</p>
      </div>
    ))}
  </motion.div>
);

export default StatsStrip;
