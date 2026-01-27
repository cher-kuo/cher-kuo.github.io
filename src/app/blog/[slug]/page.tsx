import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "../blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "physiotherapy blog", "health tips", "Liv Motion Physiotherapy", post.author],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} - Liv Motion Physiotherapy`,
      description: post.excerpt,
      url: `https://www.cheriekuo.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, width: 800, height: 400, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://www.cheriekuo.com${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Cherie Kuo",
      jobTitle: "Physiotherapist",
      honorificSuffix: "PT, PhD",
    },
    publisher: {
      "@type": "Organization",
      name: "Liv Motion Physiotherapy",
      url: "https://www.cheriekuo.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.cheriekuo.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <main className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/watercolor-mountain-bg.jpg"
            alt="background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="mx-auto max-w-3xl px-6 pt-40 pb-16 lg:px-8 lg:pt-48 lg:pb-20">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
              {post.category}
            </span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-gray-600">
            By {post.author}
          </p>
          {post.image && (
            <div className="mt-6 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <article className="prose prose-lg max-w-none">
          {post.body.map((paragraph, index) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              const text = paragraph.slice(2, -2);
              return (
                <h2 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  {text}
                </h2>
              );
            }
            if (paragraph.startsWith("•")) {
              return (
                <p key={index} className="text-lg leading-8 text-gray-900 pl-4">
                  {paragraph}
                </p>
              );
            }
            if (paragraph.includes("**")) {
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={index} className="text-lg leading-8 text-gray-900 mb-4">
                  {parts.map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            }
            return (
              <p key={index} className="text-lg leading-8 text-gray-900 mb-4">
                {paragraph}
              </p>
            );
          })}
        </article>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-sm font-medium text-sky-700 hover:text-sky-800"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
      </main>
    </>
  );
}
