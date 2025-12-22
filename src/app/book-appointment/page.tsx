export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl mb-4">
            Book an Appointment
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            You can book one-on-one physiotherapy sessions with Cherie through our trusted clinic partners. Choose the
            location that is most convenient for you, or contact us if you are unsure which option is best.
          </p>
        </header>

        <section className="space-y-6">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              Omni Massage &amp; Wellness
            </h2>
            <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300 mb-3">
              Click below to book if you prefer appointments at Omni Massage &amp; Wellness in Burnaby. You&apos;ll see real-time
              availability and can choose the time that works best for you.
            </p>
            <a
              href="https://omnimassageandwellness.janeapp.com/#/staff_member/14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-bold text-green-600 hover:underline"
            >
              Book at Omni Massage &amp; Wellness
            </a>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              Mapleleaf Rehab
            </h2>
            <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300 mb-3">
              Click below to book for appointments at Mapleleaf Rehab in New Westminster. Use the online booking link to select the
              service and time that fit your needs.
            </p>
            <a
              href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-bold text-blue-900 hover:underline"
            >
              Book at Mapleleaf Rehab
            </a>
          </article>

          <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            If you have questions before booking, you can also visit our <a href="/contact" className="text-primary-600 hover:text-primary-700">Contact</a> page to call or email us directly.
          </p>
        </section>
      </div>
    </main>
  );
}
