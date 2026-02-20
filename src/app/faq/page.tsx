import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about physiotherapy, appointments, insurance coverage, and what to expect during your visit at Liv Motion Physiotherapy.",
  keywords: ["physiotherapy FAQ", "physiotherapy questions", "what to expect physiotherapy", "physiotherapy insurance coverage", "first physiotherapy appointment"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Liv Motion Physiotherapy",
    description: "Find answers to common questions about physiotherapy, appointments, and what to expect during your visit.",
    url: "https://www.cheriekuo.com/faq",
    type: "website",
  },
};

const faqs = [
  {
    question: "What should I wear to my physiotherapy appointment?",
    answer: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For example, if you have a shoulder issue, wear a tank top or loose t-shirt. For lower body issues, shorts or loose pants are ideal. You may be asked to change into a gown for certain assessments.",
  },
  {
    question: "Do I need a doctor's referral to see a physiotherapist?",
    answer: "No, you do not need a doctor's referral to see a physiotherapist in British Columbia. You can book directly with us. However, some extended health insurance plans may require a referral for coverage, so it's best to check with your insurance provider.",
  },
  {
    question: "Is physiotherapy covered by insurance?",
    answer: "Most extended health insurance plans cover physiotherapy. Coverage varies depending on your plan, so we recommend checking with your insurance provider about your specific benefits. We provide direct billing with our clinic partners (Omni and Mapleleaf). However, we do not direct bill to insurance companies if you book in-home physiotherapy sessions.  We provide receipts that you can submit for reimbursement. ",
  },
  {
    question: "What happens during my first appointment?",
    answer: "Your first appointment includes a comprehensive assessment where we discuss your health history, current concerns, and goals. We'll perform a physical examination to assess your movement, strength, and any areas of pain. Based on this assessment, we'll develop a personalized treatment plan and typically begin treatment during the same session.",
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your condition, its severity, and your individual response to treatment. After your initial assessment, we'll provide an estimated treatment timeline. Some conditions improve in just a few sessions, while others may require ongoing care. We regularly reassess your progress and adjust the plan as needed.",
  },
  {
    question: "What is dry needling / IMS?",
    answer: "Dry needling, also known as Intramuscular Stimulation (IMS), is a technique where thin needles are inserted into tight muscle bands (trigger points) to release tension and reduce pain. It's effective for treating chronic muscle pain, tension headaches, and various musculoskeletal conditions. The needles used are very thin, and most patients tolerate the treatment well.",
  },
  {
    question: "What is pelvic floor physiotherapy?",
    answer: "Pelvic floor physiotherapy is a specialized treatment for conditions affecting the pelvic floor muscles, including urinary incontinence, pelvic organ prolapse, pelvic pain, and prenatal/postpartum recovery (such as diastasis recti). Treatment may include internal and external assessment, exercises, manual therapy, and education. It's a safe and effective approach to treating these conditions.",
  },
  {
    question: "Do you offer in-home physiotherapy?",
    answer: "Yes, we offer in-home physiotherapy services for patients who have difficulty traveling to a clinic due to mobility issues, post-surgical recovery, or other circumstances. In-home visits are available in the Greater Vancouver metropolitan area. Please contact us or book online to arrange an in-home appointment.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or missed appointments may be subject to a cancellation fee. We understand that emergencies happen, so please contact us as soon as possible if you need to change your appointment.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept credit cards (Visa, Mastercard, American Express) and e-transfer. Payment is due at the time of service. We provide receipts for insurance reimbursement.",
  },
];

export default function FAQPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/watercolor-mountain-bg.jpg"
          alt="Watercolor mountain background for Liv Motion Physiotherapy FAQ page"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-28">
        <div className="space-y-10">
          <header>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700">
              Find answers to common questions about physiotherapy and our services.
            </p>
          </header>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-blue-50/80 p-6 shadow-lg backdrop-blur-sm border border-blue-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Still have questions?
            </h2>
            <p className="text-gray-700 mb-4">
              If you couldn&apos;t find the answer you&apos;re looking for, feel free to reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </a>
              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform transition-colors hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
