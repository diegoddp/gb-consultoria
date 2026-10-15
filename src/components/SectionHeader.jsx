import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { reveal } from '@/lib/motion';

/**
 * Cabeçalho de seção assimétrico: número e rótulo na coluna da esquerda,
 * título grande na direita. Quebra o padrão "tudo centralizado".
 */
const SectionHeader = ({ number, label, title, text, light = false, className, as: Tag = 'h2' }) => {
  return (
    <motion.div
      {...reveal}
      className={cn('grid gap-6 lg:grid-cols-12 lg:gap-10', className)}
    >
      <div className="lg:col-span-3">
        <span className={cn('label', light && 'label-light')}>
          {number && <span className="tabular-nums">{number}</span>}
          {number && <span aria-hidden="true" className={cn('h-px w-8', light ? 'bg-white/40' : 'bg-brand-green/50')} />}
          {label}
        </span>
      </div>
      <div className="lg:col-span-9">
        <Tag
          className={cn(
            'display-md text-3xl sm:text-4xl lg:text-[2.75rem]',
            light ? 'text-white' : 'text-brand-navy'
          )}
        >
          {title}
        </Tag>
        {text && (
          <p className={cn('mt-5 max-w-2xl text-lg leading-relaxed', light ? 'text-white/75' : 'text-brand-muted')}>
            {text}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;
