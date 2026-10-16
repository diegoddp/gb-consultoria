import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { reveal } from '@/lib/motion';
import { cn } from '@/lib/utils';

// Detalhes de cada serviço, com textos da apresentação institucional.
// Usados na Home e na página de Serviços.
export const SERVICE_DETAILS = [
  {
    id: 'seguranca-do-trabalho',
    image: '/images/contato-hero.jpg',
    imageAlt: 'Técnico de segurança com capacete e colete analisando documento em área industrial',
    title: 'Gestão de Segurança do Trabalho',
    text: 'Gestão ambiental e de segurança do trabalho fundamentada em avaliação técnica de riscos ocupacionais e conformidade legal. Nossa equipe multidisciplinar de engenheiros, médicos e técnicos orienta decisões que garantem a continuidade da operação e reduzem custos.',
    groups: [
      {
        items: [
          { strong: 'PGR', rest: ' – Programa de Gerenciamento de Riscos' },
          { strong: 'LTCAT', rest: ' – Laudo Técnico das Condições Ambientais de Trabalho' },
          { strong: 'PCMSO', rest: ' – Programa de Controle Médico de Saúde Ocupacional' },
          { strong: 'Laudos e documentos técnicos', rest: ' personalizados ao perfil da empresa' },
        ],
      },
    ],
  },
  {
    id: 'esocial',
    image: '/images/sobre-hero.jpg',
    imageAlt: 'Trabalhadores em canteiro de obras vistos de cima',
    title: 'eSocial SST',
    text: 'Geração e envio dos eventos obrigatórios de SST ao eSocial, com dados extraídos do LTCAT e do PCMSO elaborados por profissionais legalmente habilitados da nossa equipe: Engenheiro de Segurança e Médico do Trabalho.',
    groups: [
      {
        items: [
          { strong: 'S-2210', rest: ' – CAT, Comunicação de Acidente de Trabalho' },
          { strong: 'S-2220', rest: ' – Monitoramento da Saúde do Trabalhador' },
          { strong: 'S-2240', rest: ' – Condições Ambientais do Trabalho, Fatores de Risco' },
        ],
      },
    ],
  },
  {
    id: 'corpo-de-bombeiros',
    image: '/images/avcb-clcb.jpg',
    imageAlt: 'Modelos de Auto de Vistoria e Certificado de Licença do Corpo de Bombeiros do Estado de São Paulo',
    imageContain: true,
    title: 'AVCB e CLCB',
    text: 'Documentos que comprovam a segurança da edificação em caso de incêndio, exigidos para regularizar qualquer empresa com sede física. Nossos profissionais adequam a edificação e elaboram a documentação para uma emissão rápida junto ao Corpo de Bombeiros.',
    groups: [
      {
        items: [
          { strong: 'AVCB', rest: ' – Auto de Vistoria do Corpo de Bombeiros' },
          { strong: 'CLCB', rest: ' – Certificado de Licença do Corpo de Bombeiros' },
          { strong: 'Adequação da edificação', rest: ' às exigências de segurança contra incêndio' },
        ],
      },
    ],
  },
  {
    id: 'treinamentos',
    image: '/images/treinamento.jpg',
    imageAlt: 'Palestra para um auditório de trabalhadores',
    title: 'Treinamentos e Palestras',
    text: 'Atuamos como centro de disseminação de conhecimento, em parceria com especialistas de diversas áreas, com soluções de aprendizagem personalizadas para cada cliente.',
    groups: [
      {
        heading: 'Treinamentos',
        items: [
          { strong: 'NR 05', rest: ' – CIPA' },
          { strong: 'NR 06', rest: ' – EPI' },
          { strong: 'NR 11', rest: ' – Operador de Empilhadeira' },
          { strong: 'NR 23', rest: ' – Brigada de Emergência' },
          { strong: 'NR 33', rest: ' – Espaço Confinado' },
          { strong: 'NR 35', rest: ' – Trabalho em Altura' },
          { strong: 'Primeiros Socorros', rest: '' },
          { strong: 'Programa 5S', rest: ' – implantação' },
        ],
      },
      {
        heading: 'Palestras',
        items: [
          { strong: 'Motivacionais', rest: '' },
          { strong: 'Liderança', rest: '' },
          { strong: 'Inteligência Emocional', rest: '' },
          { strong: 'Saúde e Segurança', rest: ': alcoolismo, estresse, ansiedade e depressão' },
          { strong: 'SIPAT', rest: ' – Semana Interna de Prevenção de Acidentes' },
        ],
      },
    ],
  },
];

const CheckItem = ({ item }) => (
  <li className="flex items-start gap-3">
    <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" strokeWidth={3} aria-hidden="true" />
    <span className="text-brand-ink">
      <strong className="font-semibold text-brand-navy">{item.strong}</strong>
      {item.rest}
    </span>
  </li>
);

/** Blocos alternados de foto e texto, um por serviço. */
const ServiceBlocks = () => (
  <div className="space-y-20 lg:space-y-28">
    {SERVICE_DETAILS.map((s, index) => (
      <motion.article
        key={s.id}
        id={s.id}
        {...reveal}
        className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className={cn('relative min-w-0', index % 2 === 1 && 'lg:order-2')}>
          <img
            src={s.image}
            alt={s.imageAlt}
            className={cn(
              'h-[280px] w-full rounded-2xl shadow-lg sm:h-[360px] lg:h-[440px]',
              s.imageContain ? 'border border-brand-line bg-white object-contain p-6' : 'object-cover'
            )}
            loading="lazy"
            decoding="async"
          />
          <span className="absolute left-5 top-5 rounded-lg bg-brand-navy px-4 py-2 font-heading text-base font-bold text-white">
            0{index + 1}
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="title-2">{s.title}</h3>
          <p className="mt-5 text-brand-muted">{s.text}</p>
          <hr className="my-7 border-brand-line" />
          <div className={cn('grid gap-8', s.groups.length > 1 && 'sm:grid-cols-2')}>
            {s.groups.map((g, gi) => (
              <div key={gi}>
                {g.heading && <h4 className="mb-4 text-lg font-bold text-brand-navy">{g.heading}</h4>}
                <ul className="grid gap-3">
                  {g.items.map((item) => (
                    <CheckItem key={item.strong} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/contato" className="btn btn-primary mt-9">
            Solicitar orçamento
          </Link>
        </div>
      </motion.article>
    ))}
  </div>
);

export default ServiceBlocks;
