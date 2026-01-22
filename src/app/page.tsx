import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center font-sans" style={{ backgroundColor: '#d1d5db' }}>
        <div className="absolute inset-0 z-0 h-screen">
          <Image
            src="/images/hero-mountain-bg2.jpeg"
            alt="background"
            fill
            className="object-cover"
            priority
            loading="eager"
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANJ0jqC2vNPhuIoLiNZF3BZEKsP0EcGqtKUqhZYzLkTuf//Z"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <main className="relative z-10 flex h-screen w-full max-w-3xl flex-col items-center justify-center overflow-hidden px-16 pt-48 bg-transparent sm:items-start">
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

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
            Stay Informed
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-700 mb-6">
            Sign up for our newsletter to receive the latest physiotherapy tips, exercises, and wellness advice.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/40 whitespace-nowrap transition-transform transition-colors hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
            href="/newsletter"
          >
            Sign Up for Newsletter
          </a>
        </div>
      </section>
    </>
  );
}
