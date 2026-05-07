import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { BrandImage } from "@/components/BrandImage";
import { InitialAvatar } from "@/components/InitialAvatar";
import { CAP_STATUS, PRICING_TIERS } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pb-20 pt-20 text-paper">
          <div className="absolute inset-0 opacity-30">
            <BrandImage
              imageKey="goldenHourCrew"
              alt="Workers on a job site at golden hour"
              fill
              priority
              overlay="duotone"
            />
          </div>
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
            <div className="space-y-8 text-left">
              <span className="inline-block border-b-2 border-copper pb-1 font-label text-xs font-semibold uppercase tracking-widest text-copper">
                FY 2026 Filing Window Open
              </span>
              <h1 className="max-w-xl font-serif text-h1">
                Hire your 2026 crew without the legal headache.
              </h1>
              <p className="max-w-lg font-body text-body-lg text-paper/80">
                We handle the DOL, USCIS, and recruitment logistics so you can focus on the job
                site. Industrial-grade compliance for professional trades.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/eligibility"
                  className="rounded bg-copper px-8 py-4 font-serif text-lg font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                >
                  Start Eligibility Quiz
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded border border-paper/30 px-8 py-4 font-serif text-lg backdrop-blur transition-all hover:bg-paper/5"
                >
                  View Program Dates
                </Link>
              </div>
            </div>

            {/* Cap Status Widget */}
            <div className="rounded-xl border border-navy/12 bg-paper p-8 text-navy shadow-2xl">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <span className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
                    Live Updates
                  </span>
                  <h3 className="font-serif text-h3">H-2B 2026 Cap Status</h3>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-xs">REFRESHED</span>
                  <span className="font-mono text-xs text-copper">{CAP_STATUS.asOf}</span>
                </div>
              </div>

              <div className="space-y-6">
                <CapBar period={CAP_STATUS.firstHalf} />
                <CapBar period={CAP_STATUS.secondHalf} />
                <div className="border-l-4 border-copper bg-navy/5 p-4">
                  <p className="font-body text-sm italic text-navy/70">
                    Critical: April 1 start dates must begin recruitment by December 15th to
                    guarantee filing priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Strip */}
        <div className="border-b border-navy/12 bg-paper py-12">
          <div className="mx-auto max-w-7xl overflow-x-auto px-8">
            <div className="flex min-w-max gap-4 pb-4">
              <span className="mr-4 flex items-center font-label text-xs font-semibold uppercase tracking-widest text-navy/40">
                Specialized for:
              </span>
              {[
                { label: "Landscaping", href: "/industries/landscaping" },
                { label: "Roofing", href: "/industries/landscaping" },
                { label: "Concrete", href: "/industries/landscaping" },
                { label: "Painting", href: "/industries/landscaping" },
                { label: "Restaurants", href: "/industries/landscaping" },
                { label: "Hospitality", href: "/industries/landscaping" },
              ].map((industry) => (
                <Link
                  key={industry.label}
                  href={industry.href}
                  className="cursor-pointer rounded-full border border-navy/12 bg-white px-6 py-2 font-serif text-navy transition-colors hover:border-copper"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Math Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-4 font-serif text-h2">The math of outsourcing</h2>
              <p className="font-body text-body-lg text-navy/70">
                Traditional agencies bury costs in hidden fees. We provide a transparent breakdown
                of your workforce investment.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="rounded-xl border border-navy/12 bg-paper p-10">
                <h4 className="mb-8 font-label text-xs font-semibold uppercase tracking-widest text-navy/40">
                  Typical Local Hiring Cost
                </h4>
                <div className="space-y-6">
                  <CostRow label="Recruitment & ads" value="$4,200" />
                  <CostRow
                    label="Average turnover rate (60%)"
                    value="$12,500"
                    valueClass="text-error"
                  />
                  <CostRow label="Onboarding & training" value="$3,800" />
                  <div className="flex justify-between pt-4 font-bold">
                    <span className="font-serif text-xl">Total per season</span>
                    <span className="font-mono text-h2">$20,500+</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-navy/12 bg-navy p-10 text-paper">
                <div className="absolute right-0 top-0 p-4">
                  <span className="bg-copper px-3 py-1 font-label text-[10px] uppercase text-white">
                    H2B Workforce Advantage
                  </span>
                </div>
                <h4 className="mb-8 font-label text-xs font-semibold uppercase tracking-widest text-paper/40">
                  H2B Workforce Strategy
                </h4>
                <div className="space-y-6">
                  <CostRow label="Legal & compliance filing" value="$2,800" dark />
                  <CostRow
                    label="Retention rate (98%)"
                    value="$0"
                    valueClass="text-on-tertiary-container"
                    dark
                  />
                  <CostRow label="Return-worker automation" value="$500" dark />
                  <div className="flex justify-between pt-4 font-bold">
                    <span className="font-serif text-xl text-copper">Net monthly savings</span>
                    <span className="font-mono text-h2 text-copper">$3,400+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="border-y border-navy/12 bg-paper py-24">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-16 text-center font-serif text-h2">Your road to a reliable crew</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  icon: "quiz",
                  title: "Eligibility quiz",
                  body: "5-minute technical audit of your business to ensure you meet DOL temporary need requirements.",
                },
                {
                  num: "02",
                  icon: "gavel",
                  title: "Consultation",
                  body: "Deep dive with Michael Lerner to map your seasonal peaks and visa quantity strategy.",
                },
                {
                  num: "03",
                  icon: "contract",
                  title: "Engagement",
                  body: "We file the LCA and recruitment reports. You interview the vetted candidates from our pipeline.",
                },
                {
                  num: "04",
                  icon: "flight_takeoff",
                  title: "Workers arrive",
                  body: "Consulate processing complete. Your crew arrives ready to work on day one of your season.",
                },
              ].map((step) => (
                <div key={step.num} className="group space-y-6">
                  <div className="font-mono text-6xl text-navy/5 transition-colors group-hover:text-copper/20">
                    {step.num}
                  </div>
                  <div className="relative z-10 h-full border border-navy/12 bg-white p-8">
                    <Icon name={step.icon} className="mb-4 text-copper" />
                    <h4 className="mb-3 font-serif text-xl font-bold">{step.title}</h4>
                    <p className="font-body text-navy/70">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="overflow-hidden bg-white py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -left-12 -top-12 font-serif text-[180px] leading-none text-navy/5">
                  &ldquo;
                </div>
                <blockquote className="relative z-10">
                  <h2 className="mb-6 font-serif text-h2 italic leading-snug">
                    Mas Labor said no because our timelines were tight. H2B Workforce said yes,
                    filed in 48 hours, and got our guys here by April 1st.
                  </h2>
                  <div className="flex items-center gap-4">
                    <InitialAvatar name="Jim Henderson" size="md" variant="navy" />
                    <div>
                      <p className="font-serif text-lg font-bold">Jim Henderson</p>
                      <p className="font-body text-navy/60">CEO, Tri-State Landscaping</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl md:w-1/2">
              <BrandImage imageKey="industrialWorkers" alt="Industrial workforce on site" fill />
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-h2">Transparent investment</h2>
              <p className="font-body text-body-lg text-navy/70">
                No per-worker percentages. Just flat-fee professional services.
              </p>
            </div>

            <div className="grid grid-cols-1 border border-navy/12 shadow-ambient md:grid-cols-3">
              {PRICING_TIERS.map((tier, i) => (
                <PricingTier key={tier.id} tier={tier} isLast={i === PRICING_TIERS.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-navy py-24 text-paper">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-3">
            <div className="aspect-square overflow-hidden rounded-lg border border-paper/20">
              <BrandImage imageKey="legalBooks" alt="Legal books and documents" fill />
            </div>
            <div className="space-y-6 md:col-span-2">
              <div className="inline-block border-l-2 border-copper py-2 pl-6">
                <h2 className="mb-2 font-serif text-h2">Legal-first approach</h2>
                <p className="font-body text-body-lg text-paper/80">
                  Attorney Michael Lerner is admitted to practice in OH, IL, and IN. We aren&apos;t
                  just recruiters; we are legal strategists ensuring your business is protected
                  from federal audits.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="mb-1 font-mono text-2xl text-copper">15+</div>
                  <div className="font-label text-xs uppercase tracking-widest text-paper/40">
                    Years of H-2B Focus
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-mono text-2xl text-copper">99%</div>
                  <div className="font-label text-xs uppercase tracking-widest text-paper/40">
                    Filing Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-8 mb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-copper p-16 text-center text-white shadow-xl">
            <div className="absolute right-0 top-0 opacity-10">
              <Icon name="work" style={{ fontSize: "300px" }} />
            </div>
            <div className="relative z-10">
              <h2 className="mb-6 font-serif text-h1">Stop guessing. Start hiring.</h2>
              <p className="mx-auto mb-10 max-w-2xl font-body text-body-lg text-white/90">
                Join 300+ seasonal businesses that trust H2B Workforce to secure their labor supply
                every season.
              </p>
              <Link
                href="/eligibility"
                className="inline-block rounded bg-white px-12 py-5 font-serif text-xl font-black text-copper transition-colors hover:bg-paper"
              >
                Claim Your 2026 Quota Slot
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CapBar({
  period,
}: {
  period: { used: number; total: number; label: string };
}) {
  const fill = Math.min(100, Math.round((period.used / period.total) * 100));
  const color = fill >= 100 ? "bg-error" : "bg-copper";
  const status =
    fill >= 100
      ? `${period.total.toLocaleString()} / ${period.total.toLocaleString()} Full`
      : `${period.used.toLocaleString()} / ${period.total.toLocaleString()} Open`;
  return (
    <div>
      <div className="mb-2 flex justify-between font-mono text-sm">
        <span>{period.label}</span>
        <span className="font-bold">{status}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-navy/10">
        <div className={`h-full ${color}`} style={{ width: `${fill}%` }} />
      </div>
    </div>
  );
}

function CostRow({
  label,
  value,
  valueClass = "",
  dark = false,
}: {
  label: string;
  value: string;
  valueClass?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex justify-between border-b pb-4 ${
        dark ? "border-paper/10" : "border-navy/10"
      }`}
    >
      <span className="font-body">{label}</span>
      <span className={`font-mono text-h3 ${valueClass}`}>{value}</span>
    </div>
  );
}

type Tier = (typeof PRICING_TIERS)[number];

function PricingTier({ tier, isLast }: { tier: Tier; isLast: boolean }) {
  return (
    <div
      className={`relative p-12 ${tier.highlighted ? "bg-paper" : ""} ${
        !tier.highlighted && !isLast ? "border-r border-navy/12" : ""
      }`}
    >
      {tier.highlighted ? <div className="absolute inset-x-0 top-0 h-1 bg-copper" /> : null}
      <h4 className="mb-2 font-serif text-2xl font-bold">{tier.name}</h4>
      <p className="mb-8 font-body text-navy/60">{tier.tagline}</p>
      <div className="mb-8 font-mono text-4xl font-bold">
        {tier.priceLabel}{" "}
        <span className="text-lg font-normal text-navy/40">/ season</span>
      </div>
      <ul className="mb-10 space-y-4">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-body">
            <Icon name="check" className="mt-1 text-sm text-copper" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/pricing"
        className={`block w-full py-3 text-center font-serif font-bold transition-colors ${
          tier.highlighted
            ? "bg-copper text-white hover:brightness-110"
            : "border border-navy hover:bg-navy hover:text-white"
        }`}
      >
        {tier.cta}
      </Link>
    </div>
  );
}
