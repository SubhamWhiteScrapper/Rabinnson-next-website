import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Sustainability",
    description: "We are committed to building a sustainable future. Through responsible practices and innovative solutions, we minimize our environmental impact while maximizing positive outcomes.",
    ctaText: "Our Green Initiatives",
    ctaLink: "/start-generating-your-idea",
    subText: "Building a Sustainable Tomorrow",
    mobileLabel: "Planet First"
};

const introContent: IntroContent = {
    badge: "Environmental Commitment",
    badgeIcon: "Leaf",
    title: "Sustainable Business Practices",
    subtitle: "Protecting Our Planet",
    description: "Sustainability is at the core of everything we do. From reducing our carbon footprint to promoting circular economy principles, we are dedicated to environmental stewardship and creating a positive impact for generations to come.",
    features: [
        "Carbon neutrality commitment and roadmap",
        "Renewable energy adoption across operations",
        "Waste reduction and recycling programs",
        "Sustainable supply chain management",
        "Environmental compliance and reporting",
    ],
    image1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Carbon Neutral", title: "Journey to Carbon Neutrality", description: "We have set ambitious targets to achieve carbon neutrality across all our operations through energy efficiency and carbon offset programs.", features: ["Science-based emission reduction targets", "Carbon footprint measurement and tracking", "Investment in carbon offset projects", "Annual sustainability reporting"], imageUrl1: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 2, badge: "Renewable Energy", title: "Clean Energy Transition", description: "We are transitioning to 100% renewable energy sources powering our operations with solar, wind, and other clean energy alternatives.", features: ["Solar power installations", "Wind energy procurement", "Green energy certificates", "Energy efficiency improvements"], imageUrl1: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sun" },
    { id: 3, badge: "Waste Management", title: "Zero Waste Initiative", description: "Our zero waste initiative focuses on reducing, reusing, and recycling to minimize our environmental impact and promote circular economy.", features: ["Comprehensive recycling programs", "Single-use plastic elimination", "E-waste responsible disposal", "Composting and organic waste management"], imageUrl1: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Recycle" },
    { id: 4, badge: "Water Conservation", title: "Water Stewardship", description: "We implement water conservation measures across our operations to protect this precious resource and ensure sustainable usage.", features: ["Water usage monitoring and reduction", "Rainwater harvesting systems", "Water recycling and treatment", "Watershed protection initiatives"], imageUrl1: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Droplets" },
    { id: 5, badge: "Green Buildings", title: "Sustainable Infrastructure", description: "Our facilities are designed and operated with sustainability in mind incorporating green building standards and eco-friendly practices.", features: ["LEED certified buildings", "Energy-efficient lighting and HVAC", "Green landscaping and biodiversity", "Sustainable construction materials"], imageUrl1: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "TreePine" },
    { id: 6, badge: "Supply Chain", title: "Sustainable Supply Chain", description: "We work with our suppliers to ensure environmental responsibility throughout our supply chain promoting sustainable practices.", features: ["Supplier sustainability assessment", "Local sourcing preferences", "Eco-friendly packaging requirements", "Transportation optimization"], imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
    { id: 7, badge: "Climate Action", title: "Climate Change Mitigation", description: "We actively participate in climate action initiatives supporting global efforts to combat climate change and its effects.", features: ["Climate risk assessment and planning", "Advocacy for climate policies", "Climate adaptation strategies", "Collaboration with environmental organizations"], imageUrl1: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Globe" },
    { id: 8, badge: "Innovation", title: "Green Innovation", description: "We invest in innovative technologies and solutions that help reduce environmental impact and promote sustainability.", features: ["Clean technology investments", "Sustainability research and development", "Pilot programs for new solutions", "Green product development"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Zap" },
    { id: 9, badge: "Recognition", title: "Sustainability Achievements", description: "Our sustainability efforts have been recognized through various awards and certifications validating our commitment.", features: ["Environmental certifications", "Sustainability awards and recognition", "Industry benchmark leadership", "Third-party verification"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Award" },
    { id: 10, badge: "Future Goals", title: "Our Sustainability Roadmap", description: "We have set ambitious long-term goals to further reduce our environmental impact and lead the way in sustainable business.", features: ["Net-zero emissions by 2040", "100% renewable energy by 2030", "Zero waste to landfill targets", "Biodiversity protection commitments"], imageUrl1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Leaf" },
];

export default function SustainabilityPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Sustainability Journey"
            sectionSubtitle="Committed to environmental responsibility and sustainable practices"
            gradientColor="from-green-400 to-emerald-500"
        />
    );
}
