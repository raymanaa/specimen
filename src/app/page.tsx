import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { REVIEWS, themeColor } from "@/lib/corpora";

export default function Landing() {
  const review = REVIEWS[0];
  const paper = review.papers[1];
  const theme = review.themes.find((t) => t.id === paper.theme)!;
  const recent = REVIEWS.slice(0, 3);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section>
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 pt-24 pb-20 md:pt-32">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.35fr_1fr] md:items-center md:gap-16">
            <div>
              <div className="smallcaps text-[11px] tracking-[0.22em] text-ink-3">Literature-review agent</div>
              <h1 className="display mt-5 text-[64px] leading-[0.96] tracking-[-0.012em] md:text-[92px]">
                Your literature review,{" "}
                <span className="display-italic" style={{ color: "var(--accent)" }}>drafted.</span>
              </h1>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-ink-2">
                Drop a corpus. Get a citation graph and a synthesis that cites every claim.
              </p>
              <div className="mt-8">
                <Link href="/app" className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors">
                  Read a review
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="border bg-card rounded-[3px] px-4 py-3 shadow-[0_1px_0_rgba(10,37,64,0.04)]" style={{ borderColor: themeColor(theme.tone).ink }}>
              <div className="flex items-baseline justify-between">
                <span className="mono text-[10px] tracking-[0.1em]" style={{ color: themeColor(theme.tone).ink }}>{paper.citeKey}</span>
                <span className="mono text-[10px] text-ink-3 tabular-nums">{paper.year}</span>
              </div>
              <div className="mt-1.5 text-[14px] leading-[1.3] text-ink italic">{paper.title}</div>
              <div className="mono mt-1.5 text-[10px] text-ink-3">{paper.venue}</div>
              <div className="rule my-3" />
              <div className="smallcaps text-[10.5px] tracking-[0.14em] text-ink-3">Clustered under</div>
              <div className="mono text-[11px] mt-0.5" style={{ color: themeColor(theme.tone).ink }}>{theme.label} — 1 of {theme.papers.length} papers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat n="any corpus" label="BibTeX, PDFs, DOIs, or a folder" />
          <Stat n="citation graph" label="Every paper with its edges drawn" />
          <Stat n="gap candidates" label="Under-cited intersections surfaced" />
          <Stat n="0" label="Invented citations in the synthesis" />
        </div>
      </section>

      <Section label="The hardest chapter">
        <p className="display-italic text-[30px] leading-[1.25] text-ink max-w-[34ch] md:text-[42px]">
          The hardest chapter of a thesis is the one nobody teaches you how to write.
        </p>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.7] text-ink-2">
          Literature reviews are read once and drafted for months. Specimen reads the corpus, draws the citation graph, clusters the themes, surfaces the under-cited intersections — and hands you a synthesis draft that cites every sentence back to its paper.
        </p>
      </Section>

      <Section label="How a review is drafted">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <Move n="I" verb="Ingest" detail="BibTeX, RIS, a folder of PDFs, or a list of DOIs. Specimen reads each paper to abstract." />
          <Move n="II" verb="Parse" detail="Author, year, venue, citations in and out, section structure. All structured." />
          <Move n="III" verb="Cluster" detail="Themes emerge from hierarchical clustering of abstract-level embeddings. Four themes per twelve papers is typical." />
          <Move n="IV" verb="Synthesize" detail="A draft per theme. Every claim carries an inline cite-key; no sentence ships without one." />
          <Move n="V" verb="Gap" detail="Under-cited intersections surface as gap candidates — high-leverage research directions for the student." />
        </ol>
      </Section>

      <Section label="Three things only Specimen does">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature title="Citation graph as structure." body="The graph is not a visualization afterthought — it&apos;s the outline the synthesis draft follows. Themes are clusters on the graph." />
          <Feature title="Inline cite keys, not footnotes." body="Every sentence in the synthesis carries a bracketed cite key. Click it; the paper opens at the cited passage." />
          <Feature title="Gap candidates." body="Under-cited bridges between two themes are flagged as potential research directions. The graph tells you where the literature is thin." />
        </div>
      </Section>

      <Section label="Made for">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] leading-[1.65] text-ink-2">
          <Persona title="The PhD candidate">Writing Chapter 2 for four months. Specimen is the first pass that makes the chapter writable.</Persona>
          <Persona title="The research scientist">Running a rapid literature sweep in a new sub-field. Wants the graph first, the synthesis second.</Persona>
          <Persona title="The policy analyst">Does prior-art searches for regulatory filings. Needs the synthesis to be defensibly cited.</Persona>
        </ul>
      </Section>

      <Section label="Recent reviews" right={<Link href="/app" className="mono text-[11px] text-ink-3 hover:text-ink transition-colors">the shelf →</Link>}>
        <ul className="border-y border-line divide-y divide-line">
          {recent.map((r) => (
            <li key={r.id}>
              <Link href={`/app/${r.slug}/`} className="group grid grid-cols-[auto_1fr_auto] gap-5 py-4 items-baseline hover:bg-paper-2/40 transition-colors px-1">
                <span className="smallcaps text-[11px] tracking-[0.16em] text-ink-3">{r.paperCount} papers</span>
                <div>
                  <div className="display text-[18px] text-ink leading-tight">{r.title}.</div>
                  <div className="display-italic text-[13.5px] text-ink-2 mt-0.5">{r.subtitle}</div>
                </div>
                <span className="mono text-[10.5px] text-ink-3 group-hover:text-ink">open →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-16">
        <blockquote className="border-l-2 pl-6 max-w-[60ch]" style={{ borderColor: "var(--accent)" }}>
          <p className="display-italic text-[28px] leading-[1.3] text-ink md:text-[34px]">
            &ldquo;The hardest part of Chapter 1 was never the reading. It was the connecting. Specimen drew the graph I was trying to hold in my head.&rdquo;
          </p>
          <footer className="mt-4 smallcaps mono text-[11px] text-ink-3 tracking-[0.14em]">
            — M. Alves · PhD candidate · &lt;pilot · not a customer&gt;
          </footer>
        </blockquote>
      </section>

      <Section label="Questions">
        <dl className="divide-y divide-line border-y border-line">
          <Faq q="What formats does it accept?">BibTeX, RIS, a folder of PDFs, or a pasted list of DOIs. Zotero and Mendeley exports work as-is.</Faq>
          <Faq q="How many papers can it handle?">Comfortable to 300. Above that the clustering quality plateaus; 150-200 is the sweet spot.</Faq>
          <Faq q="Are the citations honest?">Every sentence carries a cite key. If the paper doesn&apos;t support the claim, the claim isn&apos;t drafted. Hallucinated citations do not ship.</Faq>
          <Faq q="Can I export to LaTeX?">Yes. The draft exports as a BibTeX-linked .tex file, ready for further editing.</Faq>
          <Faq q="What about preprints vs. peer-reviewed?">Both are read. Preprint status is surfaced in the synthesis; you decide how to treat it.</Faq>
        </dl>
      </Section>

      <section className="border-t-2 border-ink">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-20 text-center">
          <div className="smallcaps text-[11px] tracking-[0.22em] text-ink-3">Chapter 2</div>
          <h2 className="display mt-3 text-[40px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[54px]">
            Drafted.{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>With the graph.</span>
          </h2>
          <div className="mt-8">
            <Link href="/app" className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors">
              Read a review
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Section({ label, right, children }: { label: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-16">
        <div className="flex items-baseline justify-between border-b border-line pb-3 mb-8">
          <span className="label">{label}</span>
          {right}
        </div>
        {children}
      </div>
    </section>
  );
}
function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display text-[28px] leading-none tabular-nums text-ink md:text-[32px]">{n}</div>
      <div className="mt-2 text-[11.5px] leading-[1.45] text-ink-3 max-w-[28ch]">{label}</div>
    </div>
  );
}
function Move({ n, verb, detail }: { n: string; verb: string; detail: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-4 items-baseline">
      <span className="smallcaps text-[11px] text-ink-3 tabular-nums tracking-[0.16em]">§ {n}</span>
      <div>
        <div className="display text-[22px] leading-none text-ink">{verb}.</div>
        <div className="mt-1 text-[13.5px] leading-[1.6] text-ink-2 max-w-[40ch]">{detail}</div>
      </div>
    </li>
  );
}
function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="display text-[20px] leading-[1.2] text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-[1.65] text-ink-2 max-w-[36ch]">{body}</p>
    </div>
  );
}
function Persona({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="border-t-2 border-ink pt-3">
      <div className="display text-[18px] leading-tight text-ink">{title}</div>
      <p className="mt-2 max-w-[36ch]">{children}</p>
    </li>
  );
}
function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-10 py-5">
      <dt className="display text-[17px] text-ink leading-tight">{q}</dt>
      <dd className="text-[14px] leading-[1.7] text-ink-2 max-w-[62ch]">{children}</dd>
    </div>
  );
}
