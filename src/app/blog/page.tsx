import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "./blog-data";

export const metadata: Metadata = {
  title: "Blog - Physiotherapy Tips & Health Insights",
  description: "Read expert physiotherapy articles, tips for pain management, injury prevention, and recovery guidance from Cherie Kuo, PT, PhD at Liv Motion Physiotherapy in Vancouver & Burnaby.",
  keywords: ["physiotherapy blog", "pain management tips", "injury prevention", "pelvic floor health", "exercise recovery", "physiotherapy Vancouver blog", "health tips Burnaby"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Liv Motion Physiotherapy",
    description: "Expert physiotherapy articles and health insights from Cherie Kuo, PT, PhD.",
    url: "https://www.cheriekuo.com/blog",
    type: "website",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
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
            Blog
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-900">
            Expert insights, tips, and guidance on physiotherapy, pain management, injury prevention, and recovery from our team.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                    {post.category}
                  </span>
                  <span>•</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm leading-6 text-gray-600">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.author}</span>
                <span className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
