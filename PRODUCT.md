# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

**Astro** — confirmed by the client.

Greenfield: no scaffold exists yet. The only thing present is `assets/img/` (see *Evidence on Hand*).

Why it fits the confirmed constraints:

- The site must be crawlable and fast on cheap Android phones over mobile data. The audience arrives from search and paid social, often on a constrained connection. Astro ships static HTML with no JS by default.
- `/blog` is described in the confirmed architecture as "estrutura de SEO pronta desde o início". Content collections and metadata control are day-one capabilities, not additions.
- The simulator is interactive and must work without a page reload — it is an island; the rest of the site stays static.

A client-only SPA shell is not acceptable for this audience, whatever the framework.

## Users

**Primary user: an adult in Brazil who needs to settle a specific bill or expense in the next few days and does not have the money today.**

Their situation, confirmed by the brand strategy work:

- They are deciding **in a hurry and while suspicious**. They have almost certainly already encountered over-promising credit offers online, and several were scams.
- They are not looking to be educated about the financial system. They want the problem gone.
- They are mobile-first, frequently arriving from a search query or an ad, often at night or on a weekend.
- The dominant emotion the product is meant to produce is **relief** — "alívio, confiança imediata e sensação de resolução."

Recurring real-life situations the brand has committed to depicting (these are the confirmed use contexts, and the photography library was commissioned around them):

- organising bills at home;
- a couple talking through an unexpected expense;
- a small shopkeeper or self-employed worker covering a gap;
- a parent handling a household cost;
- paying a bill from a phone.

**The three jobs the site must do in the first few seconds**, in this order — this is a confirmed requirement, not a stylistic preference:

1. **Understand fast** — what it is, how much it costs, who qualifies.
2. **Trust** — who is behind it, and why this is not a scam.
3. **Act** — one path, no detours, through to contracting.

## Product Purpose

**Garanta Já** is a personal loan (crédito pessoal) that is **secured by a capitalisation bond (título de capitalização) purchased on the applicant's credit card**. The credit-card-funded bond is the guarantee; that mechanism is what lets the product serve people whose credit profile would normally be refused.

It exists to resolve a single, immediate, concrete problem. From the brand manual, verbatim and binding:

> "O Garanta Já não promete mudar a vida. Ele resolve um problema pontual, e isso já é muito."

> "Ele não educa sobre o sistema financeiro. Ele entrega solução no agora."

Success is a completed contract reached without the user leaving the flow, and without the site having made a promise the operation does not keep.

## Positioning

**Confirmed positioning statement (brand manual):**

> "Garanta Já é crédito imediato, simples e possível, para quem precisa resolver agora."

**Essence:** Crédito simples, rápido e possível.
**Central promise:** Dinheiro na hora, sem complicação.

**The mechanism a neighbouring product cannot truthfully copy:** the guarantee is a capitalisation bond bought on the applicant's own credit card. This is the reason approval is possible where it otherwise would not be, and it is also the part a hurried, suspicious reader will find strangest. It must be explained plainly and early, in everyday language, rather than hidden as a legal footnote — hiding it is the single fastest way to read as a scam.

### Company architecture: one ecosystem, two clear roles

- **Garanta Já** is the product and the voice of the site. Everything the visitor reads, feels, and clicks is Garanta Já.
- **Capseg** is the fintech behind it and appears as an **endorsement footnote only** — footer, the security/trust page, and legal copy. Capseg is not a co-brand, is not in the header, and does not share the hero.

### Confirmed competitive frame

Five benchmarks were analysed. None is a template to copy — "não existe benchmark único para copiar. O Garanta Já combina competências diferentes em uma experiência própria."

| Benchmark | Incorporate | Avoid |
|---|---|---|
| RecargaPay | product, UX and transparency | breadth that dilutes focus on one clear operation |
| Quita | real use situations, language, creators | emotional promise beyond what the operation delivers |
| Jeitto | proximity, relationship, reputation | a gap between humanised promise and real experience |
| Limite na Hora | search, SEO, commercial clarity | communication built on speed alone |
| SuperSim | acquisition architecture, content, distribution | volume pressure over quality of operations |

