import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | H2B Workforce",
};

export default function PrivacyPage() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-3xl px-8 py-24">
        <h1 className="mb-8 font-serif text-h1 text-navy">Privacy Policy</h1>
        <p className="mb-6 font-body text-on-surface-variant">
          Last updated: January 2026
        </p>
        <div className="prose space-y-6 font-body text-navy/80">
          <p>
            This privacy policy describes how H2B Workforce collects, uses, and protects
            information you provide through this website.
          </p>
          <h2 className="mt-8 font-serif text-h2 text-navy">Information we collect</h2>
          <p>
            We collect information you voluntarily provide through forms on our site, including
            your name, email, phone number, company information, and the contents of your
            inquiries.
          </p>
          <h2 className="mt-8 font-serif text-h2 text-navy">How we use it</h2>
          <p>
            Information is used solely to respond to your inquiry, evaluate eligibility for our
            services, and provide ongoing client communications. We do not sell information to
            third parties.
          </p>
          <h2 className="mt-8 font-serif text-h2 text-navy">Attorney-client relationship</h2>
          <p>
            Submitting a form does not create an attorney-client relationship. Such a relationship
            is established only upon execution of a written engagement agreement.
          </p>
          <h2 className="mt-8 font-serif text-h2 text-navy">Contact</h2>
          <p>
            Questions about this policy can be directed to hello@h2bworkforce.com.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
