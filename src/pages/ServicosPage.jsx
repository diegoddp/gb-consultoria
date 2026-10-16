import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ServiceBlocks from '@/components/ServiceBlocks';
import MethodSteps from '@/components/MethodSteps';
import { SERVICES } from '@/lib/services';

const ServicosPage = () => {
  return (
    <>
      <Helmet>
        <title>Serviços - GB Consultoria de Segurança do Trabalho</title>
        <meta
          name="description"
          content="PGR, LTCAT, PCMSO, eSocial SST (S-2210, S-2220, S-2240), AVCB e CLCB, treinamentos NR, primeiros socorros, 5S, SIPAT e palestras em Tietê/SP e região."
        />
      </Helmet>

      <PageHero
        crumb="Serviços"
        label="Nossos serviços"
        title="Segurança do trabalho, do laudo ao treinamento"
        subtitle="Tudo o que sua empresa precisa para operar com segurança e dentro da lei."
        image="/images/servicos-hero.jpg"
      />

      {/* Índice dos serviços */}
      <nav aria-label="Serviços desta página" className="border-b border-brand-line bg-white">
        <ul className="container flex flex-wrap gap-3 py-5">
          {SERVICES.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-line px-5 py-2.5 text-base font-semibold text-brand-navy transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <s.icon className="h-5 w-5 text-brand-green" aria-hidden="true" />
                {s.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="section bg-white">
        <div className="container">
          <ServiceBlocks />
        </div>
      </section>

      <section className="section bg-brand-paper">
        <div className="container">
          <MethodSteps />

          <p className="mt-16 text-center text-xl text-brand-muted lg:mt-20">
            Precisa de uma solução específica?{' '}
            <Link to="/contato" className="font-semibold text-brand-green underline underline-offset-4 hover:text-brand-green-dark">
              Fale com a nossa equipe
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
