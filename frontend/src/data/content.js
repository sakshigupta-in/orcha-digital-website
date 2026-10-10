import {
  Share2,
  PenTool,
  Clapperboard,
  Megaphone,
  Compass,
  Globe,
  Search,
  Fingerprint,
  PenLine,
  Target,
  Users,
  Lightbulb,
  Brush,
  Layers,
  HeartHandshake,
} from "lucide-react";

export const CONTACT = {
  phoneDisplay: "+91 62605 54343",
  phoneHref: "tel:+916260554343",
  email: "vivekgpt26@gmail.com",
  emailHref: "mailto:vivekgpt26@gmail.com",
  whatsapp: "https://wa.me/916260554343",
  website: "www.orchadigital.com",
  location: "Indore, Madhya Pradesh, India",
};

export const SERVICES = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: Share2,
    description:
      "End-to-end handling of your social presence — planning, posting, scheduling and page management so your brand stays active and consistent.",
    points: ["Content scheduling", "Page management", "Monthly reporting"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    icon: PenTool,
    description:
      "Scroll-stopping creatives for posts, stories, ads and campaigns, designed to match your brand and speak to your audience.",
    points: ["Post & story creatives", "Ad designs", "Campaign artwork"],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    icon: Clapperboard,
    description:
      "Crisp, engaging reels and short-form videos edited for retention — cuts, captions, music and pacing that keep viewers watching.",
    points: ["Reels & short videos", "Captions & transitions", "Platform-ready formats"],
  },
  {
    slug: "social-media-advertising",
    title: "Social Media Advertising",
    icon: Megaphone,
    description:
      "Targeted ad campaigns planned and set up to reach the right people — with clear goals and honest performance reviews.",
    points: ["Campaign setup", "Audience targeting", "Ad planning"],
  },
  {
    slug: "social-media-strategy",
    title: "Social Media Strategy",
    icon: Compass,
    description:
      "A clear roadmap for your brand: what to post, where to post, and why — built on audience understanding and competitor research.",
    points: ["Content strategy", "Competitor research", "Channel planning"],
  },
  {
    slug: "website-landing-page",
    title: "Website / Landing Page",
    icon: Globe,
    description:
      "Modern, responsive websites and landing pages built to present your brand clearly and turn visitors into enquiries.",
    points: ["Responsive design", "Landing pages", "Enquiry-focused layouts"],
  },
  {
    slug: "seo-google-marketing",
    title: "SEO & Google Marketing",
    icon: Search,
    description:
      "Get found when customers search — Google Business Profile setup, basic SEO recommendations and search-focused improvements.",
    points: ["Google Business Profile", "SEO recommendations", "Local visibility"],
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    icon: Fingerprint,
    description:
      "A memorable identity for your business — logo direction, colours, typography and a consistent look across every touchpoint.",
    points: ["Logo & identity", "Brand guidelines", "Visual consistency"],
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    icon: PenLine,
    description:
      "Words that work — captions, hashtags, scripts and website copy written to sound human and move people to act.",
    points: ["Captions & hashtags", "Video scripts", "Website copy"],
  },
];

export const WHY_US = [
  {
    title: "Business-First Strategy",
    icon: Target,
    description:
      "Every creative decision starts with your business goal — not trends. We design work that is meant to move your numbers.",
  },
  {
    title: "Audience Understanding",
    icon: Users,
    description:
      "We study who your customers are and what they respond to, so the content speaks to real people instead of shouting into the void.",
  },
  {
    title: "Creative Problem-Solving",
    icon: Lightbulb,
    description:
      "Limited budget, crowded market, low reach — we treat constraints as briefs and find creative ways around them.",
  },
  {
    title: "Signature Brand Identity",
    icon: Fingerprint,
    description:
      "We build a consistent, recognisable look and voice for your brand so people remember you between posts.",
  },
  {
    title: "Human Creativity",
    icon: Brush,
    description:
      "Real designers, editors and writers craft your content. Thoughtful, original work — never templated filler.",
  },
  {
    title: "Complete Digital Management",
    icon: Layers,
    description:
      "Social media, content, ads, website and search — managed under one roof so you can focus on running your business.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "PLAN",
    icon: Compass,
    description: "Understand goals and requirements.",
  },
  {
    step: "02",
    name: "CREATE",
    icon: PenTool,
    description: "Develop creative concepts and digital assets.",
  },
  {
    step: "03",
    name: "PUBLISH",
    icon: Globe,
    description: "Publish approved work.",
  },
  {
    step: "04",
    name: "GROW",
    icon: HeartHandshake,
    description: "Review available performance information and identify improvements.",
  },
];

export const PACKAGES = [
  {
    slug: "starter",
    name: "STARTER",
    price: "₹7,000",
    tag: "Essential social presence",
    features: [
      "Social media posts",
      "4 reels / short videos",
      "Stories",
      "Captions and hashtags",
      "Page management",
      "Content scheduling",
      "Basic content planning",
      "Monthly report",
    ],
  },
  {
    slug: "growth",
    name: "GROWTH",
    price: "₹12,000",
    tag: "Most popular — organic + ads planning",
    popular: true,
    features: [
      "Social media posts",
      "8 reels / short videos",
      "15 stories",
      "Captions and hashtags",
      "Page management",
      "Content calendar",
      "Community management",
      "Competitor research",
      "Basic ad campaign planning",
      "Monthly report",
    ],
  },
  {
    slug: "premium",
    name: "PREMIUM",
    price: "₹18,000",
    tag: "Complete digital management",
    features: [
      "Social media posts",
      "16 reels / short videos",
      "28 stories",
      "Captions and hashtags",
      "Page management",
      "Content strategy",
      "Community management",
      "Social media ad setup",
      "2 campaigns per month",
      "Google Business Profile",
      "Basic SEO recommendations",
      "Detailed monthly report",
    ],
  },
];

