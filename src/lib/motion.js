// Presets de animação compartilhados para manter o ritmo visual consistente.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Dispara a animação um pouco antes do elemento entrar totalmente na tela.
export const viewport = { once: true, margin: '0px 0px -80px 0px' };

// Props prontas para seções que animam ao rolar.
export const reveal = {
  variants: fadeUp,
  initial: 'hidden',
  whileInView: 'show',
  viewport,
};

export const revealGroup = {
  variants: stagger,
  initial: 'hidden',
  whileInView: 'show',
  viewport,
};
