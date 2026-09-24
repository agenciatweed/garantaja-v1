/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DADOS DE PRÉVIA — TUDO AQUI É PROVISÓRIO E PRECISA SER SUBSTITUÍDO
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Este é o único lugar do projeto onde esses valores existem. Trocar por dados
 * reais é editar este arquivo e mais nada.
 *
 * Enquanto QUALQUER campo marcado `sintetico: true` estiver aqui, o site inteiro
 * envia <meta name="robots" content="noindex, nofollow"> — ver BaseLayout.astro.
 * Uma prévia indexada vira uma oferta de crédito publicada com taxa inventada.
 *
 * Registro completo em PRODUCT.md › "Synthetic preview data".
 */

export const PREVIEW_MODE = true; // false quando tudo abaixo for real

/** REAL e confirmado pelo cliente. Dígitos verificadores validados. */
export const empresa = {
  razaoSocial: 'CAPSEG ASSESSORIA LTDA - ME',
  nomeFantasia: 'CAPSEG',
  cnpj: '63.413.423/0001-53',
  sintetico: false,
};

/**
 * Empresas participantes, indicadas pelo cliente em 2026-09-24.
 * AINDA DEPENDEM DE APROVAÇÃO DA ASSESSORIA JURÍDICA antes de ir ao ar de verdade.
 * As funções são descrições provisórias; os logos entram quando forem enviados.
 */
export const participantes = [
  { nome: 'CAPSEG', funcao: 'empresa responsável pelo Garanta Já e pela estrutura da operação.' },
  { nome: 'Aplicap', funcao: 'participa da operação com o título de capitalização.' },
  { nome: 'UY3', funcao: 'participa da operação na parte de crédito.' },
];
export const participantesAprovados = false;

/** SINTÉTICO — sem número oficial ainda. O número pessoal de um sócio foi
 * retirado antes da publicação. Quando existir linha oficial, preencha
 * whatsappLink e whatsappExibicao.
 */
export const contato = {
  whatsappExibicao: 'número a definir',
  whatsappLink: null as string | null,
  email: 'contato@garantajacred.com.br',
  dominio: 'garantajacred.com.br',
  horario: 'dias úteis, das 9h às 18h',
  sla: 'prazo de resposta a definir',
  sintetico: true,
};

/**
 * SINTÉTICO — valores do protótipo aprovado pelo cliente (faixa, parcelas, CET).
 * A taxa é única para qualquer perfil; pode variar apenas conforme o valor.
 * CET anual derivado: (1,042)^12 − 1 = 63,84%.
 */
export const condicoes = {
  valorMinimo: 300,
  valorMaximo: 1500,
  valorPasso: 50,
  valorInicial: 1000,
  opcoesParcelas: [6, 10, 12, 18],
  parcelasIniciais: 12,
  taxaMensal: 0.042,
  cetMensal: '4,2% a.m.',
  cetAnual: '63,84% a.a.',
  sintetico: true,
};

/** Parcela pela tabela price na taxa da prévia. Mesma conta do simulador. */
export function parcela(valor: number, n: number, i = condicoes.taxaMensal) {
  return (valor * i) / (1 - Math.pow(1 + i, -n));
}

export const brl = (n: number) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const brlInteiro = (n: number) =>
  'R$ ' + n.toLocaleString('pt-BR', { maximumFractionDigits: 0 });

/** Bandeiras aceitas — sujeitas a homologação. Logos entram quando homologados. */
export const bandeiras = ['Visa', 'Mastercard', 'Elo', 'Hipercard', 'Amex'];

/** Ainda não existem. Não inventar. */
export const aindaNaoTemos = {
  prazoLiberacao: null,
  susepTitulo: null,
  regrasSorteio: null,
  correspondenteBancario: null,
  redesSociais: null,
  urlContratacao: null, // todo CTA aponta para /simulador até isto existir
};

/** Situações fotográficas escolhidas. Uma variação por situação. */
export const fotos = {
  heroi: '/img/cell3.webp',
  conferindo: '/img/check4.webp',
  cartaoECelular: '/img/card2.webp',
  comprovante: '/img/done1.webp',
};
