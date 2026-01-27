import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cherie Kuo, PT, PhD - Experienced Physiotherapist",
  description: "Meet Cherie Kuo, PT, PhD - an experienced physiotherapist specializing in musculoskeletal, pelvic floor, and neurological conditions. Over a decade of hospital, research, and clinical experience in Vancouver & Burnaby.",
  keywords: ["Cherie Kuo physiotherapist", "physiotherapist Vancouver", "pelvic floor specialist", "neurological physiotherapy", "musculoskeletal expert", "dry needling certified", "IMS therapy"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cherie Kuo, PT, PhD - Liv Motion Physiotherapy",
    description: "Meet Cherie Kuo, PT, PhD - an experienced physiotherapist specializing in musculoskeletal, pelvic floor, and neurological conditions.",
    url: "https://www.cheriekuo.com/about",
    type: "profile",
  },
};

export default function AboutPage() {
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
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="shrink-0 self-center md:self-start md:pt-20">
            <Image
              src="/images/cherie-headshot3.jpg"
              alt="Portrait of Cherie, physiotherapist at Liv Motion Physiotherapy"
              width={320}
              height={400}
              className="h-auto w-48 rounded-xl object-cover shadow-lg md:w-56"
              priority
            />
            <p className="mt-3 text-center text-base font-semibold text-gray-900">
              Cherie Kuo, PT, PhD
            </p>
          </div>
          <div className="space-y-10 text-lg leading-8">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h1>
            <p className="text-gray-900">
              Cherie is a dedicated physiotherapist with over a decade of experience in the hospital, research and clinical settings. She holds a PhD in Kinesiology with specialization in neuroscience from Columbia University. She has honed a deep understanding of the human body, particularly in managing musculoskeletal disorders, pelvic floor dysfunctions, chronic pain, and neurological conditions.
            </p>
            <p className="text-gray-900">
              Her approach integrates evidence-based practices with personalized care. Known for a compassionate and patient-centered approach, she has successfully helped countless individuals regain function, reduce pain, and improve their overall quality of life.
            </p>
            <p className="text-gray-900">
              She is also committed to continuing education, regularly attending workshops and conferences to stay at the forefront of advancements in physiotherapy. She is certified in using dry needling (Intramuscular Stimulation/IMS) to treat musculoskeletal conditions and completed her "Women's pelvic floor course: The physical therapy approach to anyone experiencing Urinary Incontinence" to treat pelvic floor dysfunctions. 
            </p>
            <p className="text-gray-900">
              If you are interested in her research work, you can find her research project publications on Google Scholar <a href="https://scholar.google.com/citations?user=EZh5548AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
