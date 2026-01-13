import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Our Core Values",
    description: "Our values are the foundation of everything we do. They guide our decisions, shape our culture, and define how we interact with clients, partners, and communities.",
    ctaText: "Experience Our Values",
    ctaLink: "/start-generating-your-idea",
    subText: "Principles That Guide Us",
    mobileLabel: "Values Driven"
};

const introContent: IntroContent = {
    badge: "Our Foundation",
    badgeIcon: "Star",
    title: "Values That Define Us",
    subtitle: "Guiding Principles for Excellence",
    description: "Our core values are not just words on a wall—they are the principles we live by every day. These values shape our culture, drive our decisions, and help us deliver exceptional results for our clients and stakeholders.",
    features: [
        "Integrity in every action and decision",
        "Excellence as our standard",
        "Innovation driving continuous improvement",
        "Customer-first mindset",
        "Respect for all individuals",
    ],
    image1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Integrity", title: "Unwavering Integrity", description: "We conduct our business with the highest ethical standards maintaining honesty and transparency in all our dealings.", features: ["Honest and transparent communication", "Ethical business practices", "Accountability for our actions", "Building trust through consistency"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
    { id: 2, badge: "Excellence", title: "Commitment to Excellence", description: "We strive for excellence in everything we do continuously raising the bar and exceeding expectations.", features: ["High-quality deliverables", "Continuous improvement mindset", "Best practices adoption", "Going above and beyond"], imageUrl1: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Award" },
    { id: 3, badge: "Innovation", title: "Driving Innovation", description: "We embrace innovation and encourage creative thinking to solve complex problems and create better solutions.", features: ["Embracing new technologies", "Creative problem-solving", "Encouraging experimentation", "Forward-thinking approach"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Lightbulb" },
    { id: 4, badge: "Customer Focus", title: "Customer-First Mindset", description: "Our clients are at the heart of everything we do. We prioritize understanding and meeting their needs.", features: ["Understanding client needs", "Delivering exceptional service", "Building long-term relationships", "Responsive and accessible"], imageUrl1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Heart" },
    { id: 5, badge: "Teamwork", title: "Collaborative Spirit", description: "We believe in the power of teamwork working together to achieve shared goals and deliver outstanding results.", features: ["Cross-functional collaboration", "Knowledge sharing", "Supporting each other", "Celebrating team success"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
    { id: 6, badge: "Respect", title: "Respect for All", description: "We treat everyone with dignity and respect valuing diverse perspectives and creating an inclusive environment.", features: ["Valuing every individual", "Embracing diversity", "Active listening", "Fair and equitable treatment"], imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Handshake" },
    { id: 7, badge: "Accountability", title: "Taking Ownership", description: "We take responsibility for our actions and commitments delivering on our promises and owning the outcomes.", features: ["Keeping our promises", "Owning results", "Learning from mistakes", "Responsible decision-making"], imageUrl1: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 8, badge: "Agility", title: "Embracing Change", description: "We are adaptable and responsive embracing change as an opportunity for growth and improvement.", features: ["Flexible approach", "Quick adaptation", "Embracing new challenges", "Continuous learning"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Zap" },
    { id: 9, badge: "Sustainability", title: "Long-term Thinking", description: "We make decisions with the future in mind ensuring sustainable practices and lasting positive impact.", features: ["Environmental responsibility", "Sustainable business practices", "Community investment", "Future-focused decisions"], imageUrl1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Sparkles" },
    { id: 10, badge: "Living Our Values", title: "Values in Action", description: "Our values are not just principles—they are practiced every day through our actions decisions and interactions.", features: ["Values-based decision making", "Recognition for values champions", "Values integration in processes", "Continuous values reinforcement"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Star" },
];

export default function ValuesPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Core Values"
            sectionSubtitle="Principles that guide our every action"
            gradientColor="from-amber-400 to-orange-500"
        />
    );
}
