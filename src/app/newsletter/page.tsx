import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Signup - Physiotherapy Tips & Health Insights",
  description: "Subscribe to Liv Motion Physiotherapy's newsletter for expert physiotherapy tips, exercises, injury prevention advice, and wellness insights delivered to your inbox.",
  keywords: ["physiotherapy newsletter", "health tips newsletter", "exercise tips", "injury prevention", "wellness advice Vancouver"],
  alternates: {
    canonical: "/newsletter",
  },
  openGraph: {
    title: "Newsletter Signup - Liv Motion Physiotherapy",
    description: "Subscribe for expert physiotherapy tips, exercises, and wellness advice from Cherie Kuo, PT, PhD.",
    url: "https://www.cheriekuo.com/newsletter",
    type: "website",
  },
};

export default function NewsletterPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/watercolor-mountain-bg.jpg"
          alt="Watercolor mountain background for Liv Motion Physiotherapy newsletter page"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="mx-auto max-w-xl px-6 pt-40 pb-16 lg:px-8 lg:pt-48 lg:pb-20">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Sign Up for Our Newsletter
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-700">
            Stay informed with the latest physiotherapy tips, exercises, and wellness advice delivered straight to your inbox.
          </p>
        </header>

        <form
          action="https://cheriekuo.us19.list-manage.com/subscribe/post?u=2ab8c19e237f855f6231f05d7&amp;id=bd4f20d6cb&amp;f_id=00665be7f0"
          method="post"
          target="_blank"
          className="space-y-6"
        >
          <div>
            <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="mce-EMAIL"
              name="EMAIL"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-black placeholder:text-gray-500"
            />
          </div>
          {/* Honeypot field to prevent bot signups */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input
              type="text"
              name="b_2ab8c19e237f855f6231f05d7_bd4f20d6cb"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <button
            type="submit"
            name="subscribe"
            className="w-full inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/40 whitespace-nowrap transition-transform transition-colors hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
          >
            Subscribe
          </button>
          <p className="text-sm text-gray-500 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </main>
  );
}
