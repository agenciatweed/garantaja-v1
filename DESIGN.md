---
name: Garanta Já
description: Crédito imediato, simples e possível — para quem precisa resolver agora.
colors:
  amarelo-garanta: "#FFC400"
  amarelo-suave: "#FFF3CC"
  azul-garanta: "#0E5AA7"
  azul-profundo: "#0A447E"
  azul-suave: "#EAF1F9"
  verde-garanta: "#00B36B"
  verde-acao: "#00874F"
  verde-acao-profundo: "#006C3F"
  verde-suave: "#E5F7EF"
  cinza-claro: "#F2F4F6"
  cinza-medio: "#585D69"
  cinza-escuro: "#1A222B"
  branco: "#FFFFFF"
  linha: "#DFE4EA"
  linha-forte: "#7A828F"
  erro: "#C0392B"
  amarelo-pressionado: "#E6B000"
  escuro-texto: "#B9BFC8"
  escuro-suave: "#8C94A0"
  escuro-linha: "#333B45"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 6.2vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.32
    letterSpacing: "-0.005em"
  body-lead:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  micro:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  body:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
  subhead:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.018em"
  numeral:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  valor:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.75rem, 6vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  stat:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "28px"
  pill: "999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.verde-acao}"
    textColor: "{colors.branco}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.verde-acao-profundo}"
    textColor: "{colors.branco}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.azul-garanta}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    height: "56px"
  button-secondary-hover:
    backgroundColor: "{colors.azul-suave}"
    textColor: "{colors.azul-profundo}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    height: "56px"
  button-on-blue:
    backgroundColor: "{colors.amarelo-garanta}"
    textColor: "{colors.cinza-escuro}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    height: "56px"
  card:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.cinza-escuro}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-quiet:
    backgroundColor: "{colors.cinza-claro}"
    textColor: "{colors.cinza-escuro}"
    rounded: "{rounded.lg}"
    padding: "32px"
  bloco-azul:
    backgroundColor: "{colors.azul-garanta}"
    textColor: "{colors.branco}"
    rounded: "{rounded.xl}"
    padding: "40px"
  chip-aprovado:
    backgroundColor: "{colors.verde-suave}"
    textColor: "{colors.verde-acao-profundo}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-destaque:
    backgroundColor: "{colors.amarelo-garanta}"
    textColor: "{colors.cinza-escuro}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  input:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.cinza-escuro}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
    height: "56px"
  input-focus:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.cinza-escuro}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
    height: "56px"
  nav:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.cinza-escuro}"
    typography: "{typography.title}"
    height: "76px"
    padding: "0 24px"
  faixa-topo:
    backgroundColor: "{colors.azul-garanta}"
    textColor: "{colors.branco}"
    typography: "{typography.label}"
    height: "40px"
    padding: "0 24px"
---

<!-- SEED: established with the user before implementation, from a binding brand manual (Identidade de Marca — Garanta Já) and a confirmed layout reference. The tokens above are real and normative — they come from the manual, not from a workshop guess. The Components section specifies primitives that do not exist in code yet. Re-run /impeccable document once there's an implementation, to capture the actual built system and generate the .impeccable/design.json sidecar. -->

# Design System: Garanta Já

## Overview

**Creative North Star: "O Bilhete de Alívio"**

A paper ticket handed across a counter — bright, plain, unmistakably real, and worth something the moment you hold it. It is not a bank's marble lobby and not a neobank's dark gradient. It is the yellow ticket that means *sorted*. The whole system behaves that way: large plain type, flat bright blocks, real photographs of real days, and a green button that reads as the end of the problem rather than the start of a process.

The visitor arrives in a hurry and half-expecting a scam. That governs every visual decision. Density is low and blocks are big, because someone scanning on a phone at night must find "what is it / how much / who can" in one thumb-flick. Contrast is high and flat, because the brand's own rule is that anything must be understood in one second. Nothing is glossy: "visual simples, sem sofisticação artificial" is a brand commitment, and polish here reads as a warning sign, not as quality. The layout is generous and unhurried even though the product is fast — space signals that nothing is being hidden.

The system is built from four jobs, one per colour, taken directly from the brand manual: **amarelo chama atenção, azul sustenta, verde aciona, cinzas organizam e explicam.** No colour does another colour's job. That single discipline is what keeps a loud palette from becoming a carnival, and it is the rule to check first when a screen feels wrong.

