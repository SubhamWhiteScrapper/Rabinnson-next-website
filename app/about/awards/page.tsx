import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Awards & Certifications",
    description: "Our commitment to excellence has earned us recognition from industry leaders and regulatory bodies. Explore our awards, certifications, and the standards we uphold to deliver exceptional service.",
    ctaText: "View Our Credentials",
    ctaLink: "/start-generating-your-idea",
    subText: "Excellence Recognized, Trust Certified",
    mobileLabel: "Award-Winning Excellence"
};

const introContent: IntroContent = {
    badge: "Recognition",
    badgeIcon: "Trophy",
    title: "Celebrating Excellence",
    subtitle: "Industry Recognition & Accreditations",
    description: "Our journey has been marked by consistent recognition for quality, innovation, and customer satisfaction. These awards and certifications reflect our unwavering commitment to maintaining the highest standards in everything we do. They serve as testament to our team's dedication and our organization's pursuit of excellence.",
    features: [
        "Multiple industry awards for service excellence",
        "ISO certifications for quality management systems",
        "Regulatory compliance and professional accreditations",
        "Customer satisfaction excellence awards",
        "Innovation and technology leadership recognition",
    ],
    image1: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Industry Awards", title: "Premier Industry Recognition", description: "We have been honored with prestigious awards from leading industry bodies that recognize our commitment to excellence, innovation, and customer satisfaction in our field.", features: ["Best Service Provider Award - Multiple Years", "Excellence in Customer Service Recognition", "Innovation Leader in Industry Category", "Top Performer in Client Satisfaction"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Trophy" },
    { id: 2, badge: "ISO Certifications", title: "Quality Management Certifications", description: "Our ISO certifications demonstrate our adherence to international standards for quality management, information security, and environmental responsibility. These certifications are regularly audited and renewed.", features: ["ISO 9001:2015 Quality Management System", "ISO 27001 Information Security Management", "ISO 14001 Environmental Management", "Regular third-party audits and assessments"], imageUrl1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
    { id: 3, badge: "Professional Accreditations", title: "Licensed & Accredited", description: "Our professional accreditations ensure that our team meets the rigorous standards set by regulatory bodies and professional associations. These credentials validate our expertise and ethical practices.", features: ["Certified by relevant regulatory authorities", "Professional body memberships and affiliations", "Licensed practitioners and certified experts", "Continuous professional development compliance"], imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "BadgeCheck" },
    { id: 4, badge: "Excellence Awards", title: "Service Excellence Recognition", description: "Our dedication to exceptional service has been recognized through various excellence awards. These accolades reflect our commitment to going above and beyond for our clients.", features: ["Customer Experience Excellence Award", "Service Quality Recognition", "Client Retention Achievement", "Net Promoter Score Leadership"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Star" },
    { id: 5, badge: "Innovation", title: "Technology & Innovation Awards", description: "Our innovative approach to solving client challenges has earned us recognition in technology and innovation categories. We continuously invest in cutting-edge solutions.", features: ["Digital Innovation Award", "Technology Excellence Recognition", "Process Automation Achievement", "Digital Transformation Leadership"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Zap" },
    { id: 6, badge: "Compliance", title: "Regulatory Compliance Certifications", description: "We maintain strict compliance with all applicable regulations and industry standards. Our compliance certifications demonstrate our commitment to legal and ethical business practices.", features: ["Data Protection and Privacy Compliance", "Financial Regulatory Compliance", "Industry-Specific Regulatory Certifications", "Anti-Money Laundering Compliance"], imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
    { id: 7, badge: "Sustainability", title: "Environmental & Social Certifications", description: "Our commitment to sustainability is validated through environmental certifications and social responsibility recognitions. We strive to make a positive impact beyond business.", features: ["Green Business Certification", "Carbon Neutral Commitment Recognition", "Social Responsibility Awards", "Sustainable Practices Certification"], imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 8, badge: "Workplace", title: "Great Place to Work Certifications", description: "Our workplace culture and employee satisfaction have earned us recognition as a great place to work. These awards reflect our commitment to our team members.", features: ["Great Place to Work Certification", "Best Employer Awards", "Employee Engagement Excellence", "Workplace Wellness Recognition"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Crown" },
    { id: 9, badge: "Leadership", title: "Industry Leadership Recognition", description: "Our leadership team has been recognized for their vision, expertise, and contributions to the industry. These individual recognitions reflect on our organizational excellence.", features: ["CEO Leadership Awards", "Industry Thought Leadership Recognition", "Women in Leadership Awards", "Young Entrepreneur Recognition"], imageUrl1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Medal" },
    { id: 10, badge: "Partnership", title: "Partner Excellence Awards", description: "Our strategic partnerships have resulted in mutual success and recognition. These awards celebrate collaborative achievements and trusted relationships.", features: ["Strategic Partner of the Year", "Collaboration Excellence Award", "Partnership Innovation Recognition", "Vendor Excellence Certification"], imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function AwardsPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Awards & Certifications"
            sectionSubtitle="Recognition of our commitment to excellence"
            gradientColor="from-yellow-400 to-amber-500"
        />
    );
}
