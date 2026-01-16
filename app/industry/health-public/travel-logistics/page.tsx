import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Travel & Logistics Solutions",
  description: "Transform travel experiences and logistics operations with innovative technology. We help organizations deliver seamless journeys, optimize supply chains, and adapt to the evolving transportation landscape.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Moving People and Goods Smarter",
  mobileLabel: "Travel & Logistics"
};

const introContent: IntroContent = {
  badge: "Travel & Logistics",
  badgeIcon: "Globe",
  title: "Travel & Logistics Solutions",
  subtitle: "Reimagining Mobility",
  description: "The travel and logistics industry is transforming rapidly with changing consumer expectations, sustainability requirements, and technological innovation. We provide solutions that help organizations deliver exceptional experiences, optimize operations, and build resilient supply chains.",
  features: [
    "Passenger experience platforms",
    "Transportation management systems",
    "Supply chain visibility",
    "Fleet management solutions",
    "Booking and reservation systems",
  ],
  image1: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Passenger", title: "Passenger Experience", description: "Deliver seamless travel experiences across the journey. Our solutions help you engage, inform, and delight passengers at every touchpoint.", features: ["Booking and reservation systems", "Mobile travel apps", "In-journey entertainment", "Loyalty program management"], imageUrl1: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
  { id: 2, badge: "Booking", title: "Reservation & Distribution", description: "Optimize booking and distribution across channels. Our solutions help you maximize revenue and reach travelers effectively.", features: ["Global distribution systems", "Direct booking platforms", "Channel management", "Revenue management"], imageUrl1: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
  { id: 3, badge: "Freight", title: "Freight Management", description: "Optimize freight operations for efficiency and visibility. Our solutions help you manage shipments, carriers, and costs effectively.", features: ["Transportation management", "Freight visibility", "Carrier management", "Rate management"], imageUrl1: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
  { id: 4, badge: "Warehouse", title: "Warehouse Management", description: "Maximize warehouse efficiency with intelligent solutions. Our platforms help you optimize storage, picking, and fulfillment operations.", features: ["Inventory management", "Order fulfillment", "Warehouse automation", "Labor management"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Building2" },
  { id: 5, badge: "Fleet", title: "Fleet Management", description: "Optimize fleet operations with connected solutions. Our platforms help you monitor, maintain, and maximize fleet performance.", features: ["Vehicle tracking", "Route optimization", "Maintenance management", "Driver management"], imageUrl1: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 6, badge: "Last Mile", title: "Last Mile Delivery", description: "Excel at last mile delivery in the e-commerce age. Our solutions help you deliver efficiently, transparently, and sustainably.", features: ["Delivery route optimization", "Real-time tracking", "Proof of delivery", "Driver apps"], imageUrl1: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Zap" },
  { id: 7, badge: "Visibility", title: "Supply Chain Visibility", description: "Gain end-to-end visibility across your supply chain. Our solutions provide real-time tracking and actionable insights.", features: ["Shipment tracking", "Exception management", "Predictive ETA", "Control tower solutions"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 8, badge: "Airport", title: "Airport & Terminal Operations", description: "Optimize airport and terminal operations. Our solutions help you manage resources, reduce delays, and enhance experiences.", features: ["Resource management", "Passenger flow management", "Ground handling systems", "Airport operations"], imageUrl1: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Building2" },
  { id: 9, badge: "Sustainability", title: "Sustainable Transportation", description: "Reduce environmental impact in transportation. Our solutions help you optimize routes, reduce emissions, and achieve sustainability goals.", features: ["Carbon footprint tracking", "Route optimization", "Electric fleet management", "Sustainability reporting"], imageUrl1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Leaf" },
  { id: 10, badge: "Innovation", title: "Future of Mobility", description: "Prepare for the future of transportation. From autonomous vehicles to urban air mobility, we help you explore new frontiers.", features: ["Autonomous vehicle solutions", "Mobility-as-a-Service", "Urban air mobility", "Digital twin for logistics"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function TravelLogisticsPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Travel & Logistics Solutions"
      sectionSubtitle="Transforming transportation for the digital age"
      gradientColor="from-sky-500 to-blue-600"
    />
  );
}