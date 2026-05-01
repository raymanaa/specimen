"use client";

/**
 * HeroCorpus — animated diagram for Specimen's landing.
 *
 * Rule 2: project-specific animated diagram. A corpus of papers
 * condenses into a citation graph over a 13s CSS-keyframe loop:
 * - T=0-3s: paper rectangles drop in sequentially
 * - T=3-7s: citation edges draw (dashed pulses)
 * - T=7-9s: theme clusters tint (olive / rust / gold)
 * - T=9-11s: one "GAP" marker materializes where a theme is under-cited
 * - T=11-13s: held, then fades to restart
 */
export function HeroCorpus() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-[1080px] border border-line bg-card rounded-[3px] overflow-hidden">
        {/* Masthead */}
        <header className="flex items-baseline justify-between border-b-2 border-ink px-6 py-3">
          <div className="flex items-baseline gap-3">
            <span className="display text-[20px] text-ink leading-none">Specimen</span>
            <span className="mono text-[9.5px] text-ink-3 tracking-[0.14em]">
              SYN-0042 · Q2 2026
            </span>
          </div>
          <span className="label !text-[9.5px]">LITERATURE SYNTHESIS · LIVE</span>
        </header>

        <div className="relative aspect-[16/9]">
          <svg viewBox="0 0 1080 608" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="paper-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.07" />
              </filter>
            </defs>

            {/* Dotted grid */}
            <g>
              {Array.from({ length: 26 }).map((_, r) =>
                Array.from({ length: 47 }).map((__, c) => (
                  <circle
                    key={`g-${r}-${c}`}
                    cx={c * 24 + 12}
                    cy={r * 24 + 12}
                    r={0.6}
                    fill="var(--line-2)"
                  />
                )),
              )}
            </g>

            {/* Theme cluster tints (olive, navy, rust, gold) — fade in late */}
            <rect className="cluster cluster-foundations" x={40} y={60}  width={560} height={120} rx={6} ry={6} fill="var(--paper-2)" stroke="var(--line-2)" strokeDasharray="4 3" />
            <rect className="cluster cluster-efficiency"  x={80} y={210} width={620} height={140} rx={6} ry={6} fill="var(--olive-soft)" opacity={0.6} stroke="var(--olive)" strokeDasharray="4 3" />
            <rect className="cluster cluster-interp"      x={760} y={30}  width={280} height={250} rx={6} ry={6} fill="var(--accent-soft)" opacity={0.6} stroke="var(--accent)" strokeDasharray="4 3" />
            <rect className="cluster cluster-bridge"      x={790} y={360} width={250} height={180} rx={6} ry={6} fill="var(--gold-soft)" opacity={0.6} stroke="var(--gold)" strokeDasharray="4 3" />

            {/* Cluster labels */}
            <ClusterLabel cls="cluster-foundations" x={320} y={54} label="I · Foundations" color="var(--ink-2)" />
            <ClusterLabel cls="cluster-efficiency"  x={390} y={204} label="II · Efficiency" color="var(--olive)" />
            <ClusterLabel cls="cluster-interp"      x={900} y={24} label="III · Interpretability" color="var(--accent)" />
            <ClusterLabel cls="cluster-bridge"      x={915} y={354} label="IV · Bridging" color="var(--gold)" />

            {/* Citation edges (draw during T=3-7s) */}
            <g fill="none" strokeWidth={1.1}>
              <CiteEdge d="M 230 100 L 430 90"  delay="3.0s" tone="foundations" />
              <CiteEdge d="M 430 90  L 540 110" delay="3.4s" tone="foundations" />
              <CiteEdge d="M 430 90  L 300 250" delay="3.8s" tone="efficiency" />
              <CiteEdge d="M 430 90  L 480 280" delay="4.2s" tone="efficiency" />
              <CiteEdge d="M 430 90  L 670 250" delay="4.6s" tone="efficiency" />
              <CiteEdge d="M 430 90  L 880 100" delay="5.0s" tone="interp" />
              <CiteEdge d="M 880 100 L 1000 160" delay="5.4s" tone="interp" />
              <CiteEdge d="M 880 100 L 1000 370" delay="5.8s" tone="interp" />
              <CiteEdge d="M 1000 160 L 900 400" delay="6.2s" tone="bridge" />
              <CiteEdge d="M 900 400 L 1000 430" delay="6.6s" tone="bridge" />
            </g>

            {/* Papers */}
            <Paper x={170} y={90}  label="bahdanau2014"   cat="Found."  delay="0.1s" />
            <Paper x={370} y={80}  label="vaswani2017"    cat="Found."  delay="0.4s" />
            <Paper x={480} y={100} label="dai2019"         cat="Found."  delay="0.7s" />
            <Paper x={240} y={246} label="beltagy2020"    cat="Eff."    delay="1.0s" tone="olive" />
            <Paper x={420} y={278} label="wang2020"       cat="Eff."    delay="1.3s" tone="olive" />
            <Paper x={610} y={250} label="choromanski2020" cat="Eff."   delay="1.6s" tone="olive" />
            <Paper x={830} y={90}  label="clark2019"      cat="Interp." delay="1.9s" tone="rust" />
            <Paper x={950} y={160} label="voita2019"      cat="Interp." delay="2.2s" tone="rust" />
            <Paper x={950} y={370} label="jain2019"       cat="Interp." delay="2.5s" tone="rust" />
            <Paper x={830} y={400} label="elhage2021"     cat="Bridge"  delay="2.8s" tone="gold" />
            <Paper x={960} y={440} label="olsson2022"     cat="Bridge"  delay="3.1s" tone="gold" />

            {/* Gap marker */}
            <g className="gap-marker" transform="translate(740 310)">
              <circle cx={0} cy={0} r={16} fill="none" stroke="var(--gold)" strokeWidth={1.5} />
              <circle cx={0} cy={0} r={22} fill="none" stroke="var(--gold)" strokeWidth={0.8} strokeDasharray="3 3" />
              <text x={0} y={4} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--gold)" fontWeight={600}>
                GAP
              </text>
              <text x={0} y={44} textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize={11} fill="var(--ink-2)">
                Eff. × Interp. under-cited
              </text>
            </g>
          </svg>
        </div>

        <div className="flex items-center justify-between border-t border-line px-6 py-3 text-[11px] text-ink-3">
          <span className="mono">
            12 papers · 10 citation edges · 4 themes · 1 gap candidate
          </span>
          <span className="mono tracking-[0.12em]">PIPELINE v0.9 · synthesis ok</span>
        </div>
      </div>

      <style>{`
        /* 14s master loop */
        .paper-pip {
          opacity: 0;
          transform: translateY(6px);
          animation: paper-life 14s linear infinite both;
          transform-origin: center;
        }
        @keyframes paper-life {
          0%, 1%   { opacity: 0; transform: translateY(6px); }
          5%       { opacity: 1; transform: translateY(0);   }
          88%      { opacity: 1; transform: translateY(0);   }
          94%,100% { opacity: 0; transform: translateY(-3px); }
        }

        .cite-edge {
          stroke-dasharray: 200 200;
          stroke-dashoffset: 200;
          opacity: 0;
          animation: cite-draw 14s linear infinite both;
        }
        @keyframes cite-draw {
          0%, 20%   { stroke-dashoffset: 200; opacity: 0; }
          26%       { opacity: 1; }
          42%       { stroke-dashoffset: 0; opacity: 1; }
          88%       { stroke-dashoffset: 0; opacity: 0.7; }
          94%,100%  { opacity: 0; }
        }

        .cluster {
          opacity: 0;
          animation: cluster-fade 14s linear infinite both;
        }
        @keyframes cluster-fade {
          0%, 48%  { opacity: 0; }
          56%      { opacity: 1; }
          88%      { opacity: 1; }
          94%,100% { opacity: 0; }
        }
        .cluster-label {
          opacity: 0;
          animation: cluster-fade 14s linear infinite both;
        }

        .gap-marker {
          opacity: 0;
          transform: translate(740px, 310px) scale(0.85);
          transform-origin: center;
          animation: gap-life 14s linear infinite both;
        }
        @keyframes gap-life {
          0%, 64%  { opacity: 0; }
          72%      { opacity: 1; }
          88%      { opacity: 1; }
          94%,100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Paper({
  x,
  y,
  label,
  cat,
  delay,
  tone = "navy",
}: {
  x: number;
  y: number;
  label: string;
  cat: string;
  delay: string;
  tone?: "navy" | "olive" | "rust" | "gold";
}) {
  const stroke =
    tone === "olive"
      ? "var(--olive)"
      : tone === "rust"
        ? "var(--accent)"
        : tone === "gold"
          ? "var(--gold)"
          : "var(--ink-3)";
  return (
    <g className="paper-pip" transform={`translate(${x - 70} ${y - 20})`} style={{ animationDelay: delay }}>
      <rect x={0} y={0} width={140} height={40} rx={3} ry={3} fill="var(--card)" stroke={stroke} strokeWidth={1.2} filter="url(#paper-shadow)" />
      <text x={10} y={15} fontFamily="var(--font-mono)" fontSize={9} letterSpacing="0.08em" fill={stroke}>
        {label}
      </text>
      <text x={10} y={30} fontFamily="var(--font-serif)" fontStyle="italic" fontSize={10.5} fill="var(--ink)">
        {cat}
      </text>
    </g>
  );
}

function CiteEdge({ d, delay, tone }: { d: string; delay: string; tone: string }) {
  const stroke =
    tone === "efficiency"
      ? "var(--olive)"
      : tone === "interp"
        ? "var(--accent)"
        : tone === "bridge"
          ? "var(--gold)"
          : "var(--ink-3)";
  return (
    <path
      className="cite-edge"
      d={d}
      stroke={stroke}
      style={{ animationDelay: delay }}
    />
  );
}

function ClusterLabel({
  cls,
  x,
  y,
  label,
  color,
}: {
  cls: string;
  x: number;
  y: number;
  label: string;
  color: string;
}) {
  return (
    <text
      className={`cluster-label ${cls}`}
      x={x}
      y={y}
      fontFamily="var(--font-mono)"
      fontSize={9.5}
      letterSpacing="0.14em"
      fill={color}
      textAnchor="middle"
      fontWeight={600}
    >
      {label}
    </text>
  );
}
