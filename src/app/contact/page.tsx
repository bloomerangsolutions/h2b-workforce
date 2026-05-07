import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

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
              <h1 className="mb-6 font-serif text-h1 text-navy">
                Schedule a consultation.
              </h1>
              <p className="mb-12 font-body text-body-lg text-on-surface-variant">
                A 15-minute call with our team to assess your seasonal labor needs and outline next
                steps. No commitment required.
              </p>

              <div className="space-y-8">
                <ContactRow icon="location_on" label="Office" value="8039 Broadmoor Road, Mentor, OH 44060" />
                <ContactRow icon="mail" label="Email" value="hello@h2bworkforce.com" />
                <ContactRow icon="call" label="Direct Line" value="(440) 555-0142" />
                <ContactRow icon="schedule" label="Hours" value="Mon-Fri 8am-6pm ET" />
              </div>
            </div>

            <div className="rounded-lg border border-navy/12 bg-white p-10 shadow-ambient">
              <h2 className="mb-6 font-serif text-h2 text-navy">Send us a message</h2>
              <div className="space-y-6">
                <Field label="Company name" placeholder="Your business" />
                <Field label="Industry" placeholder="Landscaping, Roofing, etc." />
                <Field label="Email" placeholder="you@company.com" type="email" />
                <Field label="Phone" placeholder="(555) 555-5555" type="tel" />
                <div>
                  <label className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    What do you need?
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Brief description of your seasonal labor needs..."
                    className="w-full rounded border border-navy/12 bg-paper px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-copper"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded bg-copper py-4 font-body font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                >
                  Send message
                </button>
                <p className="text-xs text-on-surface-variant">
                  This form does not create an attorney-client relationship. We respond within one
                  business day.
                </p>
              </div>
            </div>
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

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded border border-navy/12 bg-paper px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-copper"
      />
    </div>
  );
}
