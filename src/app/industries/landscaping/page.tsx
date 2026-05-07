import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Landscaping | H2B Workforce",
  description:
    "H-2B for landscaping companies. Reliable seasonal labor for the green industry with legal compliance and predictable operations.",
};

export default function LandscapingPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-paper py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
            <div className="z-10">
              <div className="mb-8 h-1 w-12 bg-copper" />
              <h1 className="mb-6 font-serif text-h1 text-navy">
                H-2B for landscaping companies.
              </h1>
              <p className="mb-10 max-w-xl font-body text-body-lg text-navy/70">
                Reliable labor solutions for the green industry. Secure your seasonal workforce
                with legal compliance and predictable operations.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/eligibility"
                  className="rounded bg-copper px-8 py-4 font-body text-white shadow-lg transition-all hover:brightness-110"
                >
                  Start Application
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded border border-navy px-8 py-4 font-body text-navy transition-all hover:bg-navy/5"
                >
                  View Process
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#3a5a40] to-[#1a2e23] shadow-2xl">
              <div className="flex h-full w-full items-center justify-center">
                <Icon name="park" className="text-paper/20" style={{ fontSize: "180px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Labor Gap */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-16 text-center font-serif text-h2">The labor gap in landscaping</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ProblemCard
                icon="person_remove"
                title="Unpredictable retention"
                body="Stop dealing with the Monday morning 'no-show' problem. Local seasonal labor is increasingly volatile for physical trades."
              />
              <ProblemCard
                icon="trending_down"
                title="Profit leakage"
                body="Turning down contracts because you lack crews is lost revenue that never comes back. Scale your bids with confidence."
              />
              <ProblemCard
                icon="gavel"
                title="Compliance risk"
                body="Informal labor arrangements expose your company to massive legal and insurance liabilities. We fix the paper trail."
              />
            </div>
          </div>
        </section>

        {/* Why H-2B Fits */}
        <section className="bg-paper py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-24 px-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-h2">Why H-2B fits landscaping specifically</h2>
              <p className="mb-12 font-body text-body-lg text-navy/70">
                The visa program is designed for industries with sharp seasonal peaks and manual
                labor intensity.
              </p>
              <ul className="space-y-6">
                <FitItem
                  title="Defined seasonality"
                  body="Matches the April–November landscaping cycle perfectly."
                />
                <FitItem
                  title="Returning worker exemptions"
                  body="Bring back the same skilled crew year after year without training costs."
                />
                <FitItem
                  title="Scalable crew sizes"
                  body="From a 3-man maintenance team to a 50-person installation force."
                />
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-lg bg-navy p-12 text-paper shadow-xl">
              <h3 className="mb-6 font-serif text-h3 text-copper">Typical client profile</h3>
              <div className="space-y-8">
                <ProfileRow label="Annual Revenue" value="$1.2M - $15M" />
                <ProfileRow label="Peak Headcount" value="12 - 85 Employees" />
                <ProfileRow label="Work Type" value="Maintenance & Hardscape" />
                <ProfileRow label="Location" value="Northeast & Midwest" />
              </div>
            </div>
          </div>
        </section>

        {/* Spring-Ready Timeline */}
        <section className="bg-paper py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <h2 className="mb-2 font-serif text-h2">The spring-ready timeline</h2>
                <p className="font-body text-navy/60">
                  Planning ahead is the only way to beat the cap.
                </p>
              </div>
              <span className="hidden font-mono text-h3 text-copper md:block">01 / 04</span>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                {
                  num: "01",
                  month: "October",
                  body: "Prevailing Wage Determination and recruitment plan finalization.",
                },
                {
                  num: "02",
                  month: "December",
                  body: "Department of Labor filing and the 'Lottery' submission.",
                },
                {
                  num: "03",
                  month: "February",
                  body: "Consulate interviews and worker visa processing in country.",
                },
                {
                  num: "04",
                  month: "April 1st",
                  body: "Workers arrive on-site, ready for the first spring cleanup.",
                },
              ].map((step) => (
                <div key={step.num} className="group relative">
                  <div className="mb-4 font-mono text-4xl text-navy/10 transition-colors group-hover:text-copper">
                    {step.num}
                  </div>
                  <h4 className="mb-2 text-lg font-bold">{step.month}</h4>
                  <p className="text-sm text-navy/60">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-8">
            <h2 className="mb-16 text-center font-serif text-h2">Landscaping FAQs</h2>
            <div className="space-y-6">
              <FAQ
                q="Do I have to pay for their housing?"
                a="While you must ensure housing is available, most landscaping employers deduct the cost from the workers' weekly wages according to federal guidelines. We help you source compliant housing solutions."
              />
              <FAQ
                q="What if they leave the job early?"
                a="H-2B workers are legally tied to your company for the duration of their visa. If they abandon the position, you are required to notify the DOL, and we assist with the reporting process."
              />
              <FAQ
                q="Can they drive our company trucks?"
                a="Yes, provided they obtain a valid US state driver's license or have an international license recognized by your insurance carrier. Many of our clients transition veteran workers into crew lead roles with driving responsibilities."
              />
            </div>
          </div>
        </section>

        <CTABanner
          variant="copper"
          title="Ready for your best season yet?"
          body="Don't wait until March to realize you're understaffed. Our slots for the next fiscal year are filling up."
          primaryLabel="Schedule a Labor Audit"
        />
      </main>
      <Footer />
    </>
  );
}

function ProblemCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-navy/12 p-8 shadow-ambient">
      <Icon name={icon} className="mb-6 text-4xl text-copper" />
      <h3 className="mb-4 font-serif text-h3">{title}</h3>
      <p className="font-body text-navy/60">{body}</p>
    </div>
  );
}

function FitItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex items-start gap-4">
      <Icon name="check_circle" filled className="mt-1 text-copper" />
      <div>
        <span className="block font-bold text-navy">{title}</span>
        <span className="font-body text-navy/60">{body}</span>
      </div>
    </li>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end justify-between border-b border-paper/10 pb-4">
      <span className="font-label text-xs uppercase tracking-widest opacity-60">{label}</span>
      <span className="font-mono text-xl">{value}</span>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-navy/8 pb-6">
      <summary className="flex cursor-pointer list-none items-center justify-between text-left font-bold text-lg text-navy">
        {q}
        <Icon
          name="expand_more"
          className="text-copper transition-transform group-open:rotate-180"
        />
      </summary>
      <p className="mt-4 leading-relaxed text-navy/60">{a}</p>
    </details>
  );
}
