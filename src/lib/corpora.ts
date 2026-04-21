export type Paper = {
  id: string;
  citeKey: string;
  authors: string;
  year: number;
  title: string;
  venue: string;
  doi?: string;
  abstract: string;
  theme: string; // theme id
  cites: string[]; // ids of papers this one cites
  x: number;
  y: number;
};

export type Theme = {
  id: string;
  label: string;
  tone: "rust" | "olive" | "gold" | "navy";
  summary: string;
  papers: string[];
};

export type Gap = {
  id: string;
  headline: string;
  note: string;
};

export type SynthesisSection = {
  heading: string;
  body: string; // may contain {{citeKey}} markers
};

export type Review = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    institution: string;
    avatar: string;
  };
  updatedAt: string;
  paperCount: number;
  corpusSource: string;
  themes: Theme[];
  papers: Paper[];
  gaps: Gap[];
  abstract: string;
  synthesis: SynthesisSection[];
};

export const REVIEWS: Review[] = [
  {
    id: "rev-attention",
    slug: "rev-attention",
    title: "Attention mechanisms in neural sequence models",
    subtitle: "A survey of architectural innovations, 2014 – 2024",
    author: {
      name: "Maya Alves",
      role: "PhD Candidate · ML Systems",
      institution: "UC Berkeley EECS",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    updatedAt: "2026-04-19",
    paperCount: 12,
    corpusSource: "Semantic Scholar · 3 queries · 142 deduped",
    abstract:
      "Attention mechanisms reshaped sequence modelling between 2014 and 2024, progressing from additive soft attention to the scaled dot-product transformer and its sparse / linear descendants. This review clusters 12 canonical works into three strands (foundations, efficiency, and interpretability), identifies one under-cited bridge between the efficiency and interpretability literatures, and notes the shift in benchmarking conventions that clouds cross-strand comparison.",
    themes: [
      { id: "foundations", label: "Foundations", tone: "navy", summary: "Seminal architectures that established attention as a first-class operator.", papers: ["p1", "p2", "p3"] },
      { id: "efficiency", label: "Efficiency", tone: "olive", summary: "Sub-quadratic and hardware-aware variants.", papers: ["p4", "p5", "p6", "p7"] },
      { id: "interp", label: "Interpretability", tone: "rust", summary: "Analytical accounts of what attention heads learn.", papers: ["p8", "p9", "p10"] },
      { id: "bridge", label: "Gap-bridging", tone: "gold", summary: "Rare work linking the efficiency and interpretability strands.", papers: ["p11", "p12"] },
    ],
    papers: [
      { id: "p1", citeKey: "bahdanau2014", authors: "Bahdanau, Cho, Bengio", year: 2014, title: "Neural machine translation by jointly learning to align and translate", venue: "ICLR", doi: "1409.0473", abstract: "Additive attention as soft alignment in encoder-decoder RNNs.", theme: "foundations", cites: [], x: 100, y: 60 },
      { id: "p2", citeKey: "vaswani2017", authors: "Vaswani et al.", year: 2017, title: "Attention is all you need", venue: "NeurIPS", doi: "1706.03762", abstract: "Pure-attention architecture, self-attention + multi-head.", theme: "foundations", cites: ["p1"], x: 300, y: 40 },
      { id: "p3", citeKey: "dai2019", authors: "Dai et al.", year: 2019, title: "Transformer-XL: long-range language modeling", venue: "ACL", doi: "1901.02860", abstract: "Segment-level recurrence, relative positional encoding.", theme: "foundations", cites: ["p2"], x: 500, y: 80 },
      { id: "p4", citeKey: "child2019", authors: "Child et al.", year: 2019, title: "Generating long sequences with sparse transformers", venue: "arXiv", doi: "1904.10509", abstract: "Sparse attention reduces cost to O(n sqrt n).", theme: "efficiency", cites: ["p2"], x: 330, y: 220 },
      { id: "p5", citeKey: "beltagy2020", authors: "Beltagy, Peters, Cohan", year: 2020, title: "Longformer: the long-document transformer", venue: "arXiv", doi: "2004.05150", abstract: "Sliding-window + global tokens, O(n) local attention.", theme: "efficiency", cites: ["p2", "p4"], x: 170, y: 280 },
      { id: "p6", citeKey: "wang2020", authors: "Wang et al.", year: 2020, title: "Linformer: self-attention with linear complexity", venue: "arXiv", doi: "2006.04768", abstract: "Low-rank projection of the attention matrix.", theme: "efficiency", cites: ["p2"], x: 500, y: 260 },
      { id: "p7", citeKey: "choromanski2020", authors: "Choromanski et al.", year: 2020, title: "Rethinking attention with performers", venue: "ICLR", doi: "2009.14794", abstract: "Kernel approximation → linear attention.", theme: "efficiency", cites: ["p2", "p6"], x: 700, y: 220 },
      { id: "p8", citeKey: "clark2019", authors: "Clark et al.", year: 2019, title: "What does BERT look at? An analysis of attention", venue: "BlackboxNLP", doi: "1906.04341", abstract: "Probing individual heads; dependency-like attention.", theme: "interp", cites: ["p2"], x: 880, y: 70 },
      { id: "p9", citeKey: "voita2019", authors: "Voita et al.", year: 2019, title: "Analyzing multi-head self-attention: specialized heads do the heavy lifting", venue: "ACL", doi: "1905.09418", abstract: "Most heads prunable without loss; few specialists.", theme: "interp", cites: ["p2", "p8"], x: 1050, y: 100 },
      { id: "p10", citeKey: "jain2019", authors: "Jain, Wallace", year: 2019, title: "Attention is not explanation", venue: "NAACL", doi: "1902.10186", abstract: "Adversarial attention maps give same output.", theme: "interp", cites: ["p8"], x: 1050, y: 260 },
      { id: "p11", citeKey: "elhage2021", authors: "Elhage et al.", year: 2021, title: "A mathematical framework for transformer circuits", venue: "Anthropic", doi: "anthropic.com/circuits", abstract: "Algebraic decomposition of attention circuits.", theme: "bridge", cites: ["p2", "p9"], x: 880, y: 400 },
      { id: "p12", citeKey: "olsson2022", authors: "Olsson et al.", year: 2022, title: "In-context learning and induction heads", venue: "Anthropic", doi: "arxiv.org/2209.11895", abstract: "Induction heads as mechanistic basis for ICL.", theme: "bridge", cites: ["p9", "p11"], x: 1060, y: 430 },
    ],
    gaps: [
      {
        id: "g1",
        headline: "Efficiency × Interpretability under-cited",
        note: "Only two papers (Elhage 2021, Olsson 2022) bridge the efficiency and interpretability strands. The induction-head mechanism has not been analyzed in any sparse-attention variant to date. High-leverage gap for a PhD proposal.",
      },
      {
        id: "g2",
        headline: "Benchmark drift",
        note: "Foundations-era papers benchmark on WMT-14; efficiency papers prefer PG-19 and arXiv-summarization; interpretability papers use SQuAD probes. No single paper reports on all three — comparative claims are structurally weak.",
      },
    ],
    synthesis: [
      {
        heading: "Foundations established attention as a first-class operator",
        body: "Bahdanau et al. introduced additive attention as a soft alignment mechanism for encoder-decoder NMT {{bahdanau2014}}, directly motivating the fully-attentional Transformer {{vaswani2017}}. Segment-level recurrence and relative position encodings extended the base architecture to longer sequences {{dai2019}}, closing the foundations strand by 2019.",
      },
      {
        heading: "Efficiency work produced sub-quadratic variants",
        body: "By 2019 the quadratic cost of self-attention had become the dominant constraint. Sparse attention reduced cost to O(n√n) via structured patterns {{child2019}}; local-plus-global windowing produced Longformer {{beltagy2020}}; low-rank projection and kernel approximation yielded linear-time variants {{wang2020}} {{choromanski2020}}.",
      },
      {
        heading: "Interpretability remained cautious",
        body: "Empirical probes found dependency-like structure in individual heads {{clark2019}} and a sparse set of specialist heads carrying most of the function {{voita2019}}. A contemporaneous adversarial result showed attention is a weak explanatory signal in the sense of Lipshitz-stable maps {{jain2019}}.",
      },
      {
        heading: "Bridging work is rare and recent",
        body: "Only two works meaningfully bridge efficiency and interpretability: a circuit-level algebraic decomposition {{elhage2021}} and the identification of induction heads as a mechanistic basis for in-context learning {{olsson2022}}. The latter has not yet been reproduced on any sparse variant.",
      },
    ],
  },
  {
    id: "rev-alzheimer",
    slug: "rev-alzheimer",
    title: "Anti-amyloid therapies in Alzheimer's disease",
    subtitle: "Clinical trial outcomes, 2016 – 2024",
    author: {
      name: "Priya Patel",
      role: "Postdoc · Neurodegeneration",
      institution: "Cambridge Neuro",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    updatedAt: "2026-04-12",
    paperCount: 9,
    corpusSource: "PubMed · MeSH · 87 deduped",
    abstract:
      "Nine Phase-II and Phase-III trials of anti-amyloid monoclonal antibodies (2016 – 2024) are clustered by target epitope and endpoint family. Two positive trials (lecanemab, donanemab) share a common plaque-reduction mechanism but diverge on cognitive endpoint strength. The review flags a gap in head-to-head comparison and a consistent under-powering for ApoE4 carriers.",
    themes: [
      { id: "e-central", label: "Central-domain antibodies", tone: "navy", summary: "Target central Aβ peptide epitope.", papers: ["p1", "p2", "p3"] },
      { id: "e-nterm", label: "N-terminal antibodies", tone: "olive", summary: "Target the N-terminal fragment.", papers: ["p4", "p5"] },
      { id: "e-plaque", label: "Plaque-selective antibodies", tone: "rust", summary: "Selective for aggregated plaque.", papers: ["p6", "p7", "p8"] },
      { id: "e-safety", label: "ARIA safety literature", tone: "gold", summary: "Amyloid-related imaging abnormalities.", papers: ["p9"] },
    ],
    papers: [
      { id: "p1", citeKey: "doody2014", authors: "Doody et al.", year: 2014, title: "Phase 3 trials of solanezumab", venue: "NEJM", abstract: "Central-domain mAb; no cognitive benefit.", theme: "e-central", cites: [], x: 100, y: 90 },
      { id: "p2", citeKey: "honig2018", authors: "Honig et al.", year: 2018, title: "Solanezumab (EXPEDITION-3)", venue: "NEJM", abstract: "Mild AD; missed primary endpoint.", theme: "e-central", cites: ["p1"], x: 300, y: 70 },
      { id: "p3", citeKey: "salloway2021", authors: "Salloway et al.", year: 2021, title: "Crenezumab in autosomal-dominant AD", venue: "Alzheimer's & Dementia", abstract: "Pre-symptomatic carriers; neg.", theme: "e-central", cites: ["p1"], x: 500, y: 120 },
      { id: "p4", citeKey: "sevigny2016", authors: "Sevigny et al.", year: 2016, title: "Aducanumab PRIME study", venue: "Nature", abstract: "N-terminal; dose-dependent plaque reduction.", theme: "e-nterm", cites: [], x: 130, y: 260 },
      { id: "p5", citeKey: "budd2022", authors: "Budd-Haeberlein et al.", year: 2022, title: "Aducanumab EMERGE/ENGAGE", venue: "JPAD", abstract: "Conflicting Phase-3; accelerated FDA approval.", theme: "e-nterm", cites: ["p4"], x: 330, y: 280 },
      { id: "p6", citeKey: "vandyck2023", authors: "van Dyck et al.", year: 2023, title: "Lecanemab Clarity-AD", venue: "NEJM", abstract: "Plaque-selective; 27% cognitive slowing.", theme: "e-plaque", cites: ["p4", "p5"], x: 720, y: 100 },
      { id: "p7", citeKey: "sims2023", authors: "Sims et al.", year: 2023, title: "Donanemab TRAILBLAZER-ALZ 2", venue: "JAMA", abstract: "Plaque-specific; 35% functional preservation.", theme: "e-plaque", cites: ["p4"], x: 900, y: 80 },
      { id: "p8", citeKey: "mintun2021", authors: "Mintun et al.", year: 2021, title: "Donanemab TRAILBLAZER-ALZ", venue: "NEJM", abstract: "Phase-2 signal established the Phase-3 dose.", theme: "e-plaque", cites: ["p4"], x: 900, y: 280 },
      { id: "p9", citeKey: "sperling2011", authors: "Sperling et al.", year: 2011, title: "Amyloid-related imaging abnormalities", venue: "Alzheimer's & Dementia", abstract: "ARIA-H and ARIA-E taxonomy.", theme: "e-safety", cites: [], x: 500, y: 400 },
    ],
    gaps: [
      { id: "g1", headline: "No head-to-head lecanemab-vs-donanemab", note: "Both were FDA-approved in 2023; no published trial compares them directly. The non-inferiority question is currently answered by meta-analysis only." },
      { id: "g2", headline: "ApoE4 carrier stratification", note: "Every positive trial shows reduced effect in ApoE4 homozygotes; no trial is powered to detect this subgroup as primary. A prespecified ApoE4-carrier trial is the obvious next step." },
    ],
    synthesis: [
      { heading: "Central-domain antibodies did not translate to cognition", body: "The first generation of anti-amyloid mAbs targeted the central domain and consistently failed on cognitive endpoints despite measurable target engagement {{doody2014}} {{honig2018}} {{salloway2021}}." },
      { heading: "N-terminal antibodies established plaque reduction as the mechanism", body: "Aducanumab's N-terminal-binding variant demonstrated the first robust, dose-dependent plaque reduction in vivo {{sevigny2016}}, although the Phase-3 program produced conflicting readouts {{budd2022}} that complicate interpretation." },
      { heading: "Plaque-selective antibodies delivered the first cognitive wins", body: "Selectivity for aggregated plaque produced the first unambiguous cognitive signals: 27% slowing in Clarity-AD {{vandyck2023}} and 35% functional preservation in TRAILBLAZER-ALZ 2 {{sims2023}}, building on an earlier Phase-2 dose-finding {{mintun2021}}." },
      { heading: "ARIA safety frames the next decade", body: "ARIA-H and ARIA-E remain the dose-limiting toxicity across this class {{sperling2011}}. Every positive trial reports ARIA as the primary safety signal; future trial design will be constrained by ARIA-adjusted dosing." },
    ],
  },
  {
    id: "rev-climate",
    slug: "rev-climate",
    title: "Direct air capture economics",
    subtitle: "Capex trajectories and LCOA forecasting, 2019 – 2024",
    author: {
      name: "Daniel Rodriguez",
      role: "Research Scientist · Carbon Systems",
      institution: "Columbia SIPA",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    updatedAt: "2026-04-07",
    paperCount: 8,
    corpusSource: "arXiv + Nature Energy + IPCC · 61 deduped",
    abstract:
      "This review surveys eight techno-economic analyses of direct-air-capture systems published between 2019 and 2024. Solid-sorbent and liquid-solvent projections diverge by 2× at 2035; the divergence is driven entirely by assumed electrolyzer capex rather than DAC capex.",
    themes: [
      { id: "solid", label: "Solid sorbent", tone: "olive", summary: "Amine-functionalized solid sorbents.", papers: ["p1", "p2", "p3"] },
      { id: "liquid", label: "Liquid solvent", tone: "navy", summary: "Aqueous potassium hydroxide cycle.", papers: ["p4", "p5"] },
      { id: "lcoa", label: "LCOA forecasting", tone: "rust", summary: "Levelized cost of abatement.", papers: ["p6", "p7", "p8"] },
    ],
    papers: [
      { id: "p1", citeKey: "climeworks2021", authors: "Climeworks", year: 2021, title: "Orca plant operations report", venue: "Climeworks white paper", abstract: "First commercial DAC plant; $1000/t achieved.", theme: "solid", cites: [], x: 100, y: 90 },
      { id: "p2", citeKey: "fasihi2019", authors: "Fasihi et al.", year: 2019, title: "Techno-economic assessment of solid DAC", venue: "J. Cleaner Production", abstract: "Projected $105/t by 2050 under best-case electrolyzer scaling.", theme: "solid", cites: [], x: 300, y: 80 },
      { id: "p3", citeKey: "young2023", authors: "Young et al.", year: 2023, title: "Amine degradation pathways", venue: "Nature Energy", abstract: "Oxidative degradation dominates over 2000-hour cycles.", theme: "solid", cites: ["p1", "p2"], x: 500, y: 120 },
      { id: "p4", citeKey: "keith2018", authors: "Keith et al.", year: 2018, title: "A process for DAC with NaOH solution", venue: "Joule", abstract: "Liquid-solvent baseline; $94-$232/t.", theme: "liquid", cites: [], x: 140, y: 280 },
      { id: "p5", citeKey: "mcqueen2021", authors: "McQueen et al.", year: 2021, title: "A review of direct air capture", venue: "PETI", abstract: "Solid vs liquid comparative framing.", theme: "liquid", cites: ["p4", "p1"], x: 340, y: 280 },
      { id: "p6", citeKey: "fuss2018", authors: "Fuss et al.", year: 2018, title: "Negative emissions — part 2: costs and potentials", venue: "Environ. Res. Lett.", abstract: "IPCC-aligned cost ranges for NETs.", theme: "lcoa", cites: [], x: 780, y: 100 },
      { id: "p7", citeKey: "realmonte2019", authors: "Realmonte et al.", year: 2019, title: "An inter-model assessment of DAC in 1.5°C scenarios", venue: "Nature Communications", abstract: "Cross-model variance doubled by 2050.", theme: "lcoa", cites: ["p6"], x: 920, y: 140 },
      { id: "p8", citeKey: "bistline2024", authors: "Bistline et al.", year: 2024, title: "DAC cost trajectories under learning curves", venue: "Joule", abstract: "Electrolyzer capex = 58% of projection variance.", theme: "lcoa", cites: ["p2", "p5", "p7"], x: 920, y: 360 },
    ],
    gaps: [
      { id: "g1", headline: "Electrolyzer capex dominates projections", note: "Projected 2035 LCOA ranges from $120/t (optimistic electrolyzer learning) to $240/t (pessimistic). 58% of this variance traces to the electrolyzer assumption alone (Bistline 2024). No current DAC paper decouples the two learning curves." },
    ],
    synthesis: [
      { heading: "Solid and liquid sorbents hit the field in parallel", body: "The first commercial solid-sorbent plant reached $1000/t at 2021 commissioning {{climeworks2021}}; optimistic techno-economic models projected $105/t by 2050 {{fasihi2019}}, though amine degradation remains the leading durability question {{young2023}}. The liquid-solvent baseline is an aqueous NaOH cycle {{keith2018}}." },
      { heading: "Cost trajectories depend on electrolyzer capex, not DAC capex", body: "Cross-model assessments show >2× variance in 2050 projections {{realmonte2019}}, building on earlier IPCC-aligned NET cost ranges {{fuss2018}}. The latest decomposition attributes 58% of this variance to electrolyzer capex assumptions {{bistline2024}} — implying DAC cost is now downstream of hydrogen-economy progress, not primarily a DAC engineering problem." },
    ],
  },
];

export function getReview(slug: string) {
  return REVIEWS.find((r) => r.slug === slug);
}

export function themeColor(tone: Theme["tone"]) {
  return {
    rust: { ink: "var(--accent)", bg: "var(--accent-soft)", soft: "#f3dac9" },
    olive: { ink: "var(--olive)", bg: "var(--olive-soft)", soft: "#e1e7d4" },
    gold: { ink: "var(--gold)", bg: "var(--gold-soft)", soft: "#f2e6ca" },
    navy: { ink: "var(--ink)", bg: "var(--paper-2)", soft: "#dad3bd" },
  }[tone];
}
