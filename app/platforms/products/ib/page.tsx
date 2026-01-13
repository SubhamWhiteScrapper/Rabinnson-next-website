import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "IB Network Platform",
  description: "Enterprise-grade networking solutions that connect businesses globally with secure, reliable, and high-performance infrastructure.",
  ctaText: "Get Connected",
  ctaLink: "/start-generating-your-idea",
  subText: "Global Business Connectivity Solutions",
  mobileLabel: "Trusted by Enterprises"
};

const introContent: IntroContent = {
  badge: "Network Solutions",
  badgeIcon: "Globe",
  title: "Overview of IB Network",
  subtitle: "Enterprise Connectivity Platform",
  description: "IB Network provides comprehensive networking infrastructure designed for modern enterprises requiring secure, scalable, and high-performance connectivity across global operations.",
  features: [
    "Global network coverage",
    "99.99% uptime guarantee",
    "Enterprise security protocols",
    "Scalable bandwidth",
    "24/7 network monitoring"
  ],
  image1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Infrastructure",
    title: "Global Infrastructure",
    description: "Our network spans multiple continents with points of presence in key business hubs.",
    features: [
      "50+ global data centers",
      "Low-latency routing",
      "Redundant connections",
      "Disaster recovery"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Building"
  },
  {
    id: 2,
    badge: "Security",
    title: "Enterprise Security",
    description: "Multi-layered security architecture protecting your data at every point.",
    features: [
      "End-to-end encryption",
      "DDoS protection",
      "Firewall management",
      "Compliance ready"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Shield"
  },
  {
    id: 3,
    badge: "Performance",
    title: "High Performance",
    description: "Optimized routing and traffic management for maximum throughput.",
    features: [
      "SD-WAN capability",
      "Traffic optimization",
      "QoS management",
      "Real-time analytics"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Zap"
  },
  {
    id: 4,
    badge: "Why IB Network",
    title: "Why Choose IB Network?",
    description: "Trusted by enterprises worldwide for mission-critical connectivity.",
    features: [
      "Fortune 500 clients",
      "Carrier-grade reliability",
      "Dedicated support team",
      "Flexible pricing"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Globe"
  }
];

export default function IBNetworkPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="IB Network Features"
      sectionSubtitle="Enterprise networking solutions for global connectivity"
      gradientColor="from-indigo-400 to-purple-500"
    />
  );
}