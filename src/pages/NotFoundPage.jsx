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

      <section className="section bg-brand-blue-soft">
        <div className="container max-w-3xl">
          <span className="label">Erro 404</span>
          <h1 className="title-1 mt-3">Essa página não existe.</h1>
          <p className="lead mt-6">
            O endereço foi movido ou nunca existiu. Volte para o início ou fale com a gente.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
      </section>
    </>
  );
};

export default NotFoundPage;
