# Garanta Já — site (v2, modelo da agência)

Site do produto **Garanta Já**, da Capseg. Crédito pessoal com garantia em título
de capitalização comprado no cartão de crédito.

Construído com [Astro](https://astro.build). Saída estática, sem JS por padrão —
o público é mobile-first em Android de baixo custo com dados móveis.

## ⚠️ Esta build é uma PRÉVIA

Enquanto `PREVIEW_MODE` for `true` em `src/data/preview.ts`:

- o site inteiro envia `noindex, nofollow`;

**Valores, taxas, domínio e telefone são de demonstração.** Todos vivem em um
único arquivo — `src/data/preview.ts` — e trocá-los por dados reais é uma edição
só. O que é real e confirmado: a razão social e o CNPJ da Capseg.

Antes de publicar de verdade, ver a lista em `PRODUCT.md` › *Synthetic preview data*.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Estrutura

| Caminho | O que é |
|---|---|
| `PRODUCT.md` | verdade de produto: público, mecanismo, o que não pode ser inventado |
| `DESIGN.md` | sistema visual; os tokens no frontmatter são normativos |
| `src/data/preview.ts` | **todos** os dados provisórios, em um lugar só |
| `src/data/faq.ts` | perguntas frequentes (home, /duvidas e schema FAQ) |
| `src/styles/tokens.css` | tokens do DESIGN.md em CSS |
| `src/components/` | Nav, Rodape, Botao, Acordeao, ChamadaSimular, Bandeiras, BlocoAtendimento, Participantes, BarraCta |
| `src/pages/` | páginas do briefing + 404 |
| `src/content/blog/` | artigos em markdown |
| `public/img/` | fotografia em WebP (os PNGs originais ficam fora do repo) |

## Páginas

home · como funciona · simulador · dúvidas · segurança · atendimento ·
termos · privacidade · acompanhar operação · conteúdos/blog

(`/faq` → `/duvidas` e `/politicas` → `/termos` redirecionam.)

## Pendências antes do lançamento

- valores reais, CET e as divulgações de custo obrigatórias
- registro SUSEP do título e identificação da sociedade emissora
- canal de atendimento oficial (WhatsApp, horário e SLA)
- aprovação jurídica de CAPSEG / Aplicap / UY3 como participantes, e seus logos
- regras dos sorteios do título
- bandeiras homologadas (logos)
- tracking (GTM, GA4, Google Ads, Meta Pixel), consentimento de cookies e UTMs até o simulador
- textos de termos de uso e política de privacidade
- domínio definitivo
- ligar a jornada de contratação em `irParaContratacao()` (`src/pages/simulador.astro`)
