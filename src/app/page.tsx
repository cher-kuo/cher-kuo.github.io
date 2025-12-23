import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center font-sans" style={{ backgroundColor: '#4a6b8a' }}>
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/hero-mountain-bg.jpg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative flex h-screen w-full max-w-3xl flex-col items-center justify-center overflow-hidden px-16 bg-transparent sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            Expert physiotherapy services.
          </h1>
          <p className="max-w-md text-xl leading-8 text-zinc-100">
            Looking for an expert physiotherapist to help your recovery? Book with Cherie at{" "}
            <a
              href="https://omnimassageandwellness.janeapp.com/#/staff_member/14"
              className="font-bold text-zinc-100"
            >
              Omni Massage &amp; Wellness
            </a>{" "}
            or {" "}
            <a
              href="https://mapleleaf-rehab.janeapp.com/#/staff_member/12"
              className="font-bold text-zinc-100"
            >
              Mapleleaf Rehab
            </a>{" "}
            today!
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/40 whitespace-nowrap transition-transform transition-colors hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
            href="/book-appointment"
          >
            Book Now
          </a>
        </div>
      </main>
    </div>
  );
}
