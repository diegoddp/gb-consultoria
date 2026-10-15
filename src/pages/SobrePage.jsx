import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import BrandArcs from '@/components/BrandArcs';
import { SERVICES } from '@/lib/services';
import { CITY } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const VALUES = [
  {
    title: 'Prevenção',
    text: 'Nosso foco é antecipar riscos e criar ambientes de trabalho mais seguros para todos.',
  },
  {
    title: 'Excelência',
    text: 'Comprometimento com a qualidade e profissionalismo em cada serviço prestado.',
  },
  {
    title: 'Confiança',
    text: 'Construímos relacionamentos sólidos baseados em transparência e resultados.',
  },
  {
    title: 'Conformidade',
    text: 'Garantimos que sua empresa esteja sempre em dia com as normas regulamentadoras.',
  },
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
        label="Quem somos"
        title="Gente que entende de norma e de gente."
        subtitle="Comprometidos com a segurança e o bem-estar dos trabalhadores desde 2022."
        image="/images/sobre-hero.jpg"
        imageAlt="Trabalhadores em canteiro de obras vistos de cima"
      />

      {/* Quem somos */}
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal} className="lg:col-span-4">
            <span className="label">
              01
              <span aria-hidden="true" className="h-px w-8 bg-brand-green/50" />
              A empresa
            </span>
          </motion.div>
          <motion.div {...reveal} className="lg:col-span-8">
            <p className="display-md text-2xl text-brand-navy sm:text-3xl lg:text-4xl">
              A GB Consultoria de Segurança do Trabalho oferece soluções especializadas em saúde e segurança do trabalho, auxiliando empresas de {CITY} e região a cumprirem as normas regulamentadoras e protegerem seus colaboradores.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-muted">
              Atuamos em três frentes complementares: a gestão da documentação obrigatória, a emissão dos documentos que a lei exige e os treinamentos em normas regulamentadoras. Tudo com uma preocupação em comum: que cada pessoa volte para casa como saiu.
            </p>

            <ul className="mt-10 border-t border-brand-line">
              {SERVICES.map((service, index) => (
                <li key={service.id} className="border-b border-brand-line">
                  <Link
                    to={`/servicos#${service.id}`}
                    className="group flex items-center gap-5 py-5 transition-colors hover:text-brand-green"
                  >
                    <span className="font-heading text-sm font-bold text-brand-green tabular-nums">0{index + 1}</span>
                    <span className="font-heading text-lg font-extrabold tracking-tight text-brand-navy group-hover:text-brand-green sm:text-xl">
                      {service.title}
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-5 w-5 shrink-0 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Missão: citação em destaque sobre fundo azul-marinho */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <BrandArcs
          tone="dark"
          className="absolute -bottom-80 -left-40 -z-10 h-[800px] w-[800px] opacity-[0.07]"
        />
        <div className="container section grid gap-10 lg:grid-cols-12">
          <motion.div {...reveal} className="lg:col-span-4">
            <span className="label label-light">
              02
              <span aria-hidden="true" className="h-px w-8 bg-white/40" />
              Nossa missão
            </span>
          </motion.div>
          <motion.blockquote {...reveal} className="lg:col-span-8">
            <span aria-hidden="true" className="display block text-7xl leading-none text-brand-green">“</span>
            <p className="display-md -mt-6 text-2xl sm:text-3xl lg:text-[2.5rem]">
              Promover a segurança e saúde no ambiente de trabalho através de consultoria especializada, gestão eficiente de documentos e treinamentos de qualidade, garantindo que empresas estejam em conformidade com as normas regulamentadoras e, principalmente, protegendo a vida e o bem-estar de seus colaboradores.
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-brand-green" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Prevenção que salva, excelência que transforma
              </span>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Valores: lista numerada em duas colunas */}
      <section className="section bg-brand-paper">
        <div className="container">
          <SectionHeader
            number="03"
            label="Valores"
            title="O que guia cada visita, cada documento e cada treinamento."
          />

          <motion.ol {...revealGroup} className="mt-14 grid gap-x-12 lg:mt-20 lg:grid-cols-2">
            {VALUES.map((value, index) => (
              <motion.li
                key={value.title}
                variants={fadeUp}
                className="flex gap-6 border-t border-brand-line py-8 lg:[&:nth-last-child(-n+2)]:border-b"
              >
                <span className="display text-3xl text-brand-green/40 tabular-nums">0{index + 1}</span>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-brand-navy">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-brand-muted">{value.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div {...reveal} className="mt-12">
            <Link to="/servicos" className="btn btn-navy">
              Ver os serviços
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
