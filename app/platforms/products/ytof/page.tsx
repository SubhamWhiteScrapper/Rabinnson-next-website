import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "Y2f Hub Platform",
  description: "Y2f Hub is a dynamic founder-to-founder networking platform designed to connect entrepreneurs, investors, and industry experts.",
  ctaText: "Join the Network",
  ctaLink: "/start-generating-your-idea",
  subText: "Connect, Collaborate, and Grow Your Business",
  mobileLabel: "Trusted by Founders"
};

const introContent: IntroContent = {
  badge: "Founder Network",
  badgeIcon: "Network",
  title: "Overview of Y2f Hub",
  subtitle: "The Premier Founder Community",
  description: "Y2f Hub brings together ambitious founders, seasoned investors, and industry mentors in a curated ecosystem designed for growth.",
  features: [
    "Curated network of verified founders and investors",
    "Exclusive access to funding opportunities",
    "Mentorship programs with industry veterans",
    "Collaborative workspace and resource sharing",
    "Global community events"
  ],
  image1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Network",
    title: "Curated Founder Network",
    description: "Join a carefully vetted community of founders across industries with AI-powered matching.",
    features: [
      "AI-powered founder matching",
      "Industry-specific communities",
      "Direct messaging tools",
      "Verified credentials"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Users"
  },
  {
    id: 2,
    badge: "Funding",
    title: "Investment Opportunities",
    description: "Access angel investors, VCs, and funding programs with streamlined fundraising.",
    features: [
      "Investor database",
      "Virtual pitch events",
      "Warm introductions",
      "Fundraising tools"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "TrendingUp"
  },
  {
    id: 3,
    badge: "Mentorship",
    title: "Expert Mentorship Programs",
    description: "Learn from successful entrepreneurs who provide guidance and insights.",
    features: [
      "One-on-one mentorship",
      "Group masterminds",
      "Office hours with experts",
      "Structured curriculum"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Award"
  },
  {
    id: 4,
    badge: "Why Y2f Hub",
    title: "Why Join Y2f Hub?",
    description: "Our community has helped hundreds of startups raise funding and scale.",
    features: [
      "Over $500M raised by members",
      "1,000+ active founders",
      "300+ mentor matches",
      "24/7 global support"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Handshake"
  }
];

export default function Y2fHubPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Y2f Hub Platform Features"
      sectionSubtitle="Everything you need to grow your startup network"
      gradientColor="from-green-400 to-emerald-500"
    />
  );
}