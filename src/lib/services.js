import { FileText, ShieldCheck, HardHat } from 'lucide-react';

// Fonte única dos três serviços. Usada na Home, no Footer e nas âncoras da página de Serviços.
export const SERVICES = [
  {
    id: 'gestao-documentos',
    icon: FileText,
    title: 'Gestão de Documentos de SST',
    short: 'Gestão de Documentos',
    description: 'Organização, controle e atualização de toda a documentação obrigatória de segurança do trabalho.',
  },
  {
    id: 'emissao-documentos',
    icon: ShieldCheck,
    title: 'Emissão de Documentos',
    short: 'Emissão de Documentos',
    description: 'Elaboração e emissão de AVCB, CLCB, PGR, PCMSO e outros documentos essenciais.',
  },
  {
    id: 'treinamentos-nr',
    icon: HardHat,
    title: 'Treinamentos em SST',
    short: 'Treinamentos NR',
    description: 'Capacitação nas NR 05, 06, 11, 12, 23, 33 e 35, com certificação para sua equipe.',
  },
];
