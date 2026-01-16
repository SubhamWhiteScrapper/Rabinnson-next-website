// Icon names that can be passed from Server to Client Components
export type IconName =
    | "Sparkles" | "Target" | "BookOpen" | "Users" | "Briefcase"
    | "Award" | "Clock" | "FileText" | "Shield" | "Lock"
    | "UserCheck" | "Check" | "ArrowRight" | "Scale" | "ClipboardCheck"
    | "Handshake" | "Building" | "Heart" | "Globe" | "Star"
    | "Trophy" | "Lightbulb" | "Rocket" | "Settings" | "Zap"
    | "TrendingUp" | "BarChart" | "PieChart" | "LineChart" | "Activity"
    | "Crown" | "Medal" | "Building2" | "HandHeart" | "Gift"
    | "MessageCircle" | "Network" | "Accessibility" | "Leaf" | "Sun"
    | "Recycle" | "Droplets" | "TreePine" | "BadgeCheck" | "Smile";

export interface HeroContent {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    subText: string;
    mobileLabel?: string;
}

export interface IntroContent {
    badge: string;
    badgeIcon: IconName;
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    image1: string;
    image2: string;
}

export interface ScrollSection {
    id: number;
    badge: string;
    title: string;
    description: string;
    features: string[];
    imageUrl1: string;
    imageUrl2?: string;
    imagePosition: "left" | "right";
    hasOverlappingImages: boolean;
    icon: IconName;
}

export interface StaticPageProps {
    heroContent: HeroContent;
    introContent: IntroContent;
    scrollSections: ScrollSection[];
    sectionTitle: string;
    sectionSubtitle: string;
    gradientColor?: string;
}
