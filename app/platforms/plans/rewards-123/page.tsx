import {
  StaticPageLayout,
  HeroContent,
  IntroContent,
  ScrollSection,
} from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "CXO Meet Event",
  description:
    "An exclusive gathering of C-suite executives, industry leaders, and decision-makers for strategic networking and knowledge sharing.",
  ctaText: "Apply for Invitation",
  ctaLink: "/start-generating-your-idea",
  subText: "Exclusive C-Suite Executive Networking",
  mobileLabel: "Exclusive C-Suite Network",
};

const introContent: IntroContent = {
  badge: "CXO Meet",
  badgeIcon: "Crown",
  title: "Overview of CXO Meet",
  subtitle: "Executive Leadership Summit",
  description:
    "CXO Meet brings together top-tier executives from diverse industries for confidential discussions, strategic partnerships, and peer-to-peer learning in an exclusive setting.",
  features: [
    "Invitation-only executive gathering",
    "Confidential roundtable discussions",
    "Strategic partnership opportunities",
    "Industry insights from peers",
    "Private networking sessions",
  ],
  image1:
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1080",
  image2:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Networking",
    title: "Elite Networking",
    description:
      "Connect with CEOs, CFOs, CTOs, and other C-suite executives in curated settings.",
    features: [
      "Curated attendee matching",
      "Private meeting rooms",
      "Executive dinner sessions",
      "Golf networking events",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Users",
  },
  {
    id: 2,
    badge: "Insights",
    title: "Strategic Insights",
    description:
      "Gain exclusive insights from peer executives facing similar challenges.",
    features: [
      "Industry trend analysis",
      "Peer case studies",
      "Best practice sharing",
      "Confidential discussions",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "TrendingUp",
  },
  {
    id: 3,
    badge: "Partnerships",
    title: "Strategic Partnerships",
    description:
      "Forge meaningful business relationships and partnership opportunities.",
    features: [
      "B2B matchmaking",
      "Partnership frameworks",
      "Deal facilitation",
      "Follow-up support",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Handshake",
  },
  {
    id: 4,
    badge: "Why Attend",
    title: "Why Attend CXO Meet?",
    description:
      "An unparalleled opportunity to connect with decision-makers who shape industries.",
    features: [
      "500+ CXO attendees",
      "50+ industries represented",
      "90% repeat attendance",
      "Strict confidentiality",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Award",
  },
];

export default function CXOMeetPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="CXO Meet Highlights"
      sectionSubtitle="Exclusive networking for C-suite executives"
      gradientColor="from-slate-400 to-slate-600"
    />
  );
}
