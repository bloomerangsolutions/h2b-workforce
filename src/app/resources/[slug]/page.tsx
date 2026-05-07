import Link from "next/link";
import { notFound } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { BrandImage } from "@/components/BrandImage";
import { InitialAvatar } from "@/components/InitialAvatar";
import type { ImageKey } from "@/lib/site";

type Article = {
  title: string;
  date: string;
  category: string;
  intro: string;
  hero: ImageKey;
  sections: { heading: string; body: string }[];
  quote?: { text: string; attribution: string };
};

const ARTICLES: Record<string, Article> = {
  "2024-supplemental-cap": {
    title: "Navigating the 2024 supplemental H-2B visa cap: what employers need to know",
    date: "March 12, 2024",
    category: "Regulatory Update",
    hero: "documentsDesk",
    intro:
      "The Department of Homeland Security (DHS) and the Department of Labor (DOL) have officially announced the release of nearly 65,000 supplemental H-2B temporary nonagricultural worker visas for fiscal year 2024. For industries like landscaping, roofing, and seasonal hospitality, this announcement is both a relief and a complex administrative hurdle.",
    sections: [
      {
        heading: "Statutory framework and citations",
        body: "Under the Immigration and Nationality Act (INA), specifically section 214(g)(1)(B), the annual H-2B cap is set at 66,000 per fiscal year. However, the Secretary of Homeland Security, in consultation with the Secretary of Labor, maintains the discretionary authority to increase this cap based on economic necessity.",
      },
      {
        heading: "Key deadlines for seasonal operations",
        body: "For employers seeking workers for the summer season (April 1 to Sept 30), the filing window is exceptionally narrow. The labor certification process must be completed with pinpoint accuracy to avoid the audit trap that often delays petitions.",
      },
    ],
    quote: {
      text: "The temporary increase is designed to address the urgent labor needs of seasonal employers while protecting the interests of U.S. workers and ensuring the program's integrity.",
      attribution: "Official DHS Guidance, Section 8 CFR Part 214",
    },
  },
  "scaling-greenscapes": {
    title: "How Greenscapes Inc scaled to 40 workers in 2 seasons",
    date: "October 12, 2024",
    category: "Case Study",
    hero: "warehouse",
    intro:
      "When Greenscapes Inc came to us in 2022, they were turning down $200k in maintenance contracts due to labor shortages. Two seasons later, they've scaled to a 40-worker H-2B crew with zero turnover.",
    sections: [
      {
        heading: "The starting point",
        body: "A regional landscaping firm in Northeast Ohio with strong local demand but a hard ceiling on growth. They had attempted local recruitment for three consecutive seasons with diminishing returns.",
      },
      {
        heading: "The intervention",
        body: "We filed for 15 H-2B workers in season one, focused on hardscape installation crews. By season two, returning worker provisions allowed us to expand to 40 with significantly reduced training costs.",
      },
    ],
  },
  "2025-dol-rules": {
    title: "New Department of Labor rules for 2025 explained",
    date: "October 8, 2024",
    category: "News",
    hero: "modernOffice",
    intro:
      "The DOL released updated guidance on H-2B housing standards and worker transportation requirements effective fiscal year 2025. Here is what every seasonal employer needs to act on.",
    sections: [
      {
        heading: "Housing requirements update",
        body: "Compliant housing now requires documented inspection certificates from local authorities or a licensed third-party inspector. Self-attestation is no longer sufficient.",
      },
      {
        heading: "Transportation reimbursement",
        body: "Workers must now be reimbursed for inbound transportation costs at the 50% completion mark of their contract, rather than the previous standard of contract end. This requires updated payroll workflows.",
      },
    ],
  },
};

