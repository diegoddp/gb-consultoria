import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-colors',
        scrolled ? 'border-brand-line' : 'border-transparent'
      )}
    >
      <nav className="container flex h-20 items-center justify-between gap-6 lg:h-24" aria-label="Principal">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="GB Consultoria de Segurança do Trabalho - página inicial"
        >
          <img src="/logo.png" alt="" width="52" height="52" className="h-12 w-12 object-contain lg:h-[52px] lg:w-[52px]" />
          <span className="flex flex-col font-heading text-[15px] font-bold leading-tight text-brand-navy sm:text-base">
            <span>Consultoria de</span>
            <span className="text-brand-green">Segurança do Trabalho</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative py-2 text-lg font-semibold transition-colors hover:text-brand-green',
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
                        'absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-green transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm hidden lg:inline-flex"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Falar no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 rounded-lg p-2 text-brand-navy lg:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-white lg:hidden"
          >
            <div className="container flex min-h-full flex-col py-6">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block border-b border-brand-line py-5 font-heading text-3xl font-extrabold tracking-tight',
                          isActive ? 'text-brand-green' : 'text-brand-navy'
                        )
                      }
                    >
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
                <div className="flex flex-col gap-2 text-lg">
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="font-semibold text-brand-navy">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="break-all text-brand-muted">
                    {EMAIL}
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
