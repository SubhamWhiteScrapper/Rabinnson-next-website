import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "Smart Code Warrior",
  description: "The ultimate coding competition for developers to showcase their skills, solve real-world challenges, and compete for recognition and prizes.",
  ctaText: "Register Now",
  ctaLink: "/start-generating-your-idea",
  subText: "Code. Compete. Conquer.",
  mobileLabel: "Join 50,000+ Coders"
};

const introContent: IntroContent = {
  badge: "Coding Championship",
  badgeIcon: "Settings",
  title: "Overview of Smart Code Warrior",
  subtitle: "Premier Developer Competition",
  description: "Smart Code Warrior brings together the brightest developers to solve complex algorithmic challenges, build innovative solutions, and compete for top honors in this prestigious coding championship.",
  features: [
    "Multi-round coding competition",
    "Real-world problem challenges",
    "Cash prizes and job offers",
    "Mentorship from tech leaders",
    "Global participant community"
  ],
  image1: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Challenges",
    title: "Diverse Challenges",
    description: "From algorithms to system design, our challenges test every aspect of software development.",
    features: [
      "Data structures & algorithms",
      "System design problems",
      "Code debugging rounds",
      "Live coding interviews"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Settings"
  },
  {
    id: 2,
    badge: "Prizes",
    title: "Exciting Rewards",
    description: "Top performers win substantial cash prizes, job offers, and exclusive networking opportunities.",
    features: [
      "₹10L+ in cash prizes",
      "Job offers from top companies",
      "MacBooks and gadgets",
      "Conference sponsorships"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Trophy"
  },
  {
    id: 3,
    badge: "Community",
    title: "Developer Community",
    description: "Join a thriving community of developers, share knowledge, and build lasting connections.",
    features: [
      "Discord community access",
      "Peer learning groups",
      "Alumni network",
      "Year-round events"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Users"
  },
  {
    id: 4,
    badge: "Why Participate",
    title: "Why Join Smart Code Warrior?",
    description: "Prove your coding prowess, learn from the best, and accelerate your tech career.",
    features: [
      "50,000+ participants",
      "100+ hiring partners",
      "Global leaderboard",
      "Certificate of excellence"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Star"
  }
];

export default function TravellerPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Smart Code Warrior Features"
      sectionSubtitle="Test your coding skills and compete with the best"
      gradientColor="from-emerald-400 to-teal-500"
    />
  );
}