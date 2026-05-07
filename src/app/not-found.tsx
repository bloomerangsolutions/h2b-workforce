import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <>
      <TopNav />
      <main className="flex min-h-[60vh] items-center px-8 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <Icon name="signpost" className="text-copper" style={{ fontSize: "120px" }} />
          </div>
          <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-copper">
            404 — Page Not Found
          </span>
          <h1 className="mb-6 font-serif text-h1 text-navy">
            That page is no longer at this address.
          </h1>
          <p className="mb-12 font-body text-body-lg text-navy/70">
            The link may be outdated, or you may have arrived here by mistake. Try one of these:
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded bg-copper px-8 py-4 font-serif font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
            >
              Back to home
            </Link>
            <Link
              href="/eligibility"
              className="rounded border border-navy px-8 py-4 font-serif font-bold text-navy transition-all hover:bg-navy hover:text-white"
            >
              Check eligibility
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
