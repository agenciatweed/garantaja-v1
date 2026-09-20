# Garanta Já — site (v1)

Site do produto **Garanta Já**, da Capseg. Crédito pessoal com garantia em título
de capitalização comprado no cartão de crédito.

Construído com [Astro](https://astro.build). Saída estática, sem JS por padrão —
o público é mobile-first em Android de baixo custo com dados móveis.

## ⚠️ Esta build é uma PRÉVIA

Enquanto `PREVIEW_MODE` for `true` em `src/data/preview.ts`:

- o site inteiro envia `noindex, nofollow`;
- uma faixa fixa no rodapé avisa que os dados são fictícios.

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
| `src/styles/tokens.css` | tokens do DESIGN.md em CSS |
| `src/components/` | Nav, Rodapé, Botão, Chip, BlocoAzul, Foto, Par |
| `src/pages/` | as 8 páginas da arquitetura + 404 |
| `src/content/blog/` | artigos em markdown |
| `public/img/` | fotografia em WebP (os PNGs originais ficam fora do repo) |

## Páginas

home · como funciona · simulador · segurança · dúvidas · políticas ·
acompanhar operação · conteúdos/blog

## Pendências antes do lançamento

- valores reais, CET e as divulgações de custo obrigatórias
- registro SUSEP do título e identificação da sociedade emissora
- canal de atendimento oficial (hoje é o número pessoal de um sócio)
- domínio definitivo
- ligar a jornada de contratação em `irParaContratacao()` (`src/pages/simulador.astro`)
