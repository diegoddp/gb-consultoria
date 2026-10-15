import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Letreiro contínuo com os documentos e normas que a GB atende.
 * Os itens são duplicados para o loop ficar contínuo.
 */
const Marquee = ({ items, className }) => {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn('relative overflow-hidden border-y border-brand-line bg-white py-4', className)}
      aria-label={`Atendemos: ${items.join(', ')}`}
      role="region"
    >
      <div className="marquee" aria-hidden="true">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 pr-6 font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-navy sm:text-base"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
