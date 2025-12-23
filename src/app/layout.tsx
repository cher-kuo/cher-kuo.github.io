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
  title: "Liv Motion Physiotherapy - Expert Physiotherapy Services",
  description: "Professional physiotherapy services to help you recover, rehabilitate, and return to your active lifestyle. Book an appointment today!",
  keywords: ["physiotherapy", "physical therapy", "pain relief", "rehabilitation", "sports injury", "back pain", "neck pain", "pelvic health physiotherapy"],
  authors: [{ name: 'Liv Motion Physiotherapy Team' }],
  creator: 'Liv Motion Physiotherapy',
  publisher: 'Liv Motion Physiotherapy',
  metadataBase: new URL('https://www.cheriekuo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Liv Motion Physiotherapy - Expert Physiotherapy Services',
    description: 'Professional physiotherapy services to help you recover, rehabilitate, and return to your active lifestyle.',
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
    title: 'Liv Motion Physiotherapy - Expert Physiotherapy Services',
    description: 'Professional physiotherapy services to help you recover, rehabilitate, and return to your active lifestyle.',
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Liv Motion Physiotherapy',
              image: 'https://www.cheriekuo.com/images/og-image.jpg',
              '@id': 'https://www.cheriekuo.com',
              url: 'https://www.cheriekuo.com',
              telephone: '+1-604-771-7898',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Health St',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94110',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.7749,
                longitude: -122.4194,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  // 'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '11:00',
                closes: '20:00',
              },
              sameAs: [
                // 'https://www.facebook.com/elitephysiocare',
                'https://www.instagram.com/livmotion.physio',
                // 'https://www.linkedin.com/company/elitephysiocare',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