Confirmed rejections, stated by the brand: nothing sophisticated, nothing overly conceptual, no corporate imagery, no polished bank photography, no unreal scenarios, no "bank advertising" aesthetic, and no *juridiquês*. Garanta Já must look **próximo, não aspiracional**.

**Key Characteristics:**

- Flat, high-contrast blocks — colour does the structuring, not shadow
- Very large lowercase display type; never all-caps
- Real photography, never colour-washed, never clipped to abstraction
- One green CTA per screen, unmissable and unaccompanied
- Generously rounded corners echoing the symbol's rounded arrow tip
- Low density: big targets, short lines, lots of air

## Colors

A loud, flat, four-job palette: a high-energy yellow, a steady institutional blue, a resolution green, and a cool neutral ramp that carries all the reading.

### Primary

- **Amarelo Garanta Já** (`#FFC400`): the attention colour and the brand's signature. It carries the symbol, monetary values, highlighted words inside a headline, badges, and high-impact graphic shapes. It is the colour of *look here*. It is never a text colour on white and never a CTA — see the Named Rules.
- **Amarelo Suave** (`#FFF3CC`): a derived tint for highlight panels, annotation strips, and quiet emphasis where the full yellow would shout. Dark text on it is comfortable.

### Secondary

- **Azul Garanta Já** (`#0E5AA7`): the structural colour that holds everything together and supplies the minimum institutional trust a credit product needs. It carries filled section bands, information blocks, the top strip, the wordmark, and secondary headings. White text on it is safe (6.9:1). Without it the yellow reads improvised — the manual is explicit that the blue exists to stop that.
- **Azul Profundo** (`#0A447E`): derived; pressed and hover states on blue surfaces, and text that must sit on `azul-suave`.
- **Azul Suave** (`#EAF1F9`): derived tint for informational panels, table headers, and the secondary-button hover fill.

### Tertiary

- **Verde Garanta Já** (`#00B36B`): the brand's "deu certo" green — the feeling of relief and confirmation. It is correct as a *graphic* colour: check marks, icons, progress fills, status dots, illustration accents, and small solid shapes. It is **not** an accessible background for white text (2.7:1) and must not be used as one.
- **Verde Ação** (`#00874F`): derived from the brand green specifically to carry white text at 4.6:1. **This is the CTA fill colour.** Every primary action on the site is this green. It is the same hue family, darkened only as far as accessibility required.
- **Verde Ação Profundo** (`#006C3F`): derived; the pressed/hover state beneath `verde-acao`, and the text colour on `verde-suave`.
- **Verde Suave** (`#E5F7EF`): derived tint for approved/confirmed message panels and success chips.

### Neutral

- **Cinza Claro** (`#F2F4F6`): the page's alternate surface. Section backgrounds, card fills, the separation of one block from the next. This is how the system creates depth instead of using shadow.
- **Cinza Médio** (`#585D69`): secondary text, captions, support icons, complementary information, and input borders. 6.6:1 on white — safe for small text.
- **Cinza Escuro** (`#1A222B`): all long-form reading, body copy, documents, and explanatory values. 16.1:1 on white. This is the default text colour of the site.
- **Branco** (`#FFFFFF`): the primary surface.
- **Linha** (`#DFE4EA`): derived; decorative dividers and card borders.
- **Linha Forte** (`#7A828F`): derived; the boundary of interactive controls that must meet the 3:1 non-text contrast requirement (3.9:1 on white).

### Contrast reference

Check against this table before inventing a pairing. Values are WCAG 2.2 ratios.

| Foreground | On | Ratio | Verdict |
|---|---|---|---|
| `cinza-escuro` | `branco` | 16.1:1 | ✅ any size |
| `cinza-escuro` | `cinza-claro` | 14.6:1 | ✅ any size |
| `cinza-escuro` | `amarelo-garanta` | 10.1:1 | ✅ any size |
| `cinza-medio` | `branco` | 6.6:1 | ✅ any size |
| `cinza-medio` | `cinza-claro` | 6.0:1 | ✅ any size |
| `branco` | `azul-garanta` | 6.9:1 | ✅ any size |
| `branco` | `verde-acao` | 4.6:1 | ✅ any size |
| `amarelo-garanta` | `azul-garanta` | 4.3:1 | ⚠️ large/bold only (≥24px, or ≥18.66px bold) |
| `branco` | `verde-garanta` | 2.7:1 | ❌ never |
| `amarelo-garanta` | `branco` | 1.6:1 | ❌ never |
| `verde-garanta` | `branco` | 2.7:1 | ❌ never as text |