const RECENT_INSIGHTS = [
  {
    slug: "2025-dol-rules",
    category: "Compliance",
    title: "The cost of housing: new DOL standards for 2024",
    read: "5 min read",
  },
  {
    slug: "scaling-greenscapes",
    category: "Strategy",
    title: "Sourcing workers from Guatemala and Honduras",
    read: "8 min read",
  },
];

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-7xl px-8 py-16">
        {/* Article Header */}
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="bg-navy px-3 py-1 font-label text-xs font-semibold uppercase tracking-widest text-paper">
              {article.category}
            </span>
            <span className="font-mono text-xs text-navy/60">{article.date}</span>
          </div>
          <h1 className="mb-8 font-serif text-h1 leading-tight text-navy">{article.title}</h1>
          <div className="mb-12 flex items-center gap-4 border-l-2 border-copper pl-6">
            <InitialAvatar name="Michael Lerner" size="md" variant="navy" />
            <div>
              <p className="font-body font-bold text-navy">By Michael Lerner</p>
              <p className="font-body text-sm text-navy/60">Founding Attorney & Policy Lead</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mb-16 aspect-[21/9] w-full overflow-hidden rounded-lg border border-navy/12 shadow-ambient">
          <BrandImage imageKey={article.hero} alt={article.title} fill priority />
        </div>

        {/* Body & Sidebar */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <p className="mb-8 font-body text-body-lg leading-relaxed text-navy/90">
              {article.intro}
            </p>

            {article.sections.map((section, i) => (
              <div key={i}>
                <h2 className="mb-4 mt-10 font-serif text-h2 text-navy">{section.heading}</h2>
                <p className="mb-6 font-body text-navy/80">{section.body}</p>
              </div>
            ))}

            {article.quote ? (
              <blockquote className="my-10 rounded-lg border-l-4 border-copper bg-navy/5 p-8 italic text-navy">
                &ldquo;{article.quote.text}&rdquo;
                <span className="mt-2 block text-sm not-italic text-navy/60">
                  — {article.quote.attribution}
                </span>
              </blockquote>
            ) : null}

            <div className="my-10 rounded-lg border border-navy/12 bg-paper p-8 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-h3 text-navy">
                <Icon name="verified_user" className="text-copper" />
                Compliance checklist
              </h3>
              <ul className="space-y-4 font-body text-navy/80">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-copper">01</span>
                  <span>Verify Returning Worker status for existing labor pools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-copper">02</span>
                  <span>Execute local recruitment efforts 60 days prior to filing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-copper">03</span>
                  <span>Maintain exhaustive prevailing wage documentation for DOL audits.</span>
                </li>
              </ul>
            </div>

            {/* Author Bio */}
            <div className="mt-20 border-t border-navy/12 pt-12">
              <div className="flex flex-col items-center gap-8 rounded-lg border border-navy/12 bg-white p-10 shadow-ambient md:flex-row md:items-start">
                <InitialAvatar name="Michael Lerner" size="lg" variant="navy" />
                <div className="text-center md:text-left">
                  <p className="mb-2 font-label text-xs font-semibold uppercase tracking-widest text-copper">
                    About the Author
                  </p>
                  <h4 className="mb-3 font-serif text-h3 text-navy">Michael Lerner</h4>
                  <p className="font-body leading-relaxed text-navy/70">
                    Michael Lerner is an attorney specializing in employment-based immigration with
                    over 20 years of experience helping seasonal businesses secure the workforce
                    they need while maintaining strict adherence to DOL regulations.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="space-y-12">
              <div className="rounded-lg bg-navy p-8 text-paper">
                <p className="mb-4 font-label text-xs font-semibold uppercase tracking-widest text-copper">
                  Direct Consultation
                </p>
                <h3 className="mb-6 font-serif text-h3">Need legal advice for your H-2B filing?</h3>
                <p className="mb-8 font-body text-paper/70">
                  Our attorneys are currently accepting new seasonal petitions for the late-summer
                  and winter seasons.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-copper py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#a66222]"
                >
                  Book a Strategy Call
                </Link>
              </div>

              <div>
                <h4 className="mb-6 border-b border-navy/12 pb-2 font-serif text-xl text-navy">
                  Recent insights
                </h4>
                <div className="space-y-6">
                  {RECENT_INSIGHTS.map((insight) => (
                    <Link
                      key={insight.slug}
                      href={`/resources/${insight.slug}`}
                      className="group block"
                    >
                      <p className="mb-1 font-label text-[10px] uppercase text-copper">
                        {insight.category}
                      </p>
                      <h5 className="font-serif text-lg leading-snug text-navy transition-colors group-hover:text-copper">
                        {insight.title}
                      </h5>
                      <p className="mt-2 font-mono text-xs text-navy/50">{insight.read}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <CTABanner
        variant="navy"
        title="Secure your workforce for next season."
        body="Don't leave your seasonal labor to chance. Join 400+ businesses who trust H2B Workforce for compliant, efficient visa processing."
        primaryLabel="Start Eligibility Check"
      />
      <Footer />
    </>
  );
}
