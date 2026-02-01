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
              You can book physiotherapy appointments online through our clinic partners below, or book in-home physiotherapy directly.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://omnimassageandwellness.janeapp.com/#/staff_member/14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 w-full sm:w-48 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-center font-bold">Book at Burnaby</span>
              </a>
              <a
                href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-900 w-full sm:w-48 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-center font-bold">Book at New West</span>
              </a>
              <a
                href="https://www.colib.io/Booking/liv-motion-physiotherapy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gray-700 w-full sm:w-48 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-center font-bold">Book In-Home Visit</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Locations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Burnaby - Omni Massage & Wellness</h3>
              <p className="text-sm text-gray-700">306 - 6411 Nelson Ave, Burnaby BC V5H 4H3</p>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.0!2d-123.0134!3d49.2276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486766e8b8a8b8b%3A0x0!2s6411%20Nelson%20Ave%2C%20Burnaby%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burnaby clinic location"
                ></iframe>
              </div>
              <div className="text-sm text-gray-700 bg-white/60 rounded-lg p-3">
                <p className="font-semibold text-gray-900 mb-1">Parking</p>
                <p>There is underground visitor parking in the building. Please be advised that visitor parking may be limited on the weekend. The Metropolis at Metrotown is right next to us and offers free parking.</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">New Westminster - Mapleleaf Rehab</h3>
              <p className="text-sm text-gray-700">75 - 10th St, New Westminster, BC V3M 3X4</p>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.0!2d-122.9108!3d49.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486766e8b8a8b8b%3A0x0!2s75%2010th%20St%2C%20New%20Westminster%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Westminster clinic location"
                ></iframe>
              </div>
              <div className="text-sm text-gray-700 bg-white/60 rounded-lg p-3">
                <p className="font-semibold text-gray-900 mb-1">Parking</p>
                <p>There is free or paid street parking around the clinic. The Columbia Square Plaza sits right across from the street and offers free parking.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