### Named Rules

**The Four Jobs Rule.** Amarelo chama atenção. Azul sustenta. Verde aciona. Cinzas organizam e explicam. A colour never does another colour's job — yellow never actions, green never structures, blue never shouts. When a screen feels chaotic, the cause is almost always a colour doing two jobs.

**The Yellow Is a Surface Rule.** `amarelo-garanta` is a surface, a shape, or a number — never body text on a light background, never a link, never a button fill. Yellow text is legal only on `azul-garanta`, at 24px or 18.66px bold and above. Everywhere else, put the yellow *behind* dark text.

**The One Green Rule.** There is exactly one `verde-acao` button in a viewport at a time. Green means "this is the action that ends your problem." A second green button on screen destroys the only signal the audience needs. Secondary actions are white-on-blue outlines; tertiary actions are plain text links.

**The Blue Floor Rule.** No screen is yellow-and-white alone. Every surface carries at least one substantial blue element — the top strip, a filled band, a `bloco-azul`, or the footer. Yellow without blue reads improvised, which for a credit product reads as unsafe.

## Typography

**Display Font:** Poppins (with `system-ui, -apple-system, Segoe UI, Roboto, sans-serif`)
**Body Font:** Poppins — the same family. There is no second typeface.
**Label/Mono Font:** none.

**Character:** One geometric sans doing all the work, separated only by weight. Poppins' circular bowls and even rhythm read as young, plain, and friendly at large sizes, and stay perfectly legible at small ones on a cheap phone screen — which is the whole argument for it. The brand manual is blunt about its role: *"Ela não decora, ela comunica."*

Load weights **400, 500, 600, 700, 800** only, with `latin` and `latin-ext` subsets (Portuguese needs ã õ ç é á í ó ú â ê ô à). Self-host or preload with `font-display: swap`; the audience is on mobile data and a font-blocking render is a bounce.

Weight assignment is fixed by the brand manual:

- **Bold / ExtraBold (700/800)** — chama atenção
- **Medium (500)** — organiza
- **Regular (400)** — explica

### Hierarchy

- **Display** (800, `clamp(2.25rem, 6.2vw, 4.25rem)`, 1.04, `-0.025em`): the hero statement, set as two or three stacked lines. One word or phrase inside it may be highlighted with a yellow shape behind it. Nowhere else on a page.
- **Headline** (700, `clamp(1.875rem, 4vw, 3rem)`, 1.12, `-0.018em`): section headings. One per section.
- **Title** (600, `clamp(1.125rem, 1.6vw, 1.375rem)`, 1.32): card headings, step names, FAQ questions, accordion triggers, and button labels.
- **Body Lead** (400, `clamp(1.0625rem, 1.5vw, 1.25rem)`, 1.55): the paragraph directly under a display or headline. Maximum 55ch.
- **Body** (400, `1.0625rem`, 1.65): all reading text, including the blog. Maximum **65ch** — on a phone this is naturally satisfied; on desktop it must be enforced with a measure cap, never left to the container width.
- **Label** (500, `0.875rem`, `0.06em` tracking): eyebrows above section headings, chips, table headers, form labels, and metadata. Set in **lowercase with a middot separator**, matching the brand's own deck style: `bloco 03 · benchmark e espaço competitivo`.
- **Stat** (800, `clamp(2.5rem, 5vw, 3.75rem)`, 1, `-0.03em`): monetary values and counters. Currency symbols and suffixes drop to 600 at roughly 0.5em so the digits carry the weight.

### Named Rules

**The No-Caps Rule.** The brand manual says *"uso sempre em caixa baixa."* Nothing on this site is set in all-caps — not eyebrows, not buttons, not chips, not table headers, not the footer. Sentence case everywhere; the eyebrow's lowercase-plus-tracking treatment is the system's substitute for the uppercase label convention. This is an invariant, not a preference. Audit test: search the stylesheet for `text-transform: uppercase`; there should be zero matches.

