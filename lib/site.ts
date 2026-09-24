// Real, sourced content for the UNLEASH Hub inner pages.
// Sources: tkoinsights.com/unleash, tkoinsights.com/unleash-hub, and the Canva reference.

export const JOIN_FORM_URL = "https://forms.gle/3e1FMJmHskNZTAFX9";

export type SocialKey = "instagram" | "linkedin" | "x" | "tiktok" | "youtube";

export const SOCIALS: Record<
  SocialKey,
  { label: string; href: string; handle: string }
> = {
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/theunleashhub",
    handle: "@theunleashhub",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/theunleashhub",
    handle: "theunleashhub",
  },
  x: {
    label: "X",
    href: "https://x.com/theunleashhub",
    handle: "@theunleashhub",
  },
  tiktok: {
    label: "TikTok",
    href: "https://www.tiktok.com/@theunleashhub",
    handle: "@theunleashhub",
  },
  youtube: {
    label: "YouTube",
    href: "https://www.youtube.com/@tkoinsights",
    handle: "@tkoinsights",
  },
};

export const AUTHOR = {
  name: "Topsy Kola-Oyeneyin",
  nickname: "TKO",
  role: "Author, UNLEASH & Founder, The UNLEASH Hub",
  linkedin: "https://www.linkedin.com/in/topsy-kola-oyeneyin/",
  bio: [
    "Topsy Kola-Oyeneyin (TKO) is passionate about everything digital, empowering young Africans, and how effectively marrying both can accelerate economic development and transform African nations.",
    "At twenty-eight she became a General Manager in Nigeria\u2019s oldest bank \u2014 a role typically occupied by people in their fifties. That experience shaped a conviction she now writes and speaks about: that young people are not too young to lead, create, and seize uncommon opportunities.",
    "Her book, UNLEASH, is a blueprint to equip young Africans to prepare, position, and take advantage of this season of rapid transition.",
  ],
  story: [
    "At the age of twenty-eight, I became a General Manager in Nigeria\u2019s oldest bank \u2014 a role typically occupied by people in their fifties. Opportunities that were rare then are about to become more common. The acceleration of digitalization has created an enabling environment in which young, skilled people can innovate, create, and drive significant impact.",
    "I wrote this book to bridge the gap between your reality and your desire; to help you prepare and position to take advantage of uncommon opportunities.",
  ],
  storyClose:
    "Bottom line, the question isn\u2019t your age. The question is, are you ready to UNLEASH?",
};

export type Testimonial = { quote: string; name: string; title: string };

export const GLOBAL_LEADERS: Testimonial[] = [
  {
    quote:
      "UNLEASH presents a set of practical principles that deeply resonate with my personal journey as the co-founder of Paystack, and I\u2019m really glad that Topsy has been able to articulate these principles clearly and succinctly. UNLEASH reminds us that success isn\u2019t reserved for a select few \u2014 anyone can succeed if they are committed to creating value and are willing to demonstrate the required level of diligence. I highly recommend UNLEASH to young people aspiring to do great work and play a part in shaping the future of this continent.",
    name: "Shola Akinlade",
    title: "Co-Founder & CEO, Paystack",
  },
  {
    quote:
      "UNLEASH is a gift from Topsy Kola-Oyeneyin (TKO) to our world, hinged on her wealth of experiences and life lessons. A truly comprehensive manual for building a meaningful and impactful life, each chapter is filled with honest and relatable stories, clear insights and practical wisdom.",
    name: "Mrs. Ndidi Okonkwo Nwuneli",
    title: "CEO & President, The ONE Campaign",
  },
  {
    quote:
      "Topsy\u2019s book offers valuable guidance for those looking to leverage smart luck to their advantage. It emphasizes the power of personal agency in creating opportunities and achieving greatness. By adopting the principles and practices outlined in this book, individuals can navigate their career paths with intention and purpose, ultimately shaping their own destinies.",
    name: "Dr. Ola Brown",
    title: "Founder, HealthCap Africa",
  },
  {
    quote:
      "I read UNLEASH cover to cover on a long flight and I\u2019ve never been so transfixed by a text. It presents practical biblical wisdom for young people determined to live out God\u2019s purpose through their lives in such a simple and accessible way. I strongly recommend this book to any young person who truly wishes to unleash all that God has deposited in them for His glory.",
    name: "Iyin Aboyeji",
    title: "Founding Partner, Future Africa",
  },
];

