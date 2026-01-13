import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "TESK Event Platform",
  description: "Join the premier technology and entrepreneurship summit bringing together innovators, investors, and industry leaders for transformative experiences.",
  ctaText: "Register Now",
  ctaLink: "/start-generating-your-idea",
  subText: "Technology, Entrepreneurship, Skills & Knowledge",
  mobileLabel: "Join 10,000+ Attendees"
};

const introContent: IntroContent = {
  badge: "TESK Event",
  badgeIcon: "Trophy",
  title: "Overview of TESK Event",
  subtitle: "Premier Tech & Entrepreneurship Summit",
  description: "TESK Event is a flagship conference designed to inspire, educate, and connect the next generation of technology leaders and entrepreneurs through immersive sessions, workshops, and networking opportunities.",
  features: [
    "Keynote speeches from industry pioneers",
    "Hands-on workshops and bootcamps",
    "Startup pitch competitions",
    "Networking with investors and mentors",
    "Exhibition hall with latest innovations"
  ],
  image1: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Speakers",
    title: "World-Class Speakers",
    description: "Learn from industry titans, successful founders, and thought leaders sharing insights.",
    features: [
      "Fortune 500 executives",
      "Successful startup founders",
      "Research pioneers",
      "Investment experts"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Star"
  },
  {
    id: 2,
    badge: "Workshops",
    title: "Interactive Workshops",
    description: "Hands-on sessions covering cutting-edge technologies and business strategies.",
    features: [
      "AI/ML workshops",
      "Startup fundamentals",
      "Funding masterclass",
      "Product design sprints"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Zap"
  },
  {
    id: 3,
    badge: "Networking",
    title: "Premium Networking",
    description: "Connect with fellow entrepreneurs, investors, and industry professionals.",
    features: [
      "Curated matchmaking",
      "VIP networking lounges",
      "After-party events",
      "1-on-1 meeting rooms"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Users"
  },
  {
    id: 4,
    badge: "Why Attend",
    title: "Why Attend TESK?",
    description: "An unmissable opportunity to accelerate your journey as an entrepreneur or tech professional.",
    features: [
      "10,000+ attendees",
      "100+ speakers",
      "50+ workshops",
      "₹1Cr+ in prizes"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Award"
  }
];

export default function RewardsHubPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="TESK Event Highlights"
      sectionSubtitle="Experience the best of technology and entrepreneurship"
      gradientColor="from-amber-400 to-orange-500"
    />
  );
}