**The Short Sentence Rule.** "Frases curtas; verbos de ação; pouca explicação, muito benefício." A display line longer than seven words is wrong. A body paragraph longer than three sentences is wrong. If a sentence needs a comma to survive, rewrite it as two.

**The One Voice Per Block Rule.** Within any single block, one weight leads. A card with a 700 title, a 600 subtitle and a 500 tag is three competing voices; drop the middle one.

## Layout

**Container:** `1280px` maximum content width, centred, with `24px` side gutters on mobile and `40px` from 768px up. Full-bleed colour bands break out to the viewport edge while their content stays inside the container.

**Grid:** a 12-column grid with a `24px` gutter from 1024px up; 6 columns at 768–1023px; single column below 768px. Asymmetric splits are the norm — 7/5 and 8/4 rather than 6/6 — because a perfectly halved layout reads corporate.

**Vertical rhythm:** sections are separated by `clamp(64px, 9vw, 128px)` of padding, top and bottom. Inside a section: `24px` between a label and its headline, `16px` between a headline and its lead paragraph, `48px` before the content block begins. The spacing scale is the frontmatter's `spacing` tokens; nothing uses an off-scale value.

**Density:** deliberately low. Minimum tap target `48×48px`. Minimum `16px` between adjacent tap targets. Buttons are `56px` tall. This is an audience using a phone one-handed, often in a hurry.

**Breakpoints:** `sm 480px`, `md 768px`, `lg 1024px`, `xl 1280px`. The design is authored mobile-first; the desktop layout is the enhancement, not the source.

### Section archetypes

This system supplies a fixed vocabulary of section layouts, adapted from the confirmed layout reference. New surfaces compose from these rather than inventing new arrangements.

1. **Faixa de topo** — a thin `azul-garanta` strip above the navigation carrying the WhatsApp number and service hours. `40px` tall, label type, white text. Hidden below 768px.
2. **Navegação** — white, `76px` tall, sticky. Wordmark left, links centre-right, one `verde-acao` pill CTA far right. Collapses to wordmark + hamburger + CTA below 1024px; the CTA never collapses into the menu.
3. **Hero** — an asymmetric 7/5 split. Left: eyebrow, a two-or-three-line stacked display statement, a lead paragraph, two buttons (one green primary, one blue secondary), and a trust row beneath. Right: a **1:2 portrait photograph** (`girl*`, `worker*`, or `door*`) in a `rounded.xl` frame, with one small offset card overlapping its edge. Below 1024px the photograph moves above the text and switches to a 2:1 crop.
4. **Faixa de números** — a four-up band of `stat` values with `label` captions beneath, on `cinza-claro`. Counters may animate on scroll.
5. **Explicação em duas colunas** — a 6/6 or 5/7 split of a **1:1 photograph** against a text column. Alternates image side between consecutive instances.
6. **Grade de cards** — three or four `card`s in a row, each with media on top, a `title`, two lines of body, and a text link. Drops to two columns at 768px and one below 480px.
7. **Etapas numeradas** — a horizontal four-step row on desktop, vertical on mobile. Each step is a large yellow numeral, a `title`, and one line of body. A thin `linha` rule connects them on desktop.
8. **Bloco azul** — a full-width `azul-garanta` panel with a yellow heading and white body. The system's signature emphasis device; see Components.
9. **Galeria de situações** — an asymmetric mosaic mixing 2:1 and 1:1 photographs, each captioned with a `label` and a `title`. This is where the commissioned photography library does its heaviest work.
10. **Lista de benefícios** — a sticky **1:2 photograph** on one side and a scrolling `01`–`05` numbered list on the other. Numerals in `amarelo-garanta` at `stat` size.
11. **Faixa de conversão** — a closing full-bleed band on `azul-garanta` with a 2:1 photograph, a headline, and one yellow `button-on-blue`.
12. **Rodapé** — four columns on `cinza-escuro`: wordmark and one-line descriptor; site links; legal/policy links; contact and regulatory identifiers. The Capseg endorsement sits here and only here.

**The home page's recommended sequence** is 1 → 2 → 3 → 4 → 5 (o que é) → 7 (como funciona) → 9 (situações) → 8 (segurança/Capseg) → 10 (benefícios) → 11 → 12. Inner pages draw from the same vocabulary; they are not obliged to follow this order.

### Named Rules

**The Thumb-Flick Rule.** "O que é, quanto sai, quem pode" must all be answerable within the first two sections on a 375×667 viewport, without expanding anything. If the answer to "quanto sai" is below the fold of section two, the page has failed its first job.

