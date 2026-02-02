import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services } from "../services-data";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const keywordMap: Record<string, string[]> = {
    "physiotherapy": ["physiotherapy Vancouver", "physical therapy Burnaby", "evidence-based physiotherapy", "manual therapy", "exercise therapy"],
    "musculoskeletal-injury": ["musculoskeletal injury treatment", "sports injury physiotherapy Vancouver", "joint pain treatment", "tendon injury rehab", "back pain physiotherapy Burnaby"],
    "pelvic-floor-physiotherapy": ["pelvic floor physiotherapy Vancouver", "women's health physiotherapy", "incontinence treatment", "postpartum physiotherapy Burnaby", "pelvic pain treatment"],
    "neuro-rehab": ["neurological rehabilitation Vancouver", "stroke rehab physiotherapy", "Parkinson's physiotherapy", "balance training", "gait rehabilitation Burnaby"],
    "pain-management": ["chronic pain management Vancouver", "persistent pain treatment", "pain physiotherapy Burnaby", "pain science education", "movement therapy"],
  };

  return {
    title: `${service.title} - Expert Treatment in Vancouver & Burnaby`,
    description: `${service.description} Professional ${service.title.toLowerCase()} services with Cherie Kuo, PT, PhD at Liv Motion Physiotherapy.`,
    keywords: keywordMap[slug] || ["physiotherapy Vancouver", "Liv Motion Physiotherapy"],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} - Liv Motion Physiotherapy`,
      description: service.description,
      url: `https://www.cheriekuo.com/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/watercolor-mountain-bg.jpg"
          alt="Watercolor mountain background for Liv Motion Physiotherapy service details"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-16 lg:px-8 lg:pt-48 lg:pb-20">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg leading-7 italic font-bold text-gray-900">
            {service.description}
          </p>
        </header>

        {service.conditionsWeTreat && service.conditionsWeTreat.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Conditions We Treat
            </h2>
            <ul className="space-y-3 text-lg leading-8 text-gray-900">
              {service.conditionsWeTreat.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="space-y-4 text-lg leading-8 text-gray-900">
          {(service.body ?? []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {service.whatToExpect && service.whatToExpect.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What to Expect During Your Session
            </h2>
            <ul className="space-y-3 text-lg leading-8 text-gray-900">
              {service.whatToExpect.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-10">
          <Link
            href="/services"
            className="text-sm font-medium text-sky-700 hover:text-sky-800"
          >
            ← Back to all services
          </Link>
        </div>
      </div>
    </main>
  );
}