## Operating Context

### Confirmed site architecture

Eight surfaces, confirmed in the strategy deck (bloco 07):

| Surface | Purpose |
|---|---|
| **Página principal** | situação + benefício + elegibilidade + CTA |
| **Como funciona** | plain explanation of the steps and the structure of the operation |
| **Simulador** | conditions shown *before* the decision |
| **Segurança e confiança** | companies, validations, official channels, Capseg |
| **FAQ** | real doubts and real objections |
| **Políticas** | general company and governance policies |
| **Acompanhar operação** | support + status of the journey |
| **Conteúdos / blog** | SEO structure in place from day one |

### Binding integration requirement

> "O site deverá direcionar para a contratação **sem ruptura visual ou textual**."

The hand-off from the site into the contracting journey must not look or sound like a different product. Where the journey is implemented by the technology team, the site must carry its visual and verbal identity up to and across that boundary.

**The destination does not exist yet** (confirmed 2026-09-20). The contracting journey is still to be built by the technology team, so there is no URL for the site's calls to action to point at. Consequences for any build:

- Every CTA routes to the simulator, which is the deepest real surface the site currently owns.
- The simulator's own end state terminates in an obvious, clearly-marked placeholder — not a dead button, not a fake success screen, and not a form that silently discards what the visitor typed.
- The hand-off point is a single, named boundary in the code so that swapping in the real journey is one change, not a hunt.

### How the visitor arrives and moves

- Entry is mostly mobile, from search or paid social, landing either on the home page or on a blog article.
- The blog is an acquisition surface, not a brand magazine: it exists to catch search intent and route into the simulator.
- The simulator is the pivot of the whole site. Every surface should be able to reach it in one tap.
- "Acompanhar operação" serves people who have already contracted and are anxious — it is a retention and trust surface, and its tone matters as much as the home page's.

## Capabilities and Constraints

### Confirmed

- Personal credit, secured by a capitalisation bond purchased on the credit card.
- Contracting happens in an existing journey operated by the technology team; the site directs into it.
- Simulation of conditions is offered **before** the user commits to a decision.
- The product serves people who would typically be refused conventional credit.
- **Scale: this is microcredit — small amounts, on the order of up to roughly R$1,000** (confirmed by the client 2026-09-20). This is a category fact about what the product is for, not an advertised ceiling: the exact minimum and maximum remain undecided below. The scale must be communicated **implicitly** — through the everyday bills it covers — and the site must not print a figure as a commercial claim until the real numbers and their mandatory cost disclosures exist.
- **The simulator is a separate page**, built by the internal technology team, and is **not embedded in the home page** (confirmed by the client 2026-09-20). The home carries no calculator and no value input; it hands the amount question to `/simulador`.

- **Legal entity behind the product (confirmed 2026-09-20, real data):** `CAPSEG ASSESSORIA LTDA - ME`, trading as **CAPSEG**, CNPJ **63.413.423/0001-53**. The check digits validate. This is the endorsement that belongs in the footer and on the security page — never in the header.

- **No credit score or SPC/Serasa consultation** (confirmed by the client 2026-09-20). The capitalisation bond *is* the guarantee, so there is no default risk to price through a score — the mechanism replaces the credit check rather than waiving it as a favour. This is the product's sharpest differentiator and, for an audience that has been refused elsewhere, the strongest single sentence the site owns.

  **Say it precisely.** What is confirmed is the absence of **credit scoring**. It is *not* a claim that no checks occur: identity verification, fraud screening, and CPF-regularity checks are normal in this category and are unconfirmed either way. Approved phrasings are "sem consulta ao SPC" and "sem consulta ao score". Forbidden: "sem nenhuma análise", "sem burocracia nenhuma", "aprovação garantida", "todo mundo é aprovado" — none of those follow from the mechanism, and each converts a true differentiator into the kind of promise the brand exists to avoid.

