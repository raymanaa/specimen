"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CitationGraph } from "@/components/citation-graph";
import { type Review, themeColor } from "@/lib/corpora";

export function ReviewReader({ review }: { review: Review }) {
  const [highlightTheme, setHighlightTheme] = useState<string | undefined>();

  const paperByCiteKey = useMemo(() => {
    return Object.fromEntries(review.papers.map((p) => [p.citeKey, p]));
  }, [review.papers]);

  return (
    <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-6 md:px-8">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <Link
          href="/app"
          className="inline-flex items-center gap-1.5 text-[12px] text-ink-3 hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="label !text-[10px]">The shelf</span>
        </Link>
        <span className="mono text-[10.5px] text-ink-3 tabular-nums">
          SPECIMEN / {review.id.toUpperCase()}
        </span>
      </div>

      {/* Masthead */}
      <header className="pt-12 pb-6 text-center max-w-[900px] mx-auto">
        <div className="label">LITERATURE REVIEW · {review.paperCount} PAPERS</div>
        <h1 className="display mt-4 text-[40px] leading-[1.04] tracking-[-0.01em] text-ink md:text-[56px]">
          {review.title}
        </h1>
        <p className="display-italic mt-3 text-[18px] leading-[1.4] text-ink-2 md:text-[21px]">
          {review.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-1 text-[11.5px] text-ink-3">
          <span className="smallcaps">{review.author.name}</span>
          <span aria-hidden className="text-ink-4">·</span>
          <span>{review.author.role}</span>
          <span aria-hidden className="text-ink-4">·</span>
          <span>{review.author.institution}</span>
          <span aria-hidden className="text-ink-4">·</span>
          <span className="mono tabular-nums">{review.updatedAt}</span>
        </div>
      </header>

      <hr className="rule-thick my-6" />

      {/* Abstract */}
      <section className="mx-auto max-w-[880px]">
        <div className="label text-center mb-4">Abstract</div>
        <p className="display-italic text-center text-[20px] leading-[1.55] text-ink md:text-[22px]">
          {review.abstract}
        </p>
      </section>

      <hr className="rule my-10" />

      {/* Citation graph + themes */}
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <div className="label">§ I — Citation graph</div>
          <div className="flex items-center gap-2">
            <span className="mono text-[10.5px] text-ink-3">hover a theme to tint:</span>
            {review.themes.map((t) => {
              const c = themeColor(t.tone);
              const isActive = highlightTheme === t.id;
              return (
                <button
                  key={t.id}
                  onMouseEnter={() => setHighlightTheme(t.id)}
                  onMouseLeave={() => setHighlightTheme(undefined)}
                  onClick={() => setHighlightTheme(isActive ? undefined : t.id)}
                  className="label !text-[9.5px] !tracking-[0.12em] px-2 py-1 rounded-[3px] border transition-colors"
                  style={{
                    color: c.ink,
                    borderColor: isActive ? c.ink : "var(--line)",
                    background: isActive ? c.bg : "transparent",
                  }}
                >
                  {t.label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
        <div className="border border-line bg-card rounded-[3px] overflow-hidden" style={{ height: 520 }}>
          <CitationGraph
            papers={review.papers}
            themes={review.themes}
            highlightedTheme={highlightTheme}
          />
        </div>
      </section>

      {/* Synthesis — two columns */}
      <section className="mt-12">
        <div className="label">§ II — Synthesis</div>
        <div className="mt-5 two-col text-[14.5px] leading-[1.75] text-ink max-w-[1100px]">
          {review.synthesis.map((s, i) => (
            <div key={i} className="break-inside-avoid mb-5">
              <h3 className="display text-[18px] leading-[1.3] text-ink tracking-[-0.006em] md:text-[20px]">
                {s.heading}<span className="display-italic">.</span>
              </h3>
              <p className={i === 0 ? "mt-2 drop-cap" : "mt-2"}>
                {renderBody(s.body, paperByCiteKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gaps */}
      <section className="mt-14">
        <div className="label">§ III — Gap candidates</div>
        <ol className="mt-4 flex flex-col gap-4">
          {review.gaps.map((g, i) => (
            <li
              key={g.id}
              className="border-l-2 border-gold bg-gold-soft/30 pl-4 py-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="mono text-[10.5px] tabular-nums" style={{ color: "var(--gold)" }}>
                  0{i + 1}
                </span>
                <span className="display text-[18px] leading-tight text-ink">
                  {g.headline}
                </span>
              </div>
              <p className="mt-1.5 text-[13.5px] leading-[1.75] text-ink-2 max-w-[72ch]">
                {g.note}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Bibliography */}
      <section className="mt-14">
        <div className="label">§ IV — Corpus · {review.papers.length} papers</div>
        <ol className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
          {review.papers.map((p) => {
            const theme = review.themes.find((t) => t.id === p.theme);
            const c = theme ? themeColor(theme.tone) : themeColor("navy");
            return (
              <li key={p.id} className="flex gap-3 text-[12.5px] text-ink-2 border-l-2 pl-3 py-1" style={{ borderColor: c.ink }}>
                <span className="mono text-[10.5px] shrink-0" style={{ color: c.ink }}>
                  [{p.citeKey}]
                </span>
                <span className="leading-[1.6]">
                  {p.authors} ({p.year}). <span className="italic">{p.title}</span>. {p.venue}.
                  {p.doi && (
                    <>
                      {" "}
                      <span className="mono text-[10.5px] text-ink-3">
                        {p.doi}
                      </span>
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <hr className="rule-thick mt-14" />
      <footer className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-ink-3">
        <span className="mono text-[10.5px] tracking-[0.12em]">
          SPECIMEN v0.9 · corpus source:{" "}
          <span className="text-ink-2">{review.corpusSource}</span>
        </span>
        <span className="display-italic text-[13px]">— End of review.</span>
      </footer>
    </div>
  );
}

function renderBody(
  body: string,
  papers: Record<string, { citeKey: string; authors: string; year: number }>,
) {
  const parts: React.ReactNode[] = [];
  const re = /\{\{([a-z0-9]+)\}\}/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = re.exec(body))) {
    parts.push(body.slice(last, match.index));
    const p = papers[match[1]];
    if (p) {
      parts.push(
        <sup
          key={idx++}
          className="inline-block mono text-[10px] font-semibold"
          style={{ color: "var(--accent)" }}
        >
          {" "}
          [{p.authors.split(",")[0].split(" ").pop()?.toLowerCase()} {p.year % 100}]
        </sup>,
      );
    } else {
      parts.push(`{{${match[1]}}}`);
    }
    last = match.index + match[0].length;
  }
  parts.push(body.slice(last));
  return parts;
}
