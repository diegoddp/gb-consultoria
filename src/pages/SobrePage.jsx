import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Target, Gem, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import StatsStrip from '@/components/StatsStrip';
import ClientsStrip from '@/components/ClientsStrip';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SERVICE_AREA, WHATSAPP_URL } from '@/lib/contact';
import { SECTORS } from '@/lib/services';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const POINTS = [
  { strong: 'Equipe multidisciplinar', rest: ': engenheiros, médicos e técnicos especializados' },
  { strong: 'Engenheiro de Segurança e Médico do Trabalho', rest: ' legalmente habilitados' },
  { strong: 'Atendimento passo a passo', rest: ', cuidando de todos os detalhes' },
  { strong: 'Atendimento em Tietê e região', rest: ', com sede própria em Tietê/SP' },
];

const PILLARS = [
  {
    icon: Target,
    title: 'Nossa missão',
    text: 'Promover a segurança e a saúde no ambiente de trabalho, garantindo que empresas estejam em conformidade e, principalmente, protegendo a vida e o bem-estar de seus colaboradores.',
  },
  {
    icon: Gem,
    title: 'Nossos valores',
    text: 'Prevenção, excelência, confiança e conformidade orientam cada visita, cada documento e cada treinamento que entregamos.',
  },
  {
    icon: ShieldCheck,
    title: 'Nosso compromisso',
    text: 'Buscar formas inovadoras e inteligentes de cuidar do seu negócio, com soluções práticas, eficientes e sob medida para a sua empresa.',
  },
];

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Quem somos - GB Consultoria de Segurança do Trabalho em Tietê e região</title>
        <meta
          name="description"
          content="Com sede em Tietê/SP, a GB Consultoria atende empresas de toda a região nos setores de engenharia, lavanderia, madeireira, construção civil e indústria química em segurança do trabalho."
        />
      </Helmet>

      <PageHero
        crumb="Quem somos"
        label="Quem somos"
        title="Segurança no trabalho é a arte de preservar a vida"
        subtitle={`Consultoria de segurança do trabalho para empresas de ${SERVICE_AREA}, em setores diversos, desde 2022.`}
        image="/images/sobre-hero.jpg"
      />

      <section className="section bg-white">
        <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal} className="min-w-0">
            <span className="label">A GB Consultoria</span>
            <h2 className="title-2 mt-4">Apoio especializado para o seu negócio</h2>
            <div className="mt-6 space-y-4 text-brand-muted">
              <p>
                Sediada na cidade de Tietê/SP, a <strong className="font-semibold text-brand-navy">GB Consultoria Segurança do Trabalho</strong> trabalha com a finalidade de assessorar empresas de toda a região na área de Segurança do Trabalho.
              </p>
              <p>
                Por atender empresas de setores diversos, temos profundo entendimento das necessidades de cada uma e transferimos nosso conhecimento para resolver desafios de segurança do trabalho, gestão de informações e desenvolvimento de políticas de qualidade.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p.strong} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" strokeWidth={3} aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-brand-navy">{p.strong}</strong>
                    {p.rest}
                  </span>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-navy mt-9">
              <WhatsAppIcon className="h-5 w-5" />
              Fale conosco
            </a>
          </motion.div>
          <motion.div {...reveal} className="min-w-0">
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="h-[380px] w-full rounded-2xl object-cover shadow-lg sm:h-[480px] lg:h-[540px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        <div className="container mt-16">
          <motion.div {...reveal} className="text-center">
            <h3 className="title-4">Setores que atendemos</h3>
          </motion.div>
          <motion.ul {...revealGroup} className="mt-6 flex flex-wrap justify-center gap-3">
            {SECTORS.map((s) => (
              <motion.li
                key={s}
                variants={fadeUp}
                className="rounded-full border-2 border-brand-line bg-white px-5 py-2.5 text-base font-semibold text-brand-navy sm:text-lg"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section bg-brand-paper">
        <div className="container">
          <StatsStrip />

          <motion.div {...reveal} className="mx-auto mt-20 max-w-3xl text-center lg:mt-28">
            <span className="label justify-center">Nosso jeito de trabalhar</span>
            <h2 className="title-2 mt-4">O que orienta a GB todos os dias</h2>
          </motion.div>
          <motion.ul {...revealGroup} className="mt-12 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <motion.li key={p.title} variants={fadeUp} className="card min-w-0">
                <span className="icon-box">
                  <p.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="title-4 mt-6">{p.title}</h3>
                <p className="mt-3 text-brand-muted">{p.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <ClientsStrip />
        </div>
      </section>
    </>
  );
};

export default SobrePage;
