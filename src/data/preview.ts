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
  nomeFantasia: 'Capseg',
  cnpj: '63.413.423/0001-53',
  sintetico: false,
};

/** SINTÉTICO — sem número ainda. O número pessoal de um sócio foi retirado
 * antes da publicação para não expor um telefone particular numa página pública.
 * Quando existir linha oficial, preencha whatsappLink e whatsappExibicao.
 */
export const contato = {
  whatsappExibicao: 'número a definir',
  whatsappLink: null as string | null,
  email: 'contato@garantajacred.com.br',
  dominio: 'garantajacred.com.br',
  sintetico: true,
};

/**
 * SINTÉTICO — valores de exibição apenas.
 * O valor é deliberadamente quebrado para ler como resultado de uma simulação,
 * nunca como teto anunciado. CET anual derivado: (1,016)^12 − 1 = 20,9830%.
 */
export const condicoes = {
  valorExemplo: 'R$ 853,68',
  cetMensal: '1,6% a.m.',
  cetAnual: '20,98% a.a.',
  sintetico: true,
};

/** Ainda não existem. Não inventar. */
export const aindaNaoTemos = {
  valorMinimo: null,
  valorMaximo: null,
  prazoParcelas: null,
  prazoLiberacao: null,
  susepTitulo: null,
  emissorTitulo: null,
  correspondenteBancario: null,
  horarioAtendimento: null,
  urlContratacao: null, // todo CTA aponta para /simulador até isto existir
};

/** Situações fotográficas escolhidas. Uma variação por situação. */
export const fotos = {
  // lote 1 — pessoas, luz clara (lado "depois")
  porta: '/img/door2.webp',
  contasEmCasa: '/img/woman2.webp',
  casal: '/img/couple2.webp',
  comercio: '/img/shop2.webp',
  celularSala: '/img/cell3.webp',
  pagandoPeloCelular: '/img/man1.webp',
  maeComFilho: '/img/mom2.webp',
  emPeComCelular: '/img/girl2.webp',
  autonomo: '/img/worker3.webp',
  // lote 2 — objetos, luz escura (lado "antes")
  contasNaMesa: '/img/bill3.webp',
  contasVertical: '/img/table2.webp',
  cartaoECelular: '/img/card2.webp',
  comprovante: '/img/done1.webp',
  conferindo: '/img/check4.webp',
  alivioLargo: '/img/relief2.webp',
};
