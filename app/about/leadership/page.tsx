import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Our Leadership",
    description: "Meet the visionary leaders who guide our organization. Their expertise, passion, and commitment to excellence drive our success and shape our future.",
    ctaText: "Connect With Us",
    ctaLink: "/start-generating-your-idea",
    subText: "Guiding Excellence, Inspiring Innovation",
    mobileLabel: "Leadership Team"
};

const introContent: IntroContent = {
    badge: "Leadership Team",
    badgeIcon: "Users",
    title: "Visionary Leadership",
    subtitle: "Experience & Excellence",
    description: "Our leadership team brings together decades of experience across industries. They are committed to driving innovation, fostering growth, and creating value for all stakeholders. Their strategic vision and hands-on approach ensure we deliver exceptional results.",
    features: [
        "Decades of combined industry experience",
        "Proven track record of business success",
        "Commitment to innovation and growth",
        "Focus on sustainable value creation",
        "Diverse perspectives and expertise",
    ],
    image1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Vision", title: "Strategic Vision & Direction", description: "Our leadership sets the strategic direction for the organization, ensuring we stay ahead of market trends and deliver value to all stakeholders.", features: ["Clear long-term strategic roadmap", "Market-responsive decision making", "Innovation-driven growth strategy", "Stakeholder value creation focus"], imageUrl1: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 2, badge: "Experience", title: "Industry Expertise", description: "Our leaders bring deep industry expertise from their extensive careers, enabling informed decision-making and strategic insights.", features: ["Cross-industry experience", "Domain expertise and specialization", "Global business perspective", "Regulatory and compliance knowledge"], imageUrl1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
    { id: 3, badge: "Innovation", title: "Driving Innovation", description: "Our leadership champions innovation across the organization, encouraging creative thinking and investment in cutting-edge solutions.", features: ["Technology investment priorities", "Innovation culture development", "R&D and research initiatives", "Digital transformation leadership"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Lightbulb" },
    { id: 4, badge: "Governance", title: "Corporate Governance", description: "Strong corporate governance ensures transparency, accountability, and ethical business practices throughout our organization.", features: ["Robust governance framework", "Ethical business standards", "Risk management oversight", "Regulatory compliance focus"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
    { id: 5, badge: "Culture", title: "Building Great Culture", description: "Our leaders foster a culture of excellence, collaboration, and continuous improvement that empowers every team member to succeed.", features: ["Employee-first philosophy", "Inclusive workplace culture", "Professional development focus", "Work-life balance support"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Heart" },
    { id: 6, badge: "Global", title: "Global Leadership", description: "Our leadership team brings global perspective and experience, enabling us to serve clients across markets with local expertise.", features: ["International business experience", "Cross-cultural leadership skills", "Global market understanding", "Regional expertise and networks"], imageUrl1: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
    { id: 7, badge: "Mentorship", title: "Developing Future Leaders", description: "Our leadership is committed to developing the next generation of leaders through mentorship, training, and growth opportunities.", features: ["Leadership development programs", "Mentorship and coaching", "Succession planning", "Career growth pathways"], imageUrl1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "BookOpen" },
    { id: 8, badge: "Recognition", title: "Industry Recognition", description: "Our leaders have been recognized for their contributions to the industry, receiving awards and accolades for their vision and achievements.", features: ["Industry leadership awards", "Thought leadership recognition", "Business excellence honors", "Community service awards"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Award" },
    { id: 9, badge: "Community", title: "Community Commitment", description: "Our leadership believes in giving back to the community, driving social responsibility initiatives and charitable efforts.", features: ["Corporate social responsibility", "Community engagement programs", "Charitable giving leadership", "Sustainability initiatives"], imageUrl1: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
    { id: 10, badge: "Excellence", title: "Leadership Excellence", description: "Our commitment to leadership excellence ensures we continue to grow, innovate, and deliver exceptional value to all stakeholders.", features: ["Continuous improvement mindset", "Performance-driven culture", "Stakeholder value focus", "Long-term sustainable growth"], imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Crown" },
];

export default function LeadershipPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Meet Our Leaders"
            sectionSubtitle="Experienced professionals guiding our success"
            gradientColor="from-blue-400 to-cyan-500"
        />
    );
}