**The One Road Rule.** Every section has exactly one forward action, and every forward action leads to the simulator or to contracting. No section offers a competing destination. The visitor is in a hurry; a choice is a delay.

**The Off-Scale Rule.** Every margin, padding, and gap comes from the `spacing` scale. A `37px` gap is a bug, not a decision.

## Elevation & Depth

**This system is flat by default and builds depth from tonal layering, not shadow.** White sits on `cinza-claro` sits on `azul-garanta`; sections read as distinct because their surfaces differ in tone, not because they float. This is a direct consequence of the brand's "nada sofisticado" commitment — heavy shadows, glass, and gradients are exactly the "estética publicidade de banco" the manual rejects.

Only two shadows exist in the whole system. Both are soft, neutral, and low-opacity; neither is coloured.

### Shadow Vocabulary

- **Sombra de repouso** (`box-shadow: 0 2px 8px rgba(26, 34, 43, 0.06)`): the resting lift of a card that overlaps a photograph or breaks out of its band. Not applied to cards sitting flat inside a section.
- **Sombra de resposta** (`box-shadow: 0 8px 24px rgba(26, 34, 43, 0.10)`): a card or button's hover response, paired with `transform: translateY(-2px)`. Also the sticky navigation's shadow once the page has scrolled past the hero.

### Named Rules

**The Two Shadows Rule.** These two values are the entire elevation vocabulary. A third shadow means the layout is being fixed with depth where it should be fixed with tone or space.

**The Flat-At-Rest Rule.** Surfaces are flat until the user touches them. Shadow is a response to state, never a decoration at rest.

**The No Gradient Rule.** No gradients on surfaces, buttons, or text. The one permitted exception is a neutral dark scrim over a photograph that carries text — see Shapes.

## Shapes

Generously rounded, never sharp. The form language comes straight from the symbol: a continuous, robust stroke whose terminal becomes an arrow, with a **rounded tip** that — in the manual's words — "mantém força, evita agressividade, deixa o símbolo mais acessível." The interface repeats that softness everywhere.

- **Pills** (`999px`) for anything that is pressed or is a token of state: buttons, chips, badges, tags, the nav CTA.
- **`rounded.lg` (20px)** for cards and media frames.
- **`rounded.xl` (28px)** for large panels, the hero photograph, and `bloco-azul`.
- **`rounded.md` (12px)** for inputs and small controls.
- **`rounded.sm` (8px)** for inline code, small tags, and thumbnails.
- **Full-bleed bands are square-edged**, because they meet the viewport edge. Rounding applies to objects, not to the page's own structure.

**Borders** are `1px solid linha` on cards and dividers, and `1px solid linha-forte` on interactive controls. Borders are structural, never decorative — a card either sits on a contrasting tone or carries a border, not both.

**Photography frames** are `rounded.xl` with `overflow: hidden` and no border. Where text must sit over a photograph, a neutral scrim (`linear-gradient(to top, rgba(26,34,43,0.72), rgba(26,34,43,0.10))`) carries it. The scrim is always neutral dark — never blue, never yellow.

**Iconography** is line-based, `1.75px` stroke, round caps and round joins, on a 24px grid, matching the symbol's stroke character. Filled icons only for status indicators.

### Named Rules

**The Rounded Terminal Rule.** Nothing in this interface has a sharp corner except a full-bleed band's meeting with the viewport. If a shape's radius is under 8px, it is wrong.

**The Photos Stay Real Rule.** Photographs are never duotoned, never brand-tinted, never colour-washed, and never reduced to a silhouette or an abstract crop. Brand colour arrives *next to* a photograph — in an adjacent block, a caption bar, or an overlapping card — never on top of the people in it. This is the operative defence of "pessoas reais" and "próximo, não aspiracional".

## Components

### Buttons

Confident and physical. Large, pill-shaped, with real weight — the audience is tapping with a thumb, sometimes in a hurry, sometimes in bad light.

