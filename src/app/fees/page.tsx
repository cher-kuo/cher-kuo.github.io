import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees - Liv Motion Physiotherapy",
  description: "View our physiotherapy service fees including initial assessments and in-home visits. Transparent pricing for quality care.",
  keywords: ["physiotherapy fees", "physiotherapy pricing", "in-home physiotherapy cost", "Vancouver physiotherapy rates"],
  alternates: {
    canonical: "/fees",
  },
  openGraph: {
    title: "Fees - Liv Motion Physiotherapy",
    description: "View our physiotherapy service fees including initial assessments and in-home visits.",
    url: "https://www.cheriekuo.com/fees",
    type: "website",
  },
};

export default function FeesPage() {
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
        <div className="space-y-10">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Fees
          </h1>

          <div className="space-y-8">
            <div className="rounded-xl bg-green-50/80 p-6 shadow-lg backdrop-blur-sm border border-green-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Free Consultation</h2>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex justify-between">
                  <span>15 minutes</span>
                  <span className="font-semibold text-green-600">Free</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Initial Assessment and Treatment</h2>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex justify-between">
                  <span>45 minutes</span>
                  <span className="font-semibold">$135</span>
                </li>
                <li className="flex justify-between">
                  <span>60 minutes</span>
                  <span className="font-semibold">$150</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Pelvic Physiotherapy Initial Assessment and Treatment</h2>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex justify-between">
                  <span>60 minutes</span>
                  <span className="font-semibold">$175</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">In-Home Visit</h2>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex justify-between">
                  <span>60 minutes</span>
                  <span className="font-semibold">$180</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Follow-Up Session</h2>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex justify-between">
                  <span>30 minutes</span>
                  <span className="font-semibold">$100</span>
                </li>
                <li className="flex justify-between">
                  <span>45 minutes</span>
                  <span className="font-semibold">$140</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 text-base">
            For questions about fees or to book an appointment, please{" "}
            <a href="/contact" className="text-blue-600 hover:underline">contact us</a>{" "}
            or{" "}
            <a href="/book-appointment" className="text-blue-600 hover:underline">book online</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
