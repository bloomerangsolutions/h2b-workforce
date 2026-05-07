import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { BrandImage } from "@/components/BrandImage";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { ImageKey } from "@/lib/site";

export const metadata = {
  title: "Resources & Insights | H2B Workforce",
  description:
    "Practical guides, regulatory updates, and industry strategies for scaling your seasonal workforce with H-2B visa programs.",
};

const ARTICLES: {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: ImageKey;
}[] = [
  {
    slug: "2024-supplemental-cap",
    date: "OCT 14, 2024",
    category: "Compliance",
    title: "Audit-proofing your payroll for DOL inspections",
    excerpt:
      "Simple steps to ensure your wage records meet every federal H-2B requirement without the headache.",
    image: "documentsDesk",
  },
  {
    slug: "scaling-greenscapes",
    date: "OCT 12, 2024",
    category: "Case Study",
    title: "How Greenscapes Inc scaled to 40 workers in 2 seasons",
    excerpt:
      "A deep dive into the operational shifts required to manage a larger seasonal crew effectively.",
    image: "warehouse",
  },
  {
    slug: "2025-dol-rules",
    date: "OCT 08, 2024",
    category: "News",
    title: "New Department of Labor rules for 2025 explained",
    excerpt:
      "Breaking down the recent changes in housing regulations and worker transportation requirements.",
    image: "modernOffice",
  },
  {
    slug: "resort-staffing",
    date: "OCT 05, 2024",
    category: "Hospitality",
    title: "Seasonal peak management for resort operations",
    excerpt:
      "Best practices for onboarding and integrating H-2B staff into high-touch service environments.",
    image: "geometricBuilding",
  },
  {
    slug: "12-month-forecast",
    date: "OCT 01, 2024",
    category: "Planning",
    title: "Forecasting your workforce needs: a 12-month map",
    excerpt:
      "Why successful H-2B users start their planning nearly a year before the first worker arrives on site.",
    image: "blueprints",
  },
  {
    slug: "i129-mistakes",
    date: "SEP 28, 2024",
    category: "Legal",
    title: "Common mistakes in Form I-129 filings",
    excerpt:
      "The minor errors that lead to major delays and how to avoid them with rigorous internal review.",
    image: "teamMeeting",
  },
];

const FEATURED = ARTICLES[0];
const TOPICS = ["All Topics", "Landscaping", "Construction", "Hospitality", "Compliance"];

export default function ResourcesPage() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-7xl px-8">
        {/* Hero */}
        <header className="max-w-4xl py-24">
          <span className="mb-4 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
            Resources & Insights
          </span>
          <h1 className="mb-8 font-serif text-h1 text-navy">
            H-2B for the operator who needs answers, not legalese.
          </h1>
          <p className="max-w-2xl font-body text-body-lg text-on-surface-variant">
            Practical guides, regulatory updates, and industry strategies for scaling your
            workforce with seasonal visa programs.
          </p>
        </header>

        {/* Featured */}
        <section className="mb-24">
          <div className="grid grid-cols-1 items-center gap-12 rounded-lg border border-navy/12 bg-white p-8 shadow-ambient md:grid-cols-12">
            <div className="h-[400px] overflow-hidden rounded md:col-span-7">
              <BrandImage imageKey={FEATURED.image} alt={FEATURED.title} fill />
            </div>
            <div className="flex flex-col justify-center md:col-span-5">
              <span className="mb-4 flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
                <Icon name="star" filled className="text-sm" />
                Featured Article
              </span>
              <h2 className="mb-6 font-serif text-h2 text-navy">
                The 2025 H-2B cap strategy: planning your filing timeline
              </h2>
              <p className="mb-8 font-body text-on-surface-variant">
                Everything you need to know about the upcoming lottery cycles and how to position
                your business for the highest chance of approval.
              </p>
              <Link
                href={`/resources/${FEATURED.slug}`}
                className="flex items-center gap-2 font-medium text-copper transition-all hover:gap-4"
              >
                Read the guide <Icon name="arrow_forward" />
              </Link>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="mb-12 flex flex-col justify-between border-b border-navy/12 pb-6 md:flex-row md:items-center">
          <div className="flex gap-6 overflow-x-auto pb-4 md:pb-0">
            {TOPICS.map((topic, i) => (
              <button
                key={topic}
                type="button"
                className={`whitespace-nowrap rounded px-4 py-2 font-label text-xs font-semibold uppercase tracking-widest transition-colors ${
                  i === 0
                    ? "bg-navy text-white"
                    : "border border-navy/12 text-on-surface-variant hover:border-copper hover:text-copper"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="relative mt-4 md:mt-0">
            <Icon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full rounded border border-navy/12 bg-paper py-2 pl-10 pr-4 font-body text-sm outline-none focus:ring-2 focus:ring-copper md:w-64"
            />
          </div>
        </section>

        {/* Post Grid */}
        <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="group flex flex-col"
            >
              <div className="mb-6 h-64 overflow-hidden rounded border border-navy/12 transition-transform duration-500 group-hover:scale-[1.02]">
                <BrandImage imageKey={article.image} alt={article.title} fill />
              </div>
              <span className="mb-2 font-mono text-xs text-copper">
                {article.date} — {article.category.toUpperCase()}
              </span>
              <h3 className="mb-4 font-serif text-h3 text-navy transition-colors group-hover:text-copper">
                {article.title}
              </h3>
              <p className="font-body text-on-surface-variant">{article.excerpt}</p>
            </Link>
          ))}
        </section>

        {/* Newsletter */}
        <section className="mb-24">
          <div className="flex flex-col items-center justify-between gap-12 rounded-lg bg-copper p-12 text-white md:flex-row md:p-20">
            <div className="max-w-xl text-left">
              <h2 className="mb-4 font-serif text-h2">Stay ahead of the cap.</h2>
              <p className="font-body text-body-lg opacity-90">
                Join 2,400+ industry leaders receiving our bi-weekly dispatch on regulatory changes
                and labor strategies. No fluff, just the facts.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
