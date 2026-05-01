"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CitationGraph } from "@/components/citation-graph";
import { type Review, themeColor } from "@/lib/corpora";

/**
 * ReviewPanel — the real product component dropped on the landing
 * (rule 2). Tabs between 3 reviews; the active one renders its
 * citation graph + themes + a gap preview.
 */
export function ReviewPanel({ reviews }: { reviews: Review[] }) {
  const [activeId, setActiveId] = useState(reviews[0].id);
  const [highlighted, setHighlighted] = useState<string | undefined>(undefined);
  const active = reviews.find((r) => r.id === activeId) ?? reviews[0];

  return (
    <div className="border border-line bg-card rounded-[3px] overflow-hidden">
      {/* Tabs */}
      <div className="flex items-stretch border-b border-line overflow-x-auto">
        {reviews.map((r) => {
          const isActive = r.id === activeId;
          return (
            <button
              key={r.id}
              onClick={() => {
                setActiveId(r.id);
                setHighlighted(undefined);
              }}
              className={[
                "shrink-0 min-w-[280px] px-5 py-3.5 text-left transition-colors border-r border-line last:border-r-0",
                isActive ? "bg-paper-2/70" : "hover:bg-paper-2/40",
              ].join(" ")}
              style={isActive ? { boxShadow: "inset 0 -2px 0 0 var(--accent)" } : undefined}
            >
              <div className="flex items-baseline gap-2">
                <span className="mono text-[10px] text-ink-3 tracking-[0.1em]">
                  {r.id.toUpperCase()}
                </span>
                <span className="mono text-[10px] text-ink-3 tabular-nums">
                  {r.paperCount} papers
                </span>
              </div>
              <div className="display mt-1 text-[15px] text-ink leading-tight">
                {r.title}
              </div>
              <div className="mt-0.5 text-[11.5px] text-ink-3 italic">
                {r.author.name}
              </div>
            </button>
          );
        })}
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_340px]"
      >
        {/* Citation graph */}
        <div className="border-b md:border-b-0 md:border-r border-line" style={{ height: 440 }}>
          <CitationGraph
            papers={active.papers}
            themes={active.themes}
            highlightedTheme={highlighted}
          />
        </div>

        {/* Themes + gaps */}
        <aside className="p-5 max-h-[440px] overflow-y-auto">
          <div className="label">Themes · {active.themes.length}</div>
          <ul className="mt-3 flex flex-col gap-2">
            {active.themes.map((t) => {
              const c = themeColor(t.tone);
              const isActive = highlighted === t.id;
              return (
                <li key={t.id}>
                  <button
                    onClick={() =>
                      setHighlighted(isActive ? undefined : t.id)
                    }
                    className={[
                      "w-full text-left border px-3 py-2 rounded-[3px] transition-colors",
                      isActive ? "bg-paper-2/70" : "bg-card hover:bg-paper-2/30",
                    ].join(" ")}
                    style={{ borderColor: c.ink }}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className="mono text-[10px] tracking-[0.1em]"
                        style={{ color: c.ink }}
                      >
                        {t.label.toUpperCase()}
                      </span>
                      <span className="mono text-[9.5px] text-ink-3 tabular-nums">
                        {t.papers.length} papers
                      </span>
                    </div>
                    <div className="mt-1 text-[12px] text-ink leading-[1.5]">
                      {t.summary}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {active.gaps.length > 0 && (
            <div className="mt-5 border border-gold bg-gold-soft/40 rounded-[3px] p-3">
              <div className="label" style={{ color: "var(--gold)" }}>
                GAP CANDIDATE
              </div>
              <div className="display mt-1 text-[14px] text-ink leading-tight">
                {active.gaps[0].headline}
              </div>
              <p className="mt-1.5 text-[11.5px] text-ink-2 leading-[1.5]">
                {active.gaps[0].note}
              </p>
            </div>
          )}

          <Link
            href={`/app/${active.slug}/`}
            className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-ink-2 hover:text-[color:var(--accent)] transition-colors"
          >
            Read the full synthesis →
          </Link>
        </aside>
      </motion.div>
    </div>
  );
}
