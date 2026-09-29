// Placeholder copy — swap in real content whenever it's ready.

// Real content, sourced from the Canva reference site's "UNLEASH Story" section.
export const BOOK_VENDORS = [
  {
    name: "BBIP Bookstore",
    href: "https://bbipbooks.com/product/unleash-the-blueprint-for-a-life-that-attracts-uncommon-opportunities/",
    logo: "/vendors/bbip-bookstore.png",
    logoWidth: 148,
    logoHeight: 85,
  },
  {
    name: "Amazon",
    href: "https://www.amazon.com/Unleash-Blueprint-Attracts-Uncommon-Opportunities/dp/9787828066",
    logo: "/vendors/amazon.png",
    logoWidth: 108,
    logoHeight: 81,
  },
  {
    name: "RovingHeights",
    href: "https://rhbooks.com.ng/product/unleash-the-blueprint-for-a-life-that-attracts-uncommon-opportunities/",
    logo: "/vendors/roving-heights.png",
    logoWidth: 138,
    logoHeight: 79,
  },
  {
    name: "Boldoz",
    href: "https://www.boldozbooks.com/?s=unleash",
    logo: "/vendors/boldoz.png",
    logoWidth: 130,
    logoHeight: 39,
  },
  {
    name: "Laternabooks",
    href: "https://laternabooks.ng/",
    logo: "/vendors/laternabooks.png",
    logoWidth: 138,
    logoHeight: 45,
  },
];

export const BOOK_TESTIMONIAL = {
  quote:
    "UNLEASH presents a set of practical principles that deeply resonate with my personal journey as the co-founder of Paystack. I highly recommend UNLEASH to young people aspiring to do great work and play a part in shaping the future of this continent.",
  name: "Shola Akinlade",
  title: "Co-founder/CEO at Paystack",
};

// "Three expressions of the hub" — sourced from the Canva reference site.
export const HUB_EXPRESSIONS = [
  {
    title: "For graduate professionals",
    href: "/hub",
    image: "/hub/graduate-professionals.png",
    colorClass: "text-orange-400",
  },
  {
    title: "For under-graduates",
    href: "/hub",
    image: "/hub/undergraduates.png",
    colorClass: "text-card-green",
  },
  {
    title: "For K-12 Students",
    href: "/hub",
    image: "/hub/k12-students.png",
    colorClass: "text-white",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "The Book", href: "/book" },
  { label: "Readers Programme", href: "/readers-programme" },
  { label: "Hub", href: "/hub" },
  { label: "Challenges", href: "/challenges" },
  { label: "Index", href: "/index-score" },
  { label: "Connect", href: "/connect" },
  { label: "Blog", href: "/blog" },
];

// Value/principle cards — each gets its own accent color and a dedicated
// definition page at /values/[slug], styled after the Diligence reference page.
export type ValueCardColor =
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "teal"
  | "yellow";

