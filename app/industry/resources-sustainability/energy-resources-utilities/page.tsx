import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Energy, Resources & Utilities",
  description: "Power the transition to a sustainable energy future. We help energy and utility companies modernize operations, embrace renewable energy, and deliver reliable services to customers.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Powering Tomorrow's Energy Landscape",
  mobileLabel: "Energy Solutions"
};

const introContent: IntroContent = {
  badge: "Energy & Utilities",
  badgeIcon: "Zap",
  title: "Energy & Utilities Solutions",
  subtitle: "Transforming Energy for the Future",
  description: "The energy sector is undergoing a fundamental transformation driven by decarbonization, digitalization, and decentralization. We provide solutions that help energy and utility companies navigate this transition, optimize operations, and create sustainable value for stakeholders.",
  features: [
    "Smart grid and grid modernization",
    "Renewable energy integration",
    "Asset performance management",
    "Customer experience transformation",
    "Energy trading and risk management",
  ],
  image1: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Smart Grid", title: "Grid Modernization", description: "Build the intelligent grid of tomorrow. Our smart grid solutions enable real-time monitoring, automated control, and efficient energy distribution.", features: ["Advanced metering infrastructure", "Distribution automation", "Grid analytics and optimization", "Outage management systems"], imageUrl1: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
  { id: 2, badge: "Renewables", title: "Renewable Energy Solutions", description: "Accelerate your renewable energy journey. We help you integrate, manage, and optimize renewable energy sources effectively.", features: ["Solar and wind integration", "Energy storage solutions", "Renewable portfolio management", "Green energy certificates"], imageUrl1: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sun" },
  { id: 3, badge: "Asset Management", title: "Asset Performance Management", description: "Maximize the value of your infrastructure assets. Our solutions enable predictive maintenance, optimal performance, and extended asset life.", features: ["Predictive maintenance systems", "Asset health monitoring", "Work order management", "Investment planning tools"], imageUrl1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 4, badge: "Customer", title: "Customer Experience", description: "Deliver exceptional customer experiences in the digital age. Our solutions help you engage customers, manage billing, and provide self-service options.", features: ["Customer information systems", "Billing and payment solutions", "Self-service portals", "Energy usage insights"], imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Users" },
  { id: 5, badge: "Trading", title: "Energy Trading & Risk", description: "Optimize energy trading operations and manage market risks. Our solutions support trading, scheduling, and risk management activities.", features: ["Energy trading platforms", "Risk analytics and reporting", "Market forecasting", "Regulatory compliance"], imageUrl1: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 6, badge: "Operations", title: "Operations Optimization", description: "Streamline utility operations for maximum efficiency. Our solutions help you manage field operations, workforce, and resources effectively.", features: ["Field service management", "Workforce optimization", "Mobile workforce solutions", "Resource scheduling"], imageUrl1: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
  { id: 7, badge: "Analytics", title: "Energy Analytics", description: "Unlock insights from your energy data. Our analytics solutions provide visibility into operations, customer behavior, and market trends.", features: ["Operational analytics", "Load forecasting", "Customer analytics", "Performance dashboards"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 8, badge: "Sustainability", title: "Decarbonization Solutions", description: "Achieve your sustainability and decarbonization goals. Our solutions help you reduce emissions, improve efficiency, and transition to clean energy.", features: ["Emissions tracking and reporting", "Carbon reduction planning", "Clean energy procurement", "Sustainability compliance"], imageUrl1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Leaf" },
  { id: 9, badge: "IoT", title: "IoT & Connected Devices", description: "Leverage IoT to transform utility operations. Our solutions connect devices, sensors, and systems for real-time visibility and control.", features: ["Smart meter integration", "IoT platform deployment", "Edge computing solutions", "Device management"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
  { id: 10, badge: "Innovation", title: "Next-Gen Energy Solutions", description: "Prepare for the energy future with emerging technologies. From hydrogen to distributed energy, we help you explore new opportunities.", features: ["Hydrogen energy solutions", "Distributed energy resources", "Electric vehicle infrastructure", "Energy-as-a-Service models"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function EnergyResourcesUtilitiesPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Energy & Utilities Solutions"
      sectionSubtitle="Powering the transition to sustainable energy"
      gradientColor="from-yellow-500 to-orange-600"
    />
  );
}