import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * O React Router não reposiciona a rolagem ao trocar de rota.
 * Sem isto, quem clica em "Serviços" no rodapé cai no meio da página.
 * Se houver âncora (#id), rola até o elemento correspondente.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Aguarda a página renderizar antes de procurar a âncora
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
