/**
 * Specimen landing — austere catalog (grammar inspired by Are.na's landing).
 *
 * Entirely left-aligned. Thin rules, catalog numbers, smallcaps labels,
 * monospaced metadata. Two-tone only (paper + ink). No card shadows, no
 * color blocks, no diagrams. The aesthetic is a card catalog.
 */
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { REVIEWS, themeColor } from "@/lib/corpora";

export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <MarketingNav />

      <section className="mx-auto max-w-[1060px] px-6 md:px-10 pt-20 pb-8">
        <div className="flex items-baseline justify-between text-[11px] smallcaps tracking-[0.22em] text-ink-3 border-b border-ink pb-2">
          <span>Catalog — Specimen Review</span>
          <span>Vol. I · Entries 01—{String(REVIEWS.length).padStart(2, "0")}</span>
        </div>

        <h1 className="display mt-10 text-[48px] leading-[1.05] tracking-[-0.01em] text-ink md:text-[72px] max-w-[22ch]">
          A catalog of{" "}
          <span className="display-italic" style={{ color: "var(--accent)" }}>
            drafted literature reviews
          </span>
          .
        </h1>
        <p className="mt-6 text-[15px] leading-[1.7] text-ink-2 max-w-[54ch]">
          Each entry below was drafted from a real corpus. Every claim in every synthesis is pinned to a paper — click through to read.
        </p>

        <div className="mt-8 flex items-baseline gap-6 text-[12px]">
          <Link
            href="/app"
            className="smallcaps tracking-[0.18em] text-ink border-b border-ink hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
          >
            Browse the shelf →
          </Link>
          <Link
            href="/method"
            className="smallcaps tracking-[0.18em] text-ink-3 hover:text-ink transition-colors"
          >
            The method
          </Link>
          <Link
            href="/security"
            className="smallcaps tracking-[0.18em] text-ink-3 hover:text-ink transition-colors"
          >
            Security
          </Link>
        </div>
      </section>

      {/* Catalog of entries */}
      <section className="mx-auto max-w-[1060px] px-6 md:px-10 py-12 border-t border-ink">
        <ol className="divide-y divide-line">
          {REVIEWS.map((r, i) => {
            const hi = r.themes[0];
            const c = themeColor(hi.tone);
            const leadPaper = r.papers[0];
            return (
              <li key={r.id} className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_260px] gap-6 md:gap-10">
                  {/* Catalog number */}
                  <div className="mono text-[11px] text-ink-3 tracking-[0.16em] tabular-nums">
                    {String(i + 1).padStart(3, "0")} · {r.id.toUpperCase()}
                  </div>

                  {/* Entry proper */}
                  <div>
                    <Link href={`/app/${r.slug}/`} className="group">
                      <div className="display text-[28px] leading-[1.15] tracking-[-0.008em] text-ink md:text-[34px] group-hover:text-[color:var(--accent)] transition-colors">
                        {r.title}.
                      </div>
                      <div className="display-italic mt-1 text-[16px] text-ink-2">
                        {r.subtitle}
                      </div>
                    </Link>

                    <p className="mt-4 text-[13.5px] leading-[1.7] text-ink-2 max-w-[62ch]">
                      {r.abstract}
                    </p>

                    <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-1 text-[10.5px] smallcaps tracking-[0.16em] text-ink-3">
                      <span>{r.author.name}</span>
                      <span>{r.author.institution}</span>
                      <span className="mono normal-case tracking-[0.1em]">
                        {r.paperCount} papers
                      </span>
                      <span className="mono normal-case tracking-[0.1em]">
                        {r.themes.length} themes
                      </span>
                      <span className="mono normal-case tracking-[0.1em]">
                        updated {r.updatedAt}
                      </span>
                    </div>

                    {/* Theme chips */}
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[10.5px]">
                      {r.themes.map((t) => {
                        const tc = themeColor(t.tone);
                        return (
                          <li key={t.id} className="flex items-baseline gap-1.5">
                            <span
                              aria-hidden
                              className="inline-block h-[6px] w-[6px] rounded-full"
                              style={{ background: tc.ink }}
                            />
                            <span className="mono uppercase tracking-[0.1em]" style={{ color: tc.ink }}>
                              {t.label}
                            </span>
                            <span className="mono text-ink-3">· {t.papers.length}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right-aligned metadata card */}
                  <aside className="md:border-l md:border-line md:pl-6 text-[12px] text-ink-2">
                    <div className="smallcaps text-[10.5px] tracking-[0.18em] text-ink-3">
                      Featured paper
                    </div>
                    <div className="mono mt-2 text-[10.5px]" style={{ color: c.ink }}>
                      [{leadPaper.citeKey}]
                    </div>
                    <div className="display-italic mt-1 text-[14px] leading-[1.4] text-ink">
                      {leadPaper.title}
                    </div>
                    <div className="mono text-[10.5px] text-ink-3 mt-1">
                      {leadPaper.venue} · {leadPaper.year}
                    </div>
                    <Link
                      href={`/app/${r.slug}/`}
                      className="mt-4 inline-block smallcaps text-[11px] tracking-[0.18em] text-ink border-b border-ink hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
                    >
                      Read →
                    </Link>
                  </aside>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 pt-6 border-t-2 border-ink flex items-baseline justify-between">
          <p className="display-italic text-[15px] text-ink-2 max-w-[50ch]">
            Volume II is collecting corpora — submit a BibTeX or a list of DOIs.
          </p>
          <Link
            href="/app/new/"
            className="smallcaps text-[12px] tracking-[0.18em] text-ink border-b border-ink hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
          >
            Submit a corpus →
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
