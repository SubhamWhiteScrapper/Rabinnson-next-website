import { StaticPageLayout } from "@/app/static-page-components";
import type { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Intelligent Data Management",
  description:
    "Transform your data into actionable insights with our AI-powered data management platform. Collect, organize, analyze, and visualize data at enterprise scale.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Enterprise-Grade Data Intelligence Platform",
  mobileLabel: "Trusted by Enterprises",
};

const introContent: IntroContent = {
  badge: "Data Management",
  badgeIcon: "Settings",
  title: "Overview of IDM",
  subtitle: "AI-Powered Data Intelligence",
  description:
    "Intelligent Data Management (IDM) provides a comprehensive suite of tools to manage your organization's data lifecycle. From collection to analysis, our platform ensures data quality, security, and accessibility.",
  features: [
    "Multi-source data integration",
    "AI-powered data cleansing",
    "Real-time analytics engine",
    "Regulatory compliance tools",
    "Self-service visualization",
  ],
  image1:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
  image2:
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Integration",
    title: "Data Integration",
    description:
      "Connect to any data source with our extensive library of connectors and APIs.",
    features: [
      "500+ pre-built connectors",
      "Real-time data streaming",
      "ETL/ELT pipelines",
      "Custom API integration",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Network",
  },
  {
    id: 2,
    badge: "AI/ML",
    title: "AI-Powered Analytics",
    description:
      "Leverage machine learning to uncover patterns and predict trends in your data.",
    features: [
      "Predictive analytics",
      "Anomaly detection",
      "Natural language queries",
      "Automated insights",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Lightbulb",
  },
  {
    id: 3,
    badge: "Governance",
    title: "Data Governance",
    description:
      "Ensure compliance and security with comprehensive data governance features.",
    features: [
      "Access control",
      "Data lineage tracking",
      "Audit trails",
      "GDPR/CCPA compliance",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Shield",
  },
  {
    id: 4,
    badge: "Why IDM",
    title: "Why Choose IDM?",
    description:
      "Join organizations transforming their data into competitive advantage.",
    features: [
      "80% faster insights",
      "99.9% data accuracy",
      "Fortune 500 trusted",
      "24/7 expert support",
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

export default function IntelligentDataManagementPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="IDM Features"
      sectionSubtitle="Enterprise data management powered by AI"
      gradientColor="from-violet-400 to-purple-500"
    />
  );
}
