import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Motivo gráfico da marca: os arcos concêntricos do logo GB.
 * Usado como elemento decorativo em fundos, sempre com aria-hidden.
 */
const BrandArcs = ({ className, tone = 'light' }) => {
  const green = tone === 'light' ? '#1E7A45' : '#4FB07A';
  const blue = tone === 'light' ? '#0F4C81' : '#5B9BD5';

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none select-none', className)}
    >
      {/* Arco externo verde, mais grosso no centro e afinando nas pontas, como no logo */}
      <path
        d="M58 268C38 190 72 96 158 58c70-31 150-14 198 34-66-30-144-26-200 14-56 40-86 102-98 162Z"
        fill={green}
      />
      {/* Arco intermediário azul */}
      <path
        d="M118 310C86 236 102 150 170 108c55-34 122-32 170 2-56-18-120-8-166 30-46 38-64 98-56 170Z"
        fill={blue}
        opacity="0.9"
      />
      {/* Arco interno verde */}
      <path
        d="M178 338C152 282 160 214 212 180c40-26 90-26 126-4-42-10-88-2-120 26-32 28-44 78-40 136Z"
        fill={green}
        opacity="0.8"
      />
    </svg>
  );
};

export default BrandArcs;
