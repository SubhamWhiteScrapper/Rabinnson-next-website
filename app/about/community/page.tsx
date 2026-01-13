import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Our Community",
    description: "We believe in the power of community. Through meaningful engagement and social initiatives, we create positive impact that extends beyond business and touches lives.",
    ctaText: "Join Our Community",
    ctaLink: "/start-generating-your-idea",
    subText: "Making a Difference Together",
    mobileLabel: "Community First"
};

const introContent: IntroContent = {
    badge: "Community Engagement",
    badgeIcon: "Heart",
    title: "Building Stronger Communities",
    subtitle: "Social Impact & Responsibility",
    description: "Our commitment to community goes beyond corporate social responsibility. We actively engage with local communities, support charitable causes, and empower individuals to reach their full potential. Together, we're building a better future.",
    features: [
        "Local community development programs",
        "Educational initiatives and scholarships",
        "Healthcare and wellness support",
        "Environmental conservation efforts",
        "Volunteer programs and employee engagement",
    ],
    image1: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Local Impact", title: "Community Development Programs", description: "We invest in local communities through infrastructure development, skill training, and economic empowerment programs that create lasting change.", features: ["Infrastructure development projects", "Skill development and training centers", "Microfinance and livelihood support", "Local employment opportunities"], imageUrl1: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
    { id: 2, badge: "Education", title: "Educational Initiatives", description: "Education is the foundation of progress. Our educational programs provide access to quality learning opportunities for underprivileged students.", features: ["Scholarship programs for students", "School infrastructure support", "Digital learning initiatives", "Teacher training programs"], imageUrl1: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
    { id: 3, badge: "Healthcare", title: "Health & Wellness Support", description: "We support healthcare initiatives that provide medical care, health awareness, and wellness programs to underserved communities.", features: ["Medical camps and health checkups", "Healthcare infrastructure support", "Mental health awareness programs", "Nutrition and wellness initiatives"], imageUrl1: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Heart" },
    { id: 4, badge: "Environment", title: "Environmental Conservation", description: "Our environmental programs focus on conservation, sustainability, and creating awareness about protecting our planet for future generations.", features: ["Tree plantation drives", "Waste management initiatives", "Water conservation projects", "Clean energy promotion"], imageUrl1: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
    { id: 5, badge: "Volunteering", title: "Employee Volunteer Programs", description: "Our employees are our biggest asset in community service. Our volunteer programs enable them to contribute their time and skills.", features: ["Paid volunteer time off", "Skills-based volunteering", "Team community projects", "Employee matching donations"], imageUrl1: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
    { id: 6, badge: "Charity", title: "Charitable Partnerships", description: "We partner with reputable charitable organizations to maximize the impact of our giving and ensure resources reach those who need them most.", features: ["NGO partnerships", "Disaster relief contributions", "Long-term charity commitments", "Transparent donation tracking"], imageUrl1: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "HandHeart" },
    { id: 7, badge: "Youth", title: "Youth Empowerment", description: "We believe in investing in the future by empowering young people with skills, opportunities, and mentorship programs.", features: ["Youth leadership programs", "Internship opportunities", "Career guidance workshops", "Entrepreneurship support"], imageUrl1: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Target" },
    { id: 8, badge: "Recognition", title: "Community Achievement Awards", description: "We recognize and celebrate individuals and organizations making exceptional contributions to community development.", features: ["Annual community awards", "Recognition of local heroes", "Celebrating partner organizations", "Sharing success stories"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Award" },
    { id: 9, badge: "Engagement", title: "Community Events & Outreach", description: "We organize and participate in community events that bring people together and foster strong local connections.", features: ["Community celebration events", "Cultural program sponsorships", "Sports and recreation support", "Festival celebrations"], imageUrl1: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "MessageCircle" },
    { id: 10, badge: "Get Involved", title: "Join Our Community Initiatives", description: "There are many ways to get involved and make a difference. Partner with us to create positive change in communities.", features: ["Partnership opportunities", "Volunteer registration", "Donation programs", "Community feedback channels"], imageUrl1: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Gift" },
];

export default function CommunityPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Community Impact"
            sectionSubtitle="Making a positive difference in the communities we serve"
            gradientColor="from-rose-400 to-pink-500"
        />
    );
}
