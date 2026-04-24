import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";

export const metadata = {
  title: "Security · Specimen",
  description: "What's hardened, what isn't, what you should know before uploading.",
};

const HARDENED = [
  "TLS for all traffic. HSTS, secure-cookies, CSP headers.",
  "Per-corpus encryption at rest; keys rotated quarterly.",
  "Every draft signed with pipeline version + corpus hash.",
  "No third-party analytics on the app. Only the landing carries basic pageview.",
  "Workers + Static Assets — no long-lived servers, no databases on the edge.",
];

const HONEST = [
  "Alpha: the model sometimes re-paraphrases a claim in a way the source doesn't fully support. Every inline cite is traceable — please check before publishing.",
  "PDF text extraction is not perfect on heavily-typeset journal PDFs. Tables and equations sometimes lose structure.",
  "No SOC 2, no ISO 27001 yet. Not for regulated workflows.",
  "Uploaded PDFs are retained for the session by default; longer retention is opt-in.",
  "No team / multi-user workspaces in v0.9. One review = one session.",
];

export default function Security() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />
      <section className="flex-1">
        <div className="mx-auto max-w-[860px] px-6 md:px-10 pt-20 pb-16 md:pt-28">
          <div className="smallcaps text-[11px] tracking-[0.22em] text-ink-3">Security</div>
          <h1 className="display mt-4 text-[48px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[64px]">
            What's hardened.{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>
              What isn't.
            </span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.75] text-ink-2">
            Specimen is alpha. This page is honest about what that means.
          </p>

          <section className="mt-14">
            <div className="smallcaps text-[11px] tracking-[0.2em] text-ink-3">Hardened</div>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {HARDENED.map((s, i) => (
                <li key={i} className="py-4 text-[14px] leading-[1.7] text-ink">
                  <span className="mono text-[10px] text-ink-3 mr-3 tabular-nums">
                    0{i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <div className="smallcaps text-[11px] tracking-[0.2em]" style={{ color: "var(--accent)" }}>
              Alpha caveats
            </div>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {HONEST.map((s, i) => (
                <li key={i} className="py-4 text-[14px] leading-[1.7] text-ink">
                  <span
                    className="mono text-[10px] mr-3 tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    0{i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 border-t-2 border-ink pt-6">
            <p className="display-italic text-[18px] leading-[1.55] text-ink-2 max-w-[62ch]">
              This is a portfolio pilot — not for production use without a security review appropriate to your context.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block mono text-[12px] text-ink-3 hover:text-ink transition-colors"
            >
              ← back
            </Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  );
}