#### Eligibility, as far as it is established (confirmed 2026-09-20)

Two requirements are structural — they come from how the product works, not from a policy someone chose:

1. **The applicant must have a credit card**, because the card is what buys the capitalisation bond that becomes the guarantee.
2. **The applicant must be able to purchase a capitalisation bond.**

Brazilian law sets the age floors: a credit card requires **18+** (or 16 when emancipated), and a capitalisation bond requires **16+**.

The practical consequence is that **having a credit card is the whole gate** — anyone holding one has already cleared the age requirement. That makes the honest answer to "quem pode" unusually short, and the site should use that shortness rather than padding it.

The client has confirmed that the 16-to-18 emancipated-minor edge case is **not the target audience**. Treat the audience as 18+; do not build copy, forms, or flows around emancipated minors.

### Explicitly undecided — must not be invented

**Confirmed by the client (2026-09-20): none of the commercial figures below are defined yet.** They must appear in any build as visible, obviously-provisional placeholders — e.g. `R$ [valor a confirmar]` — never as plausible-looking numbers. Fabricating them would violate both the brand's honesty commitment and Brazilian consumer-credit advertising rules:

- **Loan amounts** — the exact minimum and maximum. The product's *scale* is confirmed above (microcredit, order of ~R$1,000) and may be signalled implicitly; the *figures* are not confirmed and must not be printed as an offer. The brand manual's *"Até R$1.000 direto no bolso"* is a **tone-of-voice example of a headline**, not a commercial ceiling.
- **Interest rate, CET, IOF, and any fees.**
- **Term / number of instalments.**
- **Disbursement time** ("na hora" is positioning language; the actual SLA is unconfirmed).
- **Eligibility rules beyond the confirmed ones above.** Age, the credit-card requirement, and the absence of score/SPC consultation are all confirmed. Still unconfirmed: minimum income, required documents, whether a minimum available limit on the card is needed, whether identity or fraud checks apply, and geographic coverage. The site must still not claim guaranteed approval or the absence of *all* checks — see the precision note above.
- **Capitalisation bond details** — issuer, value, redemption terms, draw participation.
- **Required regulatory disclosures** — SUSEP process numbers, CNPJ, correspondente bancário status, and the legally mandated cost disclosure that a Brazilian credit offer must carry.
- **The contracting journey's destination URL** — the journey does not exist yet (see *Operating Context*).
- **Official support channels** — no WhatsApp number, telephone number, service hours, or support e-mail address has been established.
- **The production domain**, which canonical URLs, Open Graph tags, and the sitemap all need.

Every one of these is load-bearing for the site's first job ("understand fast: what it is, how much it costs, who qualifies"). The home page cannot be considered finished while they are placeholders.

### Synthetic preview data (client-authorised 2026-09-20)

The site will be shown to the client as a **semi-complete preview** before the real figures exist. On the client's explicit instruction, the undecided fields above therefore render as **realistic stand-ins instead of bracketed placeholders**, so the preview reads as a finished page rather than a wireframe. This is a scoped, deliberate departure from the visible-placeholder rule — it does not make any value below true.

| Field | Preview value | Nature |
|---|---|---|
| Example credit amount | `R$ 853,68` | Invented. Deliberately odd so it reads as one simulation result, never as an advertised ceiling. |
| CET monthly | `1,6% a.m.` | Invented. |
| CET yearly | `20,98% a.a.` | Derived, not invented: (1,016)¹² − 1 = 20,9830%. Recompute whenever the monthly rate changes. |
| Domain | `garantajacred.com.br` | Provisional. Ownership of `garantaja.com.br` is unverified; the real domain may differ. |
| E-mail | `contato@garantajacred.com.br` | Provisional, follows the domain. |
| WhatsApp | `(51) 99110-0337` → `wa.me/5551991100337` | **A real personal number belonging to one of the owners**, standing in until an official line exists. |

**Build requirements that make this safe and reversible:**

