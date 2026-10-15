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
        <section className="relative isolate overflow-hidden bg-brand-green text-white">
          <div aria-hidden="true" className="absolute -left-20 -top-32 -z-10 h-80 w-80 rounded-full border-[40px] border-white/10" />
          <div className="container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
            <div className="max-w-2xl">
              <h2 className="title-2 text-white">Vamos colocar sua empresa em dia?</h2>
              <p className="mt-4 text-xl text-white/90">
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

      <div className="bg-brand-navy text-white">
        <div className="container grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3" aria-label={`${COMPANY_NAME} - página inicial`}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <img src="/logo.png" alt="" width="40" height="40" className="h-10 w-10 object-contain" />
              </span>
              <span className="flex flex-col font-heading text-base font-bold leading-tight">
                <span>Consultoria de</span>
                <span className="text-brand-green-bright">Segurança do Trabalho</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-white/75">
              Documentos de segurança do trabalho e treinamentos NR para empresas de {CITY} e região.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3">
            <ul className="space-y-3 text-lg">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-semibold text-white/85 transition-colors hover:text-brand-green-bright">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="title-3 block text-white transition-colors hover:text-brand-green-bright"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block break-all text-lg text-white/75 transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-whatsapp"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container flex flex-col gap-1 py-6 text-base text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}</p>
            <p>{CITY}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