- **Shape:** fully rounded pill (`999px`), `56px` tall, `16px 32px` padding, `title` type at weight 600. Never all-caps.
- **Primary:** `verde-acao` (`#00874F`) fill, white label. 4.6:1. This is the one action that matters on the screen. Full width below 480px.
- **Primary hover/focus:** fills to `verde-acao-profundo` (`#006C3F`), lifts `2px`, gains *sombra de resposta*. Focus-visible adds a `3px` `azul-garanta` ring at `2px` offset.
- **Secondary:** white fill, `azul-garanta` label, `1.5px azul-garanta` border. Hover fills `azul-suave` and deepens the label to `azul-profundo`.
- **On blue (`button-on-blue`):** `amarelo-garanta` fill with `cinza-escuro` label, used only inside `bloco-azul` and the closing conversion band, where a green button would disappear against the blue. 10.1:1.
- **Ghost/text:** `azul-garanta` label, no fill, `2px` underline appearing on hover. For tertiary navigation only — never for a commercial action.
- **Disabled:** `linha` fill, `cinza-medio` label, no shadow, `cursor: not-allowed`. Never a faded green — a dimmed CTA reads as broken.

### Cards / Containers

- **Corner style:** `rounded.lg` (20px).
- **Background:** `branco` on a `cinza-claro` section, or `cinza-claro` (`card-quiet`) on a white section. A card never sits on the same tone as its surroundings.
- **Shadow strategy:** flat at rest. *Sombra de repouso* only when the card overlaps a photograph or breaks out of its band; *sombra de resposta* on hover for cards that are links.
- **Border:** `1px solid linha`, omitted when the card is `card-quiet` on white.
- **Internal padding:** `32px` desktop, `24px` below 768px. Media inside a card is full-bleed to the card's edges and inherits its top corners.

### Chips

- **`chip-aprovado`:** `verde-suave` fill, `verde-acao-profundo` label, pill, `6px 14px`, `label` type. Carries a small filled check icon. Used for positive states — "aprovado", "liberado", "pago".
- **`chip-destaque`:** `amarelo-garanta` fill, `cinza-escuro` label. Used for step and state labels ("antes", "depois", "passo 1 de 3") and for a confirmed differentiator worth one beat of attention — "sem consulta ao spc". Never more than one visible in a card. **A chip carries only claims `PRODUCT.md` records as confirmed.** It is the easiest component in the system to smuggle an invented claim into, and a yellow pill makes any sentence look like a fact: no popularity claims, no approval-odds claims, no "aprovação garantida".
- Chips never carry an action. A chip that needs to be clickable is a button.

### Inputs / Fields

- **Style:** white fill, `1px solid linha-forte`, `rounded.md` (12px), `56px` tall, `14px 16px` padding, `body` type in `cinza-escuro`.
- **Label:** always visible above the field in `label` type, `cinza-medio`, lowercase. Placeholder text is never a substitute for a label.
- **Focus:** border becomes `2px azul-garanta` and a `3px` `azul-suave` ring appears outside it. The field never shifts position on focus.
- **Error:** border `2px #C0392B`, a plain-language message beneath in the same red at `0.875rem`, and a small warning icon. The message says what to do, not what went wrong — "digite um CPF com 11 números", not "CPF inválido". Colour is never the only signal.
- **Currency fields** display the value in `stat` type as the user types, so the amount is legible at a glance.

### Navigation

- **Style:** white, `76px` tall, sticky from the top. No border at rest; gains *sombra de resposta* once scrolled past the hero.
- **Contents:** `logo.svg` wordmark left (minimum `180px` wide — it is a 6.6:1 lockup and collapses illegibly below that; use `icon.svg` instead where less room exists), links in `title` type at weight 500 in `cinza-escuro`, and one `verde-acao` pill CTA at the far right.
- **Link states:** hover underlines in `amarelo-garanta` at `3px`, `4px` below the baseline. The current page carries the same underline permanently.
- **Mobile (below 1024px):** wordmark, hamburger, and the CTA pill remain in the bar; links move into a full-screen white overlay with `title`-size entries at `56px` row height. **The CTA never collapses into the menu.**

### Bloco Azul *(signature component)*

The system's emphasis device, taken directly from the brand's own strategy deck. A full-width `azul-garanta` panel, `rounded.xl` (28px), `40px` padding, carrying a heading in `amarelo-garanta` and body text in white.

It is how the site says *this part matters* without shouting in yellow or spending its one green button. Use it for the security and Capseg endorsement block, the key explanation of how the capitalisation-bond guarantee works, and the closing conversion band. Its heading must be at least `20px` bold — yellow on blue is 4.3:1 and only clears AA at large sizes. At most one per viewport; a page with three blue blocks has no emphasis at all.

