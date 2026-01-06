export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "5 Simple Stretches to Relieve Lower Back Pain",
    slug: "5-stretches-relieve-lower-back-pain",
    excerpt: "Lower back pain affects millions of people. Learn five effective stretches you can do at home to help reduce discomfort and improve mobility.",
    date: "2025-01-05",
    author: "Cherie Kuo, PT, PhD",
    category: "Pain Management",
    image: "/images/blog-back-pain.jpg",
    body: [
      "Lower back pain is one of the most common reasons people seek physiotherapy. Whether it's from sitting at a desk all day, lifting something heavy, or simply the wear and tear of daily life, back pain can significantly impact your quality of life.",
      "The good news is that many cases of lower back pain can be managed with simple stretches and exercises. Here are five stretches that can help relieve tension and improve flexibility in your lower back.",
      "**1. Cat-Cow Stretch** - Start on your hands and knees. Slowly arch your back up like a cat, then let it sag down while lifting your head. Repeat 10 times. This gentle movement helps mobilize the spine and relieve stiffness.",
      "**2. Child's Pose** - From a kneeling position, sit back on your heels and stretch your arms forward on the floor. Hold for 30-60 seconds. This stretch gently elongates the lower back muscles.",
      "**3. Knee-to-Chest Stretch** - Lie on your back and bring one knee toward your chest, holding it with both hands. Hold for 30-60 seconds, then switch legs. This helps release tension in the lower back and glutes.",
      "**4. Pelvic Tilts** - Lie on your back with knees bent and feet flat. Gently flatten your lower back against the floor by tightening your abdominal muscles. Hold for 5 seconds and repeat 10 times.",
      "**5. Thread the Needle** - Start on your hands and knees. Reach one arm under your body, sliding it along the floor while lowering your shoulder and head to the ground. Hold for 30-60 seconds, then switch sides. This stretch targets the upper and mid-back while gently releasing lower back tension.",
      "Importantly, if your pain is severe, persistent, or accompanied by other symptoms like numbness or weakness, it's important to consult with a physiotherapist for a proper assessment and personalized treatment plan.",
    ],
  },
  {
    title: "The Benefits of Dry Needling for Muscle Pain",
    slug: "benefits-dry-needling-muscle-pain",
    excerpt: "Dry needling is an effective treatment for muscle pain and trigger points. Discover how this technique works and what to expect during treatment.",
    date: "2024-12-10",
    author: "Cherie Kuo, PT, PhD",
    category: "Treatment Techniques",
    image: "/images/blog-needle.jpg",
    body: [
      "If you've been dealing with persistent muscle pain or tightness, you may have heard about dry needling (or Intramuscular Stimulation/IMS) as a treatment option. This technique has gained popularity in physiotherapy for its effectiveness in treating muscle-related pain.",
      "**What is Dry Needling?**",
      "Dry needling involves inserting thin, sterile needles into trigger points—tight bands of muscle that can cause pain and restrict movement. Unlike acupuncture, which is based on traditional Chinese medicine, dry needling is grounded in Western medical principles and targets specific muscular issues.",
      "**How Does It Work?**",
      "When a needle is inserted into a trigger point, it can cause a local twitch response—a brief contraction of the muscle. This helps release the tight band, improve blood flow to the area, and reduce pain. The needle also stimulates the body's natural healing response.",
      "**Example Conditions Treated with Dry Needling:**",
      "• Neck and back pain",
      "• Shoulder pain and rotator cuff issues",
      "• Tennis elbow and golfer's elbow",
      "• Headaches and jaw pain",
      "• Hip and knee pain",
      "**What to Expect During Treatment:**",
      "During a dry needling session, you may feel a brief pinch as the needle is inserted, followed by a deep ache or twitch when the trigger point is reached. Most people find the treatment tolerable.",
      "After treatment, you may experience some soreness similar to post-exercise muscle ache. This usually resolves within 24-48 hours. Many patients notice improvement after just one or two sessions, though a series of treatments may be recommended for optimal results.",
    ],
  },
];
