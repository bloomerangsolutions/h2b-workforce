import Link from "next/link";

export function CTABanner({
  title = "Ready to secure your crew?",
  body = "Don't wait until March to realize you're understaffed. Our slots for the next fiscal year are filling up.",
  primaryHref = "/eligibility",
  primaryLabel = "Schedule a Labor Audit",
  variant = "navy",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  variant?: "navy" | "copper";
}) {
  if (variant === "copper") {
    return (
      <section className="bg-copper py-24">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h2 className="mb-8 font-serif text-h1 text-white">{title}</h2>
          <p className="mb-12 font-body text-body-lg text-white/90">{body}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-lg bg-navy px-10 py-4 font-serif text-white transition-colors hover:bg-black"
            >
              {primaryLabel}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white bg-transparent px-10 py-4 font-serif text-white transition-colors hover:bg-white/10"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <h2 className="mb-8 font-serif text-h1 text-paper">{title}</h2>
        <p className="mx-auto mb-12 max-w-2xl font-body text-body-lg text-paper/70">{body}</p>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <Link
            href={primaryHref}
            className="rounded bg-copper px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#a66222] active:scale-95"
          >
            {primaryLabel}
          </Link>
          <Link
            href="/resources"
            className="rounded border border-paper/30 px-10 py-4 text-sm font-bold uppercase tracking-widest text-paper transition-all hover:bg-paper/5 active:scale-95"
          >
            Download Filing Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
