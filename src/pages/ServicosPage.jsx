import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { SERVICES } from '@/lib/services';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const [GESTAO, EMISSAO, TREINAMENTOS] = SERVICES;

const BENEFICIOS_GESTAO = [
  'Conformidade legal garantida com as normas regulamentadoras',
  'Redução de riscos de multas e penalidades',
  'Organização centralizada de todos os documentos',
  'Atualização constante conforme mudanças na legislação',
];

const DOCUMENTOS = [
  {
    sigla: 'AVCB',
    title: 'Auto de Vistoria do Corpo de Bombeiros',
    text: 'Documento que atesta que a edificação possui condições de segurança contra incêndio.',
  },
  {
    sigla: 'CLCB',
    title: 'Certificado de Licença do Corpo de Bombeiros',
    text: 'Licença prévia para funcionamento, garantindo conformidade com normas de segurança.',
  },
  {
    sigla: 'PGR',
    title: 'Programa de Gerenciamento de Riscos',
    text: 'Documento obrigatório que identifica e controla riscos no ambiente de trabalho.',
  },
  {
    sigla: 'PCMSO',
    title: 'Programa de Controle Médico de Saúde Ocupacional',
    text: 'Programa que visa preservar a saúde dos trabalhadores através de exames e monitoramento.',
  },
];

const TREINAMENTOS_NR = [
  { nr: '05', title: 'Comissão Interna de Prevenção de Acidentes (CIPA)', text: 'Treinamento para membros da CIPA sobre prevenção de acidentes e doenças do trabalho.' },
  { nr: '06', title: 'Equipamentos de Proteção Individual (EPI)', text: 'Capacitação sobre uso adequado, conservação e higienização de EPIs.' },
  { nr: '11', title: 'Transporte, Movimentação e Armazenagem de Materiais', text: 'Treinamento para operação segura de equipamentos de movimentação de cargas.' },
  { nr: '12', title: 'Segurança no Trabalho em Máquinas e Equipamentos', text: 'Capacitação sobre operação segura de máquinas e prevenção de acidentes.' },
  { nr: '23', title: 'Proteção Contra Incêndios', text: 'Treinamento sobre prevenção e combate a incêndios no ambiente de trabalho.' },
  { nr: '33', title: 'Segurança e Saúde nos Trabalhos em Espaços Confinados', text: 'Capacitação para trabalhos em ambientes com entrada e saída limitadas.' },
  { nr: '35', title: 'Trabalho em Altura', text: 'Treinamento obrigatório para atividades acima de 2 metros do nível inferior.' },
];

/** Cabeçalho de cada bloco: número grande, título e introdução. */
const BlockHeader = ({ index, service, intro }) => (
  <motion.div {...reveal} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
    <div className="lg:col-span-3">
      <span className="display text-5xl text-brand-green/35 tabular-nums lg:text-6xl">0{index}</span>
    </div>
    <div className="lg:col-span-9">
      <h2 className="display-md text-3xl text-brand-navy sm:text-4xl lg:text-[2.75rem]">{service.title}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">{intro}</p>
    </div>
  </motion.div>
);

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
        label="O que fazemos"
        title="Documentos em ordem, equipe treinada."
        image="/images/servicos-hero.jpg"
        imageAlt="Trabalhadores com cinto de segurança em estrutura de obra"
      />

      {/* Índice da página */}
      <nav aria-label="Seções desta página" className="border-b border-brand-line bg-white">
        <ol className="container flex flex-col divide-y divide-brand-line sm:flex-row sm:divide-x sm:divide-y-0">
          {SERVICES.map((service, index) => (
            <li key={service.id} className="flex-1">
              <a
                href={`#${service.id}`}
                className="group flex items-center gap-4 py-4 transition-colors hover:text-brand-green sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="font-heading text-xs font-bold text-brand-green tabular-nums">0{index + 1}</span>
                <span className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-brand-navy group-hover:text-brand-green">
                  {service.short}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 rotate-90 text-brand-muted sm:ml-auto" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 01 Gestão */}
      <section id={GESTAO.id} className="section scroll-mt-24 bg-white">
        <div className="container">
          <BlockHeader
            index={1}
            service={GESTAO}
            intro="Toda a documentação obrigatória de SST organizada e atualizada, pronta para auditorias e fiscalizações."
          />
          <motion.ul {...revealGroup} className="mt-12 grid gap-x-12 lg:ml-[25%] lg:grid-cols-2">
            {BENEFICIOS_GESTAO.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 border-t border-brand-line py-5 text-brand-ink"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="leading-snug">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 02 Emissão */}
      <section id={EMISSAO.id} className="section scroll-mt-24 bg-brand-paper">
        <div className="container">
          <BlockHeader
            index={2}
            service={EMISSAO}
            intro="Os documentos que a lei exige, elaborados e emitidos pela GB."
          />
          <motion.ol {...revealGroup} className="mt-12 border-t border-brand-line lg:ml-[25%]">
            {DOCUMENTOS.map((doc) => (
              <motion.li
                key={doc.sigla}
                variants={fadeUp}
                className="grid gap-2 border-b border-brand-line py-6 sm:grid-cols-12 sm:gap-6"
              >
                <span className="display text-2xl text-brand-green sm:col-span-3 lg:text-3xl">{doc.sigla}</span>
                <div className="sm:col-span-9">
                  <h3 className="font-heading text-lg font-extrabold tracking-tight text-brand-navy">{doc.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-brand-muted">{doc.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* 03 Treinamentos */}
      <section id={TREINAMENTOS.id} className="section scroll-mt-24 bg-white">
        <div className="container">
          <BlockHeader
            index={3}
            service={TREINAMENTOS}
            intro="Capacitação obrigatória conforme as Normas Regulamentadoras, com certificação."
          />
          <motion.ol {...revealGroup} className="mt-12 grid gap-x-10 border-t border-brand-line lg:ml-[25%] lg:grid-cols-2">
            {TREINAMENTOS_NR.map((t) => (
              <motion.li
                key={t.nr}
                variants={fadeUp}
                className="flex gap-5 border-b border-brand-line py-6"
              >
                <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full bg-brand-navy font-heading leading-none text-white">
                  <span className="text-[9px] font-bold tracking-widest">NR</span>
                  <span className="text-base font-extrabold">{t.nr}</span>
                </span>
                <div>
                  <h3 className="font-heading text-base font-extrabold leading-snug tracking-tight text-brand-navy sm:text-lg">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-brand-muted">{t.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
