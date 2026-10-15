import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import BrandArcs from './BrandArcs';
import {
  COMPANY_NAME,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  EMAIL,
  CITY,
  WHATSAPP_NUMBER,
} from '@/lib/contact';

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Contato', path: '/contato' },
];

const Footer = () => {
  const { pathname } = useLocation();
  const showCta = pathname !== '/contato';

  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-brand-navy-deep text-white">
      <BrandArcs
        tone="dark"
        className="absolute -bottom-72 -right-56 -z-10 h-[760px] w-[760px] opacity-[0.06]"
      />

      {showCta && (
        <section className="border-b border-white/10">
          <div className="container flex flex-col gap-8 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
            <h2 className="display max-w-2xl text-4xl sm:text-5xl">
              Prevenção que salva,
              <br />
              <span className="text-brand-green">excelência que transforma.</span>
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contato" className="btn btn-light btn-lg">
                Solicitar orçamento
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="container grid gap-10 py-12 lg:grid-cols-12 lg:items-start lg:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-4 lg:col-span-4"
          aria-label={`${COMPANY_NAME} - página inicial`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <img src="/logo.png" alt="" width="36" height="36" className="h-9 w-9 object-contain" />
          </span>
          <span className="flex flex-col font-heading leading-none">
            <span className="text-sm font-extrabold uppercase tracking-tight">Consultoria de</span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-green">
              Segurança do Trabalho
            </span>
          </span>
        </Link>

        <nav aria-label="Rodapé" className="lg:col-span-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/70 transition-colors hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-[15px] lg:col-span-4 lg:items-end">
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="font-heading text-lg font-extrabold tracking-tight transition-colors hover:text-brand-green"
          >
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="break-all text-white/70 transition-colors hover:text-white">
            {EMAIL}
          </a>
          <div className="mt-2 flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-whatsapp hover:text-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}</p>
          <p>{CITY}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
