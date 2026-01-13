import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Public Services Solutions",
  description: "Modernize government and public sector operations with innovative solutions. We help public organizations improve citizen services, enhance transparency, and drive operational efficiency.",
  ctaText: "Learn More",
  ctaLink: "/start-generating-your-idea",
  subText: "Technology for Citizens, By Design",
  mobileLabel: "Gov Tech"
};

const introContent: IntroContent = {
  badge: "Public Sector",
  badgeIcon: "Building2",
  title: "Public Services Solutions",
  subtitle: "Transforming Government Services",
  description: "Governments worldwide are embracing digital transformation to better serve citizens and improve operational efficiency. We provide solutions that help public sector organizations modernize legacy systems, enhance citizen engagement, and deliver services that meet modern expectations.",
  features: [
    "Citizen service portals",
    "Case management systems",
    "Government ERP solutions",
    "Data analytics and insights",
    "Cybersecurity for government",
  ],
  image1: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Citizen Services", title: "Digital Citizen Engagement", description: "Transform how citizens interact with government. Our solutions enable seamless, accessible, and efficient citizen services across channels.", features: ["Citizen self-service portals", "Mobile government apps", "Multi-channel service delivery", "Accessibility compliance"], imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
  { id: 2, badge: "Case Management", title: "Government Case Management", description: "Streamline case processing and management. Our solutions help agencies handle cases efficiently while ensuring compliance and transparency.", features: ["Integrated case management", "Document management", "Workflow automation", "Stakeholder collaboration"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
  { id: 3, badge: "Benefits", title: "Benefits Administration", description: "Modernize benefits delivery for citizens. Our solutions help agencies manage eligibility, enrollment, and disbursement efficiently.", features: ["Eligibility determination", "Benefits enrollment", "Payment processing", "Fraud prevention"], imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Heart" },
  { id: 4, badge: "Public Safety", title: "Public Safety Solutions", description: "Enhance public safety with integrated technology solutions. Our platforms support emergency response, law enforcement, and community safety.", features: ["Emergency management systems", "Law enforcement solutions", "911 and dispatch systems", "Community policing tools"], imageUrl1: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
  { id: 5, badge: "Finance", title: "Government Financial Management", description: "Optimize financial operations in the public sector. Our solutions help agencies manage budgets, procurement, and financial reporting.", features: ["Budget management", "Procurement solutions", "Grants management", "Financial reporting"], imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 6, badge: "HR", title: "Government HR Solutions", description: "Modernize human capital management in the public sector. Our solutions support the entire employee lifecycle from recruitment to retirement.", features: ["Talent acquisition", "Employee management", "Performance management", "Retirement planning"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Users" },
  { id: 7, badge: "Data", title: "Government Data & Analytics", description: "Unlock the value of government data. Our analytics solutions provide insights for better policy decisions and operational improvements.", features: ["Open data platforms", "Business intelligence", "Predictive analytics", "Data governance"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 8, badge: "Security", title: "Government Cybersecurity", description: "Protect government systems and citizen data. Our security solutions help agencies defend against cyber threats and ensure compliance.", features: ["Threat detection and response", "Identity management", "Security compliance", "Zero trust architecture"], imageUrl1: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
  { id: 9, badge: "Infrastructure", title: "Smart City Solutions", description: "Build connected, sustainable cities. Our smart city solutions help municipalities improve services, reduce costs, and enhance quality of life.", features: ["IoT infrastructure", "Smart transportation", "Environmental monitoring", "Citizen engagement"], imageUrl1: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
  { id: 10, badge: "Modernization", title: "Legacy Modernization", description: "Transform legacy government systems for the digital age. Our solutions help agencies modernize while minimizing disruption and risk.", features: ["Application modernization", "Cloud migration", "Data migration", "Integration solutions"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function PublicServicesPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Public Services Solutions"
      sectionSubtitle="Modernizing government for better citizen outcomes"
      gradientColor="from-indigo-500 to-purple-600"
    />
  );
}