1. Every value above lives in **one file** (e.g. `src/data/preview.ts`), never inlined across templates. Replacing them is one edit.
2. Each entry carries an inline comment naming it as preview data and what it is waiting on.
3. While any of them is still synthetic, the site ships `<meta name="robots" content="noindex, nofollow">`. A preview that gets indexed becomes a published credit offer with invented terms.
4. The real figures, once supplied, arrive **together with their mandatory cost disclosures** — a Brazilian credit offer cannot legally show an amount and a rate without them.

One open point the client has already acknowledged:

- Publishing an owner's **personal** number on a public page exposes it permanently to scrapers. Fine for a link-shared preview; worth replacing before launch.

### Terminology

- Use **"Garanta Já"** — never abbreviated, never "GJ".
- Use **"título de capitalização"** when naming the guarantee, then immediately explain it in everyday words. Never leave the term unexplained.
- Say **"crédito"**, not "empréstimo pessoal consignado" or other technical framings.
- No *juridiquês*. If a legal term must appear, a plain-language sentence appears next to it.

## Brand Commitments

A complete brand manual exists (*Identidade de Marca — Garanta Já*, Paola Fernandes) and is binding.

### Personality

If Garanta Já were a person: **rápido, direto, popular, confiante, objetivo, jovem, positivo.**

> "Nada técnico. Nada institucional. Nada distante. Ele fala com quem precisa resolver, não com quem quer entender processos."

### Archetypes

- **Primary — Herói.** Age rápido; enfrenta a urgência; tira a pessoa do aperto; entrega solução concreta. "O Garanta Já não promete conforto, promete resolução."
- **Secondary — Amigo (Everyman).** Humanises, brings the product closer, takes the weight off, speaks "de igual pra igual." "O Garanta Já resolve, mas sem julgar."
- The combination is what prevents an authoritarian tone. Neither archetype alone is correct.

Four verbs define it: **Age. Facilita. Aprova. Entrega.**

### Voice

**How it speaks:** simple; short sentences; action verbs; everyday language; little explanation, a lot of benefit.

