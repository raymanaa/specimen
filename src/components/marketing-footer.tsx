import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t-2 border-ink mt-24 bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-[22px] text-ink leading-none">Specimen</div>
            <p className="mt-3 max-w-[340px] text-[13px] leading-[1.7] text-ink-2">
              Literature-review agent for researchers. Upload a corpus, get a
              citation graph, synthesis brief, and drafted review.
            </p>
          </div>
          <Col label="Product">
            <FLink href="/app">Reviews</FLink>
            <FLink href="/app/new">Import a corpus</FLink>
          </Col>
          <Col label="Company">
            <FLink href="/method">Method</FLink>
            <FLink href="/security">Security</FLink>
          </Col>
          <Col label="Context">
            <span className="text-ink-2">Built by Rayen Manaa</span>
            <a
              href="https://github.com/raymanaa/specimen"
              target="_blank"
              rel="noopener"
              className="text-ink-2 hover:text-ink transition-colors"
            >
              github.com/raymanaa/specimen ↗
            </a>
          </Col>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-line pt-5 text-[11px] text-ink-3">
          <span className="mono">© 2026 Specimen · alpha</span>
          <span className="mono">specimen.raymnz.com</span>
        </div>
      </div>
    </footer>
  );
}

function Col({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label">{label}</div>
      <ul className="mt-3 flex flex-col gap-2 text-[13px]">
        {Array.isArray(children)
          ? children.map((c, i) => <li key={i}>{c}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-ink-2 hover:text-ink transition-colors">
      {children}
    </Link>
  );
}
