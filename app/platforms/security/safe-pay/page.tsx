import { StaticPageLayout } from "@/app/static-page-components";
import type { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Customer Communication Manager",
  description:
    "Unified communication platform that centralizes all customer interactions across channels for seamless engagement and superior customer experience.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Unified Customer Communication Platform",
  mobileLabel: "Trusted by Businesses",
};

const introContent: IntroContent = {
  badge: "Communication Suite",
  badgeIcon: "MessageCircle",
  title: "Overview of CCM",
  subtitle: "Omnichannel Communication Hub",
  description:
    "Customer Communication Manager brings all your customer touchpoints into one powerful platform. Manage emails, SMS, WhatsApp, and more from a single dashboard while maintaining personalized engagement at scale.",
  features: [
    "Multi-channel communication hub",
    "Automated response workflows",
    "Customer journey tracking",
    "Real-time analytics dashboard",
    "Template management system",
  ],
  image1:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
  image2:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Channels",
    title: "Omnichannel Engagement",
    description:
      "Connect with customers across their preferred channels from one unified platform.",
    features: [
      "Email campaigns",
      "SMS messaging",
      "WhatsApp Business",
      "Push notifications",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "MessageCircle",
  },
  {
    id: 2,
    badge: "Automation",
    title: "Smart Automation",
    description:
      "Automate routine communications while maintaining a personal touch.",
    features: [
      "Triggered workflows",
      "Personalization engine",
      "A/B testing",
      "Scheduled campaigns",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Zap",
  },
  {
    id: 3,
    badge: "Analytics",
    title: "Communication Analytics",
    description:
      "Gain insights into communication effectiveness and customer engagement patterns.",
    features: [
      "Open rate tracking",
      "Click-through analysis",
      "Customer segmentation",
      "ROI measurement",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "BarChart",
  },
  {
    id: 4,
    badge: "Why CCM",
    title: "Why Choose CCM?",
    description:
      "Transform customer relationships with intelligent, unified communications.",
    features: [
      "40% faster response times",
      "60% improved engagement",
      "Enterprise security",
      "24/7 support",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Shield",
  },
];

export default function CustomerCommunicationManagerPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="CCM Features"
      sectionSubtitle="Unified customer communication across all channels"
      gradientColor="from-blue-400 to-indigo-500"
    />
  );
}
