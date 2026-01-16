import { StaticPageLayout } from "@/app/static-page-components";
import type { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Utility Bill Payments",
  description:
    "Automate and streamline utility bill payments across all categories. Simplify billing management for your organization with centralized payment solutions.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Centralized Bill Payment Platform",
  mobileLabel: "Trusted by Enterprises",
};

const introContent: IntroContent = {
  badge: "Bill Payments",
  badgeIcon: "FileText",
  title: "Overview of Bill Payments",
  subtitle: "Automated Payment Solutions",
  description:
    "Our Utility Bill Payment platform provides a seamless way to manage and automate all your utility payments. From electricity to water, gas to internet, handle all bills from a single dashboard.",
  features: [
    "Multi-utility support",
    "Automated payment scheduling",
    "Real-time payment tracking",
    "Expense categorization",
    "Compliance reporting",
  ],
  image1:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
  image2:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Integration",
    title: "Utility Integration",
    description:
      "Connect to all major utility providers with our extensive integration network.",
    features: [
      "100+ utility providers",
      "Auto-fetch bill details",
      "Payment reminders",
      "Multi-location support",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Network",
  },
  {
    id: 2,
    badge: "Automation",
    title: "Smart Automation",
    description:
      "Set up automated payment rules to ensure bills are paid on time, every time.",
    features: [
      "Recurring payments",
      "Smart scheduling",
      "Budget limits",
      "Approval workflows",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Settings",
  },
  {
    id: 3,
    badge: "Analytics",
    title: "Payment Analytics",
    description:
      "Gain insights into your utility spending with comprehensive analytics.",
    features: [
      "Spending trends",
      "Cost optimization",
      "Variance reports",
      "Budget forecasting",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "BarChart",
  },
  {
    id: 4,
    badge: "Why Bills",
    title: "Why Choose Our Platform?",
    description:
      "Join organizations that have streamlined their utility payments.",
    features: [
      "50% time savings",
      "Zero missed payments",
      "Enterprise trusted",
      "24/7 support",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Zap",
  },
];

export default function UtilityBillPaymentsPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Bill Payment Features"
      sectionSubtitle="Streamlined utility payment management"
      gradientColor="from-emerald-400 to-teal-500"
    />
  );
}
