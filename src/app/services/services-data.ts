export type Service = {
  title: string;
  slug: string;
  description: string;
  conditionsWeTreat?: string[];
  body?: string[];
  whatToExpect?: string[];
};

export const services: Service[] = [
  {
    title: "Services Overview",
    slug: "physiotherapy",
    description:
      "Comprehensive, evidence-based physiotherapy to restore movement, improve strength, and support recovery from everyday and complex conditions.",
    conditionsWeTreat: [
      "Musculoskeletal and/or sports injury",
      "Women's pelvic floor dysfunction",
      "Neurological rehab",
      "Acute and chronic pain",
    ],
    body: [
      "We combine hands-on treatment, targeted exercise, and education to help you move with confidence at work, at home, and in sport activities.",
    ],
    whatToExpect: [
      "A detailed initial assessment lasting 45–60 minutes, including a review of your medical history and physical examination.",
      "Hands-on treatment techniques such as manual therapy and dry needling as needed.",
      "A personalized home exercise program with clear instructions and progressions.",
      "Ongoing reassessment to track your progress and adjust your plan as needed.",
    ],
  },
  {
    title: "Musculoskeletal Injury",
    slug: "musculoskeletal-injury",
    description:
      "Assessment and treatment for joint, muscle, tendon, and ligament injuries, including neck, shoulder, back, upper and lower limbs, and sports-related pain.",
    conditionsWeTreat: [
      "Sprains and strains",
      "Tendinopathies",
      "Post-surgical rehabilitation",
      "Repetitive strain injuries",
      "Sports-related injuries",
      "Injuries to body parts (neck, back, shoulders, elbows, wrists, hips, knees, ankles)",
    ],
    body: [],
    whatToExpect: [
      "A comprehensive movement assessment to identify the root cause of your injury.",
      "Education about your injury, including healing timelines and activity modifications.",
      "Targeted physiotherapy techniques such as soft tissue release and dry needling to restore strength, flexibility, and function.",
      "Guidance on return-to-sport or return-to-work strategies when appropriate.",
    ],
  },
  {
    title: "Women's Pelvic Floor Dysfunction",
    slug: "pelvic-floor-physiotherapy",
    description:
      "Specialized care for women's pelvic floor dysfunction, incontinence, and perinatal to postpartum recovery in a supportive, confidential environment.",
    conditionsWeTreat: [
      "Urinary incontinence",
      "Pelvic organ prolapse",
      "Perinatal and postpartum recovery",
      "Pain with intercourse",
      "Bladder dysfunction",
      "Bowel dysfunction",
    ],
    body: [],
    whatToExpect: [
      "A private, comfortable setting where you can discuss sensitive concerns.",
      "An external and/or internal pelvic floor muscle assessment (with your consent) to evaluate pelvic floor muscle function.",
      "Education on pelvic anatomy, bladder and bowel habits, and lifestyle factors.",
      "A tailored exercise program focusing on pelvic floor strengthening or relaxation as needed.",
    ],
  },
  {
    title: "Neurological Rehab",
    slug: "neuro-rehab",
    description:
      "Rehabilitation for conditions affecting the brain and nervous system, focused on improving balance, coordination, mobility, and independence.",
    conditionsWeTreat: [
      "Stroke recovery",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Brain injury",
      "Balance and coordination disorders",
      "Gait and mobility impairments",
    ],
    body: [],
    whatToExpect: [
      "A thorough assessment of your movement, balance, coordination, and functional abilities.",
      "Goal-setting focused on activities that matter most to you in daily life.",
      "Task-specific training to improve walking, transfers, and upper and lower limb function.",
      "Strategies to manage fatigue and optimize your energy throughout the day.",
    ],
  },
  {
    title: "Pain Management",
    slug: "pain-management",
    description:
      "Individualized strategies to understand and manage acute and persistent pain, helping you move with more confidence in daily life.",
    conditionsWeTreat: [
      "Chronic pain",
      "Persistent pain syndromes",
      "Fibromyalgia",
      "Complex regional pain syndrome",
      "Post-surgical pain",
      "Pain with movement or activity",
    ],
    body: [],
    whatToExpect: [
      "An in-depth conversation and assessment to find the root cause and trigger of your pain.",
      "Education about pain science to help you understand what is happening in your body.",
      "Graded movement and exercise strategies to build confidence and reduce fear of movement.",
      "Practical tools for pacing and stress management to improve your quality of life.",
    ],
  },
  {
    title: "In-Home Physiotherapy",
    slug: "in-home-physiotherapy",
    description:
      "Convenient physiotherapy services delivered in the comfort of your own home, ideal for those with mobility challenges or busy schedules.",
    conditionsWeTreat: [
      "Post-surgical rehabilitation",
      "Mobility limitations",
      "Fall prevention",
      "Chronic conditions requiring ongoing care",
      "Neurological conditions",
    ],
    body: [
      "We bring expert physiotherapy care directly to you, eliminating the need for travel and allowing treatment in a familiar environment.",
    ],
    whatToExpect: [
      "A comprehensive in-home assessment of your mobility, strength, and functional abilities.",
      "Treatment tailored to your home environment, including exercises you can do safely at home.",
      "Guidance on home modifications and equipment to support your recovery and safety.",
      "Flexible scheduling to accommodate your needs.",
    ],
  },
];
