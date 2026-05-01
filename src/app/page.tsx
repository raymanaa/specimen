import Link from "next/link";
import { HeroCorpus } from "@/components/hero-corpus";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { ReviewPanel } from "@/components/review-panel";
import { REVIEWS } from "@/lib/corpora";

export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section className="mx-auto w-full max-w-[1200px] px-6 pt-14 md:px-8 md:pt-20">
        <div className="flex items-baseline justify-between border-b border-ink pb-3">
          <span className="label">VOL. I · ISSUE I</span>
          <span className="label">APRIL MMXXVI</span>
          <span className="label">LITERATURE-REVIEW AGENT · BETA</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
          <div>
            <h1 className="display text-[56px] leading-[1.02] tracking-[-0.015em] text-ink md:text-[88px]">
              A corpus,
              <br />
              <span className="display-italic">a graph,</span>
              <br />
              <span className="display">a review.</span>
            </h1>
            <p className="mt-5 max-w-[60ch] leading-[1.75] text-[15px] text-ink-2 md:text-[16.5px]">
              Drop a BibTeX, a folder of PDFs, or a list of DOIs. Specimen
              builds a citation graph, clusters findings into themes,
              highlights the gap candidates, and drafts a synthesis that
              cites every claim.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
              >
                <span>Read a review</span>
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/app/new"
                className="inline-flex items-center gap-2 border border-line bg-card px-5 py-3 text-[14px] text-ink-2 rounded-[3px] hover:border-line-2 hover:text-ink transition-colors"
              >
                Import a corpus
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3 text-[11.5px] text-ink-3">
              <Stat value="142" unit="papers ingested" label="Typical first-pass corpus" />
              <Stat value="4" unit="themes" label="Auto-clustered by topic model" />
              <Stat value="&lt; 3m" unit="to first draft" label="Synthesis with inline citations" />
            </div>
          </div>

          <figure className="relative max-w-[420px] ml-auto">
            <div className="relative border border-line bg-card rounded-[3px] p-5">
              <div className="label">Plate I — Specimen</div>
              <div className="rule my-3" />
              <p className="display-italic text-[19px] leading-[1.4] text-ink md:text-[21px]">
                &ldquo;The hardest part of Chapter 1 was never the reading.
                It was the connecting. Specimen drew the graph I was trying
                to hold in my head.&rdquo;
              </p>
              <div className="rule my-3" />
              <div className="flex items-baseline justify-between text-[11px] text-ink-3">
                <span className="smallcaps">— M. Alves, UC Berkeley EECS</span>
                <span className="mono text-[10px]">REV-ATTENTION · 12 papers</span>
              </div>
            </div>
          </figure>
        </div>

        {/* Animated diagram */}
        <div className="mt-20">
          <HeroCorpus />
        </div>
      </section>

      {/* ───── METHOD LEDE ───── */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-24 pb-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.7fr] md:gap-16">
          <div>
            <div className="label">The method</div>
            <h2 className="display mt-3 text-[36px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[52px]">
              Synthesis, not <span className="display-italic">summarization.</span>
            </h2>
          </div>
          <div className="text-[15px] leading-[1.75] text-ink-2 max-w-[64ch] md:text-[16px]">
            Summarization tools compress one paper. Specimen writes the
            prose that connects twelve. Every sentence in the draft is
            pinned to a specific section of a specific paper. Every theme
            declares its members. Every gap candidate states the under-cited
            pair. You do not get a summary; you get a draft you can
            redline.
          </div>
        </div>
      </section>

      {/* ───── INLINE PRODUCT ───── */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-14 pb-10">
        <div className="mb-5 flex items-baseline justify-between">
          <div className="label">Specimen · review panel</div>
          <div className="label !tracking-[0.14em]">
            RENDERED FROM <span className="mono text-ink-2">/app</span> · NOT A SCREENSHOT
          </div>
        </div>
        <ReviewPanel reviews={REVIEWS} />
        <p className="mt-5 text-[12.5px] leading-[1.65] text-ink-3 max-w-[62ch]">
          Same component as the in-app reader — tab between three seeded
          reviews, click a theme to tint its subgraph, or click through to
          read the full synthesis.
        </p>
      </section>

      {/* ───── CLOSING ───── */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-24 pb-4">
        <div className="mx-auto max-w-[740px] text-center">
          <div className="label">Chapter 1</div>
          <h2 className="display mt-4 text-[44px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[64px]">
            Start with the <span className="display-italic">graph.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-ink-2">
            Import a corpus. Watch Specimen cluster, cite, and draft.
            Redline in prose the way you would have at hour 300 of hour 1.
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <Link
              href="/app/new"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
            >
              <span>Import a corpus</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Stat({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="display text-[30px] leading-none tabular-nums text-ink" dangerouslySetInnerHTML={{ __html: value }} />
      <div className="mono text-[11px] text-ink-3 mt-0.5">{unit}</div>
      <div className="mt-1 text-[11.5px] text-ink-3 italic max-w-[24ch]">{label}</div>
    </div>
  );
}
