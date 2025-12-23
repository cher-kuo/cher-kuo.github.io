import Image from "next/image";

export default function ContactPage() {
  const phoneDisplay = "(604) 771-7898";
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
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book at Omni
              </a>
              <a
                href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book at Mapleleaf
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
