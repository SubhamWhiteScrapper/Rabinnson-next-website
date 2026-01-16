import { StaticPageLayout } from "@/app/static-page-components";
import type { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Marketing Automation Tool",
  description:
    "Streamline your marketing operations with intelligent automation, campaign management, and performance tracking for maximum ROI.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Automate, Optimize, and Scale Your Marketing",
  mobileLabel: "Trusted by Marketers",
};

const introContent: IntroContent = {
  badge: "MATO Platform",
  badgeIcon: "Rocket",
  title: "Marketing Automation Tool Organiser",
  subtitle: "End-to-End Marketing Automation",
  description:
    "MATO is a comprehensive marketing automation platform designed to help businesses automate repetitive tasks, nurture leads, and deliver personalized experiences at scale while measuring every touchpoint.",
  features: [
    "Multi-channel campaign automation",
    "Lead scoring and nurturing",
    "Personalization engine",
    "A/B testing framework",
    "ROI tracking dashboard",
  ],
  image1:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
  image2:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Automation",
    title: "Campaign Automation",
    description:
      "Build sophisticated marketing workflows that run on autopilot and adapt to customer behavior.",
    features: [
      "Visual workflow builder",
      "Trigger-based campaigns",
      "Multi-step sequences",
      "Dynamic content",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Zap",
  },
  {
    id: 2,
    badge: "Lead Management",
    title: "Lead Nurturing",
    description:
      "Convert prospects into customers with intelligent lead scoring and personalized nurturing paths.",
    features: [
      "Lead scoring models",
      "Behavioral tracking",
      "Segmentation engine",
      "Conversion optimization",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Target",
  },
  {
    id: 3,
    badge: "Analytics",
    title: "Performance Analytics",
    description:
      "Measure what matters with comprehensive analytics and attribution reporting.",
    features: [
      "Campaign analytics",
      "Attribution modeling",
      "Custom dashboards",
      "Predictive insights",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "BarChart",
  },
  {
    id: 4,
    badge: "Why MATO",
    title: "Why Choose MATO?",
    description:
      "Join leading brands using MATO to transform their marketing operations.",
    features: [
      "3x faster campaign launch",
      "50% improved lead quality",
      "Seamless integrations",
      "Dedicated support team",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "TrendingUp",
  },
];

export default function MarketingAutomationPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="MATO Features"
      sectionSubtitle="Automate and optimize your marketing operations"
      gradientColor="from-pink-400 to-rose-500"
    />
  );
}