export const PRAISE: { quote: string; name: string }[] = [
  {
    quote:
      "It was a refreshing reminder and summary of what should be done for positive change to be seen. I loved that it had God\u2019s principles written all over it. It is a positive push in the process of unleashing myself.",
    name: "Favour Esezobor",
  },
  {
    quote:
      "UNLEASH is a practical life guide \u2014 beginning from where you are to where you intend to be, using every resource at your disposal, not giving excuses, being responsible, taking action, and intentionally engaging the process to accomplish required results.",
    name: "Saintlouis Egbobiani",
  },
  {
    quote:
      "A very practical and instructive book! I had so many \u2018aha\u2019, sobering and inspiring moments going through the pages. I can confidently say it was 100% worth my time and money.",
    name: "Sinmisola Nojimu-Yusuf",
  },
  {
    quote:
      "This book is a true gem. Each chapter felt like a personal mentorship session with TKO, guiding me. I loved the practical applications for each dimension.",
    name: "Adebisi Borokinni",
  },
  {
    quote:
      "I loved reading the book \u2014 it reminded me and motivated me to do the things I value. \u2018The proof of desire is pursuit.\u2019 I\u2019ve made up my mind to work harder and plan ahead in life.",
    name: "Afolabi Oshinowo",
  },
  {
    quote:
      "My biggest takeaway is the realisation that I am a product of my deliberate speech and actions.",
    name: "Victoria Paulinus",
  },
  {
    quote:
      "The book was so impactful. It\u2019s a book I will definitely read again and share with others.",
    name: "Ibiyemi Eniola",
  },
  {
    quote:
      "The book is relevant to my life at this time. I have been seeking to discover my potential, and the book helped and also redirected me to other resources that can help.",
    name: "Joseph Oyedepo",
  },
  {
    quote:
      "UNLEASH is that book for me \u2014 its principles are easily adaptable and applicable to my everyday life. The 12 rules in this book are shaping my habits, which will in turn transform me until I totally unleash myself.",
    name: "Tolope Adekanye",
  },
  {
    quote:
      "It promises a blueprint. It delivers a blueprint and more. The chapter on pursuing wisdom ties everything in the book together in a way that inspires me to work through her blueprint one step at a time.",
    name: "Bill Cushard",
  },
  {
    quote:
      "What a book, what a gift! An absolutely engaging and inspiring read. I loved how the author ended each section with practical insights to transform one\u2019s life from good to GREAT, IMPACTFUL & SATISFYING.",
    name: "Mervin",
  },
];

export type HubAudience = {
  title: string;
  description: string;
  icon: string;
};

export const HUB_AUDIENCES: HubAudience[] = [
  {
    title: "Changemaker",
    description:
      "Dedicated to making a social impact and seeking a supportive community.",
    icon: "sparkles",
  },
  {
    title: "Early Bloomer",
    description:
      "You found your footing early and are looking to give back and help others up.",
    icon: "sprout",
  },
  {
    title: "Recent Graduate",
    description:
      "You just finished school and are in your early-stage career, looking for a community to accelerate your career and impact.",
    icon: "graduation-cap",
  },
  {
    title: "Student",
    description:
      "Looking to gain new skills and insights to make a difference.",
    icon: "book-open",
  },
];

export const HUB_GETTING_STARTED = [
  {
    title: "Understand the community",
    description:
      "Read our community guidelines and expectations so you know what the Hub is about and how we show up for one another.",
    href: "/hub#guidelines",
    cta: "Read the guidelines",
  },
  {
    title: "Stay informed",
    description:
      "Subscribe to our newsletter to get periodic updates and information on what\u2019s going on in the Hub.",
    href: "/connect#newsletter",
    cta: "Subscribe",
  },
  {
    title: "Join our community",
    description:
      "Fill the short form and receive an email to join the WhatsApp community.",
    href: JOIN_FORM_URL,
    cta: "Join now",
    external: true,
  },
];

