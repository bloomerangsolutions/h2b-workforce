import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact | H2B Workforce",
  description: "Schedule a consultation with the H2B Workforce legal team.",
};

export default function ContactPage() {
  return (
    <>
      <TopNav />
      <main>
        <section className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <span className="mb-4 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
                Get in Touch
              </span>
              <h1 className="mb-6 font-serif text-h1 text-navy">Schedule a consultation.</h1>
              <p className="mb-12 font-body text-body-lg text-on-surface-variant">
                A 15-minute call with our team to assess your seasonal labor needs and outline next
                steps. No commitment required.
              </p>

              <div className="space-y-8">
                <ContactRow
                  icon="location_on"
                  label="Office"
                  value={`${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`}
                />
                <ContactRow icon="mail" label="Email" value={SITE.email} />
                <ContactRow icon="call" label="Direct Line" value={SITE.phone} />
                <ContactRow icon="schedule" label="Hours" value="Mon-Fri 8am-6pm ET" />
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <Icon name={icon} className="mt-1 text-copper" />
      <div>
        <p className="mb-1 font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
          {label}
        </p>
        <p className="font-body text-navy">{value}</p>
      </div>
    </div>
  );
}
