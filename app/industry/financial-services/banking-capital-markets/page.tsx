import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Banking & Capital Markets",
  description: "Transform your banking operations with cutting-edge solutions. We help financial institutions navigate regulatory complexities, enhance customer experiences, and drive digital transformation in an evolving marketplace.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Empowering Financial Excellence",
  mobileLabel: "Banking Solutions"
};

const introContent: IntroContent = {
  badge: "Financial Services",
  badgeIcon: "Building2",
  title: "Banking & Capital Markets Solutions",
  subtitle: "Driving Financial Innovation",
  description: "The banking and capital markets landscape is undergoing unprecedented transformation. From digital banking to regulatory compliance, we provide comprehensive solutions that help financial institutions stay competitive, manage risks, and deliver exceptional customer experiences in the digital age.",
  features: [
    "Digital banking transformation and modernization",
    "Regulatory compliance and risk management",
    "Capital markets technology solutions",
    "Customer experience enhancement",
    "Core banking system integration",
  ],
  image1: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Digital Banking", title: "Digital Transformation", description: "Embrace the future of banking with our comprehensive digital transformation solutions. We help you build modern, customer-centric digital banking platforms that drive engagement and growth.", features: ["Mobile banking application development", "Online banking portal solutions", "Digital payment systems integration", "API banking and open banking"], imageUrl1: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
  { id: 2, badge: "Compliance", title: "Regulatory Compliance", description: "Navigate the complex regulatory landscape with confidence. Our compliance solutions ensure you meet all requirements while optimizing operational efficiency.", features: ["Basel III/IV compliance frameworks", "Anti-money laundering (AML) solutions", "Know Your Customer (KYC) automation", "Regulatory reporting systems"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
  { id: 3, badge: "Risk Management", title: "Enterprise Risk Management", description: "Protect your institution with robust risk management frameworks. Our solutions help you identify, assess, and mitigate risks across all business lines.", features: ["Credit risk assessment systems", "Market risk analytics", "Operational risk management", "Stress testing and scenario analysis"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 4, badge: "Capital Markets", title: "Trading & Investment Solutions", description: "Optimize your trading operations with advanced technology solutions. From front-office to back-office, we deliver end-to-end capital markets platforms.", features: ["Trading platform development", "Portfolio management systems", "Securities processing automation", "Market data integration"], imageUrl1: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
  { id: 5, badge: "Core Banking", title: "Core Banking Modernization", description: "Modernize your core banking infrastructure to support future growth. Our solutions enable seamless integration, scalability, and operational excellence.", features: ["Legacy system modernization", "Cloud-native core banking", "Real-time transaction processing", "Microservices architecture"], imageUrl1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
  { id: 6, badge: "Customer Experience", title: "Enhanced Customer Journeys", description: "Deliver personalized, seamless experiences across all channels. Our customer experience solutions help you build lasting relationships and drive loyalty.", features: ["Omnichannel banking experience", "AI-powered personalization", "Customer journey optimization", "Digital onboarding solutions"], imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Users" },
  { id: 7, badge: "Data Analytics", title: "Financial Data Intelligence", description: "Unlock the power of your data with advanced analytics. Drive informed decisions with real-time insights and predictive intelligence.", features: ["Business intelligence dashboards", "Predictive analytics models", "Customer behavior analytics", "Fraud detection systems"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 8, badge: "Wealth Management", title: "Wealth & Asset Management", description: "Empower your wealth management services with intelligent solutions. From robo-advisory to portfolio management, we help you serve clients better.", features: ["Robo-advisory platforms", "Portfolio optimization tools", "Client reporting systems", "Investment research platforms"], imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Award" },
  { id: 9, badge: "Payments", title: "Payment Solutions", description: "Transform your payment infrastructure for the digital economy. Our solutions enable faster, secure, and more efficient payment processing.", features: ["Real-time payments integration", "Cross-border payment solutions", "Payment gateway development", "Blockchain payment systems"], imageUrl1: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
  { id: 10, badge: "Security", title: "Cybersecurity & Fraud Prevention", description: "Protect your institution and customers with comprehensive security solutions. Stay ahead of evolving threats with proactive security measures.", features: ["Fraud detection and prevention", "Cybersecurity assessment", "Identity verification systems", "Security monitoring solutions"], imageUrl1: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
];

export default function BankingCapitalMarketsPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Banking & Capital Markets Solutions"
      sectionSubtitle="Comprehensive solutions for modern financial institutions"
      gradientColor="from-blue-500 to-indigo-600"
    />
  );
}