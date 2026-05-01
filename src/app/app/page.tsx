import Link from "next/link";
import { REVIEWS } from "@/lib/corpora";

export default function ReviewsIndex() {
  return (
    <div className="mx-auto max-w-[1040px] px-6 pt-10 pb-24 md:px-10">
      <div className="flex items-baseline justify-between border-b border-ink pb-3">
        <span className="label">Reviews · shelf</span>
        <span className="mono text-[10.5px] text-ink-3 tabular-nums">{todayLong()}</span>
      </div>

      <h1 className="display mt-10 text-[48px] leading-[1.02] tracking-[-0.012em] text-ink md:text-[64px]">
        The <span className="display-italic">shelf.</span>
      </h1>
      <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.75] text-ink-2">
        Every review drafted by Specimen is signed with its pipeline
        version. Click a title to open the synthesis; hover a theme to
        tint its subgraph in the citation map.
      </p>

      <ol className="mt-12 flex flex-col gap-0 border-y border-line divide-y divide-line">
        {REVIEWS.map((r, i) => (
          <li key={r.id}>
            <Link
              href={`/app/${r.slug}/`}
              className="group grid grid-cols-[56px_96px_1fr_auto] gap-5 py-6 items-start hover:bg-paper-2/40 transition-colors px-2"
            >
              <span className="mono text-[11px] tabular-nums text-ink-3 pt-1">
                0{i + 1}
              </span>
              <img
                src={r.author.avatar}
                alt={r.author.name}
                className="h-20 w-20 object-cover border border-line filter grayscale-[0.25]"
                loading="lazy"
              />
              <div className="min-w-0">
                <div className="display text-[24px] leading-tight text-ink md:text-[28px]">
                  {r.title}
                </div>
                <div className="display-italic mt-1 text-[14px] text-ink-2 md:text-[15px]">
                  {r.subtitle}
                </div>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-[11.5px] text-ink-3">
                  <span className="smallcaps">{r.author.name}</span>
                  <span aria-hidden className="text-ink-4">·</span>
                  <span>{r.author.institution}</span>
                  <span aria-hidden className="text-ink-4">·</span>
                  <span className="mono">{r.paperCount} papers</span>
                  <span aria-hidden className="text-ink-4">·</span>
                  <span className="mono">{r.themes.length} themes</span>
                  <span aria-hidden className="text-ink-4">·</span>
                  <span className="mono tabular-nums">{r.updatedAt}</span>
                </div>
              </div>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 mono text-[11px] text-ink-3 group-hover:text-[color:var(--accent)]">
                  open <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-2">
        <span className="mono text-[10.5px] text-ink-3 tracking-[0.12em]">
          SPECIMEN v0.9 · {REVIEWS.length} reviews on shelf
        </span>
        <Link
          href="/app/new"
          className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-[12.5px] rounded-[3px] hover:bg-ink-2 transition-colors"
        >
          Import a corpus
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  );
}

function todayLong() {
  return new Date()
    .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    .toUpperCase();
}
