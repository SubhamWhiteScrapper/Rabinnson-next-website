import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Environment Solutions",
  description: "Build a sustainable future with innovative environmental solutions. We help organizations reduce their environmental impact, achieve compliance, and drive sustainable growth through technology-enabled approaches.",
  ctaText: "Go Green",
  ctaLink: "/start-generating-your-idea",
  subText: "Protecting Our Planet Together",
  mobileLabel: "Eco Solutions"
};

const introContent: IntroContent = {
  badge: "Environmental Services",
  badgeIcon: "Leaf",
  title: "Environmental Management Solutions",
  subtitle: "Sustainability Through Innovation",
  description: "Environmental responsibility is no longer optional—it's essential for business success. We provide comprehensive environmental management solutions that help organizations track, measure, and reduce their environmental footprint while meeting regulatory requirements and stakeholder expectations.",
  features: [
    "Environmental monitoring and reporting",
    "Carbon footprint management",
    "Sustainability strategy development",
    "Regulatory compliance solutions",
    "Green technology implementation",
  ],
  image1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Carbon Management", title: "Carbon Footprint Solutions", description: "Measure, manage, and reduce your carbon footprint effectively. Our solutions provide comprehensive carbon accounting and reduction pathway planning.", features: ["Carbon emissions tracking", "Scope 1, 2, and 3 accounting", "Reduction target setting", "Carbon offset management"], imageUrl1: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 2, badge: "Monitoring", title: "Environmental Monitoring", description: "Track environmental metrics in real-time with IoT-enabled monitoring solutions. Get actionable insights to improve environmental performance.", features: ["Air quality monitoring", "Water quality tracking", "Emissions monitoring", "Real-time alerting systems"], imageUrl1: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
  { id: 3, badge: "Compliance", title: "Environmental Compliance", description: "Stay compliant with environmental regulations across jurisdictions. Our solutions help you manage permits, reporting, and audit requirements.", features: ["Regulatory tracking and updates", "Permit management systems", "Compliance reporting automation", "Audit readiness tools"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
  { id: 4, badge: "Waste Management", title: "Waste & Recycling Solutions", description: "Optimize waste management practices and maximize recycling rates. Our solutions help you reduce waste, lower costs, and improve sustainability.", features: ["Waste stream analysis", "Recycling program management", "Circular economy solutions", "Waste tracking systems"], imageUrl1: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Recycle" },
  { id: 5, badge: "Energy", title: "Energy Efficiency Solutions", description: "Reduce energy consumption and costs with smart energy management. Our solutions identify opportunities and optimize energy usage across operations.", features: ["Energy consumption analysis", "Efficiency improvement planning", "Smart building solutions", "Renewable energy integration"], imageUrl1: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
  { id: 6, badge: "Water", title: "Water Management Solutions", description: "Conserve and manage water resources effectively. Our solutions help organizations reduce water usage, improve quality, and ensure sustainable practices.", features: ["Water usage monitoring", "Leak detection systems", "Water treatment solutions", "Conservation planning"], imageUrl1: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Droplets" },
  { id: 7, badge: "Sustainability", title: "ESG Reporting Solutions", description: "Meet stakeholder expectations with comprehensive ESG reporting. Our solutions help you track, measure, and communicate sustainability performance.", features: ["ESG data management", "Sustainability reporting frameworks", "Stakeholder communication", "Rating agency alignment"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 8, badge: "Biodiversity", title: "Biodiversity & Conservation", description: "Protect and enhance biodiversity through effective management solutions. Support conservation efforts while meeting business objectives.", features: ["Biodiversity impact assessment", "Habitat restoration planning", "Species monitoring", "Conservation partnerships"], imageUrl1: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TreePine" },
  { id: 9, badge: "Climate Risk", title: "Climate Risk Assessment", description: "Understand and manage climate-related risks to your business. Our solutions help you identify vulnerabilities and build resilience.", features: ["Physical risk assessment", "Transition risk analysis", "Scenario planning", "Adaptation strategies"], imageUrl1: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
  { id: 10, badge: "Innovation", title: "Green Technology Solutions", description: "Embrace innovative technologies that drive environmental performance. From IoT to AI, leverage technology for sustainability.", features: ["IoT environmental sensors", "AI-powered analytics", "Blockchain for transparency", "Digital twin solutions"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function EnvironmentPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Environmental Solutions"
      sectionSubtitle="Technology-enabled solutions for a sustainable future"
      gradientColor="from-green-500 to-emerald-600"
    />
  );
}