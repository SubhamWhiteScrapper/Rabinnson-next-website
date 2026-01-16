import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Life Sciences Solutions",
  description: "Accelerate innovation in life sciences with advanced technology solutions. We help pharmaceutical, biotech, and medical device companies bring life-changing therapies to patients faster and more efficiently.",
  ctaText: "Discover Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Advancing Science, Improving Lives",
  mobileLabel: "Life Sciences"
};

const introContent: IntroContent = {
  badge: "Life Sciences",
  badgeIcon: "Target",
  title: "Life Sciences Industry Solutions",
  subtitle: "Innovation in Drug Development",
  description: "The life sciences industry faces increasing pressure to innovate faster, reduce costs, and navigate complex regulatory environments. We provide solutions that help organizations accelerate drug development, ensure compliance, and bring innovative therapies to patients who need them.",
  features: [
    "Clinical trial management systems",
    "Regulatory compliance solutions",
    "Drug safety and pharmacovigilance",
    "Commercial effectiveness platforms",
    "R&D data management",
  ],
  image1: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Clinical Trials", title: "Clinical Trial Management", description: "Streamline clinical trial operations from start to finish. Our solutions help you plan, execute, and manage clinical trials more efficiently.", features: ["Study planning and design", "Site management", "Patient recruitment", "Trial data management"], imageUrl1: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 2, badge: "Regulatory", title: "Regulatory Affairs Solutions", description: "Navigate complex regulatory requirements with confidence. Our solutions help you manage submissions, compliance, and regulatory intelligence.", features: ["Regulatory submission management", "Compliance tracking", "Regulatory intelligence", "Label management"], imageUrl1: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
  { id: 3, badge: "Drug Safety", title: "Pharmacovigilance Solutions", description: "Ensure drug safety throughout the product lifecycle. Our solutions help you monitor, detect, and manage adverse events effectively.", features: ["Adverse event management", "Signal detection", "Safety reporting", "Risk management"], imageUrl1: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Heart" },
  { id: 4, badge: "R&D", title: "Research & Development", description: "Accelerate drug discovery and development with advanced solutions. Our platforms enable collaboration, data management, and scientific innovation.", features: ["Research data management", "Laboratory information systems", "Scientific collaboration", "Discovery analytics"], imageUrl1: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Lightbulb" },
  { id: 5, badge: "Quality", title: "Quality Management", description: "Maintain the highest quality standards in manufacturing and operations. Our solutions help you ensure compliance and continuous improvement.", features: ["Quality management systems", "CAPA management", "Deviation handling", "Audit management"], imageUrl1: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Award" },
  { id: 6, badge: "Commercial", title: "Commercial Excellence", description: "Drive commercial success with integrated sales and marketing solutions. Our platforms help you engage healthcare professionals and reach patients.", features: ["CRM for life sciences", "Marketing automation", "Market access solutions", "Sales force effectiveness"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
  { id: 7, badge: "Manufacturing", title: "Pharmaceutical Manufacturing", description: "Optimize pharmaceutical manufacturing operations. Our solutions help you ensure quality, compliance, and efficiency in production.", features: ["Batch record management", "Manufacturing execution", "Serialization and traceability", "Process optimization"], imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
  { id: 8, badge: "Supply Chain", title: "Life Sciences Supply Chain", description: "Build resilient and compliant supply chains. Our solutions provide visibility, traceability, and optimization across the pharmaceutical supply chain.", features: ["Supply chain visibility", "Cold chain management", "Distribution management", "Serialization compliance"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
  { id: 9, badge: "Patient", title: "Patient Services Solutions", description: "Improve patient access and outcomes with patient-centric solutions. Our platforms support patient assistance, adherence, and engagement programs.", features: ["Patient assistance programs", "Adherence solutions", "Patient support hubs", "Outcomes tracking"], imageUrl1: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
  { id: 10, badge: "Innovation", title: "Digital Innovation", description: "Leverage emerging technologies to transform life sciences. From AI drug discovery to digital therapeutics, we help you pioneer new approaches.", features: ["AI in drug discovery", "Digital therapeutics", "Real-world evidence", "Precision medicine"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function LifeSciencesPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Life Sciences Solutions"
      sectionSubtitle="Accelerating innovation in pharmaceuticals and biotech"
      gradientColor="from-cyan-500 to-blue-600"
    />
  );
}