export const HUB_MAXIMIZE = [
  {
    title: "Active participation",
    icon: "message-circle",
    items: [
      "Engage in discussions, ask questions, and share insights.",
      "Introduce yourself and connect with others.",
      "Offer support and constructive feedback to peers.",
    ],
  },
  {
    title: "Events & resources",
    icon: "calendar",
    items: [
      "Webinars & workshops \u2014 stay updated on industry trends and skills.",
      "Community meetups \u2014 build deeper connections with peers.",
      "Resource library \u2014 access articles, videos, and training materials.",
      "Mentorship opportunities \u2014 learn from experienced professionals.",
      "Project collaboration \u2014 work on meaningful initiatives with others.",
    ],
  },
  {
    title: "Grow & give back",
    icon: "handshake",
    items: [
      "Mentor someone a step behind you.",
      "Lead a study circle or a project within the community.",
      "Share what you\u2019re learning so it multiplies.",
    ],
  },
];

export type Initiative = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  icon: string;
  stat: { value: string; label: string };
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "readers-programme",
    title: "The Unleashed Readers Programme",
    tagline: "Go deeper, apply the principles, and grow in community.",
    description: [
      "An immersive programme where readers move beyond the pages \u2014 working through UNLEASH chapter by chapter, applying each principle to real life, and processing it all in a structured cohort.",
      "Each cohort runs a guided curriculum with reflection prompts, group discussions, and accountability so the principles become habits, not highlights.",
    ],
    icon: "book-marked",
    stat: { value: "12", label: "principles in practice" },
  },
  {
    slug: "campus-chapters",
    title: "Campus Chapters",
    tagline: "Student-led communities on campuses across Africa.",
    description: [
      "Campus Chapters bring the UNLEASH movement to universities and schools \u2014 student-led hubs where peers gather to learn the principles, host study circles, and launch campus projects.",
      "If you\u2019re a student ready to start a chapter, the Hub provides the playbook, resources, and a network of other chapters to lean on.",
    ],
    icon: "school",
    stat: { value: "Student-led", label: "from day one" },
  },
  {
    slug: "community-projects",
    title: "Community Projects",
    tagline: "Principle-driven projects that create measurable impact.",
    description: [
      "Ideas become meaningful when they move beyond conversation. Community Projects turn the principles into action \u2014 collaborations where members build something real for their campus, city, or community.",
      "Projects range from literacy drives and mentorship clinics to digital-skills bootcamps, always anchored in the UNLEASH principles.",
    ],
    icon: "rocket",
    stat: { value: "Impact-first", label: "by design" },
  },
];

export const CONNECT_WAYS = [
  {
    title: "Book readings & signings",
    icon: "book-open",
    description:
      "Intimate events where TKO shares the story behind UNLEASH and answers your questions.",
  },
  {
    title: "UNLEASH masterclasses",
    icon: "presentation",
    description:
      "Deep-dive sessions on the principles \u2014 diligence, vision, agency, and more \u2014 with practical application.",
  },
  {
    title: "Community meetups",
    icon: "users",
    description:
      "In-person and virtual gatherings to connect, share, and grow with fellow changemakers.",
  },
  {
    title: "Webinars & workshops",
    icon: "monitor-play",
    description:
      "Skills-based sessions on careers, digital tools, and building in the new economy.",
  },
];

