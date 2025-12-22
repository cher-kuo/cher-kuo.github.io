export type Service = {
  title: string;
  slug: string;
  description: string;
  body?: string[];
  whatToExpect?: string[];
};

export const services: Service[] = [
  {
    title: "Physiotherapy",
    slug: "physiotherapy",
    description:
      "Comprehensive, evidence-based physiotherapy to restore movement, improve strength, and support recovery from everyday and complex conditions.",
    body: [
      "Our physiotherapy sessions begin with a thorough assessment to understand your history, goals, and current concerns.",
      "We combine hands-on treatment, targeted exercise, and education to help you move with confidence at work, at home, and in sport activities.",
      "Whether you are recovering from surgery, managing a chronic condition, or looking to optimize your physical performance, we tailor each session to your unique needs.",
    ],
    whatToExpect: [
      "A detailed initial assessment lasting 45–60 minutes, including a review of your medical history and physical examination.",
      "Hands-on treatment techniques such as manual therapy, dry needling, and joint mobilization as needed.",
      "A personalized home exercise program with clear instructions and progressions.",
      "Ongoing reassessment to track your progress and adjust your plan as needed.",
    ],
  },
  {
    title: "Musculoskeletal Injury",
    slug: "musculoskeletal-injury",
    description:
      "Assessment and treatment for joint, muscle, tendon, and ligament injuries, including neck, shoulder, back, upper and lower limbs, and sports-related pain.",
    body: [
      "We provide tailored rehabilitation plans for acute and long-standing injuries, from everyday strains to sports-related issues.",
      "Your plan may include manual therapy, dry needling, exercises, and strategies to reduce re-injury risk.",
      "Common conditions we treat include sprains, strains, tendinopathies, post-surgical rehabilitation, and repetitive strain injuries.",
    ],
    whatToExpect: [
      "A comprehensive movement assessment to identify the root cause of your pain or dysfunction.",
      "Education about your injury, including healing timelines and activity modifications.",
      "Targeted physiotherapy techniques such as soft tissue release, dry needling, and exercises to restore strength, flexibility, and function.",
      "Guidance on return-to-sport or return-to-work strategies when appropriate.",
    ],
  },
  {
    title: "Pelvic Floor Physiotherapy",
    slug: "pelvic-floor-physiotherapy",
    description:
      "Specialized care for women's pelvic floor dysfunction, incontinence, and perinatal to postpartum recovery in a supportive, confidential environment.",
    body: [
      "Women's pelvic floor physiotherapy sessions are delivered in a private, respectful environment with a focus on education and empowerment.",
      "We work collaboratively with you to address concerns such as leakage and recovery before and after delivery.",
      "Treatment may also address conditions like pelvic organ prolapse, pain with intercourse, and bladder or bowel dysfunction.",
    ],
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
    body: [
      "Our neurological rehab focuses on what matters most to you—whether that's walking, balance, hand function, or everyday independence.",
      "Sessions are paced to your energy levels and may include task-specific training, balance work, and gait re-education.",
      "We work with individuals recovering from stroke, living with Parkinson's disease, multiple sclerosis, brain injury, and other neurological conditions.",
    ],
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
    body: [
      "We use a modern, evidence-informed approach to persistent pain that combines movement, education, and lifestyle strategies.",
      "Together, we build a plan that is realistic, sustainable, and aligned with your values and daily routine.",
      "Our approach addresses the physical, emotional, and social factors that contribute to your pain experience.",
    ],
    whatToExpect: [
      "An in-depth conversation and assessment to find the root cause and trigger of your pain.",
      "Education about pain science to help you understand what is happening in your body.",
      "Graded movement and exercise strategies to build confidence and reduce fear of movement.",
      "Practical tools for pacing and stress management to improve your quality of life.",
    ],
  },
];