**Confirmed example headlines** (these are the brand's own, approved samples — use them as the calibration reference for any new copy):

- "Precisou? Resolve agora."
- "Até R$1.000 direto no bolso."
- "Sem enrolação."
- "Garantiu, caiu."
- "Dinheiro rápido, do jeito certo."
- "Você garante agora. O dinheiro vem."

**Differentiation commitments:**

- Linguagem direta, sem juridiquês.
- Visual simples, sem sofisticação artificial.
- Foco total no benefício imediato.
- **Comunicação honesta, sem promessas milagrosas.**

### Typography commitment

**Poppins only**, varying weights alone. "Ela não decora, ela comunica."
**Uso sempre em caixa baixa** — the brand forbids all-caps setting. Bold/ExtraBold chama atenção; Medium organiza; Regular explica.

### Colour commitment

Amarelo `#FFC400` · Azul `#0E5AA7` · Verde `#00B36B`, with support greys `#F2F4F6`, `#585D69`, `#1A222B`. Each colour has an assigned job — see `DESIGN.md`, which is the authority for all visual application.

> Note: the printed manual lists `#6B7280` for both the medium and the dark grey, which is an error in the document. The client has confirmed `#585D69` (medium) and `#1A222B` (dark). The client's values are authoritative.

### Symbol

A proprietary **G** with a continuous, robust stroke whose terminal becomes an arrow. "A seta não é adicionada: ela é o próprio final do gesto." It communicates avanço, resolução, rapidez, fluxo. The rounded tip keeps force while avoiding aggressiveness and making the symbol more accessible.

### Photographic direction

**Show:** real people; positive expressions; everyday situations; simple environments.
**Avoid:** corporate imagery; sophisticated bank photography; unreal scenarios; "bank advertising" aesthetics.

> "O Garanta Já precisa parecer **próximo, não aspiracional**."

## Evidence on Hand

### Available assets — `site/assets/img/`

All paths below are real files present in the repository and are the approved asset library for this project. **Do not source stock photography; do not generate new imagery. Use these.**

**Identity**

| File | What it is | Notes |
|---|---|---|
| `logo.svg` | Full wordmark "Garanta Já" | `viewBox 0 0 1080 164.47` — very wide (≈6.6:1). Blue `#115BA7` wordmark with yellow `#FFC50D` accent. Use in the header and footer. Give it a generous minimum width; it collapses badly if scaled small. |
| `icon.svg` | Squircle app icon — the proprietary G | `viewBox 0 0 1080 1080`, 1:1. Blue rounded square with the yellow G-arrow. Use as favicon, avatar, compact/mobile header mark, and as a small graphic device. |
| `mascot.png` | 3D cartoon mascot | 788×1222, transparent background. A smiling young man in a yellow Garanta Já tee and blue jeans, holding a blue credit card, thumbs up. |

Source files for identity also exist one level up at `../logo garanta ja.ai`, `../icone garanta ja.ai`, `../mascote.psd` — reference only; build against the SVG/PNG.

**Photography library** — nine commissioned situations, four variations each, all shot to the brand's photographic direction. Pick one variation per situation and stay consistent across the site.

| Situation | Files | Pixels | Ratio | Natural placement |
|---|---|---|---|---|
| Woman organising bills at home | `woman1–4.png` | 1536×768 | 2:1 | wide band, section opener |
| Couple discussing expenses | `couple1–4.png` | 1536×768 | 2:1 | wide band, section opener |
| Small shopkeeper at the counter | `shop1–4.png` | 1536×768 | 2:1 | wide band, section opener |
| Woman looking at her phone in the living room | `cell1–4.png` | 1024×1024 | 1:1 | card media, two-column feature |
| Man paying a bill on his phone | `man1–4.png` | 1024×1024 | 1:1 | card media, two-column feature |
| Mother with child, everyday scene | `mom1–4.png` | 1024×1024 | 1:1 | card media, two-column feature |
| Person standing, using a phone at home | `girl1–4.png` | 768×1536 | 1:2 | tall hero column, sticky rail, mobile hero |
| Self-employed worker, simple setting | `worker1–4.png` | 768×1536 | 1:2 | tall hero column, sticky rail, mobile hero |
| Woman leaving home, relieved | `door1–4.png` | 768×1536 | 1:2 | tall hero column, closing/CTA band |

**Second batch, generated 2026-09-20** to fill the gaps the diptych composition exposed. The first nine situations are all positive faces; the *Antes e Depois* structure needs a tension side, and the brand forbids solving that with distressed expressions — so the tension side is carried by **objects, not people**.

| Situation | Files | Pixels | Ratio | Role |
|---|---|---|---|---|
| Bills and a payment slip on a kitchen table | `bill1–4.png` | 1536×768 | 2:1 | "antes", wide band |
| Bills, calculator and pen, vertical | `table1–4.png` | 768×1536 | 1:2 | "antes", tall column |
| Hands holding a plain credit card and a phone | `card1–4.png` | 1024×1024 | 1:1 | the mechanism — the card is the gate |
| Phone showing a single green checkmark | `done1–4.png` | 1024×1024 | 1:1 | "depois", detail |
| Man calmly reading a printed document | `check1–4.png` | 1536×768 | 2:1 | security / verification page |
| Woman relaxed in a doorway, wide | `relief1–4.png` | 1536×768 | 2:1 | "depois", wide band |

**Selected variants** (one per situation; the build reads these from a single data file, so swapping is one edit):
`door2` · `bill3` · `table2` · `card2` · `done1` · `check4` · `relief2`

**Known tonal difference — use it, do not fight it.** The second batch is noticeably darker, warmer and more cinematic than the first nine. Mixed at random the page would read as two different shoots. The resolution is to let the grade carry the structure: **darker frames on the "antes" side, the brighter original library on the "depois" side.** The tonal break then becomes the diptych's signal and is legible before a single word is read. Do not place a second-batch object frame and a first-batch portrait side by side in the same half of a pair.

`DESIGN.md` governs how these are framed, tinted, and paired — including the rule that they are never colour-washed.

### Reference documents

- `../design-template.md` — the layout reference. It is a scraped marketing site for an unrelated painting company; **only its section sequence and layout dispositions are being borrowed.** None of its copy, colour, type, or subject matter carries over.
- The brand manual PDF (*Identidade de Marca — Garanta Já*) is the source for every brand commitment recorded above.
- Strategy deck slides covering the benchmark analysis (bloco 03) and the site architecture (bloco 07), transcribed into this file.

### Absences that must not be filled by invention

- **No testimonials, reviews, ratings, or named customers exist.** Do not write any. The testimonial slot in the layout reference must either be left as a clearly marked placeholder or replaced with something factual.
- **No usage statistics, customer counts, approval rates, or disbursement volumes exist.** The layout reference has an animated counter band and a "Trusted by 25K+ customers" device; both must stay empty placeholders until real numbers are supplied.
- **No press coverage, awards, or partner logos are confirmed** beyond Capseg itself.
- **Partial regulatory identifiers.** The company name and CNPJ are confirmed real (see *Capabilities and Constraints*). Still missing and **not to be fabricated**: the SUSEP process number for the capitalisation bond, the bond issuer's identity, and any correspondente bancário registration. These are the identifiers a suspicious visitor can actually verify, so leaving them absent costs more here than on most sites.
- **No *official* contact channel exists yet.** The preview uses an owner's personal WhatsApp and a provisional domain e-mail (see *Synthetic preview data*). The audience's second job is *trust*, and being able to reach a human is the cheapest proof a credit site can offer — so the stand-ins serve the preview, but launch needs a real, staffed channel and published service hours.
- **No production domain is confirmed.** `garantajacred.com.br` is a provisional stand-in; canonical URLs, `og:url`, and the sitemap all depend on the final answer.

Given the audience explicitly arrives expecting to be scammed, a fabricated proof point is not a placeholder problem — it is the failure mode the entire brand is built to avoid.

## Product Principles

1. **Resolve, don't educate.** Every surface is measured by whether it moves someone closer to a resolved bill, not by how much they understood about capitalisation bonds. Explain the mechanism because trust requires it, never because finance is interesting.

2. **Honest beats impressive.** "Comunicação honesta, sem promessas milagrosas." Where a number, proof point, or guarantee does not exist, the surface says less rather than more. An unfilled placeholder is a better outcome than an invented claim.

3. **One path, no detours.** The visitor is in a hurry. Every surface funnels to the simulator and then to contracting, with no competing calls to action and no visual or verbal rupture at the hand-off.

4. **Close, not aspirational.** Herói *and* Amigo. It solves without judging, speaks "de igual pra igual", and never adopts the polished distance of bank marketing — in words or in pictures.

5. **Legible in one second.** Short sentences, action verbs, high contrast, a symbol read instantly. "Tudo precisa ser entendido rapidamente."

## Accessibility & Inclusion

- The audience is **mobile-first on low-cost Android devices over mobile data**, frequently in poor light and often in a hurry. Performance and legibility are accessibility requirements here, not optimisations.
- Target **WCAG 2.2 AA**. Financial services in Brazil are also subject to the *Lei Brasileira de Inclusão* (Lei 13.146/2015) and eMAG expectations; AA is the working floor.
- The brand palette needs care: the brand yellow `#FFC400` and the brand green `#00B36B` both fail AA as text colours on white. `DESIGN.md` records the accessible application rules and derived variants. This constraint is binding and is not a matter of taste.
- Literacy and financial-literacy levels vary widely. Plain language is an inclusion requirement as much as a brand voice one — which is why "sem juridiquês" appears in the brand's own differentiation list.
- Forms and the simulator must be operable by keyboard, announce errors in plain language, and never rely on colour alone to signal an approved/refused state.
