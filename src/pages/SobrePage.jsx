import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Handshake, ClipboardCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const VALUES = [
  { icon: Shield, title: 'Prevenção', text: 'Antecipar riscos e criar ambientes de trabalho mais seguros.' },
  { icon: Award, title: 'Excelência', text: 'Qualidade e profissionalismo em cada serviço prestado.' },
  { icon: Handshake, title: 'Confiança', text: 'Relações construídas com transparência e resultados.' },
  { icon: ClipboardCheck, title: 'Conformidade', text: 'Sua empresa sempre em dia com as normas regulamentadoras.' },
];

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a GB Consultoria - Segurança do Trabalho em Tietê/SP</title>
        <meta
          name="description"
          content="Conheça a GB Consultoria, especialista em segurança do trabalho desde 2022. Nossa missão é garantir ambientes seguros e conformidade legal."
        />
      </Helmet>

      <PageHero
        crumb="Sobre"
        title="Gente que entende de norma e de gente."
        subtitle={`Consultoria de segurança do trabalho em ${CITY} e região desde 2022.`}
      />

      {/* Quem somos */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal} className="lg:col-span-6">
            <span className="label">Quem somos</span>
            <h2 className="title-2 mt-3">Soluções especializadas em saúde e segurança do trabalho.</h2>
            <p className="mt-6 text-brand-muted">
              A GB Consultoria ajuda empresas a cumprir as normas regulamentadoras e proteger seus colaboradores, com gestão de documentos, emissão de laudos obrigatórios e treinamentos NR.
            </p>
            <Link to="/servicos" className="link-arrow mt-6">
              Ver os serviços
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div {...reveal} className="lg:col-span-5 lg:col-start-8">
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="h-[360px] w-full rounded-3xl object-cover lg:h-[480px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* Missão */}
      <section className="bg-brand-navy text-white">
        <div className="container section">
          <motion.div {...reveal} className="max-w-4xl">
            <span className="label text-white/80">Nossa missão</span>
            <p className="title-2 mt-4 text-white">
              Promover a segurança e a saúde no ambiente de trabalho, garantindo que empresas estejam em conformidade e, principalmente, protegendo a vida e o bem-estar de seus colaboradores.
            </p>
            <p className="mt-8 text-xl font-semibold text-brand-green sm:text-2xl">
              Prevenção que salva, excelência que transforma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...reveal} className="mb-12 max-w-3xl">
            <span className="label">Nossos valores</span>
            <h2 className="title-2 mt-3">O que guia cada visita, cada documento e cada treinamento.</h2>
          </motion.div>
          <motion.ul {...revealGroup} className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <motion.li key={value.title} variants={fadeUp} className="panel bg-brand-paper">
                <value.icon className="h-10 w-10 text-brand-green" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="title-4 mt-6">{value.title}</h3>
                <p className="mt-3 text-brand-muted">{value.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
