import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { SERVICES } from '@/lib/services';
import { fadeUp, reveal, revealGroup } from '@/lib/motion';

const [GESTAO, EMISSAO, TREINAMENTOS] = SERVICES;

const BENEFICIOS_GESTAO = [
  'Conformidade legal com as normas regulamentadoras',
  'Redução de riscos de multas e penalidades',
  'Organização centralizada de todos os documentos',
  'Atualização constante conforme mudanças na legislação',
];

const DOCUMENTOS = [
  { sigla: 'AVCB', title: 'Auto de Vistoria do Corpo de Bombeiros', text: 'Atesta que a edificação possui condições de segurança contra incêndio.' },
  { sigla: 'CLCB', title: 'Certificado de Licença do Corpo de Bombeiros', text: 'Licença prévia para funcionamento, em conformidade com as normas de segurança.' },
  { sigla: 'PGR', title: 'Programa de Gerenciamento de Riscos', text: 'Documento obrigatório que identifica e controla riscos no ambiente de trabalho.' },
  { sigla: 'PCMSO', title: 'Programa de Controle Médico de Saúde Ocupacional', text: 'Preserva a saúde dos trabalhadores por meio de exames e monitoramento.' },
];

const TREINAMENTOS_NR = [
  { nr: 'NR 05', title: 'CIPA', text: 'Prevenção de acidentes e doenças do trabalho para membros da comissão.' },
  { nr: 'NR 06', title: 'Equipamentos de Proteção Individual', text: 'Uso adequado, conservação e higienização de EPIs.' },
  { nr: 'NR 11', title: 'Movimentação de Materiais', text: 'Operação segura de equipamentos de transporte e movimentação de cargas.' },
  { nr: 'NR 12', title: 'Máquinas e Equipamentos', text: 'Operação segura de máquinas e prevenção de acidentes.' },
  { nr: 'NR 23', title: 'Proteção Contra Incêndios', text: 'Prevenção e combate a incêndios no ambiente de trabalho.' },
  { nr: 'NR 33', title: 'Espaços Confinados', text: 'Segurança em ambientes com entrada e saída limitadas.' },
  { nr: 'NR 35', title: 'Trabalho em Altura', text: 'Obrigatório para atividades acima de 2 metros do nível inferior.' },
];

// Cor de cada serviço, igual aos painéis da Home
const ACCENTS = ['bg-brand-green', 'bg-brand-blue', 'bg-brand-amber'];
const DOC_ACCENTS = [
  { bar: 'border-t-brand-green', text: 'text-brand-green' },
  { bar: 'border-t-brand-blue', text: 'text-brand-blue' },
  { bar: 'border-t-brand-amber', text: 'text-brand-navy' },
  { bar: 'border-t-brand-navy', text: 'text-brand-navy' },
];

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
        tone="green"
        crumb="Serviços"
        title="Documentos em ordem, equipe treinada."
        subtitle="Três serviços que cobrem o que sua empresa precisa para operar com segurança."
      />

      {/* Índice */}
      <nav aria-label="Seções desta página" className="border-b border-brand-line bg-white">
        <ul className="container flex flex-wrap gap-3 py-5">
          {SERVICES.map((service, index) => (
            <li key={service.id}>
              <a
                href={`#${service.id}`}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-line px-5 py-2.5 text-base font-semibold text-brand-navy transition-colors hover:border-brand-navy sm:text-lg"
              >
                <span aria-hidden="true" className={`h-3 w-3 rounded-full ${ACCENTS[index]}`} />
                {service.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Gestão */}
      <section id={GESTAO.id} className="section scroll-mt-24 bg-white">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal} className="lg:col-span-5">
            <span className="label">01</span>
            <h2 className="title-2 mt-3">{GESTAO.title}</h2>
            <p className="mt-6 text-brand-muted">
              Toda a documentação obrigatória de SST organizada e atualizada, pronta para auditorias e fiscalizações.
            </p>
          </motion.div>
          <motion.ul {...revealGroup} className="panel space-y-5 bg-brand-green lg:col-span-7">
            {BENEFICIOS_GESTAO.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-amber text-brand-navy">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-lg font-medium text-white sm:text-xl">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Emissão */}
      <section id={EMISSAO.id} className="section scroll-mt-24 bg-brand-blue-soft">
        <div className="container">
          <motion.div {...reveal} className="mb-12 max-w-3xl">
            <span className="label">02</span>
            <h2 className="title-2 mt-3">{EMISSAO.title}</h2>
            <p className="mt-6 text-brand-muted">Os documentos que a lei exige, elaborados e emitidos pela GB.</p>
          </motion.div>
          <motion.ul {...revealGroup} className="grid gap-6 md:grid-cols-2">
            {DOCUMENTOS.map((doc, index) => (
              <motion.li
                key={doc.sigla}
                variants={fadeUp}
                className={`panel border-t-8 bg-white ${DOC_ACCENTS[index].bar}`}
              >
                <span className={`font-heading text-3xl font-extrabold sm:text-4xl ${DOC_ACCENTS[index].text}`}>{doc.sigla}</span>
                <h3 className="title-4 mt-4">{doc.title}</h3>
                <p className="mt-3 text-brand-muted">{doc.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Treinamentos */}
      <section id={TREINAMENTOS.id} className="section scroll-mt-24 bg-white">
        <div className="container">
          <motion.div {...reveal} className="mb-12 max-w-3xl">
            <span className="label">03</span>
            <h2 className="title-2 mt-3">{TREINAMENTOS.title}</h2>
            <p className="mt-6 text-brand-muted">
              Capacitação obrigatória conforme as Normas Regulamentadoras, com certificado ao final.
            </p>
          </motion.div>
          <motion.ul {...revealGroup} className="divide-y divide-brand-line border-y border-brand-line">
            {TREINAMENTOS_NR.map((t) => (
              <motion.li key={t.nr} variants={fadeUp} className="grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                <span className="sm:col-span-2">
                  <span className="inline-flex rounded-full bg-brand-amber px-4 py-1.5 font-heading text-lg font-extrabold text-brand-navy">
                    {t.nr}
                  </span>
                </span>
                <h3 className="title-4 sm:col-span-4">{t.title}</h3>
                <p className="text-brand-muted sm:col-span-6">{t.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
