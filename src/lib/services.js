import { ClipboardList, Send, Flame, GraduationCap } from 'lucide-react';

// Fonte única dos serviços, conforme a apresentação institucional.
// Usada no menu do rodapé, no formulário de contato e nas âncoras da página de Serviços.
export const SERVICES = [
  {
    id: 'seguranca-do-trabalho',
    icon: ClipboardList,
    title: 'Gestão de Segurança do Trabalho',
    short: 'Segurança do Trabalho',
    description: 'PGR, LTCAT, PCMSO e laudos com base em avaliação técnica dos riscos ocupacionais.',
  },
  {
    id: 'esocial',
    icon: Send,
    title: 'eSocial SST',
    short: 'eSocial SST',
    description: 'Geração e envio dos eventos S-2210, S-2220 e S-2240 ao eSocial.',
  },
  {
    id: 'corpo-de-bombeiros',
    icon: Flame,
    title: 'AVCB e CLCB',
    short: 'Corpo de Bombeiros',
    description: 'Adequação da edificação e documentação para emissão junto ao Corpo de Bombeiros.',
  },
  {
    id: 'treinamentos',
    icon: GraduationCap,
    title: 'Treinamentos e Palestras',
    short: 'Treinamentos e Palestras',
    description: 'Treinamentos NR, primeiros socorros, 5S, SIPAT e palestras de saúde e liderança.',
  },
];

// Clientes citados na apresentação institucional. "bg" é a cor de fundo do próprio logo.
export const CLIENTS = [
  { name: 'Zanchetta', logo: '/images/clientes/zanchetta.png', bg: '#FFFFFF' },
  { name: 'Indusparquet', logo: '/images/clientes/indusparquet.png', bg: '#002D56' },
  { name: 'NOXI Química', logo: '/images/clientes/noxi.png', bg: '#FFFFFF' },
  { name: 'Ezklo Marcenaria Boutique', logo: '/images/clientes/ezklo.png', bg: '#232020' },
  { name: 'Elantas', logo: '/images/clientes/elantas.png', bg: '#FFFFFF' },
  { name: 'Vodamed Metalúrgica', logo: '/images/clientes/vodamed.png', bg: '#FFFFFF' },
];

// Etapas do método de trabalho (apresentação institucional, "Como desenvolvemos o trabalho").
export const METHOD_STEPS = [
  {
    title: 'Identificação',
    text: 'Mapeamento das instalações, processos, atividades e GHEs para reconhecer os riscos à saúde e à segurança dos trabalhadores.',
  },
  {
    title: 'Mensuração',
    text: 'Avaliações qualitativas e quantitativas dos agentes físicos, químicos, biológicos, ergonômicos, de acidentes e psicossociais, por GHE.',
  },
  {
    title: 'Registro e gestão',
    text: 'Dados inseridos no sistema ESO para emissão e controle de PGR, LTCAT, PCMSO e laudos, personalizados ao perfil da empresa.',
  },
  {
    title: 'Equalização dos riscos',
    text: 'Reunião estratégica para definir o cronograma de controle de riscos e propostas de redução de custos operacionais e trabalhistas.',
  },
  {
    title: 'Monitoramento',
    text: 'Acompanhamento contínuo do cronograma, com atualização permanente dos documentos conforme os processos mudam.',
  },
];

export const SECTORS = ['Engenharia', 'Lavanderia', 'Madeireira', 'Construção civil', 'Indústria química'];
