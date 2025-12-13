import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl mb-6">
          About Us
        </h1>
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="shrink-0 self-center md:self-start">
            <Image
              src="/images/cherie-headshot.jpg"
              alt="Portrait of Cherie, physiotherapist at Liv Motion Physiotherapy"
              width={320}
              height={400}
              className="h-auto w-48 rounded-xl object-cover shadow-lg md:w-56"
              priority
            />
            <p className="mt-3 text-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Cherie Kuo, PT PhD
            </p>
          </div>
          <div className="space-y-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p>
              Cherie is an experienced physiotherapist specializing in the treatment of musculoskeletal, pelvic floor, and neurological conditions. With over a decade of experience in the hospital, research and clinical settings, Cherie has honed a deep understanding of the human body, particularly in managing musculoskeletal disorders, pelvic floor dysfunctions and neurological conditions.
            </p>
            <p>
              Cherie's approach integrates evidence-based practices with personalized care, ensuring each patient receives a tailored treatment plan that addresses their unique needs. Known for a compassionate and patient-centered approach, Cherie has successfully helped countless individuals regain function, reduce pain, and improve their overall quality of life.
            </p>
            <p>
              Cherie is also dedicated to continuing education, regularly attending workshops and conferences to stay at the forefront of advancements in physiotherapy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
