import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { reveal } from '@/lib/motion';
import { cn } from '@/lib/utils';

// Detalhes de cada serviço: usados na Home e na página de Serviços.
export const SERVICE_DETAILS = [
  {
    id: 'gestao-documentos',
    image: '/images/contato-hero.jpg',
    imageAlt: 'Técnico de segurança com capacete e colete analisando documento em área industrial',
    title: 'Gestão de Documentos de SST',
    text: 'Organização, controle e atualização de toda a documentação obrigatória de saúde e segurança do trabalho, pronta para auditorias e fiscalizações.',
    items: [
      { strong: 'Conformidade legal', rest: ' com as normas regulamentadoras' },
      { strong: 'Redução de riscos', rest: ' de multas e penalidades' },
      { strong: 'Organização centralizada', rest: ' de todos os documentos' },
      { strong: 'Atualização constante', rest: ' conforme mudanças na legislação' },
    ],
  },
  {
    id: 'emissao-documentos',
    image: '/images/sobre-hero.jpg',
    imageAlt: 'Trabalhadores em canteiro de obras vistos de cima',
    title: 'Emissão de Documentos',
    text: 'Elaboração e emissão dos documentos que a lei exige para a sua empresa funcionar com segurança.',
    items: [
      { strong: 'AVCB', rest: ' – Auto de Vistoria do Corpo de Bombeiros' },
      { strong: 'CLCB', rest: ' – Certificado de Licença do Corpo de Bombeiros' },
      { strong: 'PGR', rest: ' – Programa de Gerenciamento de Riscos' },
      { strong: 'PCMSO', rest: ' – Programa de Controle Médico de Saúde Ocupacional' },
    ],
  },
  {
    id: 'treinamentos-nr',
    image: '/images/servicos-hero.jpg',
    imageAlt: 'Trabalhadores com cinto de segurança em estrutura de obra',
    title: 'Treinamentos em SST',
    text: 'Capacitação obrigatória da sua equipe conforme as Normas Regulamentadoras, com certificado ao final.',
    items: [
      { strong: 'NR 05', rest: ' – CIPA' },
      { strong: 'NR 06', rest: ' – Equipamentos de Proteção Individual' },
      { strong: 'NR 11', rest: ' – Movimentação de Materiais' },
      { strong: 'NR 12', rest: ' – Máquinas e Equipamentos' },
      { strong: 'NR 23', rest: ' – Proteção Contra Incêndios' },
      { strong: 'NR 33', rest: ' – Espaços Confinados' },
      { strong: 'NR 35', rest: ' – Trabalho em Altura' },
    ],
  },
];

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
        <div className={cn('relative', index % 2 === 1 && 'lg:order-2')}>
          <img
            src={s.image}
            alt={s.imageAlt}
            className="h-[300px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[460px]"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute left-5 top-5 rounded-lg bg-brand-navy px-4 py-2 font-heading text-base font-bold text-white">
            0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="title-2">{s.title}</h3>
          <p className="mt-5 text-brand-muted">{s.text}</p>
          <hr className="my-7 border-brand-line" />
          <ul className={cn('grid gap-3', s.items.length > 4 && 'sm:grid-cols-2 sm:gap-x-8')}>
            {s.items.map((item) => (
              <li key={item.strong} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" strokeWidth={3} aria-hidden="true" />
                <span className="text-brand-ink">
                  <strong className="font-semibold text-brand-navy">{item.strong}</strong>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/contato" className="btn btn-primary mt-9">
            Solicitar orçamento
          </Link>
        </div>
      </motion.article>
    ))}
  </div>
);

export default ServiceBlocks;
