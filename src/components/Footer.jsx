import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import BrandArcs from './BrandArcs';
import { SERVICES } from '@/lib/services';
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
          <div className="container grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
            <div className="lg:col-span-8">
              <span className="label label-light mb-5">Vamos conversar</span>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
                Prevenção que salva,
                <br />
                <span className="text-brand-green">excelência que transforma.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <Link to="/contato" className="btn btn-light btn-lg">
                Solicitar orçamento
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        {/* Marca */}
        <div className="lg:col-span-5">
          <Link to="/" className="inline-flex items-center gap-4" aria-label={`${COMPANY_NAME} - página inicial`}>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src="/logo.png" alt="" width="40" height="40" className="h-10 w-10 object-contain" />
            </span>
            <span className="flex flex-col font-heading leading-none">
              <span className="text-base font-extrabold uppercase tracking-tight">Consultoria de</span>
              <span className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green">
                Segurança do Trabalho
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
            Gestão e emissão de documentos de SST e treinamentos em normas regulamentadoras para empresas de {CITY} e região.
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Rodapé" className="lg:col-span-2">
          <h3 className="label label-light">Páginas</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-[15px] text-white/80 transition-colors hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h3 className="label label-light">Serviços</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/servicos#${service.id}`}
                  className="text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  {service.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="label label-light">Contato</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            <li>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="font-heading text-xl font-extrabold tracking-tight text-white transition-colors hover:text-brand-green"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all text-white/80 transition-colors hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li className="text-white/60">{CITY}</li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-whatsapp hover:text-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <p className="font-heading font-bold uppercase tracking-[0.18em]">{CITY}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
