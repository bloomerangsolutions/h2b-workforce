import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="bg-navy pb-20 pt-20 text-paper">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
            <div className="space-y-8 text-left">
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
                  className="rounded bg-copper px-8 py-4 font-serif text-lg font-bold text-white transition-all hover:brightness-110 active:scale-95"
                >
                  Start Eligibility Quiz
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded border border-paper/20 px-8 py-4 font-serif text-lg transition-all hover:bg-paper/5"
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
                  <span className="font-mono text-xs text-copper">2m ago</span>
                </div>
              </div>

              <div className="space-y-6">
                <CapBar
                  label="1st Half (Oct 1 Start)"
                  status="33,000 / 33,000 Full"
                  fill={100}
                  color="bg-error"
                />
                <CapBar
                  label="2nd Half (April 1 Start)"
                  status="12,450 / 33,000 Open"
                  fill={38}
                  color="bg-copper"
                />
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
              {["Landscaping", "Roofing", "Concrete", "Painting", "Restaurants", "Hospitality"].map(
                (industry) => (
                  <Link
                    key={industry}
                    href={`/industries/${industry.toLowerCase()}`}
                    className="cursor-pointer rounded-full border border-navy/12 bg-white px-6 py-2 font-serif text-navy transition-colors hover:border-copper"
                  >
                    {industry}
                  </Link>
                ),
              )}
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
                  <CostRow label="Recruitment & Ads" value="$4,200" />
                  <CostRow label="Average Turnover Rate (60%)" value="$12,500" valueClass="text-error" />
                  <CostRow label="Onboarding & Training" value="$3,800" />
                  <div className="flex justify-between pt-4 font-bold">
                    <span className="font-serif text-xl">Total Per Season</span>
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
                  <CostRow label="Legal & Compliance Filing" value="$2,800" dark />
                  <CostRow label="Retention Rate (98%)" value="$0" valueClass="text-on-tertiary-container" dark />
                  <CostRow label="Return-Worker Automation" value="$500" dark />
                  <div className="flex justify-between pt-4 font-bold">
                    <span className="font-serif text-xl text-copper">Net Monthly Savings</span>
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
                  title: "Eligibility Quiz",
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
                  title: "Workers Arrive",
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
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-navy/10" />
                    <div>
                      <p className="font-serif text-lg font-bold">Jim Henderson</p>
                      <p className="font-body text-navy/60">CEO, Tri-State Landscaping</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-navy via-navy to-[#1f3a5c] p-1 shadow-2xl md:w-1/2">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-navy/80">
                <Icon name="image" className="text-paper/20" style={{ fontSize: "120px" }} />
              </div>
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
              <PricingTier
                name="Self-Serve"
                price="$4,500"
                description="Best for returning employers with existing worker lists."
                features={["DIY filing software", "Form I-129 preparation", "Document checklist"]}
                cta="Select Plan"
              />
              <PricingTier
                name="Attorney-Reviewed"
                price="$7,500"
                description="For companies needing new talent and full compliance handling."
                features={[
                  "Everything in Self-Serve",
                  "Full attorney audit of filings",
                  "RFE protection guarantee",
                  "Priority phone support",
                ]}
                cta="Most Popular"
                highlighted
              />
              <PricingTier
                name="White-Glove"
                price="$11,500"
                description="Multi-state operations and large workforce pools (50+)."
                features={[
                  "Audit defense strategy",
                  "On-site compliance setup",
                  "Dedicated program manager",
                ]}
                cta="Talk to Sales"
              />
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-navy py-24 text-paper">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-3">
            <div className="aspect-square overflow-hidden rounded-lg border border-paper/20 bg-paper/10">
              <div className="flex h-full w-full items-center justify-center">
                <Icon name="person" className="text-paper/20" style={{ fontSize: "120px" }} />
              </div>
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
  label,
  status,
  fill,
  color,
}: {
  label: string;
  status: string;
  fill: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-mono text-sm">
        <span>{label}</span>
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

function PricingTier({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative p-12 ${
        highlighted ? "bg-paper" : ""
      } ${highlighted ? "" : "border-r border-navy/12 last:border-r-0"}`}
    >
      {highlighted ? <div className="absolute inset-x-0 top-0 h-1 bg-copper" /> : null}
      <h4 className="mb-2 font-serif text-2xl font-bold">{name}</h4>
      <p className="mb-8 font-body text-navy/60">{description}</p>
      <div className="mb-8 font-mono text-4xl font-bold">
        {price}{" "}
        <span className="text-lg font-normal text-navy/40">/ season</span>
      </div>
      <ul className="mb-10 space-y-4">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-body">
            <Icon name="check" className="mt-1 text-sm text-copper" />
            {f}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`w-full py-3 font-serif font-bold transition-colors ${
          highlighted
            ? "bg-copper text-white hover:brightness-110"
            : "border border-navy hover:bg-navy hover:text-white"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}
