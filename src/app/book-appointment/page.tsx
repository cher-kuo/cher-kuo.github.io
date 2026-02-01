import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment - Online Physiotherapy Booking",
  description: "Book your physiotherapy appointment online with Cherie Kuo, PT, PhD. Available at Omni Massage & Wellness (Burnaby) and Mapleleaf Rehab (New Westminster). Easy online scheduling.",
  keywords: ["book physiotherapy appointment", "online physiotherapy booking Vancouver", "Omni Massage Wellness booking", "Mapleleaf Rehab appointment", "physiotherapist Burnaby booking"],
  alternates: {
    canonical: "/book-appointment",
  },
  openGraph: {
    title: "Book Your Physiotherapy Appointment - Liv Motion Physiotherapy",
    description: "Book online with Cherie Kuo, PT, PhD at Burnaby or New Westminster. Easy scheduling for physiotherapy in Vancouver & Burnaby.",
    url: "https://www.cheriekuo.com/book-appointment",
    type: "website",
  },
};

export default function BookAppointmentPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/watercolor-mountain-bg.jpg"
          alt="background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="mx-auto max-w-4xl px-6 pt-40 pb-16 lg:px-8 lg:pt-48 lg:pb-20">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Book an Appointment
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-900">
            You can book one-on-one physiotherapy sessions with Cherie through our trusted clinic partners. Please choose the
            location that is most convenient for you below, or contact us if you are unsure which option is best.
          </p>
        </header>

        <section className="space-y-6">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Burnaby
            </h2>
            <p className="text-sm leading-6 text-gray-900 mb-3">
              Click below to book if you prefer appointments at Omni Massage &amp; Wellness in Burnaby. You&apos;ll see real-time
              availability and can choose the time that works best for you.
            </p>
            <a
              href="https://omnimassageandwellness.janeapp.com/#/staff_member/14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center rounded-full bg-green-600 px-10 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="text-center font-bold">Book at Burnaby</span>
            </a>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              New Westminster
            </h2>
            <p className="text-sm leading-6 text-gray-900 mb-3">
              Click below to book for appointments at Mapleleaf Rehab in New Westminster. Use the online booking link to select the
              service and time that fit your needs.
            </p>
            <a
              href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="text-center font-bold">Book at New West</span>
            </a>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              In-Home Physiotherapy
            </h2>
            <p className="text-sm leading-6 text-gray-900 mb-3">
              Click below to book in-home physiotherapy sessions. We&apos;ll come to you at your home or preferred location.
            </p>
            <a
              href="https://www.colib.io/Booking/liv-motion-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center rounded-full bg-gray-700 px-10 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="text-center font-bold">Book In-Home Visit</span>
            </a>
          </article>

          <p className="text-lg leading-8 text-gray-900">
            If you have questions before booking, you can also visit our <a href="/contact" className="text-primary-600 hover:text-primary-700">Contact</a> page to call or email us directly.
          </p>
        </section>
      </div>
    </main>
  );
}
