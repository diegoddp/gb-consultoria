import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL } from '@/lib/contact';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Página não encontrada - GB Consultoria de Segurança do Trabalho</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="label">Erro 404</span>
          </div>
          <div className="lg:col-span-9">
            <h1 className="display text-4xl text-brand-navy sm:text-5xl lg:text-6xl">
              Essa página não existe.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-muted">
              O endereço que você acessou foi movido ou nunca existiu. Volte para o início ou fale com a gente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/" className="btn btn-primary">
                Ir para o início
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