### Mascote *(signature component)*

`mascot.png` — a 3D cartoon character, 788×1222, transparent background.

He is a **guide, never a customer**. He explains, points at, reacts to, and celebrates — in the simulator, in the "como funciona" steps, in empty and success states, in blog illustrations, and in error recovery. He is never presented as a testimonial, a user, or a result.

He must not share a composition with the commissioned photography: a cartoon standing beside real people undermines "pessoas reais" instantly. Where photography is nearby, give him his own block on `amarelo-suave`, `azul-suave`, or a flat `azul-garanta` panel; where the surrounding block carries no photography, he stands directly on the surface, since his PNG is already transparent and the separation is already there. Up to `500px` tall on desktop, `200px` on mobile. Never crop him mid-limb; never recolour him.

### Faixa de Topo

A `40px` `azul-garanta` strip above the navigation, `label` type in white, carrying the WhatsApp number and service hours. Hidden below 768px, where the information moves into the mobile menu. Its only job is to prove, above everything else on the page, that a human can be reached.

## Do's and Don'ts

### Do:

- **Do** give every colour exactly one job — amarelo chama atenção, azul sustenta, verde aciona, cinzas organizam e explicam.
- **Do** use `verde-acao` (`#00874F`) for every primary action, and exactly one of them per viewport.
- **Do** put yellow *behind* dark text (10.1:1) rather than using yellow as text.
- **Do** set everything in sentence case; the eyebrow's lowercase `label` with `0.06em` tracking replaces the uppercase convention entirely.
- **Do** cap body copy at 65ch and lead paragraphs at 55ch, with an explicit measure, not a container width.
- **Do** keep the photography untouched — no tint, no duotone, no colour wash. Brand colour goes beside it.
- **Do** match the photograph's native ratio to its slot: 2:1 (`woman`, `couple`, `shop`) for wide bands, 1:1 (`cell`, `man`, `mom`) for cards and two-column features, 1:2 (`girl`, `worker`, `door`) for tall hero columns and sticky rails.
- **Do** pick one variation per situation and keep it consistent across the whole site — four versions exist so you can choose, not so you can rotate.
- **Do** build depth from tone (`branco` → `cinza-claro` → `azul-garanta`), reserving the two shadows for overlap and hover.
- **Do** carry at least one substantial blue element on every screen.
- **Do** use `icon.svg` wherever the wordmark would fall below `180px` wide.
- **Do** keep tap targets at `48×48px` minimum with `16px` between them.
- **Do** leave unconfirmed numbers as visible placeholders — the amounts, rates, terms, SLA, eligibility rules, and regulatory identifiers listed in `PRODUCT.md` are not established.

### Don't:

- **Don't** set anything in all-caps. `text-transform: uppercase` should return zero matches in the stylesheet.
- **Don't** put white text on `verde-garanta` (`#00B36B`) — it is 2.7:1 and fails at every size. That green is for icons, checks, and graphic accents only.
- **Don't** use `amarelo-garanta` as text on white (1.6:1), as a link colour, or as a button fill.
- **Don't** set yellow on blue below 24px, or 18.66px bold.
- **Don't** place two green buttons in the same viewport, or dim a green button to show a disabled state.
- **Don't** add a third shadow, a gradient on a surface or button, glass/blur effects, or any glossy treatment — "visual simples, sem sofisticação artificial" is a brand commitment.
- **Don't** tint, duotone, silhouette, or abstractly crop the photography, and don't add a blue or yellow overlay to a photograph. Scrims are neutral dark only.
- **Don't** put the mascot in the same composition as the real-people photography, and don't present him as a customer or testimonial.
- **Don't** introduce a second typeface, or any Poppins weight outside 400/500/600/700/800.
- **Don't** give the Capseg mark presence beyond the footer and the security page — it is an endorsement footnote, never a co-brand, and never in the header.
- **Don't** invent testimonials, customer counts, approval rates, ratings, press mentions, or partner logos. The audience arrives expecting a scam; a fabricated proof point is the exact failure this brand exists to avoid.
- **Don't** use technical or legal phrasing without a plain-language sentence beside it. "Sem juridiquês" is a stated differentiation commitment.
- **Don't** let a section offer a destination other than the simulator or contracting.
