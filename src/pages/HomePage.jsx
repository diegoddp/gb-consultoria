import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL, CITY } from '@/lib/contact';
import { fadeUp, reveal } from '@/lib/motion';
import { cn } from '@/lib/utils';

// Tons suaves por serviço: diferenciam sem pesar
const SERVICE_PANELS = [
  {
    id: 'gestao-documentos',
    title: 'Gestão de Documentos de SST',
    text: 'Organizamos e mantemos atualizada toda a documentação obrigatória da sua empresa, pronta para auditorias e fiscalizações.',
    items: ['Controle de prazos e validades', 'Organização centralizada', 'Atualização conforme a legislação'],
    panel: 'bg-brand-green-soft',
    title_: 'text-brand-navy',
    body: 'text-brand-muted',
    chip: 'bg-white text-brand-navy',
    check: 'text-brand-green',
    link: 'text-brand-green',
  },
  {
    id: 'emissao-documentos',
    title: 'Emissão de Documentos',
    text: 'Elaboramos e emitimos os documentos que a lei exige para sua empresa funcionar com segurança.',
    items: ['AVCB', 'CLCB', 'PGR', 'PCMSO'],
    panel: 'bg-brand-blue-soft',
    title_: 'text-brand-navy',
    body: 'text-brand-muted',
    chip: 'bg-white text-brand-navy',
    check: 'text-brand-blue',
    link: 'text-brand-blue',
  },
  {
    id: 'treinamentos-nr',
    title: 'Treinamentos NR',
    text: 'Capacitamos sua equipe nas normas regulamentadoras, com certificado ao final.',
    items: ['NR 05', 'NR 06', 'NR 11', 'NR 12', 'NR 23', 'NR 33', 'NR 35'],
    panel: 'bg-brand-paper',
    title_: 'text-brand-navy',
    body: 'text-brand-muted',
    chip: 'bg-white text-brand-navy',
    check: 'text-brand-green',
    link: 'text-brand-green',
  },
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>GB Consultoria de Segurança do Trabalho - Tietê/SP</title>
        <meta
          name="description"
          content="Consultoria em segurança do trabalho em Tietê/SP e região. Gestão e emissão de documentos SST (PGR, PCMSO, AVCB, CLCB) e treinamentos NR para sua empresa."
        />
      </Helmet>

      {/* Hero em azul da marca */}
      <section className="relative isolate overflow-hidden bg-brand-blue text-white">
        <div aria-hidden="true" className="absolute -left-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border-[60px] border-white/[0.07]" />

        <div className="container grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-base font-semibold text-white">
              {CITY} e região
            </span>
            <h1 className="title-hero mt-6 text-white">
              Sua empresa em dia. <span className="text-brand-green-bright">Sua equipe protegida.</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/85 sm:text-2xl">
              Documentos de segurança do trabalho e treinamentos NR para empresas que levam prevenção a sério.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contato" className="btn btn-primary">
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative lg:col-span-5"
          >
            <img
              src="/images/hero-equipe.jpg"
              alt="Equipe de trabalhadores com capacetes e coletes refletivos em canteiro de obras, vistos de cima"
              className="h-[320px] w-full rounded-3xl object-cover sm:h-[420px] lg:h-[540px]"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
            <div className="absolute -bottom-6 -left-2 rounded-2xl bg-brand-green px-6 py-4 shadow-xl sm:-left-6">
              <p className="font-heading text-3xl font-extrabold leading-none text-white">2022</p>
              <p className="mt-1 text-base text-white/85">atendendo a região</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços em painéis coloridos */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...reveal} className="mb-12 max-w-3xl lg:mb-16">
            <span className="label">O que fazemos</span>
            <h2 className="title-2 mt-3">Três serviços que mantêm sua empresa segura e dentro da lei.</h2>
          </motion.div>

          <div className="space-y-6">
            {SERVICE_PANELS.map((p) => (
              <motion.article
                key={p.id}
                {...reveal}
                className={cn('panel grid gap-8 lg:grid-cols-12 lg:items-center', p.panel)}
              >
                <div className="lg:col-span-6">
                  <h3 className={cn('title-3', p.title_)}>{p.title}</h3>
                  <p className={cn('mt-4', p.body)}>{p.text}</p>
                  <Link to={`/servicos#${p.id}`} className={cn('link-arrow mt-6 underline-offset-4 hover:underline', p.link)}>
                    Ver detalhes
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className={cn('inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-semibold sm:text-lg', p.chip)}
                    >
                      <Check className={cn('h-4 w-4', p.check)} strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section bg-brand-paper">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal} className="relative lg:col-span-5">
            <div aria-hidden="true" className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-brand-blue" />
            <img
              src="/images/equipe.jpg"
              alt="Dois profissionais com capacete conversando em canteiro de obras"
              className="relative h-[360px] w-full rounded-3xl object-cover lg:h-[480px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <motion.div {...reveal} className="lg:col-span-6 lg:col-start-7">
            <span className="label">Sobre a GB</span>
            <h2 className="title-2 mt-3">
              Desde 2022 ajudando empresas a cumprir as normas e proteger quem faz o trabalho acontecer.
            </h2>
            <p className="mt-6 text-brand-ink/80">
              Consultoria especializada em saúde e segurança do trabalho, com atendimento direto e linguagem clara.
            </p>
            <Link to="/sobre" className="btn btn-navy mt-8">
              Conheça a GB
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
