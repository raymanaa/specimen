import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { REVIEWS, themeColor } from "@/lib/corpora";

export default function Landing() {
  const review = REVIEWS[0];
  const paper = review.papers[1]; // "vaswani2017"
  const theme = review.themes.find((t) => t.id === paper.theme)!;

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section className="flex-1">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 pt-24 pb-20 md:pt-32">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.35fr_1fr] md:items-center md:gap-16">
            <div>
              <div className="smallcaps text-[11px] tracking-[0.22em] text-ink-3">
                Literature-review agent
              </div>
              <h1 className="display mt-5 text-[64px] leading-[0.96] tracking-[-0.012em] md:text-[92px]">
                Your literature review,{" "}
                <span className="display-italic" style={{ color: "var(--accent)" }}>
                  drafted.
                </span>
              </h1>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-ink-2">
                Drop a corpus. Get a citation graph and a synthesis that cites every claim.
              </p>
              <div className="mt-8">
                <Link
                  href="/app"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
                >
                  Read a review
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Single paper card — lifted from the citation-graph node */}
            <div
              className="border bg-card rounded-[3px] px-4 py-3 shadow-[0_1px_0_rgba(10,37,64,0.04)]"
              style={{ borderColor: themeColor(theme.tone).ink }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="mono text-[10px] tracking-[0.1em]"
                  style={{ color: themeColor(theme.tone).ink }}
                >
                  {paper.citeKey}
                </span>
                <span className="mono text-[10px] text-ink-3 tabular-nums">{paper.year}</span>
              </div>
              <div className="mt-1.5 text-[14px] leading-[1.3] text-ink italic">
                {paper.title}
              </div>
              <div className="mono mt-1.5 text-[10px] text-ink-3">{paper.venue}</div>
              <div className="rule my-3" />
              <div className="smallcaps text-[10.5px] tracking-[0.14em] text-ink-3">
                Clustered under
              </div>
              <div
                className="mono text-[11px] mt-0.5"
                style={{ color: themeColor(theme.tone).ink }}
              >
                {theme.label} — 1 of {theme.papers.length} papers
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-line">
          <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Step n="I" verb="Ingest" detail="BibTeX, PDFs, or DOIs" />
            <Step n="II" verb="Cluster" detail="Themes, with gap candidates" />
            <Step n="III" verb="Draft" detail="Prose with inline citations" />
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Step({ n, verb, detail }: { n: string; verb: string; detail: string }) {
  return (
    <div>
      <div className="smallcaps text-[11px] tracking-[0.2em] text-ink-3">§ {n}</div>
      <div className="display mt-1 text-[26px] leading-none text-ink">{verb}.</div>
      <div className="mt-1 text-[13px] text-ink-2 italic">{detail}</div>
    </div>
  );
}