export const COMPARISON_ROWS = [
  { label: "Social media posts", values: ["yes", "yes", "yes"] },
  { label: "Reels / short videos", values: ["4", "8", "16"] },
  { label: "Stories", values: ["Included", "15", "28"] },
  { label: "Captions and hashtags", values: ["yes", "yes", "yes"] },
  { label: "Page management", values: ["yes", "yes", "yes"] },
  { label: "Content scheduling", values: ["yes", "no", "no"] },
  { label: "Basic content planning", values: ["yes", "no", "no"] },
  { label: "Content calendar", values: ["no", "yes", "no"] },
  { label: "Content strategy", values: ["no", "no", "yes"] },
  { label: "Community management", values: ["no", "yes", "yes"] },
  { label: "Competitor research", values: ["no", "yes", "no"] },
  { label: "Basic ad campaign planning", values: ["no", "yes", "no"] },
  { label: "Social media ad setup", values: ["no", "no", "yes"] },
  { label: "Campaigns per month", values: ["no", "no", "2"] },
  { label: "Google Business Profile", values: ["no", "no", "yes"] },
  { label: "Basic SEO recommendations", values: ["no", "no", "yes"] },
  { label: "Monthly report", values: ["Standard", "Standard", "Detailed"] },
];

export const PORTFOLIO_CATEGORIES = ["All", "Branding", "Social Media", "Video", "Website"];

export const PORTFOLIO_PROJECTS = [
  {
    slug: "bloom-skincare-branding",
    title: "Bloom Skincare",
    category: "Branding",
    description:
      "A soft, premium brand identity concept for a skincare label — logo direction, palette and packaging mood.",
    image:
      "https://images.unsplash.com/photo-1633793565780-deeea84f167b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBzb2NpYWwlMjBtZWRpYSUyMHdlYiUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3OTE2MDU2MzN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "luxe-cosmetics-branding",
    title: "Luxe Cosmetics",
    category: "Branding",
    description:
      "A dark, luxury visual identity concept exploring high-contrast product presentation for a cosmetics brand.",
    image:
      "https://images.unsplash.com/photo-1633793566023-a74b74104acb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxkYXJrJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBzb2NpYWwlMjBtZWRpYSUyMHdlYiUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3OTE2MDU2MzN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "everyday-essentials-social",
    title: "Everyday Essentials",
    category: "Social Media",
    description:
      "A minimal social media content concept — grid layout, product styling and caption system for daily-use products.",
    image:
      "https://images.unsplash.com/photo-1633793565865-4aa4af4d5ca3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHw0fHxkYXJrJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBzb2NpYWwlMjBtZWRpYSUyMHdlYiUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3OTE2MDU2MzN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "studio-sessions-video",
    title: "Studio Sessions",
    category: "Video",
    description:
      "A short-form video editing concept — pacing, captions and colour treatment for behind-the-scenes studio content.",
    image:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbW9kZXJuJTIwY3JlYXRpdmUlMjBzdHVkaW8lMjBhZ2VuY3klMjB3b3JrcGxhY2UlMjBicmFuZGluZyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3OTE2MDU2MjV8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "creative-studio-website",
    title: "Creative Studio",
    category: "Website",
    description:
      "A dark cinematic landing page concept for a creative studio — bold typography, portfolio grid and enquiry flow.",
    image:
      "https://images.unsplash.com/photo-1633793566063-52465a148cc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxkYXJrJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBzb2NpYWwlMjBtZWRpYSUyMHdlYiUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3OTE2MDU2MzN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "product-launch-social",
    title: "Product Launch",
    category: "Social Media",
    description:
      "A launch campaign concept — teaser posts, countdown stories and reveal creative for a new product drop.",
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwY3JlYXRpdmUlMjBzdHVkaW8lMjBhZ2VuY3klMjB3b3JrcGxhY2UlMjBicmFuZGluZyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3OTE2MDU2MjV8MA&ixlib=rb-4.1.0&q=85",
  },
];

export const IMAGES = {
  heroBackground:
    "https://images.unsplash.com/photo-1684503830679-302965124d97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbmF2eSUyMGRpZ2l0YWwlMjBuZW9uJTIwYWdlbmN5JTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3OTE2MDU2MjV8MA&ixlib=rb-4.1.0&q=85",
  aboutStudio:
    "https://images.unsplash.com/photo-1637250051543-9fca17abf411?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwbW9kZXJuJTIwY3JlYXRpdmUlMjBzdHVkaW8lMjBhZ2VuY3klMjB3b3JrcGxhY2UlMjBicmFuZGluZyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3OTE2MDU2MjV8MA&ixlib=rb-4.1.0&q=85",
};
