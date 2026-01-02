import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services } from "./services-data";

export const metadata: Metadata = {
  title: "Physiotherapy Services - Musculoskeletal, Pelvic Floor & Neuro Rehab",
  description: "Comprehensive physiotherapy services in Vancouver & Burnaby: musculoskeletal injury treatment, pelvic floor physiotherapy, neurological rehabilitation, and chronic pain management. Personalized care plans.",
  keywords: ["physiotherapy services Vancouver", "musculoskeletal physiotherapy", "pelvic floor physiotherapy Burnaby", "neurological rehabilitation", "pain management", "sports injury treatment", "post-surgical rehab"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Physiotherapy Services - Liv Motion Physiotherapy",
    description: "Comprehensive physiotherapy services: musculoskeletal injury, pelvic floor, neurological rehab, and pain management in Vancouver & Burnaby.",
    url: "https://www.cheriekuo.com/services",
    type: "website",
  },
};

export default function ServicesPage() {

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
      <div className="mx-auto max-w-5xl px-6 pt-40 pb-24 lg:px-8 lg:pt-48 lg:pb-28">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Services
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-900">
            We provide professional physiotherapy services across musculoskeletal injury, pelvic floor physiotherapy, neurological rehab, and pain management, tailored to your goals and lifestyle.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-sm leading-6 text-gray-900">
                  {service.description}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800">
                  Learn more
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
