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
    slug: "diligence",
    word: "Diligence",
    phonetic: "/ˈdɪlɪdʒ(ə)ns/",
    color: "blue" as ValueCardColor,
    tagline: "Steady, earnest, energetic effort.",
    definition: [
      `The Merriam-Webster.com Dictionary defines "diligence" as "steady, earnest, and energetic effort" and "devoted and painstaking work to accomplish an undertaking." Diligence focuses on giving whatever is required to deliver the results and not necessarily what is required to merely complete the activity — there is a difference.`,
      `Diligence is a mindset that is outcome focused versus input oriented; i.e., "I'll do whatever it takes to achieve the desired outcome" versus "I have done my bit."`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "justice",
    word: "Justice",
    phonetic: "/ˈdʒʌstɪs/",
    color: "purple" as ValueCardColor,
    tagline: "Giving every person what they are rightly due.",
    definition: [
      `Justice is the quality of being fair and reasonable — treating people impartially and giving every person what they are rightly due, in judgment, in dealings, and in opportunity.`,
      `Practiced daily, justice is a small, repeated choice: to be honest when it costs you, to defend the person who has no one else defending them, and to hold yourself to the same standard you hold others.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "knowledge",
    word: "Knowledge",
    phonetic: "/ˈnɒlɪdʒ/",
    color: "green" as ValueCardColor,
    tagline: "Facts, information and understanding gained through experience.",
    definition: [
      `Knowledge is the facts, information and understanding that a person gains through experience, study, or reflection — the raw material out of which wisdom is eventually built.`,
      `Knowledge on its own is not power. Applied knowledge — tested against real situations and shared with others — is what compounds into uncommon opportunity.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "discipline",
    word: "Discipline",
    phonetic: "/ˈdɪsɪplɪn/",
    color: "teal" as ValueCardColor,
    tagline: "Training that produces a specific character or pattern of behaviour.",
    definition: [
      `Discipline is training yourself to do what needs to be done, in the right way, at the right time — regardless of how you feel about it in the moment.`,
      `It is the bridge between goals and accomplishment: the daily, unglamorous repetition that no one sees, done anyway.`,
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
    slug: "trustworthiness",
    word: "Trustworthiness",
    phonetic: "/ˈtrʌstˌwɜːðinəs/",
    color: "yellow" as ValueCardColor,
    tagline: "Deserving of trust or confidence; dependable.",
    definition: [
      `Trustworthiness is being deserving of trust or confidence — reliable, honest, and consistent enough that others can build on your word without needing to verify it.`,
      `It is earned in private, in the small commitments nobody is watching, long before it is ever tested in public.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "integrity",
    word: "Integrity",
    phonetic: "/ɪnˈtɛɡrɪti/",
    color: "blue" as ValueCardColor,
    tagline: "Wholeness between what you believe, say, and do.",
    definition: [
      `Integrity is the alignment between what you believe, what you say, and what you do — moral wholeness, not moral perfection. It is choosing the right thing when no one is watching, because character isn't for display.`,
      `A person of integrity is predictable in the best sense: their word can be trusted because it has already been tested against the truth, even when the truth was costly.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "self-control",
    word: "Self-Control",
    phonetic: "/sɛlf kənˈtroʊl/",
    color: "purple" as ValueCardColor,
    tagline: "Restraint over one's own impulses, emotions, or desires.",
    definition: [
      `Self-control is the ability to govern your own impulses, emotions, and desires rather than being governed by them. It is the difference between reacting and responding.`,
      `Every uncommon opportunity eventually tests self-control — the discipline to wait, to hold your tongue, to say no to the good so you can say yes to the best.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "courage",
    word: "Courage",
    phonetic: "/ˈkʌrɪdʒ/",
    color: "pink" as ValueCardColor,
    tagline: "Strength in the face of pain, fear, or grief.",
    definition: [
      `Courage is not the absence of fear but the decision that something else — truth, duty, love — matters more than the fear. It is what turns a good intention into a real action.`,
      `Every principle on this list eventually demands courage to practice, because doing the right thing is rarely the easy thing.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "gratitude",
    word: "Gratitude",
    phonetic: "/ˈɡrætɪtjuːd/",
    color: "yellow" as ValueCardColor,
    tagline: "Readiness to notice and return kindness.",
    definition: [
      `Gratitude is the practice of noticing what has already been given, rather than fixating only on what is still wanted. It reorients ambition around appreciation instead of entitlement.`,
      `People who build uncommon lives tend to be remarkably grateful people — gratitude keeps success from curdling into arrogance.`,
    ],
    image: "/book/back.jpg",
  },
  {
    slug: "patience",
    word: "Patience",
    phonetic: "/ˈpeɪʃ(ə)ns/",
    color: "teal" as ValueCardColor,
    tagline: "The capacity to endure delay without giving up.",
    definition: [
      `Patience is the capacity to endure delay or difficulty without giving up or growing bitter. It is not passive waiting — it is active endurance toward something worth having.`,
      `Uncommon opportunities are rarely instant. Patience is what keeps you working the plan after the excitement of starting it has worn off.`,
    ],
    image: "/book/front.jpg",
  },
  {
    slug: "vision",
    word: "Vision",
    phonetic: "/ˈvɪʒ(ə)n/",
    color: "green" as ValueCardColor,
    tagline: "A vivid mental image of what could be.",
    definition: [
      `Vision is the ability to see, with clarity, a future that does not yet exist — and to let that picture pull your present decisions toward it.`,
      `Without vision, discipline has nowhere to aim. Vision gives every other principle on this list a direction to grow toward.`,
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
