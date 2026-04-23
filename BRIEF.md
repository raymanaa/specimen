# Specimen — Literature-review agent for researchers

>  Upload a corpus of papers; get a citation graph, synthesis brief, and drafted literature review.

## M0 — Design direction (LOCKED)

### Reference vibe
**Scientific journal + JSTOR + arXiv** — academic press aesthetic. Deliberately double-column, serif-body, formula-friendly. No other portfolio project has used an academic publication as its reference; this is Specimen's lane.

### Typography
- **Display + body**: EB Garamond (oldstyle serif, variable weight). Specimen is the first portfolio project to set *body text* in serif.
- **Secondary**: Spectral — used for abstracts and captions where smaller sizes benefit from higher ink density.
- **Mono**: Fira Code — ligatures for formulas, citation keys, DOIs.

### Layout
- **Two-column academic canvas** on reader routes. Landing hero is wide enough to hint at the double-column discipline.
- Wide right-margin drawer for annotations / evidence quotes / "skip to section" controls.
- Running header with section number, like a published paper.
- Distinct from every prior project's single-column editorial or dashboard shell.

### Palette — "Periodical"
- `--paper`: `#f6f4ee` (warm linen)
- `--paper-2`: `#ece8db` (slightly heavier inset)
- `--card`: `#fdfbf5`
- `--ink`: `#0a2540` (deep navy — distinct from Dossier/Loupe near-black)
- `--ink-2`: `#3a4d64`
- `--ink-3`: `#6b7a8e`
- `--line`: `#d9d2c0`
- `--accent`: `#a85432` (rust / editor's red pencil)
- `--olive`: `#5b6f47` (accepted / confirmed findings)
- `--gold`: `#b88a3f` (highlighted / noteworthy)

Single-color discipline: navy is the type color; rust is the citation + emphasis color; olive and gold appear only inside structured callouts.

## Audience
- PhD candidates writing their first literature review (primary)
- R&D scientists doing rapid competitive literature sweeps
- Pharma / biotech teams doing regulatory prior-art searches
- Policy researchers

## Real problem
A first-year PhD candidate spends 3–6 months drafting a literature review. Reading 100–300 papers, building a mental citation graph, clustering findings into themes, identifying gaps, drafting comparative tables — it's the classic "hard before Chapter 1" problem. Existing AI tools (Elicit, Consensus, ResearchRabbit) are strong on discovery but thin on synthesis. Specimen is for the synthesis half: you already have the corpus — now write the review.

## What Specimen is
- Drop a BibTeX, a folder of PDFs, or paste DOIs → Specimen builds a citation graph.
- Themes are clustered automatically; gap candidates surface where a theme is under-cited.
- Inline synthesis drafts for each theme, with every sentence pinned to a specific paper's section.
- A literature-review draft in proper academic prose; you redline.
- Citation graph as React Flow: paper nodes, citation edges, theme clusters tinted.

## Stack
- Next 16 static export + Cloudflare Workers
- `@xyflow/react` for the citation graph
- EB Garamond + Spectral + Fira Code via next/font
- framer-motion for draft-materialization animation
- lucide-react for icons

## Landing page requirements (rule 2)
1. **Animated hero diagram**: A corpus of papers condenses into a citation graph over ~12s: paper rectangles land one-by-one (top-down), citation edges draw between them in pulses, three theme clusters tint themselves (olive / gold / rust), a gap marker materializes where no paper cites another.
2. **Inline product component**: The real `CitationGraph` (React Flow) with 3 sample corpora pickable via tabs. Clicking a theme tints its subgraph.

## Milestones (compact)
- M0 — Design direction (this doc)
- M1 — Scaffold + landing + deploy
- M2 — Reviews index + reader (academic two-column layout + citation graph)
- M3 — Polish + /method + /security + README
