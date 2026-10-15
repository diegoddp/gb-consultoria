import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Target, Gem, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import StatsStrip from '@/components/StatsStrip';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CITY, WHATSAPP_URL } from '@/lib/contact';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const POINTS = [
  { strong: 'Gestão de documentos de SST', rest: ', sempre atualizada' },
  { strong: 'Emissão de AVCB, CLCB, PGR e PCMSO', rest: '' },
  { strong: 'Treinamentos NR', rest: ' com certificado para a sua equipe' },
  { strong: 'Atendimento direto', rest: ` em ${CITY} e região` },
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
    text: 'Prevenção que salva, excelência que transforma. Segurança do trabalho tratada como cuidado com pessoas, não só como obrigação.',
  },
];

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Quem somos - GB Consultoria de Segurança do Trabalho em Tietê/SP</title>
        <meta
          name="description"
          content="Conheça a GB Consultoria, especialista em segurança do trabalho desde 2022. Nossa missão é garantir ambientes seguros e conformidade legal."
        />
      </Helmet>

      <PageHero
        crumb="Quem somos"
        label="Quem somos"
        title="Consultoria de Segurança do Trabalho desde 2022"
        subtitle={`Ajudamos empresas de ${CITY} e região a cumprir as normas e proteger seus colaboradores.`}
        image="/images/sobre-hero.jpg"
      />

      <section className="section bg-white">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal}>
            <span className="label">A GB Consultoria</span>
            <h2 className="title-2 mt-4">Soluções especializadas em saúde e segurança do trabalho</h2>
            <p className="mt-6 text-brand-muted">
              A GB Consultoria de Segurança do Trabalho oferece soluções especializadas, auxiliando empresas a <strong className="font-semibold text-brand-navy">cumprirem as normas regulamentadoras</strong> e protegerem seus colaboradores.
            </p>
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
          <motion.div {...reveal}>
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="h-[380px] w-full rounded-2xl object-cover shadow-lg sm:h-[480px] lg:h-[540px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
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
              <motion.li key={p.title} variants={fadeUp} className="card">
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
    </>
  );
};

export default SobrePage;
