import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Our Brand Identity",
    description: "We are more than a company—we are a promise. Our brand represents trust, innovation, and excellence. Discover how we build meaningful connections with our customers and stakeholders through our authentic brand story.",
    ctaText: "Explore Our Story",
    ctaLink: "/start-generating-your-idea",
    subText: "Building Trust Through Authentic Brand Experience",
    mobileLabel: "Trusted Brand"
};

const introContent: IntroContent = {
    badge: "Brand Identity",
    badgeIcon: "Sparkles",
    title: "Overview of Our Brand",
    subtitle: "Authenticity Meets Innovation",
    description: "Our brand is the embodiment of our values, vision, and commitment to excellence. It represents decades of trust, innovation, and customer-first thinking. Every touchpoint, from our visual identity to customer interactions, reflects our dedication to delivering exceptional value and building lasting relationships.",
    features: [
        "Distinctive visual identity that stands out in the market",
        "Consistent brand messaging across all platforms and channels",
        "Customer-centric approach in every brand interaction",
        "Innovation-driven brand evolution and adaptation",
        "Strong emotional connection with our audience",
    ],
    image1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Brand Vision", title: "Our Vision for the Future", description: "We envision a future where our brand becomes synonymous with trust, quality, and innovation. Our forward-thinking approach ensures we remain relevant and valuable to our customers in an ever-evolving marketplace.", features: ["Leading industry transformation through innovation", "Expanding global presence with local relevance", "Sustainability at the core of brand strategy", "Digital-first customer experience approach"], imageUrl1: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 2, badge: "Brand Story", title: "Our Heritage & Journey", description: "Our brand story is built on decades of dedication, innovation, and customer success. From our humble beginnings to our current position, every chapter reflects our commitment to excellence.", features: ["Rich heritage spanning decades of service", "Evolution through market changes and challenges", "Customer success stories that define our journey", "Milestones that mark our growth and achievements"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "BookOpen" },
    { id: 3, badge: "Brand Values", title: "What We Stand For", description: "Our brand values are the pillars that support everything we do. They guide our decisions, shape our culture, and define how we interact with stakeholders at every level.", features: ["Integrity in all business dealings", "Excellence in service delivery", "Innovation in problem-solving", "Respect for all stakeholders"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
    { id: 4, badge: "Brand Promise", title: "Our Commitment to You", description: "Our brand promise is our commitment to delivering consistent value, quality, and satisfaction. It's the assurance that every interaction with our brand will meet or exceed expectations.", features: ["Consistent quality in every engagement", "Reliable and dependable service delivery", "Transparent and honest communication", "Continuous improvement and innovation"], imageUrl1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Lock" },
    { id: 5, badge: "Brand Culture", title: "The People Behind Our Brand", description: "Our brand is brought to life by our people. Their dedication, expertise, and passion are what make our brand truly exceptional and meaningful to our customers.", features: ["Employee-driven brand advocacy", "Culture of excellence and innovation", "Continuous learning and development", "Collaborative and inclusive workplace"], imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
    { id: 6, badge: "Brand Experience", title: "Customer-Centric Approach", description: "Every brand touchpoint is designed to deliver exceptional customer experience. We continuously refine our approach to ensure meaningful and memorable interactions.", features: ["Seamless omni-channel experience", "Personalized customer interactions", "Responsive and empathetic service", "Consistent brand experience everywhere"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
    { id: 7, badge: "Brand Recognition", title: "Industry Recognition & Awards", description: "Our brand has been recognized and awarded by leading industry bodies, validating our commitment to excellence and innovation in every aspect of our business.", features: ["Multiple industry awards for brand excellence", "Recognition for customer satisfaction", "Innovation and leadership awards", "Sustainability and social responsibility recognition"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Award" },
    { id: 8, badge: "Brand Evolution", title: "Continuous Brand Enhancement", description: "Our brand continuously evolves to stay relevant and valuable. We embrace change while staying true to our core values and brand essence.", features: ["Regular brand audits and assessments", "Market-responsive brand updates", "Technology-enabled brand experiences", "Customer feedback integration"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Clock" },
    { id: 9, badge: "Brand Guidelines", title: "Maintaining Brand Consistency", description: "Our comprehensive brand guidelines ensure consistency across all touchpoints, protecting and strengthening our brand identity in every interaction.", features: ["Comprehensive visual identity standards", "Tone and voice guidelines", "Partner and vendor brand requirements", "Digital and print specifications"], imageUrl1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "FileText" },
    { id: 10, badge: "Brand Future", title: "Building Tomorrow's Brand", description: "We are constantly investing in the future of our brand, ensuring it remains strong, relevant, and valuable for generations to come.", features: ["Long-term brand strategy development", "Innovation in brand experiences", "Sustainability-focused brand evolution", "Digital transformation initiatives"], imageUrl1: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function BrandPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Brand Journey"
            sectionSubtitle="Discover the story behind our brand"
            gradientColor="from-orange-400 to-amber-500"
        />
    );
}
