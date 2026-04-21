import Link from "next/link";
import { HeroCorpus } from "@/components/hero-corpus";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { ReviewPanel } from "@/components/review-panel";
import { REVIEWS } from "@/lib/corpora";

/**
 * Specimen landing — full-page academic-journal cover.
 *
 * No split hero, no testimonial card, no pillars, no standard CTA
 * bands. The whole landing reads as the front matter of a journal:
 * masthead with VOL/NO, double-column editor's note with drop-cap,
 * the hero diagram presented as FIGURE 1 with caption, an "in this
 * issue" TOC, and an imprint/colophon as the closer.
 */
export default function Landing() {
  const [headline, second, third] = REVIEWS;

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      {/* ───── MASTHEAD ───── */}
      <section className="relative">
        <div className="mx-auto max-w-[1160px] px-6 md:px-10 pt-10 pb-4">
          <div className="flex items-baseline justify-between text-[10.5px] smallcaps border-b border-ink pb-2 tracking-[0.18em]">
            <span>Vol. I</span>
            <span>No. 1</span>
            <span>April · MMXXVI</span>
            <span className="hidden md:inline">Berkeley · Cambridge · Columbia</span>
            <span>Price ten dollars</span>
          </div>
          <div className="mt-6 text-center">
            <h1 className="display text-[96px] leading-[0.9] tracking-[-0.022em] text-ink md:text-[180px]">
              The
              <br />
              <span className="display-italic">Specimen</span>
              <br />
              Review
            </h1>
            <p className="mt-4 display-italic text-[19px] text-ink-2 md:text-[22px]">
              A quarterly of machine-drafted literature reviews
            </p>
          </div>
          <div className="mt-6 flex items-baseline justify-between text-[10.5px] text-ink-3 border-t border-b border-ink py-2 smallcaps tracking-[0.18em]">
            <span>Founded 2026</span>
            <span>— printed at the edge —</span>
            <span>Issued quarterly</span>
          </div>
        </div>
      </section>

      {/* ───── EDITORIAL (drop-cap, double-column prose) ───── */}
      <section>
        <div className="mx-auto max-w-[1160px] px-6 md:px-10 pt-10 pb-4">
          <div className="text-center mb-8">
            <div className="smallcaps text-[11px] tracking-[0.2em] text-ink-3">The editor&apos;s note</div>
            <h2 className="display mt-1 text-[28px] leading-[1.2] tracking-[-0.008em] text-ink md:text-[34px]">
              On writing the hundredth paper first.
            </h2>
          </div>
          <div className="two-col text-[15px] leading-[1.85] text-ink max-w-[1040px] mx-auto">
            <p className="drop-cap text-justify" style={{ hyphens: "auto" }}>
              The hardest draft a doctoral candidate writes is not the thesis.
              It is the literature review, which stands between the candidate
              and the first sentence of original research. A reviewer reads
              a hundred papers and writes a prose that must acknowledge all
              of them. The prose itself is not the discovery — the graph
              behind the prose is. Specimen writes the prose; you write the
              research.
            </p>
            <p className="mt-4 text-justify" style={{ hyphens: "auto" }}>
              What you read here is typeset in the manner of the journals
              our corpora describe. A cover. A masthead. Figures and plates,
              with captions. Footnotes where they matter. The interface is
              serif because the object is serif. To import a corpus, follow
              the imprint at the foot of this page or{" "}
              <Link
                href="/app/new"
                className="underline underline-offset-4"
                style={{ color: "var(--accent)", textDecorationColor: "var(--accent)" }}
              >
                submit a bibliography →
              </Link>
              .
            </p>
            <p className="mt-4 text-justify" style={{ hyphens: "auto" }}>
              This inaugural issue contains three reviews drafted in the
              first quarter of 2026. The first argues that attention
              mechanisms have moved from foundation to commodity. The second
              surveys a decade of anti-amyloid clinical trials and flags a
              consistent under-powering of ApoE4 subgroups. The third reads
              the direct-air-capture literature through its
              electrolyzer-capex lens. Each review is signed with the
              pipeline that produced it. None claims originality; all claim
              rigor.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FIGURE 1 · the animated diagram as a plate ───── */}
      <section>
        <div className="mx-auto max-w-[1160px] px-6 md:px-10 pt-10 pb-4">
          <div className="border-y border-ink py-6">
            <div className="flex items-baseline justify-between mb-3">
              <span className="smallcaps text-[11px] tracking-[0.2em]">Figure I</span>
              <span className="mono text-[10.5px] text-ink-3">rev-attention · 12 papers · 4 themes</span>
            </div>
            <HeroCorpus />
            <p className="mt-4 mx-auto max-w-[72ch] text-center text-[12.5px] italic text-ink-2 leading-[1.65]">
              <span className="smallcaps not-italic text-ink">Fig. I.</span>{" "}
              A corpus of twelve papers condenses into a citation graph. Four themes
              emerge from hierarchical clustering of abstract-level TF-IDF embeddings;
              a single gap candidate materializes in the under-cited region linking
              the efficiency and interpretability literatures. See{" "}
              <Link href="/app/rev-attention/" className="underline" style={{ color: "var(--accent)" }}>
                Survey §III
              </Link>{" "}
              for the accompanying synthesis.
            </p>
          </div>
        </div>
      </section>

      {/* ───── IN THIS ISSUE (TOC, not a card grid) ───── */}
      <section>
        <div className="mx-auto max-w-[1160px] px-6 md:px-10 pt-14 pb-10">
          <div className="flex items-baseline justify-between border-b border-ink pb-3 mb-8">
            <span className="smallcaps text-[12px] tracking-[0.2em]">In this issue</span>
            <span className="smallcaps text-[11px] text-ink-3 tracking-[0.2em]">
              Three reviews · 29 papers · 11 themes
            </span>
          </div>

          <ol className="divide-y divide-line">
            {[headline, second, third].map((r, i) => (
              <li
                key={r.id}
                className="grid grid-cols-1 md:grid-cols-[72px_1fr_200px] gap-6 py-7 items-baseline"
              >
                <div className="display text-[46px] leading-none tabular-nums text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <Link href={`/app/${r.slug}/`} className="block group">
                    <div className="display text-[26px] leading-[1.15] tracking-[-0.01em] text-ink md:text-[30px] group-hover:text-[color:var(--accent)] transition-colors">
                      {r.title}.
                    </div>
                    <div className="display-italic mt-1 text-[16px] text-ink-2">
                      {r.subtitle}
                    </div>
                  </Link>
                  <p className="mt-3 text-[13px] leading-[1.65] text-ink-2 max-w-[62ch]">
                    {r.abstract}
                  </p>
                </div>
                <div className="text-right">
                  <div className="smallcaps text-[11px] text-ink-3 tracking-[0.14em]">
                    By {r.author.name}
                  </div>
                  <div className="mono text-[10.5px] text-ink-3">{r.author.institution}</div>
                  <div className="mono text-[10px] text-ink-3 mt-1 tabular-nums">
                    pp. {i * 12 + 1}—{(i + 1) * 12}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── PLATE II (inline product as a preview plate) ───── */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-10 pb-10">
          <div className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="smallcaps text-[12px] tracking-[0.2em]">Plate II — interactive preview</span>
            <span className="mono text-[10.5px] text-ink-3">hover themes to tint subgraphs</span>
          </div>
          <ReviewPanel reviews={REVIEWS} />
          <p className="mt-4 mx-auto max-w-[72ch] text-center text-[12.5px] italic text-ink-2 leading-[1.6]">
            <span className="smallcaps not-italic text-ink">Plate II.</span>{" "}
            The same reader you will use in the periodical&apos;s companion
            app, embedded here for scale. Tab between issues; click a theme
            to tint its subgraph; follow the figure number to the full
            synthesis.
          </p>
        </div>
      </section>

      {/* ───── COLOPHON / IMPRINT ───── */}
      <section>
        <div className="mx-auto max-w-[960px] px-6 md:px-10 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 border-t-2 border-ink pt-8">
            <div>
              <div className="smallcaps text-[11px] tracking-[0.18em] text-ink-3 mb-3">Colophon</div>
              <p className="text-[13.5px] leading-[1.75] text-ink-2 max-w-[44ch]">
                Set in{" "}
                <span className="text-ink">EB Garamond</span> for body text,
                Spectral for abstracts, and Fira Code for citation keys.
                Printed at the edge on Cloudflare Workers, served as a
                static periodical.
              </p>
            </div>
            <div>
              <div className="smallcaps text-[11px] tracking-[0.18em] text-ink-3 mb-3">Call for corpora</div>
              <p className="text-[13.5px] leading-[1.75] text-ink-2 max-w-[44ch]">
                Volume II will take corpora through 2026-Q2. Submit a{" "}
                <span className="mono text-ink">.bib</span> or a list of DOIs via{" "}
                <Link
                  href="/app/new/"
                  className="underline"
                  style={{ color: "var(--accent)" }}
                >
                  the editorial office
                </Link>
                . Reviews are signed and reproducible from the corpus hash.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center smallcaps text-[11px] tracking-[0.2em] text-ink-3">
            — End of front matter · turn to issue contents —
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
