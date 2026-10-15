import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_DISPLAY, WHATSAPP_NUMBER, EMAIL } from '@/lib/contact';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow',
        scrolled ? 'shadow-[0_1px_0_0_#DCE2E7,0_8px_24px_-16px_rgba(11,42,71,0.25)]' : 'shadow-[0_1px_0_0_#DCE2E7]'
      )}
    >
      <nav className="container flex h-[72px] items-center justify-between gap-6 lg:h-[84px]" aria-label="Principal">
        {/* Marca */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="GB Consultoria de Segurança do Trabalho - página inicial"
        >
          <img src="/logo.png" alt="" width="48" height="48" className="h-11 w-11 object-contain lg:h-12 lg:w-12" />
          <span className="flex flex-col font-heading leading-none">
            <span className="text-[15px] font-extrabold uppercase tracking-tight text-brand-navy sm:text-base lg:text-[17px]">
              Consultoria de
            </span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-green sm:text-[11px]">
              Segurança do Trabalho
            </span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'group relative py-2 text-[15px] font-semibold transition-colors hover:text-brand-green',
                    isActive ? 'text-brand-green' : 'text-brand-ink'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-brand-green transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Ações desktop */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="hidden font-heading text-sm font-bold tracking-tight text-brand-navy transition-colors hover:text-brand-green xl:block"
          >
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 rounded-full p-2 text-brand-navy lg:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Menu mobile: painel em azul-marinho ocupando a tela */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-brand-navy text-white lg:hidden"
          >
            <div className="container flex min-h-full flex-col py-8">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'flex items-baseline gap-4 border-b border-white/10 py-4 font-heading text-3xl font-extrabold tracking-tight transition-colors',
                          isActive ? 'text-white' : 'text-white/60 hover:text-white'
                        )
                      }
                    >
                      <span className="font-sans text-xs font-semibold tabular-nums text-brand-green">
                        0{index + 1}
                      </span>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-5 pt-10">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  <WhatsAppIcon className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-1.5 hover:text-white">
                    {PHONE_DISPLAY}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 break-all hover:text-white">
                    {EMAIL}
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
