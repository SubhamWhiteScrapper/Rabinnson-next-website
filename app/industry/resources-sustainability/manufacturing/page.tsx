import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Manufacturing Solutions",
  description: "Transform your manufacturing operations with Industry 4.0 technologies. We help manufacturers embrace digital transformation, optimize production, and build resilient supply chains for competitive advantage.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Building the Factory of the Future",
  mobileLabel: "Smart Manufacturing"
};

const introContent: IntroContent = {
  badge: "Manufacturing",
  badgeIcon: "Building2",
  title: "Manufacturing Industry Solutions",
  subtitle: "Industry 4.0 Excellence",
  description: "Manufacturing is being reshaped by digital technologies, sustainability requirements, and changing market dynamics. We provide end-to-end solutions that help manufacturers digitize operations, improve quality, reduce costs, and accelerate time-to-market in an increasingly competitive landscape.",
  features: [
    "Smart factory implementation",
    "Supply chain optimization",
    "Quality management systems",
    "Production planning and scheduling",
    "Industrial IoT integration",
  ],
  image1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Smart Factory", title: "Smart Manufacturing", description: "Build intelligent factories that optimize themselves. Our smart factory solutions connect machines, systems, and people for maximum efficiency.", features: ["Connected manufacturing systems", "Real-time production visibility", "Automated quality control", "Digital twin implementation"], imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
  { id: 2, badge: "Supply Chain", title: "Supply Chain Excellence", description: "Build resilient and responsive supply chains. Our solutions provide end-to-end visibility and intelligence for supply chain optimization.", features: ["Supply chain visibility", "Demand forecasting", "Inventory optimization", "Supplier collaboration"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
  { id: 3, badge: "Quality", title: "Quality Management", description: "Ensure consistent product quality with comprehensive quality management solutions. From incoming inspection to final testing, manage quality at every step.", features: ["Statistical process control", "Non-conformance management", "Supplier quality management", "Quality analytics"], imageUrl1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 4, badge: "Production", title: "Production Planning & Control", description: "Optimize production operations with advanced planning and scheduling. Our solutions help you maximize throughput while minimizing costs.", features: ["Production scheduling", "Capacity planning", "Shop floor execution", "Performance monitoring"], imageUrl1: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
  { id: 5, badge: "Industrial IoT", title: "Industrial IoT Solutions", description: "Connect your manufacturing assets with Industrial IoT. Our solutions enable real-time monitoring, predictive maintenance, and data-driven decisions.", features: ["Machine connectivity", "Sensor integration", "Edge computing", "IoT platform deployment"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
  { id: 6, badge: "Maintenance", title: "Asset & Maintenance Management", description: "Maximize equipment uptime with predictive maintenance. Our solutions help you prevent failures, optimize maintenance, and extend asset life.", features: ["Predictive maintenance", "Asset health monitoring", "Maintenance scheduling", "Spare parts management"], imageUrl1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
  { id: 7, badge: "PLM", title: "Product Lifecycle Management", description: "Manage your products from concept to retirement. Our PLM solutions streamline product development and enable collaboration across teams.", features: ["Product data management", "Engineering change management", "Bill of materials management", "Design collaboration"], imageUrl1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Lightbulb" },
  { id: 8, badge: "Analytics", title: "Manufacturing Analytics", description: "Unlock insights from manufacturing data. Our analytics solutions provide visibility into operations, quality, and performance.", features: ["OEE analytics", "Production dashboards", "Predictive analytics", "Root cause analysis"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
  { id: 9, badge: "Sustainability", title: "Sustainable Manufacturing", description: "Reduce environmental impact while improving efficiency. Our solutions help you achieve sustainability goals and meet regulatory requirements.", features: ["Energy management", "Emissions tracking", "Waste reduction", "Circular economy enablement"], imageUrl1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Leaf" },
  { id: 10, badge: "Digital Thread", title: "Digital Thread & Twin", description: "Create a continuous digital thread across your product lifecycle. Our solutions enable seamless data flow and digital twin capabilities.", features: ["Digital thread implementation", "Digital twin modeling", "Simulation and optimization", "Virtual commissioning"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function ManufacturingPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Manufacturing Solutions"
      sectionSubtitle="Building the intelligent factory of tomorrow"
      gradientColor="from-slate-600 to-gray-800"
    />
  );
}