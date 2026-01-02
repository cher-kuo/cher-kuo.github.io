import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Liv Motion Physiotherapy - Expert Physiotherapy Services in Vancouver",
    template: "%s | Liv Motion Physiotherapy",
  },
  description: "Expert physiotherapy services in Vancouver & Burnaby. Specializing in musculoskeletal injuries, pelvic floor physiotherapy, neurological rehab & pain management. Book with Cherie Kuo, PT, PhD today!",
  keywords: ["physiotherapy Vancouver", "physiotherapist Burnaby", "pelvic floor physiotherapy", "musculoskeletal physiotherapy", "neurological rehabilitation", "physical therapy", "pain relief", "sports injury treatment", "back pain physiotherapy", "neck pain treatment", "dry needling", "IMS therapy", "post-surgical rehab", "chronic pain management", "Cherie Kuo physiotherapist"],
  authors: [{ name: 'Liv Motion Physiotherapy Team' }],
  creator: 'Liv Motion Physiotherapy',
  publisher: 'Liv Motion Physiotherapy',
  metadataBase: new URL('https://www.cheriekuo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Liv Motion Physiotherapy - Expert Physiotherapy Services in Vancouver',
    description: 'Expert physiotherapy in Vancouver & Burnaby. Musculoskeletal, pelvic floor & neurological rehab with Cherie Kuo, PT, PhD. Book your appointment today!',
    url: 'https://www.cheriekuo.com',
    siteName: 'Liv Motion Physiotherapy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Liv Motion Physiotherapy - Expert Care for Your Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liv Motion Physiotherapy - Expert Physiotherapy Services in Vancouver',
    description: 'Expert physiotherapy in Vancouver & Burnaby. Musculoskeletal, pelvic floor & neurological rehab with Cherie Kuo, PT, PhD.',
    creator: '@livmotionphysio',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} min-h-screen bg-stone-200 text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'MedicalBusiness',
                '@id': 'https://www.cheriekuo.com/#organization',
                name: 'Liv Motion Physiotherapy',
                description: 'Expert physiotherapy services in Vancouver & Burnaby specializing in musculoskeletal injuries, pelvic floor physiotherapy, neurological rehabilitation, and pain management.',
                image: 'https://www.cheriekuo.com/images/og-image.jpg',
                url: 'https://www.cheriekuo.com',
                telephone: '+1-604-771-7898',
                email: 'livmophysio@gmail.com',
                priceRange: '$$',
                areaServed: [
                  { '@type': 'City', name: 'Vancouver', '@id': 'https://www.wikidata.org/wiki/Q24639' },
                  { '@type': 'City', name: 'Burnaby', '@id': 'https://www.wikidata.org/wiki/Q170475' },
                  { '@type': 'City', name: 'New Westminster', '@id': 'https://www.wikidata.org/wiki/Q170478' },
                ],
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '11:00',
                  closes: '20:00',
                },
                sameAs: [
                  'https://www.facebook.com/profile.php?id=61561815472137',
                  'https://www.instagram.com/livmotion.physio',
                  'https://www.linkedin.com/in/cherie-k-7016b015/',
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Physiotherapy Services',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Physiotherapy' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Musculoskeletal Injury Treatment' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pelvic Floor Physiotherapy' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Neurological Rehabilitation' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pain Management' } },
                  ],
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': 'https://www.cheriekuo.com/#person',
                name: 'Cherie Kuo',
                jobTitle: 'Physiotherapist',
                honorificSuffix: 'PT, PhD',
                description: 'Experienced physiotherapist specializing in musculoskeletal, pelvic floor, and neurological conditions with over a decade of hospital, research, and clinical experience.',
                worksFor: { '@id': 'https://www.cheriekuo.com/#organization' },
                knowsAbout: [
                  'Physiotherapy',
                  'Musculoskeletal Rehabilitation',
                  'Pelvic Floor Physiotherapy',
                  'Neurological Rehabilitation',
                  'Dry Needling',
                  'IMS Therapy',
                  'Pain Management',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://www.cheriekuo.com/#website',
                url: 'https://www.cheriekuo.com',
                name: 'Liv Motion Physiotherapy',
                publisher: { '@id': 'https://www.cheriekuo.com/#organization' },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://www.cheriekuo.com/services?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
