import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Our Partners",
    description: "We collaborate with industry-leading organizations to deliver comprehensive solutions. Our strategic partnerships enable us to provide enhanced value and capabilities to our clients.",
    ctaText: "Become a Partner",
    ctaLink: "/start-generating-your-idea",
    subText: "Building Success Through Strategic Collaboration",
    mobileLabel: "Trusted Partners"
};

const introContent: IntroContent = {
    badge: "Strategic Partnerships",
    badgeIcon: "Handshake",
    title: "Partnering for Success",
    subtitle: "Collaborative Excellence",
    description: "Our partner ecosystem is built on shared values, mutual trust, and a commitment to delivering exceptional outcomes. We carefully select partners who complement our capabilities and share our dedication to client success.",
    features: [
        "Strategic technology partnerships with global leaders",
        "Professional services alliance network",
        "Industry-specific domain partnerships",
        "Innovation and research collaborations",
        "Regional and local partner ecosystem",
    ],
    image1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Technology Partners", title: "Leading Technology Alliances", description: "We partner with world-class technology providers to offer cutting-edge solutions ensuring our clients have access to the latest innovations.", features: ["Cloud platform partnerships", "Enterprise software alliances", "Security technology partners", "Integration and API partners"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Network" },
    { id: 2, badge: "Professional Services", title: "Professional Services Network", description: "Our professional services partners extend our capabilities across legal, financial, and specialized domains ensuring comprehensive support.", features: ["Legal and compliance partners", "Financial advisory alliances", "Human resources partners", "Industry consultants"], imageUrl1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Briefcase" },
    { id: 3, badge: "Industry Partners", title: "Domain-Specific Partnerships", description: "We collaborate with industry specialists who bring deep domain expertise enabling us to deliver sector-tailored solutions.", features: ["Healthcare industry partners", "Financial services alliances", "Manufacturing sector partners", "Retail and e-commerce partners"], imageUrl1: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
    { id: 4, badge: "Innovation", title: "Research & Innovation Partners", description: "Our innovation partnerships keep us at the forefront of emerging technologies and methodologies investing in tomorrow's solutions.", features: ["University research collaborations", "Startup ecosystem partnerships", "Innovation lab alliances", "R&D joint ventures"], imageUrl1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
    { id: 5, badge: "Global Reach", title: "Global Partner Network", description: "Our international partner network extends our reach across borders collaborating with trusted partners worldwide.", features: ["Americas partnership network", "EMEA regional partners", "Asia-Pacific alliances", "Cross-border service partnerships"], imageUrl1: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Globe" },
    { id: 6, badge: "Channel Partners", title: "Distribution & Channel Partners", description: "Our channel partner program extends our market reach through trusted local partners ensuring personalized service.", features: ["Reseller partner program", "Referral partner network", "Value-added distributors", "Implementation partners"], imageUrl1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Users" },
    { id: 7, badge: "Compliance", title: "Regulatory & Compliance Partners", description: "Our compliance partners help navigate complex regulatory landscapes ensuring clients meet all requirements.", features: ["Regulatory advisory partners", "Audit and assurance alliances", "Compliance technology partners", "Government liaison partners"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Shield" },
    { id: 8, badge: "Awards", title: "Partner Excellence Recognition", description: "Our partners have been recognized for outstanding contributions celebrating collaborative achievements and trusted relationships.", features: ["Partner of the Year awards", "Innovation collaboration recognition", "Service excellence acknowledgment", "Long-term partnership milestones"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Award" },
    { id: 9, badge: "Client Success", title: "Partnership Impact Stories", description: "Our partnerships have enabled remarkable client success stories solving complex challenges and delivering transformative outcomes.", features: ["Joint case studies and success stories", "Collaborative solution development", "Combined expertise delivery", "Integrated service offerings"], imageUrl1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 10, badge: "Join Us", title: "Become a Partner", description: "We're always looking for new partners who share our values and vision. Join our partner ecosystem and create value together.", features: ["Clear partnership criteria and process", "Partner onboarding and enablement", "Joint go-to-market opportunities", "Mutual growth and success focus"], imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Handshake" },
];

export default function PartnersPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Partner Ecosystem"
            sectionSubtitle="Collaborating with industry leaders for your success"
            gradientColor="from-blue-400 to-indigo-500"
        />
    );
}
