/**
 * Perguntas frequentes. Editar aqui atualiza a home, /duvidas e o schema FAQ.
 * `home: true` coloca a pergunta no bloco "dúvidas mais comuns" da página inicial
 * (na ordem em que aparecem aqui).
 */

export interface Pergunta {
  p: string;
  r: string;
  home?: boolean;
}

export interface Grupo {
  nome: string;
  itens: Pergunta[];
}

export const faq: Grupo[] = [
  {
    nome: 'a desconfiança',
    itens: [
      {
        p: 'isso é golpe?',
        r: 'não. a empresa responsável tem cnpj publicado no rodapé de todas as páginas, e você pode consultar na Receita Federal antes de qualquer coisa. o teste mais simples: a gente nunca pede depósito, boleto ou pix para liberar o dinheiro. a única cobrança é a do título de capitalização, feita no seu cartão, dentro da contratação oficial.',
        home: true,
      },
      {
        p: 'por que não consultam meu score?',
        r: 'porque não é necessário. a garantia da operação é um título de capitalização comprado no seu próprio cartão, no momento da contratação. como a garantia já existe, não há histórico de crédito para avaliar — nem score, nem spc.',
        home: true,
      },
      {
        p: 'então todo mundo é aprovado?',
        r: 'não, e a gente não promete isso. a exigência real é ter um cartão de crédito com limite disponível para a compra do título. se o cartão não passar, a operação não acontece.',
      },
    ],
  },
  {
    nome: 'o dinheiro',
    itens: [
      {
        p: 'quanto eu consigo?',
        r: 'é crédito pequeno, do tamanho de uma conta do mês — nesta fase, até R$ 1.500. o valor exato que cabe pra você depende do limite disponível no cartão e aparece na simulação, junto com o custo.',
        home: true,
      },
      {
        p: 'quanto custa?',
        r: 'o custo efetivo total (CET) aparece na simulação, antes de você aceitar. a taxa é a mesma para qualquer perfil — ela só muda conforme o valor escolhido. não existe taxa que apareça depois, nem cobrança por fora.',
        home: true,
      },
      {
        p: 'em quanto tempo o dinheiro cai?',
        r: 'o dinheiro é enviado por pix depois que a operação é concluída. o prazo de liberação é informado na simulação — ainda não publicamos um número aqui porque não queremos prometer um prazo que a operação não confirme.',
        home: true,
      },
    ],
  },
  {
    nome: 'o título de capitalização',
    itens: [
      {
        p: 'o que é esse título?',
        r: 'é um produto financeiro emitido por uma sociedade de capitalização. no Garanta Já ele cumpre um papel principal: ser a garantia da sua operação. ele é comprado no seu cartão, parcelado, e fica no seu nome.',
        home: true,
      },
      {
        p: 'por que a cobrança no cartão vem antes do dinheiro?',
        r: 'porque é a compra do título que garante a operação. sem a garantia, não existe crédito — então ela precisa acontecer primeiro. você vê o valor e as parcelas dessa compra na simulação, antes de confirmar.',
      },
      {
        p: 'e se a operação não for concluída?',
        r: 'se alguma etapa não for concluída e o dinheiro não for liberado, a compra do título é estornada no seu cartão. você é avisado sobre o status e os próximos passos pelos canais oficiais.',
      },
      {
        p: 'o título dá direito a sorteios?',
        r: 'sim. além de garantir a operação, o título de capitalização participa de sorteios. as regras, as datas e os valores dos prêmios são informados antes da contratação.',
      },
      {
        p: 'é venda casada?',
        r: 'o título não é um produto extra empurrado junto: ele é a garantia sem a qual a operação não existiria. é por causa dele que dá pra aprovar sem consultar score. a compra aparece de forma explícita na simulação, nunca escondida.',
      },
      {
        p: 'o que acontece com o título depois?',
        r: 'ele segue as regras próprias de resgate e prazo do produto, que serão publicadas aqui junto com a identificação da sociedade emissora.',
      },
    ],
  },
  {
    nome: 'depois de contratar',
    itens: [
      {
        p: 'como acompanho a operação?',
        r: 'cada etapa aparece no seu acompanhamento, com aviso dos próximos passos. se tiver qualquer dúvida no caminho, fale com a gente pelos canais da página de atendimento.',
      },
      {
        p: 'posso quitar antes?',
        r: 'as regras de quitação antecipada fazem parte das condições da operação e serão publicadas junto com as demais informações contratuais.',
      },
      {
        p: 'como falo com o atendimento?',
        r: 'pelos canais oficiais listados na página de atendimento. nunca pedimos senha do cartão, nem pix ou depósito para liberar dinheiro.',
      },
    ],
  },
];

export const faqHome = faq.flatMap((g) => g.itens).filter((i) => i.home);
