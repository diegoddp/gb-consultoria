import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { SERVICES } from '@/lib/services';
import {
  COMPANY_NAME,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  EMAIL,
  EMAIL_USER,
  EMAIL_DOMAIN,
  CITY,
  WHATSAPP_NUMBER,
} from '@/lib/contact';

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Quem somos', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Contato', path: '/contato' },
];

const Footer = () => {
  const { pathname } = useLocation();
  const showCta = pathname !== '/contato';

  return (
    <footer className="mt-auto">
      {showCta && (
        <section className="bg-brand-navy-deep text-white">
          <div className="container py-20 text-center lg:py-24">
            <h2 className="title-2 mx-auto max-w-3xl text-white">
              Conformidade legal com tranquilidade para a sua empresa
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/80">
              Fale com a GB e receba uma proposta sob medida para documentos e treinamentos de SST.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contato" className="btn btn-light">
                Solicitar proposta
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="bg-brand-navy text-white">
        <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-3">
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
              Compromisso com a saúde, a segurança e a conformidade legal da sua empresa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Institucional" className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white">Institucional</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/75 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços" className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white">Serviços</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={`/servicos#${service.id}`} className="text-white/75 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-white">Contato</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-start gap-3 text-white/75 hover:text-white">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-green-bright" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-white/75 hover:text-white lg:whitespace-nowrap">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-green-bright" aria-hidden="true" />
                  <span>{EMAIL_USER}<wbr />@{EMAIL_DOMAIN}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-green-bright" aria-hidden="true" />
                {CITY} e região
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container py-6 text-base text-white/60">
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
