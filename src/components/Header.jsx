import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_DISPLAY, WHATSAPP_NUMBER, EMAIL, INSTAGRAM_URL } from '@/lib/contact';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Quem somos', path: '/sobre' },
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
    <header className={cn('sticky top-0 z-50 bg-white transition-shadow', scrolled && 'shadow-[0_8px_24px_-16px_rgba(11,42,71,0.35)]')}>
      {/* Barra de contato */}
      <div className="bg-brand-navy-deep text-white">
        <div className="container flex h-11 items-center justify-between gap-4 text-[15px]">
          <div className="flex items-center gap-6">
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 text-white/85 hover:text-white">
              <Phone className="h-4 w-4 text-brand-green-bright" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="hidden items-center gap-2 text-white/85 hover:text-white sm:inline-flex">
              <Mail className="h-4 w-4 text-brand-green-bright" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <nav className="container flex h-20 items-center justify-between gap-6 border-b border-brand-line lg:h-[88px]" aria-label="Principal">
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

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative py-2 text-[17px] font-semibold transition-colors hover:text-brand-green',
                    isActive ? 'text-brand-green' : 'text-brand-navy'
                  )
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contato" className="btn btn-navy btn-sm hidden lg:inline-flex">
          Solicitar orçamento
        </Link>

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
            className="fixed inset-x-0 bottom-0 top-[124px] z-40 overflow-y-auto bg-white lg:hidden"
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
                          'block border-b border-brand-line py-5 font-heading text-2xl font-bold',
                          isActive ? 'text-brand-green' : 'text-brand-navy'
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3 pt-10">
                <Link to="/contato" className="btn btn-navy w-full">
                  Solicitar orçamento
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  <WhatsAppIcon className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
