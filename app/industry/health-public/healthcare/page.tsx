import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Healthcare Solutions",
  description: "Transform healthcare delivery with innovative technology solutions. We help healthcare organizations improve patient outcomes, streamline operations, and embrace digital health for better care experiences.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Technology for Better Health Outcomes",
  mobileLabel: "Health Tech"
};

const introContent: IntroContent = {
  badge: "Healthcare",
  badgeIcon: "Heart",
  title: "Healthcare Industry Solutions",
  subtitle: "Caring Through Innovation",
  description: "Healthcare is evolving rapidly with digital technologies, changing patient expectations, and regulatory requirements. We provide comprehensive solutions that help healthcare organizations deliver better care, improve efficiency, and create seamless experiences for patients and providers alike.",
  features: [
    "Electronic health record systems",
    "Patient engagement platforms",
    "Clinical decision support",
    "Healthcare analytics and insights",
    "Telehealth and remote care solutions",
  ],
  image1: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "EHR", title: "Electronic Health Records", description: "Implement modern EHR systems that improve clinical workflows and patient care. Our solutions provide comprehensive health information management.", features: ["Integrated clinical documentation", "Interoperability and data exchange", "Clinical workflow optimization", "Mobile EHR access"], imageUrl1: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Briefcase" },
  { id: 2, badge: "Patient Engagement", title: "Patient Experience Platforms", description: "Engage patients throughout their healthcare journey. Our solutions enable communication, access to information, and self-service capabilities.", features: ["Patient portals", "Appointment scheduling", "Secure messaging", "Health education resources"], imageUrl1: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Users" },
  { id: 3, badge: "Telehealth", title: "Virtual Care Solutions", description: "Deliver care anywhere with telehealth solutions. Our platforms enable virtual consultations, remote monitoring, and connected care experiences.", features: ["Video consultation platforms", "Remote patient monitoring", "Virtual care coordination", "Home health integration"], imageUrl1: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Globe" },
  { id: 4, badge: "Clinical Decision", title: "Clinical Decision Support", description: "Empower clinicians with evidence-based decision support. Our solutions provide real-time insights and recommendations for better care.", features: ["Evidence-based guidelines", "Drug interaction alerts", "Diagnostic assistance", "Care pathway optimization"], imageUrl1: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Lightbulb" },
  { id: 5, badge: "Analytics", title: "Healthcare Analytics", description: "Unlock insights from healthcare data. Our analytics solutions improve clinical outcomes, operational efficiency, and population health management.", features: ["Clinical analytics dashboards", "Population health insights", "Operational analytics", "Predictive modeling"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TrendingUp" },
  { id: 6, badge: "Revenue Cycle", title: "Revenue Cycle Management", description: "Optimize your revenue cycle for financial health. Our solutions streamline billing, claims processing, and payment management.", features: ["Claims management", "Billing optimization", "Payment processing", "Denial management"], imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Award" },
  { id: 7, badge: "Compliance", title: "Healthcare Compliance", description: "Stay compliant with healthcare regulations. Our solutions help you manage HIPAA, quality reporting, and other regulatory requirements.", features: ["HIPAA compliance management", "Quality measure reporting", "Audit management", "Privacy and security"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
  { id: 8, badge: "Care Coordination", title: "Care Coordination Solutions", description: "Coordinate care across settings and providers. Our solutions enable seamless transitions and collaborative care delivery.", features: ["Care team collaboration", "Transition of care management", "Referral management", "Care plan coordination"], imageUrl1: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Handshake" },
  { id: 9, badge: "Medical Devices", title: "Connected Medical Devices", description: "Integrate medical devices into your digital ecosystem. Our solutions enable device connectivity, data integration, and remote monitoring.", features: ["Device integration platforms", "Medical IoT solutions", "Remote device monitoring", "Data aggregation"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
  { id: 10, badge: "Innovation", title: "Digital Health Innovation", description: "Explore emerging technologies in healthcare. From AI diagnostics to precision medicine, we help you leverage innovation for better outcomes.", features: ["AI in healthcare", "Precision medicine platforms", "Genomics integration", "Wearable health technology"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function HealthcarePage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Healthcare Solutions"
      sectionSubtitle="Technology-enabled healthcare for better patient outcomes"
      gradientColor="from-red-500 to-rose-600"
    />
  );
}