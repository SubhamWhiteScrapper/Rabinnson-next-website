import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Communications, Media & Information Services",
  description: "Navigate the rapidly evolving media landscape with confidence. We help communications and media companies embrace digital transformation, engage audiences, and create compelling content experiences.",
  ctaText: "Explore Solutions",
  ctaLink: "/start-generating-your-idea",
  subText: "Connecting People, Transforming Media",
  mobileLabel: "Media Solutions"
};

const introContent: IntroContent = {
  badge: "Media & Communications",
  badgeIcon: "Globe",
  title: "Media Industry Solutions",
  subtitle: "Innovation in Communication",
  description: "The media and communications industry is experiencing unprecedented disruption. From streaming services to 5G networks, we provide solutions that help organizations adapt to changing consumer behaviors, monetize content effectively, and deliver seamless experiences across platforms.",
  features: [
    "Digital content management and distribution",
    "Streaming platform development",
    "Telecommunications network solutions",
    "Audience engagement and analytics",
    "Advertising technology integration",
  ],
  image1: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "Streaming", title: "OTT & Streaming Platforms", description: "Build world-class streaming experiences that captivate audiences. Our solutions power content delivery, monetization, and viewer engagement.", features: ["Video streaming infrastructure", "Content recommendation engines", "Subscription management", "Multi-platform content delivery"], imageUrl1: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
  { id: 2, badge: "Content", title: "Content Management Systems", description: "Manage, organize, and distribute content efficiently. Our CMS solutions support multiple formats and enable seamless content workflows.", features: ["Digital asset management", "Editorial workflow automation", "Multi-channel publishing", "Content localization"], imageUrl1: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
  { id: 3, badge: "Telecom", title: "Telecommunications Solutions", description: "Modernize your telecom infrastructure for the 5G era. Our solutions help operators enhance network performance and customer experience.", features: ["Network optimization", "5G deployment support", "OSS/BSS modernization", "Customer experience management"], imageUrl1: "https://images.unsplash.com/photo-1516044734145-07ca8eef8731?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
  { id: 4, badge: "Advertising", title: "Advertising Technology", description: "Maximize advertising revenue with intelligent ad tech solutions. Our platforms enable targeted, measurable, and effective advertising.", features: ["Programmatic advertising platforms", "Ad inventory management", "Campaign analytics", "Cross-platform ad delivery"], imageUrl1: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
  { id: 5, badge: "Analytics", title: "Audience Analytics", description: "Understand your audience like never before. Our analytics solutions provide deep insights into viewer behavior and content performance.", features: ["Real-time audience measurement", "Content performance analytics", "Viewer segmentation", "Predictive engagement models"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
  { id: 6, badge: "Engagement", title: "Audience Engagement Platforms", description: "Build lasting relationships with your audience. Our engagement solutions help you connect with viewers across channels and touchpoints.", features: ["Social media integration", "Interactive content features", "Community management", "Personalized experiences"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Heart" },
  { id: 7, badge: "Monetization", title: "Content Monetization", description: "Unlock new revenue streams from your content. Our monetization solutions support multiple models from subscriptions to pay-per-view.", features: ["Subscription management", "Pay-per-view systems", "Micropayments integration", "Revenue optimization"], imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Award" },
  { id: 8, badge: "Production", title: "Media Production Solutions", description: "Streamline your production workflows with modern tools. From pre-production to post, we help you create content efficiently.", features: ["Cloud-based production", "Remote collaboration tools", "Media workflow automation", "Asset lifecycle management"], imageUrl1: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Lightbulb" },
  { id: 9, badge: "Rights", title: "Rights & Royalties Management", description: "Manage content rights and royalties with precision. Our solutions help you track, report, and distribute earnings accurately.", features: ["Rights management systems", "Royalty calculation engines", "Contract management", "Usage tracking"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
  { id: 10, badge: "Innovation", title: "Emerging Media Technologies", description: "Stay ahead with emerging technologies. From AR/VR to AI-generated content, we help you explore new frontiers in media.", features: ["Augmented reality experiences", "Virtual reality content", "AI content generation", "Immersive storytelling"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function CommunicationsMediaPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Media & Communications Solutions"
      sectionSubtitle="Transforming how content is created, distributed, and consumed"
      gradientColor="from-purple-500 to-pink-600"
    />
  );
}