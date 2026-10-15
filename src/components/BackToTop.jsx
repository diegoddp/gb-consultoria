import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * Botão flutuante para voltar ao topo. Aparece depois que a página
 * rola um pouco e fica acima do botão do WhatsApp.
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-[5.5rem] right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg shadow-black/20 transition-colors hover:bg-brand-navy-deep"
        >
          <ArrowUp className="h-6 w-6" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
