import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-transparent">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-physio-bg-v4.jpg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative flex min-h-screen w-full max-w-3xl flex-col items-center justify-between overflow-hidden py-32 px-16 bg-transparent sm:items-start">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-500 text-white shadow-lg ring-2 ring-emerald-200/80">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">LM</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
            Liv.Motion.Physio
          </span>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            Expert physiotherapy services.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-100">
            Looking for an expert physiotherapist to help your recovery? Book with me at{" "}
            <a
              href="https://omnimassageandwellness.janeapp.com/#/physiotherapy"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Omni
            </a>{" "}
            or {" "}
            <a
              href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Mapleleaf Rehab
            </a>{" "}
            today!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-16 w-full items-center justify-center rounded-full border border-primary-700 bg-gradient-to-r from-primary-600 to-primary-500 px-10 text-xl font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary-300/70 transition-transform transition-colors hover:from-primary-700 hover:to-primary-600 hover:shadow-primary-400/90 hover:-translate-y-0.5 active:translate-y-0 md:w-[240px]"
            href="/book-appointment"
          >
            Book Now
          </a>
        </div>
      </main>
    </div>
  );
}
