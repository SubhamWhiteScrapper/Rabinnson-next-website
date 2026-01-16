import { StaticPageLayout } from "@/app/static-page-components";
import type { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Customer Identity Management",
  description:
    "Secure and streamline customer identity verification with our comprehensive identity management platform. Protect user data while enabling seamless experiences.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Secure Identity Verification & Access Management",
  mobileLabel: "Trusted by Enterprises",
};

const introContent: IntroContent = {
  badge: "Identity Management",
  badgeIcon: "UserCheck",
  title: "Overview of CIM",
  subtitle: "Secure Identity Solutions",
  description:
    "Customer Identity Management (CIM) provides enterprise-grade identity verification, authentication, and access management. Ensure compliance while delivering frictionless customer experiences.",
  features: [
    "Multi-factor authentication",
    "Biometric verification",
    "KYC/AML compliance",
    "Single sign-on (SSO)",
    "Role-based access control",
  ],
  image1:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
  image2:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Verification",
    title: "Identity Verification",
    description:
      "Verify customer identities quickly and securely with advanced verification methods.",
    features: [
      "Document verification",
      "Biometric matching",
      "Liveness detection",
      "Risk scoring",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "UserCheck",
  },
  {
    id: 2,
    badge: "Authentication",
    title: "Secure Authentication",
    description:
      "Implement robust authentication mechanisms to protect customer accounts.",
    features: [
      "Passwordless login",
      "Adaptive MFA",
      "Social login",
      "Device fingerprinting",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    imageUrl2:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Lock",
  },
  {
    id: 3,
    badge: "Compliance",
    title: "Regulatory Compliance",
    description:
      "Meet regulatory requirements with built-in compliance features.",
    features: [
      "GDPR compliance",
      "KYC automation",
      "Audit trails",
      "Data residency",
    ],
    imageUrl1:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Shield",
  },
  {
    id: 4,
    badge: "Why CIM",
    title: "Why Choose CIM?",
    description:
      "Join organizations that trust us with their identity management.",
    features: [
      "99.9% accuracy",
      "Sub-second verification",
      "Global coverage",
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

export default function CustomerIdentityManagementPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="CIM Features"
      sectionSubtitle="Enterprise identity management powered by AI"
      gradientColor="from-blue-400 to-indigo-500"
    />
  );
}
