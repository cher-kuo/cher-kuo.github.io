import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liv Motion Physiotherapy - Expert Physiotherapy in Burnaby & New Westminster",
  description: "Expert physiotherapy services in Burnaby & New Westminster. Specializing in musculoskeletal injuries, pelvic floor physiotherapy, neurological rehab & pain management. Book with Cherie Kuo, PT, PhD today!",
  keywords: ["physiotherapy Vancouver", "physiotherapist Burnaby", "physiotherapist New Westminster", "Cherie Kuo physiotherapist", "pelvic floor physiotherapy", "musculoskeletal physiotherapy", "pain management"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Liv Motion Physiotherapy - Expert Physiotherapy in Burnaby & New Westminster",
    description: "Expert physiotherapy services with Cherie Kuo, PT, PhD. Book your appointment today!",
    url: "https://www.cheriekuo.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[100svh] w-full items-center justify-center font-sans" style={{ backgroundColor: '#d1d5db' }}>
        <div className="absolute inset-0 z-0 min-h-[100svh]">
          <Image
            src="/images/hero-mountain-bg2.jpeg"
            alt="Mountain landscape background for Liv Motion Physiotherapy"
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

        <main className="relative z-10 flex min-h-[100svh] w-full max-w-3xl flex-col items-center justify-center px-6 py-16 bg-transparent sm:items-start sm:px-16 sm:pt-48 sm:pb-16">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
              Expert physiotherapy services.
            </h1>
            <p className="max-w-md text-xl leading-8 text-zinc-100">
              Liv Motion Physiotherapy offers comprehensive assessment and tailored treatment to meet your rehab goals. We specialize in treating musculoskeletal injuries, women's pelvic floor dysfunction, neurological rehab, and pain management. Cherie Kuo, Founder of Liv Motion Physiotherapy, practices at two convenient locations (Burnaby and New Westminster), and can deliver services at your home. Book with Cherie today!
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
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 flex justify-center md:justify-start">
                <Image
                  src="/images/cherie-headshot3.jpg"
                  alt="Portrait of Cherie Kuo, physiotherapist at Liv Motion Physiotherapy"
                  width={160}
                  height={200}
                  className="h-auto w-28 rounded-xl object-cover shadow-lg sm:w-32"
                  priority
                />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                About Cherie
              </h2>
              <p className="text-lg leading-8 text-gray-700">
                Cherie Kuo, PT, PhD is a dedicated physiotherapist with over a decade of experience in physiotherapy. She holds a PhD from Columbia University and provides evidence-based care for musculoskeletal and sports injuries, women’s pelvic floor dysfunction, neurological rehab, and pain management.
              </p>
              <div className="mt-6">
                <a
                  href="/about"
                  className="text-sm font-medium text-sky-700 hover:text-sky-800"
                >
                  Learn more about Cherie →
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Areas of Expertise
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>Musculoskeletal and sports injury rehabilitation</li>
                  <li>Women’s pelvic floor dysfunction</li>
                  <li>Neurological rehabilitation</li>
                  <li>Acute and chronic pain management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
            What Our Patients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-zinc-200 bg-gray-50 p-6 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                &ldquo;Cherie is borderline a miracle worker. After 6 weeks, I can walk 10k steps with only the slightest bit of pain!&rdquo;
              </blockquote>
              <p className="font-semibold text-gray-900">— J.S.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-gray-50 p-6 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                &ldquo;Professional and very knowledgeable. She tailored my treatment plan based on my needs. Great experience!&rdquo;
              </blockquote>
              <p className="font-semibold text-gray-900">— M.M.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-gray-50 p-6 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                &ldquo;Her knowledge, care and attention helped me identify and fix a painful shoulder injury. Highly recommend!&rdquo;
              </blockquote>
              <p className="font-semibold text-gray-900">— T.M.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/testimonials"
              className="text-sm font-medium text-sky-700 hover:text-sky-800"
            >
              Read more testimonials →
            </a>
          </div>
        </div>
      </section>

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
