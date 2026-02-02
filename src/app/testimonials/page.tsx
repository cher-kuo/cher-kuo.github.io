import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials - Real Results & Reviews",
  description: "Read testimonials from patients who have experienced relief and recovery with Liv Motion Physiotherapy. Real reviews about musculoskeletal injury treatment, pain management, and rehabilitation in Vancouver & Burnaby.",
  keywords: ["physiotherapy reviews Vancouver", "patient testimonials Burnaby", "physiotherapist reviews", "Cherie Kuo reviews", "Liv Motion Physiotherapy testimonials"],
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Patient Testimonials - Liv Motion Physiotherapy",
    description: "Read real patient testimonials about their recovery journey with Liv Motion Physiotherapy in Vancouver & Burnaby.",
    url: "https://www.cheriekuo.com/testimonials",
    type: "website",
  },
};

const testimonials = [
  {
    id: 1,
    name: "J.S.",
    // condition: "Musculoskeletal Injury",
    quote:
      "Cherie is my physiotherapist and is borderline a miracle worker. I have spent months and hundreds of dollars elsewhere on my Achilles injury with -at best- momentary relief. After 6 weeks with Cherie, I am already at the point where I can walk 10k steps in a day with only the slightest bit of pain! (6 weeks ago I could not walk 100ft without chronic pain). 10/10 would highly recommend.",
  },
  {
    id: 2,
    name: "M.M.",
    // condition: "Musculoskeletal Injury",
    quote:
      "Couple sessions and I see the improvement.  Cherie is amazing. Professional and very knowledgeable.  She assessed my concerns carefully and tailored my treatment plan based on my needs. Great experience!",
  },
  {
    id: 3,
    name: "T.M.",
    // condition: "Neurological Rehab",
    quote:
      "Cherie is an amazing physiotherapist. Her knowledge, care and attention helped me to identify and fix a painful shoulder injury. I highly recommend her services!",
  },
  {
    id: 4,
    name: "R.H.",
    // condition: "Pain Management",
    quote:
      "Cherie was very knowledgeable and explained everything. I feel better after one treatment. Thank you Cherie.",
  },
  {
    id: 5,
    name: "D.C.",
    // condition: "Physiotherapy",
    quote:
      "Cherie is an amazing physiotherapist to work with! She's very knowledgeable and could provide very helpful exercises and stretches to my posture. I would really recommend working with her on improving posture or for physiotherapy.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/watercolor-mountain-bg.jpg"
          alt="Watercolor mountain background for Liv Motion Physiotherapy Testimonials page"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>
      <div className="mx-auto max-w-4xl px-6 pt-40 pb-24 lg:px-8 lg:pt-48 lg:pb-28">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Testimonials
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-900">
            Hear from our patients about their experiences with Liv Motion Physiotherapy.
          </p>
        </header>

        <section className="space-y-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-lg leading-7 text-gray-900 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">
                  — {testimonial.name}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
