import React from 'react';
import { motion } from 'framer-motion';
import { METHOD_STEPS } from '@/lib/services';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

/** "Como desenvolvemos o trabalho": as cinco etapas do método da GB. */
const MethodSteps = () => (
  <div>
    <motion.div {...reveal} className="max-w-3xl">
      <span className="label">Como trabalhamos</span>
      <h2 className="title-2 mt-4">Um método em cinco etapas, do mapeamento ao monitoramento</h2>
    </motion.div>
    <motion.ol {...revealGroup} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
      {METHOD_STEPS.map((step, index) => (
        <motion.li key={step.title} variants={fadeUp} className="card relative min-w-0 lg:p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green font-heading text-xl font-bold text-white">
            {index + 1}
          </span>
          <h3 className="title-4 mt-5">{step.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-[17px]">{step.text}</p>
        </motion.li>
      ))}
    </motion.ol>
  </div>
);

export default MethodSteps;
