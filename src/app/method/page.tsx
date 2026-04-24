import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";

export const metadata = {
  title: "Method · Specimen",
  description: "How a review is drafted.",
};

const STAGES = [
  {
    n: "I",
    verb: "Ingest",
    detail:
      "BibTeX, RIS, a folder of PDFs, or a pasted list of DOIs. Each paper is read to its abstract; full-text is parsed when available. Duplicates are collapsed by DOI.",
  },
  {
    n: "II",
    verb: "Parse",
    detail:
      "Author, year, venue, citations in and out, section structure. Nothing inferred; unreadable fields surface as gaps for human review.",
  },
  {
    n: "III",
    verb: "Cluster",
    detail:
      "Hierarchical clustering on abstract-level embeddings. Themes emerge bottom-up. Four themes per twelve papers is typical; the silhouette score is shown alongside.",
  },
  {
    n: "IV",
    verb: "Synthesize",
    detail:
      "A draft paragraph per theme. Every sentence carries an inline {{citeKey}} marker. No sentence ships without at least one marker; hallucinated citations do not appear.",
  },
  {
    n: "V",
    verb: "Gap",
    detail:
      "Under-cited intersections between themes surface as gap candidates. These are potential research directions, not conclusions — they are flagged, not asserted.",
  },
  {
    n: "VI",
    verb: "Sign",
    detail:
      "The review is signed with a pipeline version and a corpus hash. Rerun the same corpus against a new pipeline; see what changed.",
  },
];

export default function Method() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />
      <section className="flex-1">
        <div className="mx-auto max-w-[920px] px-6 md:px-10 pt-20 pb-16 md:pt-28">
          <div className="smallcaps text-[11px] tracking-[0.22em] text-ink-3">
            The method
          </div>
          <h1 className="display mt-4 text-[48px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[68px]">
            How a review is{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>
              drafted.
            </span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.75] text-ink-2">
            Six stages. Every claim traceable; every draft reproducible.
          </p>

          <ol className="mt-14 divide-y divide-line border-y border-line">
            {STAGES.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-10 py-7 items-baseline"
              >
                <span className="smallcaps text-[12px] tracking-[0.2em] text-ink-3">
                  § {s.n}
                </span>
                <div>
                  <div className="display text-[24px] leading-[1.2] text-ink">
                    {s.verb}.
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.75] text-ink-2 max-w-[62ch]">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t-2 border-ink pt-6 flex flex-wrap items-baseline justify-between gap-4">
            <p className="text-[13.5px] italic text-ink-3 max-w-[52ch]">
              No sentence in the synthesis exists without a paper behind it.
              That is the single rule.
            </p>
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-[13px] rounded-[3px] hover:bg-ink-2 transition-colors"
            >
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
