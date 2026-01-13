import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "IVR Bookings Platform",
  description: "Automate appointment scheduling and customer interactions with our intelligent IVR booking system. Reduce no-shows and improve customer experience.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Smart Voice-Based Booking Solutions",
  mobileLabel: "Trusted by Businesses"
};

const introContent: IntroContent = {
  badge: "IVR Solutions",
  badgeIcon: "Settings",
  title: "Overview of IVR Bookings",
  subtitle: "Automated Voice Booking System",
  description: "IVR Bookings transforms how businesses handle appointments and customer inquiries through intelligent voice automation, reducing manual workload while improving customer satisfaction.",
  features: [
    "24/7 automated booking availability",
    "Multi-language support",
    "Calendar integration",
    "SMS and email confirmations",
    "Analytics dashboard"
  ],
  image1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Automation",
    title: "Smart Voice Automation",
    description: "Our AI-powered IVR understands natural language and guides callers through booking seamlessly.",
    features: [
      "Natural language processing",
      "Context-aware responses",
      "Call routing logic",
      "Queue management"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Settings"
  },
  {
    id: 2,
    badge: "Scheduling",
    title: "Intelligent Scheduling",
    description: "Integrate with popular calendars and manage availability in real-time.",
    features: [
      "Google/Outlook sync",
      "Real-time availability",
      "Buffer time settings",
      "Recurring appointments"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Clock"
  },
  {
    id: 3,
    badge: "Analytics",
    title: "Comprehensive Analytics",
    description: "Track call volumes, booking rates, and customer satisfaction metrics.",
    features: [
      "Call volume tracking",
      "Conversion analytics",
      "Peak time analysis",
      "Customer feedback"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "BarChart"
  },
  {
    id: 4,
    badge: "Why IVR",
    title: "Why Choose IVR Bookings?",
    description: "Reduce operational costs while providing superior customer experience.",
    features: [
      "50% reduction in no-shows",
      "24/7 booking availability",
      "Multi-location support",
      "Enterprise security"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Zap"
  }
];

export default function IVRBookingsPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="IVR Bookings Features"
      sectionSubtitle="Automate your booking process with intelligent voice solutions"
      gradientColor="from-cyan-400 to-blue-500"
    />
  );
}