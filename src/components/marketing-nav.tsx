"use client";

import Link from "next/link";

export function MarketingNav() {
  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="display text-[26px] text-ink leading-none">Specimen</span>
          <span className="label !text-[9.5px] hidden sm:inline">VOL. I · NO. 1</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13.5px] text-ink-2 md:flex">
          <Link href="/app" className="hover:text-ink transition-colors">Reviews</Link>
          <Link href="/method" className="hover:text-ink transition-colors">Method</Link>
          <Link href="/security" className="hover:text-ink transition-colors">Security</Link>
        </nav>
        <Link
          href="/app/new"
          className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-[12.5px] rounded-[3px] hover:bg-ink-2 transition-colors"
        >
          <span>Import a corpus</span>
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </header>
  );
}
