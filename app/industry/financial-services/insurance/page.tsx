import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Insurance Solutions",
  description: "Revolutionize your insurance operations with innovative technology solutions. From underwriting to claims management, we help insurers deliver exceptional customer experiences while optimizing operational efficiency.",
  ctaText: "Discover Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Transforming Insurance for Tomorrow",
  mobileLabel: "Insurance Tech"
};

const introContent: IntroContent = {
  badge: "Insurance Industry",
  badgeIcon: "Shield",
  title: "Insurance Industry Solutions",
  subtitle: "Innovation Meets Protection",
  description: "The insurance industry is evolving rapidly with changing customer expectations and emerging technologies. We provide end-to-end solutions that help insurers modernize their operations, enhance customer engagement, and stay competitive in the digital-first marketplace.",
  features: [
    "Policy administration system modernization",
    "Claims management automation",
    "Underwriting optimization with AI/ML",
    "Customer engagement platforms",
    "Regulatory compliance solutions",
  ],
  image1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Policy Admin", title: "Policy Administration Systems", description: "Modernize your policy administration with flexible, scalable solutions. Our platforms support the entire policy lifecycle from quote to renewal.", features: ["End-to-end policy lifecycle management", "Product configuration flexibility", "Multi-line and multi-currency support", "Real-time policy processing"], imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Briefcase" },
  { id: 2, badge: "Claims", title: "Claims Management Excellence", description: "Transform claims processing with intelligent automation. Reduce cycle times, improve accuracy, and enhance customer satisfaction.", features: ["Automated claims intake and processing", "Fraud detection and prevention", "Straight-through processing", "Customer self-service portals"], imageUrl1: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Target" },
  { id: 3, badge: "Underwriting", title: "Intelligent Underwriting", description: "Leverage AI and machine learning to enhance underwriting decisions. Make faster, more accurate risk assessments with data-driven insights.", features: ["AI-powered risk assessment", "Automated underwriting workflows", "Third-party data integration", "Predictive analytics models"], imageUrl1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Lightbulb" },
  { id: 4, badge: "Distribution", title: "Digital Distribution Channels", description: "Expand your reach with modern distribution solutions. Enable agents, brokers, and direct customers with seamless digital experiences.", features: ["Agent and broker portals", "Direct-to-consumer platforms", "Comparison engine integration", "Embedded insurance solutions"], imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
  { id: 5, badge: "Customer Experience", title: "Customer-Centric Insurance", description: "Put customers at the center of everything you do. Our solutions help you deliver personalized experiences across all touchpoints.", features: ["Omnichannel customer engagement", "Mobile-first experiences", "Personalized product recommendations", "Proactive customer communication"], imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Heart" },
  { id: 6, badge: "Analytics", title: "Insurance Analytics & Insights", description: "Unlock the value of your data with advanced analytics. Drive better decisions with real-time insights and predictive intelligence.", features: ["Loss ratio analytics", "Customer lifetime value modeling", "Risk segmentation analysis", "Claims predictive modeling"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
  { id: 7, badge: "Compliance", title: "Regulatory Compliance", description: "Stay compliant with evolving regulations. Our solutions help you manage regulatory requirements efficiently while minimizing risk.", features: ["Solvency II compliance", "IFRS 17 implementation", "Data privacy compliance", "Regulatory reporting automation"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
  { id: 8, badge: "InsurTech", title: "InsurTech Innovation", description: "Embrace emerging technologies to stay ahead of the competition. From IoT to blockchain, we help you leverage innovation for growth.", features: ["IoT-enabled insurance products", "Telematics solutions", "Blockchain for insurance", "AI chatbots and virtual assistants"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Zap" },
  { id: 9, badge: "Reinsurance", title: "Reinsurance Solutions", description: "Optimize your reinsurance operations with integrated solutions. Manage treaties, facultative placements, and claims seamlessly.", features: ["Treaty management systems", "Facultative placement platforms", "Reinsurance accounting", "Catastrophe modeling integration"], imageUrl1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
  { id: 10, badge: "Ecosystem", title: "Insurance Ecosystem Integration", description: "Connect with the broader insurance ecosystem seamlessly. Our integration solutions enable collaboration with partners and third parties.", features: ["Partner ecosystem connectivity", "API-first architecture", "Industry data exchange", "Vendor management solutions"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Network" },
];

export default function InsurancePage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Insurance Industry Solutions"
      sectionSubtitle="End-to-end solutions for modern insurers"
      gradientColor="from-emerald-500 to-teal-600"
    />
  );
}