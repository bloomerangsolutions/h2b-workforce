import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Pricing | H2B Workforce",
  description:
    "Transparent flat-fee pricing for H-2B visa processing. No per-worker percentages, no hidden costs.",
};

export default function PricingPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-8 py-24">
          <div className="max-w-3xl">
            <span className="mb-4 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
              Pricing Transparency
            </span>
            <h1 className="mb-6 font-serif text-h1 text-navy">
              Transparent pricing. No hidden costs.
            </h1>
            <p className="font-body text-body-lg leading-relaxed text-navy/70">
              We provide industrial-grade workforce solutions with a focus on predictability. Know
              exactly what you are paying for, from legal filings to logistical coordination.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <PricingCard
              name="Self-Serve"
              price="$4,500"
              tagline="Digital infrastructure for the DIY business owner."
              features={[
                "Document preparation software",
                "Filing deadline tracking",
                "Email support",
              ]}
              cta="Start for free"
            />
            <PricingCard
              name="Attorney-Reviewed"
              price="$7,500"
              tagline="Peace of mind for scaling landscaping & roofing ops."
              features={[
                "Everything in Self-Serve",
                "Full attorney audit of filings",
                "RFE protection guarantee",
                "Priority phone support",
              ]}
              cta="Get started"
              highlighted
            />
            <PricingCard
              name="White-Glove"
              price="$11,500"
              tagline="Total hands-off management for large fleets."
              features={[
                "Everything in Attorney-Reviewed",
                "Recruitment & housing coordination",
                "Dedicated account manager",
                "On-site audit preparation",
              ]}
              cta="Contact sales"
            />
          </div>
        </section>

        {/* Government Fees Transparency */}
        <section className="bg-navy py-24 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-h2">
                Government fees are separate. Always.
              </h2>
              <p className="mb-8 font-body text-body-lg leading-relaxed text-white/70">
                Unlike competitors, we don&apos;t hide government filing fees in our service costs.
                You pay what the government asks, and we handle the complexity of the paperwork.
              </p>
              <div className="space-y-4">
                <FeeRow label="DOL Filing Fee" amount="$100 - $300" />
                <FeeRow label="USCIS I-129 Fee" amount="$460" />
                <FeeRow label="Fraud Prevention Fee" amount="$150" />
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded border border-white/20 bg-gradient-to-br from-navy via-[#1a3050] to-navy">
              <div className="flex h-full w-full items-center justify-center">
                <Icon name="account_balance" className="text-paper/20" style={{ fontSize: "180px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mx-auto max-w-7xl px-8 py-24">
          <h2 className="mb-12 text-center font-serif text-h2">How we compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-navy/12">
                  <th className="py-6 font-serif text-lg">Feature</th>
                  <th className="py-6 font-serif text-lg text-copper">H2B Workforce</th>
                  <th className="py-6 font-serif text-lg opacity-50">Local Law Firm</th>
                  <th className="py-6 font-serif text-lg opacity-50">DIY Filing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5">
                <CompareRow label="Recruitment Dashboard" us tier1={false} tier2={false} />
                <CompareRow label="Attorney Filing Review" us tier1 tier2={false} />
                <CompareRow label="Digital Compliance Storage" us tier1={false} tier2={false} />
                <CompareRow label="Flat Rate Guarantee" us tier1={false} tier2 />
              </tbody>
            </table>
          </div>
        </section>

        {/* Money-back Guarantee */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="flex flex-col items-center gap-12 rounded border border-copper/20 bg-copper/10 p-12 md:flex-row">
            <div className="rounded-full bg-white p-6 shadow-inner">
              <Icon name="verified_user" filled className="text-6xl text-copper" />
            </div>
            <div>
              <h2 className="mb-4 font-serif text-h2 text-copper">
                Our RFE Protection Guarantee
              </h2>
              <p className="max-w-2xl font-body text-body-lg leading-relaxed text-navy/70">
                If you receive a Request for Evidence (RFE) while on our Attorney-Reviewed plan,
                our legal team handles the response at no additional cost. If your petition is
                denied due to an error on our part, we refund 100% of our service fee.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-8 py-24">
          <h2 className="mb-12 font-serif text-h2">Common questions</h2>
          <div className="space-y-8">
            <FAQItem
              q="When should I start my application?"
              a="We recommend starting at least 180 days before your intended start date. The H-2B process is highly seasonal and competitive; early filing is the only way to ensure your spot in the lottery."
            />
            <FAQItem
              q="Do you offer payment plans?"
              a="Yes. We offer a 50/50 split: half at the time of signing and the remainder once the labor certification is approved by the DOL."
            />
            <FAQItem
              q="What if my industry isn't listed?"
              a="H-2B is for any non-agricultural seasonal work. If your business has a peak season or a specific one-time need, we can likely help. Contact us for a free consultation."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-paper px-8 py-32 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-serif text-h1">Ready to secure your crew?</h2>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/eligibility"
                className="rounded bg-copper px-10 py-5 font-serif text-lg text-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="rounded border border-navy px-10 py-5 font-serif text-lg text-navy transition-all hover:bg-navy/5"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PricingCard({
  name,
  price,
  tagline,
  features,
  cta,
  highlighted = false,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded p-10 ${
        highlighted
          ? "z-10 scale-105 transform border-2 border-copper bg-white shadow-[0px_10px_30px_rgba(184,115,51,0.1)]"
          : "border border-navy/12 bg-white shadow-ambient"
      }`}
    >
      {highlighted ? (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-copper px-4 py-1 font-label text-[10px] font-semibold uppercase tracking-widest text-white">
          Most Recommended
        </div>
      ) : null}
      <h3 className="mb-2 font-serif text-h3">{name}</h3>
      <p className="mb-8 h-12 font-body text-navy/70">{tagline}</p>
      <div className="mb-8">
        <span className="font-mono text-4xl font-bold">{price}</span>
        <span className="text-navy/70"> / season</span>
      </div>
      <ul className="mb-12 flex-grow space-y-4">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Icon name="check_circle" className="mt-1 text-sm text-copper" />
            <span className="font-body">{f}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`w-full rounded py-4 font-semibold transition-all ${
          highlighted
            ? "bg-copper text-white hover:shadow-lg"
            : "border border-navy text-navy hover:bg-navy/5"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}

function FeeRow({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-4">
      <span className="font-body">{label}</span>
      <span className="font-mono">{amount}</span>
    </div>
  );
}

function CompareRow({
  label,
  us,
  tier1,
  tier2,
}: {
  label: string;
  us: boolean;
  tier1: boolean;
  tier2: boolean;
}) {
  const Mark = ({ on }: { on: boolean }) =>
    on ? (
      <Icon name="check_circle" className="text-on-tertiary-container" />
    ) : (
      <Icon name="cancel" className="text-on-surface-variant/30" />
    );
  return (
    <tr>
      <td className="py-6 font-body">{label}</td>
      <td className="py-6">
        <Mark on={us} />
      </td>
      <td className="py-6">
        <Mark on={tier1} />
      </td>
      <td className="py-6">
        <Mark on={tier2} />
      </td>
    </tr>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-navy/12 pb-8">
      <h4 className="mb-3 font-serif text-xl">{q}</h4>
      <p className="font-body text-on-surface-variant">{a}</p>
    </div>
  );
}
