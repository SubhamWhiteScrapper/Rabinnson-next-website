import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "FIIACON Event",
  description: "Future Innovation Industry Award Conference - Celebrating breakthrough innovations and recognizing industry pioneers shaping tomorrow's world.",
  ctaText: "Nominate Now",
  ctaLink: "/start-generating-your-idea",
  subText: "Future Innovation Industry Award Conference",
  mobileLabel: "Celebrating Innovators"
};

const introContent: IntroContent = {
  badge: "FIIACON",
  badgeIcon: "Award",
  title: "Overview of FIIACON",
  subtitle: "Innovation Excellence Awards",
  description: "FIIACON is the premier awards platform recognizing groundbreaking innovations across industries. We celebrate visionaries who push boundaries and transform industries through technology and creativity.",
  features: [
    "Multi-industry innovation awards",
    "Expert judging panel",
    "Global recognition platform",
    "Networking with innovators",
    "Media coverage and PR"
  ],
  image1: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Categories",
    title: "Award Categories",
    description: "Recognition across diverse innovation categories spanning technology, sustainability, and business transformation.",
    features: [
      "Tech Innovation Award",
      "Sustainability Champion",
      "Startup of the Year",
      "Digital Transformation"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Trophy"
  },
  {
    id: 2,
    badge: "Judging",
    title: "Expert Judging Panel",
    description: "Esteemed industry leaders and domain experts evaluate nominations for excellence and impact.",
    features: [
      "Industry veterans",
      "Academic experts",
      "Investment leaders",
      "Technology pioneers"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Star"
  },
  {
    id: 3,
    badge: "Benefits",
    title: "Winner Benefits",
    description: "Award winners receive extensive recognition, media coverage, and valuable networking opportunities.",
    features: [
      "Global media coverage",
      "Trophy and certificate",
      "Speaking opportunities",
      "Investor introductions"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Zap"
  },
  {
    id: 4,
    badge: "Why FIIACON",
    title: "Why Participate in FIIACON?",
    description: "Join the elite community of innovators and gain recognition for your transformative work.",
    features: [
      "500+ nominations yearly",
      "50+ award categories",
      "100+ media partners",
      "Global recognition"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Globe"
  }
];

export default function FIIACONPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="FIIACON Highlights"
      sectionSubtitle="Celebrating innovation excellence across industries"
      gradientColor="from-yellow-400 to-amber-500"
    />
  );
}