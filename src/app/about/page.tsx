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
              src="/images/cherie-headshot.jpg"
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
          <div className="space-y-6 text-lg leading-8">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h1>
            <p className="text-gray-900">
              Cherie is an experienced physiotherapist specializing in the treatment of musculoskeletal, pelvic floor, and neurological conditions. With over a decade of experience in the hospital, research and clinical settings, Cherie has honed a deep understanding of the human body, particularly in managing musculoskeletal disorders, pelvic floor dysfunctions and neurological conditions.
            </p>
            <p className="text-gray-900">
              Cherie's approach integrates evidence-based practices with personalized care, ensuring each patient receives a tailored treatment plan that addresses their unique needs. Known for a compassionate and patient-centered approach, Cherie has successfully helped countless individuals regain function, reduce pain, and improve their overall quality of life.
            </p>
            <p className="text-gray-900">
              Cherie is also dedicated to continuing education, regularly attending workshops and conferences to stay at the forefront of advancements in physiotherapy. She is certified in using dry needling (AN-IMS) to treat musculoskeletal conditions and completed her pelvic floor physiotherapy training to treat pelvic floor dysfunctions. 
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