export const VALUE_CARDS = [
  {
    slug: "justice",
    word: "Justice",
    phonetic: "/ˈdʒʌstɪs/",
    color: "blue" as ValueCardColor,
    tagline: "Giving every person what they are rightly due.",
    definition: [
      `Justice is the quality of being fair and reasonable — treating people impartially and giving every person what they are rightly due.`,
      `It asks us to make fair decisions, protect dignity, and hold ourselves to the same standard we expect from others.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "knowledge",
    word: "Knowledge",
    phonetic: "/ˈnɒlɪdʒ/",
    color: "purple" as ValueCardColor,
    tagline: "Understanding gained through learning and experience.",
    definition: [
      `Knowledge is the information, understanding, and practical wisdom gained through study, experience, and reflection.`,
      `It becomes powerful when it is applied, tested, and shared to improve the choices we make.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "planning",
    word: "Planning",
    phonetic: "/ˈplænɪŋ/",
    color: "green" as ValueCardColor,
    tagline: "Preparing deliberately for the work ahead.",
    definition: [
      `Planning is the deliberate process of deciding what needs to happen, when it should happen, and what it will require.`,
      `Good planning turns intention into a clear path while leaving room to learn and adapt.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "diligence",
    word: "Diligence",
    phonetic: "/ˈdɪlɪdʒ(ə)ns/",
    color: "teal" as ValueCardColor,
    tagline: "Steady, earnest, energetic effort.",
    definition: [
      `Diligence is steady, earnest, and energetic effort devoted to accomplishing an undertaking.`,
      `It means doing what is required to deliver the outcome, not merely doing enough to say the task was attempted.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "compassion",
    word: "Compassion",
    phonetic: "/kəmˈpaʃ(ə)n/",
    color: "pink" as ValueCardColor,
    tagline: "A deep awareness of another's suffering, paired with the wish to relieve it.",
    definition: [
      `Compassion is a deep awareness of another person's difficulty or suffering, paired with a genuine wish to see it relieved — and, where possible, the willingness to act on that wish.`,
      `It turns strength into service. Uncommon opportunity, rightly used, always makes room for someone else.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "honor",
    word: "Honor",
    phonetic: "/ˈɒnə(r)/",
    color: "yellow" as ValueCardColor,
    tagline: "Living with dignity, integrity, and respect.",
    definition: [
      `Honor is a commitment to live with dignity, integrity, and respect for yourself and others.`,
      `It is choosing what is right and worthy even when no one is present to reward or recognize it.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "teachability",
    word: "Teachability",
    phonetic: "/ˌtiːtʃəˈbɪləti/",
    color: "blue" as ValueCardColor,
    tagline: "The humility and willingness to keep learning.",
    definition: [
      `Teachability is the willingness to listen, receive correction, and remain open to better ways of thinking and doing.`,
      `It combines humility with action: learn the lesson, apply it, and keep growing.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "trustworthiness",
    word: "Trustworthiness",
    phonetic: "/ˈtrʌstˌwɜːðinəs/",
    color: "purple" as ValueCardColor,
    tagline: "Being dependable, honest, and worthy of confidence.",
    definition: [
      `Trustworthiness is being reliable, honest, and consistent enough that others can safely build on your word.`,
      `It is earned through small commitments kept over time, especially when nobody is watching.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "quality-relationships",
    word: "Quality Relationships",
    phonetic: "/ˈkwɒləti rɪˈleɪʃənʃɪps/",
    color: "pink" as ValueCardColor,
    tagline: "Building relationships marked by depth, care, and mutual growth.",
    definition: [
      `Quality relationships are built through respect, honesty, presence, and a genuine investment in one another's growth.`,
      `They give us the support, challenge, and accountability needed to become who we are capable of becoming.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "prudence",
    word: "Prudence",
    phonetic: "/ˈpruːdns/",
    color: "yellow" as ValueCardColor,
    tagline: "Using good judgment to make wise decisions.",
    definition: [
      `Prudence is the ability to assess a situation carefully and choose a wise, responsible course of action.`,
      `It balances ambition with foresight, considering consequences before acting.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "intentionality-of-speech",
    word: "Intentionality of Speech",
    phonetic: "/ɪnˌtɛnʃəˈnæləti əv spiːtʃ/",
    color: "teal" as ValueCardColor,
    tagline: "Using words thoughtfully, truthfully, and purposefully.",
    definition: [
      `Intentionality of speech means choosing words with care, speaking truthfully, and considering the effect our words will have.`,
      `It calls us to communicate with clarity, courage, kindness, and purpose rather than reacting carelessly.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "discipline-self-control",
    word: "Discipline & Self-Control",
    phonetic: "/ˈdɪsɪplɪn ænd sɛlf kənˈtroʊl/",
    color: "green" as ValueCardColor,
    tagline: "Training yourself to choose what matters over what is easiest.",
    definition: [
      `Discipline and self-control are the ability to do what needs to be done and govern your impulses, emotions, and desires.`,
      `Together, they turn good intentions into consistent action and keep short-term feelings from overruling long-term purpose.`,
    ],
    image: "/book/back.jpg",
  },
];

// Footer link columns — sourced from the Canva reference site.
export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "The Book", href: "/book" },
      { label: "Principles", href: "/#principles" },
      { label: "Contact Us", href: "/connect" },
    ],
  },
  {
    title: "Communities",
    links: [
      { label: "For graduate professionals", href: "/hub" },
      { label: "For undergraduates", href: "/hub" },
      { label: "For K-12 Students", href: "/hub" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Readers Programme", href: "/readers-programme" },
      { label: "Initiatives", href: "/initiatives" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/connect#newsletter" },
      { label: "Shop", href: "/shop" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/theunleashhub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/theunleashhub" },
  { label: "X", href: "https://x.com/theunleashhub" },
  { label: "TikTok", href: "https://www.tiktok.com/@theunleashhub" },
];
