import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Retail Solutions",
  description: "Transform retail experiences with innovative technology. We help retailers create seamless omnichannel experiences, optimize operations, and build lasting customer relationships in the digital age.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Redefining Retail for Modern Consumers",
  mobileLabel: "Retail Tech"
};

const introContent: IntroContent = {
  badge: "Retail Industry",
  badgeIcon: "Briefcase",
  title: "Retail Industry Solutions",
  subtitle: "Commerce Reimagined",
  description: "Retail is evolving faster than ever with changing consumer expectations, digital disruption, and new commerce models. We provide comprehensive solutions that help retailers deliver exceptional customer experiences, optimize supply chains, and drive profitable growth across all channels.",
  features: [
    "Omnichannel commerce platforms",
    "Supply chain optimization",
    "Customer experience management",
    "Point of sale solutions",
    "Retail analytics and insights",
  ],
  image1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "E-Commerce", title: "Unified Commerce Platforms", description: "Create seamless shopping experiences across all channels. Our commerce platforms enable customers to shop, buy, and receive products however they prefer.", features: ["E-commerce platforms", "Mobile commerce", "Social commerce integration", "Marketplace connectivity"], imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Globe" },
  { id: 2, badge: "Store", title: "In-Store Experience", description: "Transform the in-store experience with digital innovation. Our solutions help you create engaging, efficient, and personalized store experiences.", features: ["Point of sale systems", "Queue management", "Digital signage", "Clienteling solutions"], imageUrl1: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Building2" },
  { id: 3, badge: "Customer", title: "Customer Engagement", description: "Build lasting customer relationships with personalized engagement. Our solutions help you understand, reach, and retain customers effectively.", features: ["Loyalty program management", "Personalization engines", "Customer data platforms", "Marketing automation"], imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Heart" },
  { id: 4, badge: "Supply Chain", title: "Retail Supply Chain", description: "Optimize your retail supply chain for agility and efficiency. Our solutions provide visibility and control from supplier to customer.", features: ["Inventory management", "Demand forecasting", "Order management", "Fulfillment optimization"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Network" },
  { id: 5, badge: "Analytics", title: "Retail Analytics", description: "Unlock insights from retail data. Our analytics solutions help you understand customer behavior, optimize operations, and drive growth.", features: ["Sales analytics", "Customer analytics", "Inventory analytics", "Store performance insights"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 6, badge: "Merchandising", title: "Merchandising Solutions", description: "Optimize merchandising for maximum impact. Our solutions help you plan, allocate, and present products effectively across channels.", features: ["Assortment planning", "Space planning", "Pricing optimization", "Promotion management"], imageUrl1: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Target" },
  { id: 7, badge: "Omnichannel", title: "Omnichannel Fulfillment", description: "Fulfill orders seamlessly across channels. Our solutions enable buy online pickup in store, ship from store, and flexible delivery options.", features: ["BOPIS enablement", "Ship from store", "Last mile delivery", "Returns management"], imageUrl1: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
  { id: 8, badge: "Workforce", title: "Retail Workforce Management", description: "Optimize your retail workforce for performance and employee satisfaction. Our solutions help you schedule, manage, and empower store associates.", features: ["Workforce scheduling", "Task management", "Performance tracking", "Employee engagement"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Users" },
  { id: 9, badge: "Payments", title: "Retail Payments", description: "Enable seamless payment experiences for customers. Our solutions support multiple payment methods and ensure secure transactions.", features: ["Payment gateway integration", "Mobile payments", "Contactless payments", "Fraud prevention"], imageUrl1: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
  { id: 10, badge: "Innovation", title: "Retail Innovation", description: "Stay ahead with emerging retail technologies. From AR to AI, we help you leverage innovation for competitive advantage.", features: ["Augmented reality experiences", "AI-powered recommendations", "Computer vision", "Voice commerce"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function RetailPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Retail Solutions"
      sectionSubtitle="Technology-enabled retail for the modern consumer"
      gradientColor="from-pink-500 to-rose-600"
    />
  );
}