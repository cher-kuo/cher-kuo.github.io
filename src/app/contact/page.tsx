import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Book Your Physiotherapy Appointment",
  description: "Contact Liv Motion Physiotherapy in Vancouver & Burnaby. Call (604) 771-7898 or email livmophysio@gmail.com. Open Tuesday-Saturday 11AM-8PM. Book online at Omni Massage & Wellness or Mapleleaf Rehab.",
  keywords: ["contact physiotherapist Vancouver", "book physiotherapy appointment Burnaby", "Liv Motion Physiotherapy contact", "physiotherapy clinic hours"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Liv Motion Physiotherapy",
    description: "Get in touch with Liv Motion Physiotherapy. Call (604) 771-7898 or book online. Located in Vancouver & Burnaby.",
    url: "https://www.cheriekuo.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const phoneDisplay = "+1 (604) 771-7898";
  const phoneHref = "tel:+16047717898";
  const email = "livmophysio@gmail.com";

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/watercolor-mountain-bg.jpg"
          alt="background"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-28">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Contact
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-900">
            Have questions about physiotherapy, your injury, or booking an appointment? Reach out and we will be happy to help you find the right next step.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Get in touch
            </h2>
            <div className="space-y-3 text-gray-900">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                  Phone
                </p>
                <a
                  href={phoneHref}
                  className="mt-1 inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-700"
                >
                  {phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-700 break-all"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                  Hours
                </p>
                <p className="mt-1 text-lg text-gray-900">
                  Tuesday -Saturday: 11:00 AM -  8:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-zinc-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Booking information
            </h2>
            <p className="text-base leading-7 text-gray-900">
              You can book physiotherapy appointments online through our clinic partners below. If you are unsure which location or service is right for you, feel free to call or email first.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://omnimassageandwellness.janeapp.com/#/staff_member/14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center rounded-full bg-green-600 px-10 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-center font-bold">Book at Omni</span>
                <span className="text-center text-sm font-bold">(Burnaby)</span>
              </a>
              <a
                href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-center font-bold">Book at Mapleleaf</span>
                <span className="text-center text-sm font-bold">(New West)</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
