import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Liv Motion Physiotherapy",
  description: "Review the terms of service for using Liv Motion Physiotherapy's website and booking physiotherapy appointments in Vancouver & Burnaby. Understand your rights and responsibilities.",
  keywords: ["terms of service", "physiotherapy terms", "booking terms", "service agreement"],
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service - Liv Motion Physiotherapy",
    description: "Terms governing the use of Liv Motion Physiotherapy's website and services.",
    url: "https://www.cheriekuo.com/terms-of-service",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl mb-4">
            Terms of Service
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            These Terms of Service ("Terms") govern your use of the Liv Motion Physiotherapy website and your
            interactions with us when you inquire about or book physiotherapy services.
          </p>
        </header>

        <section className="space-y-6 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">1. Acceptance of terms</h2>
            <p>
              By using this website, submitting an inquiry, or booking an appointment with us or our clinic partners,
              you agree to these Terms. If you do not agree, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">2. Not medical emergency care</h2>
            <p>
              The information on this website is for general educational purposes only and is not a substitute for
              emergency medical care or a personalized assessment. If you are experiencing a medical emergency, call 911
              or your local emergency number immediately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">3. No professional relationship from website content</h2>
            <p>
              Viewing content on this website does not create a physiotherapist–patient relationship. A professional
              relationship is established only when you book and attend an appointment with a physiotherapist through one
              of our clinic partners.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">4. Appointments and cancellations</h2>
            <p className="mb-2">
              Appointments are booked and managed through our clinic partners (such as Omni Massage &amp; Wellness and
              Mapleleaf Rehab) using their online booking platforms. Their own booking, cancellation, and no-show
              policies apply to your appointments.
            </p>
            <p>
              Please review the specific clinic&apos;s policies on their booking site before confirming your appointment.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">5. Fees, payments, and insurance</h2>
            <p>
              Fees for physiotherapy services, accepted payment methods, and any direct billing or insurance options are
              determined by the clinic where you receive treatment. Please confirm fee and payment details directly with
              the clinic at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">6. Use of website</h2>
            <p className="mb-2">You agree that you will not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use this website for any unlawful or harmful purpose.</li>
              <li>Attempt to interfere with the security, availability, or proper functioning of the website.</li>
              <li>Copy, reproduce, or redistribute website content without permission, except for personal use.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">7. Intellectual property</h2>
            <p>
              All text, graphics, logos, and other content on this website are the property of Liv Motion Physiotherapy
              or its licensors and are protected by copyright and other intellectual property laws. You may view and
              print content for your personal, non-commercial use only.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">8. Links to third-party sites</h2>
            <p>
              Our website contains links to third-party websites and booking platforms. We do not control and are not
              responsible for the content, policies, or practices of those third-party sites. Accessing them is at your
              own risk.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">9. Disclaimer of warranties</h2>
            <p>
              This website is provided on an "as is" and "as available" basis. We make no representations or warranties
              of any kind, express or implied, regarding the accuracy or completeness of the information on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">10. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Liv Motion Physiotherapy is not liable for any loss, injury, or
              damages arising from your use of this website, your reliance on its content, or your use of third-party
              booking platforms or clinics.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">11. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes in our services or legal requirements. The
              updated Terms will be posted on this page with a revised "Last updated" date. Your continued use of the
              website after changes are posted constitutes your acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">12. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Province of British Columbia and the applicable laws of
              Canada, without regard to conflict-of-law principles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">13. Contact us</h2>
            <p>
              If you have questions about these Terms or our services, please contact us at:
            </p>
            <p className="mt-2">
              <span className="block">Liv Motion Physiotherapy</span>
              <span className="block">Phone: (604) 771-7898</span>
              <span className="block">Email: livmophysio@gmail.com</span>
            </p>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-6">
            These Terms of Service are provided for general informational purposes and do not constitute legal advice.
          </p>
        </section>
      </div>
    </main>
  );
}
