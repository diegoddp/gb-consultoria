import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
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
    <footer className="mt-auto">
      {showCta && (
        <section className="bg-brand-green text-white">
          <div className="container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
            <div className="max-w-2xl">
              <h2 className="title-2 text-white">Vamos colocar sua empresa em dia?</h2>
              <p className="mt-4 text-xl text-white/85">
                Conte o que você precisa. Respondemos pelo WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contato" className="btn btn-light">
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="bg-brand-paper">
        <div className="container grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3" aria-label={`${COMPANY_NAME} - página inicial`}>
              <img src="/logo.png" alt="" width="52" height="52" className="h-[52px] w-[52px] object-contain" />
              <span className="flex flex-col font-heading text-base font-bold leading-tight text-brand-navy">
                <span>Consultoria de</span>
                <span className="text-brand-green">Segurança do Trabalho</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-brand-muted">
              Documentos de segurança do trabalho e treinamentos NR para empresas de {CITY} e região.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3">
            <ul className="space-y-3 text-lg">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-semibold text-brand-navy transition-colors hover:text-brand-green">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="title-3 block text-brand-navy transition-colors hover:text-brand-green"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block break-all text-lg text-brand-muted transition-colors hover:text-brand-green"
            >
              {EMAIL}
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-whatsapp hover:text-white"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-line">
          <div className="container flex flex-col gap-1 py-6 text-base text-brand-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}</p>
            <p>{CITY}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
