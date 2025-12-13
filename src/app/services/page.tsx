export default function ServicesPage() {
  const services = [
    {
      title: "Physiotherapy",
      slug: "physiotherapy",
      description:
        "Comprehensive, evidence-based physiotherapy to restore movement, improve strength, and support recovery from everyday and complex conditions.",
    },
    {
      title: "Musculoskeletal Injury",
      slug: "musculoskeletal-injury",
      description:
        "Assessment and treatment for joint, muscle, tendon, and ligament injuries, including back, neck, shoulder, upper and lower limbs, and sports-related pain.",
    },
    {
      title: "Pelvic Health Physiotherapy",
      slug: "pelvic-health",
      description:
        "Specialized care for pelvic floor dysfunction, incontinence, and perinatal to postpartum recovery in a supportive, confidential environment.",
    },
    {
      title: "Neurological Rehab",
      slug: "neuro-rehab",
      description:
        "Rehabilitation for conditions affecting the brain and nervous system, focused on improving balance, coordination, mobility, and independence.",
    },
    {
      title: "Pain Management",
      slug: "pain-management",
      description:
        "Individualized strategies to understand and manage acute and persistent pain, helping you move with more confidence in daily life.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl mb-4">
            Services
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            We provide proffesional physiotherapy services across musculoskeletal injury, pelvic health physiotherapy, neurological rehab, and pain management, tailored to your goals and lifestyle.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
                  {service.title}
                </h2>
                <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
