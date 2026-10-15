import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ServiceBlocks from '@/components/ServiceBlocks';

const ServicosPage = () => {
  return (
    <>
      <Helmet>
        <title>Serviços - GB Consultoria de Segurança do Trabalho</title>
        <meta
          name="description"
          content="Gestão de documentos SST, emissão de AVCB, CLCB, PGR e PCMSO e treinamentos nas NR 05, 06, 11, 12, 23, 33 e 35 em Tietê/SP e região."
        />
      </Helmet>

      <PageHero
        crumb="Serviços"
        label="Nossos serviços"
        title="Segurança do trabalho, do documento ao treinamento"
        subtitle="Três frentes que mantêm sua empresa protegida e dentro da lei."
        image="/images/servicos-hero.jpg"
      />

      <section className="section bg-white">
        <div className="container">
          <ServiceBlocks />

          <p className="mt-20 text-center text-xl text-brand-muted lg:mt-28">
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