export type BlogBlock = { type: "p" | "h2" | "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  blocks: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "youre-not-too-young",
    title: "You\u2019re Not Too Young \u2014 Really",
    excerpt:
      "Topsy became a General Manager at 28. The point isn\u2019t her r\u00e9sum\u00e9 \u2014 it\u2019s what her story proves about the decade ahead of you.",
    category: "Mindset",
    date: "2026-08-14",
    readTime: "4 min read",
    blocks: [
      {
        type: "p",
        text: "At the age of twenty-eight, Topsy Kola-Oyeneyin became a General Manager in Nigeria\u2019s oldest bank \u2014 a role typically occupied by people in their fifties. That single fact has a way of stopping the room. But the real point of the UNLEASH story is not that she did it. It is that the conditions that made it possible are expanding, fast.",
      },
      {
        type: "p",
        text: "The acceleration of digitalization has created an enabling environment in which young, skilled people can innovate, create, and drive significant impact without waiting in line for permission. The gatekeepers of the last generation are being bypassed by the tools of this one.",
      },
      { type: "h2", text: "The shift that changes everything" },
      {
        type: "p",
        text: "Opportunity used to flow through seniority \u2014 decades of tenure, an office with a view, a title that arrived with grey hair. Today, value is increasingly portable: if you can create it, you can be rewarded for it, often from anywhere, at almost any age.",
      },
      {
        type: "p",
        text: "That is the enabling environment UNLEASH keeps pointing to. The question is no longer whether the opportunity exists. The question is whether you are prepared and positioned to take it when it shows up.",
      },
      {
        type: "quote",
        text: "Bottom line, the question isn\u2019t your age. The question is, are you ready to UNLEASH?",
      },
      {
        type: "p",
        text: "Readiness is not a feeling \u2014 it is a set of decisions you repeat: learn the principle, practice the habit, position yourself in rooms where opportunity can find you. Age was never the barrier. Readiness always was.",
      },
    ],
  },
  {
    slug: "diligence-is-a-mindset",
    title: "Diligence Is a Mindset, Not a Mood",
    excerpt:
      "Diligence is outcome-focused, not input-oriented. Here\u2019s the difference \u2014 and how to actually live it.",
    category: "Principles",
    date: "2026-08-02",
    readTime: "4 min read",
    blocks: [
      {
        type: "p",
        text: "Merriam-Webster defines diligence as \u201csteady, earnest, and energetic effort\u201d \u2014 devoted, painstaking work to accomplish an undertaking. Read that again slowly. The emphasis is not on busyness. It is on the undertaking.",
      },
      {
        type: "p",
        text: "That is the distinction UNLEASH draws so sharply: diligence gives whatever is required to deliver the result, not whatever is required to merely complete the activity. The two are not the same, and confusing them is one of the quietest ways to waste a career.",
      },
      { type: "h2", text: "Outcome-focused vs. input-oriented" },
      {
        type: "p",
        text: "The input-oriented mind says, \u201cI have done my bit.\u201d The outcome-focused mind says, \u201cI\u2019ll do whatever it takes to achieve the desired outcome.\u201d The first clocks hours. The second owns results. Both can look busy from the outside; only one moves the needle.",
      },
      {
        type: "p",
        text: "Diligence, then, is a mindset before it is a behaviour. It is the internal decision that the result matters more than the effort you can comfortably describe. Once that decision is made, the work rearranges itself around it.",
      },
      {
        type: "quote",
        text: "\u201cI\u2019ll do whatever it takes to achieve the desired outcome\u201d versus \u201cI have done my bit.\u201d",
      },
      {
        type: "p",
        text: "Try this for one week: pick a single task and refuse to consider it done until the outcome is delivered, not the attempt. Watch how differently you spend your energy.",
      },
    ],
  },
  {
    slug: "proof-of-desire-is-pursuit",
    title: "The Proof of Desire Is Pursuit",
    excerpt:
      "Wanting something is not the same as pursuing it. The distance between the two is where most people quietly stop.",
    category: "Growth",
    date: "2026-07-21",
    readTime: "3 min read",
    blocks: [
      {
        type: "p",
        text: "\u201cThe proof of desire is pursuit.\u201d It is one of the sharpest lines in UNLEASH, and it dismantles a comforting illusion we all carry: that wanting something deeply is somehow the same as being on the way to it.",
      },
      {
        type: "p",
        text: "Desire is invisible and cheap. Anyone can want. Pursuit is visible and costly \u2014 it shows up as a plan, as repeated action, as the uncomfortable things you do on the days you don\u2019t feel like doing them. Pursuit is what makes desire legible to the world.",
      },
      { type: "h2", text: "The gap is where it counts" },
      {
        type: "p",
        text: "Most ambitions die in the gap between wanting and pursuing \u2014 not from lack of ability, but from lack of translation. You cannot negotiate with an outcome. You can only pursue it, or not.",
      },
      {
        type: "p",
        text: "So the diagnostic question is blunt: if your desire were judged only by your calendar and your bank of finished things, would there be any evidence of it at all?",
      },
      {
        type: "quote",
        text: "\u201cThe proof of desire is pursuit.\u201d",
      },
      {
        type: "p",
        text: "Close the gap this week with one concrete act of pursuit \u2014 not a plan to plan, but a move. A message sent, a draft started, a meeting booked. Pursuit is the only language opportunity reliably understands.",
      },
    ],
  },
  {
    slug: "see-it-before-you-see-it",
    title: "Vision: See It Before You See It",
    excerpt:
      "Without vision, discipline has nowhere to aim. How to build a picture of the future that pulls you forward.",
    category: "Mindset",
    date: "2026-07-08",
    readTime: "4 min read",
    blocks: [
      {
        type: "p",
        text: "Vision is the ability to see, with clarity, a future that does not yet exist \u2014 and to let that picture pull your present decisions toward it. It is not wishful thinking. It is a specific, felt image of a destination.",
      },
      {
        type: "p",
        text: "UNLEASH places vision at the centre of the principles because every other principle needs a direction. Diligence without vision is motion without a destination. Courage without vision is bravery without a cause.",
      },
      { type: "h2", text: "Give your discipline somewhere to aim" },
      {
        type: "p",
        text: "Discipline is a bridge. But a bridge needs two ends \u2014 the person you are now, and the person you intend to become. If the far end is blurry, the bridge goes nowhere, and all that discipline becomes busy drifting.",
      },
      {
        type: "p",
        text: "Build your vision in concrete terms: what will you be doing, with whom, contributing what, in five years? Write it down. The clearer the picture, the more your daily decisions will naturally align with it.",
      },
      {
        type: "quote",
        text: "Vision gives every other principle a direction to grow toward.",
      },
      {
        type: "p",
        text: "You don\u2019t need certainty to start \u2014 you need direction. A rough, vivid picture you can run toward beats a perfect plan you never leave the couch for.",
      },
    ],
  },
  {
    slug: "pursuing-wisdom-on-purpose",
    title: "Pursuing Wisdom on Purpose",
    excerpt:
      "Wisdom isn\u2019t something that just happens to you over time \u2014 it\u2019s something you pursue.",
    category: "Principles",
    date: "2026-06-25",
    readTime: "3 min read",
    blocks: [
      {
        type: "p",
        text: "There is a phrase in UNLEASH that stops readers in their tracks: \u201cpursuing wisdom.\u201d Most of us have quietly assumed that wisdom is something that happens to a person over time \u2014 a slow, automatic sediment of years. The book argues otherwise.",
      },
      {
        type: "p",
        text: "Wisdom can be pursued. That changes everything, because pursuit is something you can do today, at any age. It means seeking out the wise, asking better questions, reflecting on your failures, and deliberately learning from experience instead of merely surviving it.",
      },
      { type: "h2", text: "The chapter that ties it together" },
      {
        type: "p",
        text: "Knowledge is the raw material; wisdom is knowing what to do with it. One reader put it perfectly: the chapter on wisdom ties everything else in the book together, because it turns information into applied, tested understanding.",
      },
      {
        type: "p",
        text: "Pursuing wisdom is a posture: stay teachable, stay curious, and treat every mistake as tuition you\u2019ve already paid \u2014 provided you actually learn the lesson.",
      },
      {
        type: "quote",
        text: "When I am lazy, I think wisdom is something that happens to a person over time. But Topsy reminded me we can pursue it.",
      },
      {
        type: "p",
        text: "Start small: find one person ahead of you, ask one genuine question, and read one book that stretches you this month. That is what pursuing wisdom looks like in practice.",
      },
    ],
  },
  {
    slug: "smart-luck-and-agency",
    title: "Smart Luck and the Power of Agency",
    excerpt:
      "Luck favours the positioned. How personal agency turns chance into uncommon opportunity.",
    category: "Opportunity",
    date: "2026-06-10",
    readTime: "4 min read",
    blocks: [
      {
        type: "p",
        text: "Nobody succeeds on merit alone, and nobody succeeds on luck alone. The middle path \u2014 what UNLEASH calls smart luck \u2014 is where personal agency meets opportunity. You cannot control when opportunity shows up. You can control how ready you are when it does.",
      },
      {
        type: "p",
        text: "Dr. Ola Brown captures it well: UNLEASH emphasizes the power of personal agency in creating opportunities and achieving greatness. Agency is the conviction that your decisions meaningfully shape your trajectory \u2014 that you are an author of your life, not a passenger in it.",
      },
      { type: "h2", text: "Position before luck" },
      {
        type: "p",
        text: "Think of it as positioning. You build the skills, the character, the relationships, and the reputation. Then, when an unlikely door opens \u2014 a chance introduction, an unexpected role \u2014 you are someone who can walk through it. Luck meets preparation and looks like destiny.",
      },
      {
        type: "p",
        text: "The alternative is to wait passively and blame the door for not opening. But the door was never the point. The person you became before it opened was.",
      },
      {
        type: "quote",
        text: "By adopting the principles and practices in this book, individuals can navigate their career paths with intention and purpose.",
      },
      {
        type: "p",
        text: "This week, make one deliberate investment in your future self: a skill, a relationship, or a habit that raises the odds. Smart luck is built in advance.",
      },
    ],
  },
];
