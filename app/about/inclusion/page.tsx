import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
    title: "Diversity & Inclusion",
    description: "We celebrate diversity and foster an inclusive environment where everyone belongs. Our commitment to inclusion drives innovation and creates a workplace where all voices are heard.",
    ctaText: "Join Our Journey",
    ctaLink: "/start-generating-your-idea",
    subText: "Everyone Belongs Here",
    mobileLabel: "Everyone Welcome"
};

const introContent: IntroContent = {
    badge: "Inclusive Culture",
    badgeIcon: "Heart",
    title: "Embracing Diversity",
    subtitle: "Building an Inclusive Workplace",
    description: "Diversity and inclusion are fundamental to who we are. We believe that diverse perspectives drive innovation and that an inclusive culture enables everyone to bring their authentic selves to work. Together, we create an environment where differences are celebrated.",
    features: [
        "Diverse workforce across all levels",
        "Inclusive hiring and promotion practices",
        "Employee resource groups and networks",
        "Accessibility and accommodation support",
        "Cultural awareness and sensitivity training",
    ],
    image1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
    { id: 1, badge: "Workforce Diversity", title: "Diverse Talent Representation", description: "We actively work to build a workforce that reflects the diversity of our communities ensuring representation across all dimensions.", features: ["Gender diversity initiatives", "Ethnic and cultural diversity", "Age and generational diversity", "LGBTQ+ inclusion programs"], imageUrl1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
    { id: 2, badge: "Equal Opportunity", title: "Fair & Equitable Practices", description: "Our policies and practices ensure equal opportunity for all employees regardless of background fostering a meritocratic environment.", features: ["Equal pay for equal work", "Transparent promotion criteria", "Bias-free performance reviews", "Fair recruitment processes"], imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Scale" },
    { id: 3, badge: "Accessibility", title: "Accessible for All", description: "We are committed to creating accessible workplaces and products ensuring everyone can participate fully regardless of ability.", features: ["Physical accessibility standards", "Digital accessibility compliance", "Reasonable accommodations", "Assistive technology support"], imageUrl1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Accessibility" },
    { id: 4, badge: "Employee Networks", title: "Employee Resource Groups", description: "Our employee resource groups provide community support and development opportunities for employees with shared backgrounds or interests.", features: ["Women's leadership network", "Cultural affinity groups", "Pride and LGBTQ+ alliance", "Disability inclusion network"], imageUrl1: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Heart" },
    { id: 5, badge: "Training", title: "Inclusion Education & Training", description: "We invest in education and training programs that build awareness and skills for creating inclusive environments.", features: ["Unconscious bias training", "Cultural competency workshops", "Inclusive leadership development", "Allyship programs"], imageUrl1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Sparkles" },
    { id: 6, badge: "Safe Space", title: "Psychological Safety", description: "We foster psychological safety where everyone feels comfortable speaking up sharing ideas and being their authentic selves.", features: ["Open communication culture", "Zero tolerance for discrimination", "Confidential reporting channels", "Supportive management practices"], imageUrl1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Shield" },
    { id: 7, badge: "Global", title: "Global Inclusion Initiatives", description: "Our inclusion initiatives span across all our global locations adapting to local contexts while maintaining consistent principles.", features: ["Regional diversity councils", "Local cultural celebrations", "Cross-cultural collaboration", "Global inclusion standards"], imageUrl1: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Globe" },
    { id: 8, badge: "Community", title: "Community Partnership", description: "We extend our commitment to inclusion beyond our workplace partnering with organizations that promote diversity.", features: ["Diversity-focused nonprofits", "Community outreach programs", "Inclusive supplier diversity", "Educational partnerships"], imageUrl1: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "HandHeart" },
    { id: 9, badge: "Recognition", title: "Diversity Awards & Recognition", description: "Our inclusion efforts have been recognized through various awards and certifications validating our commitment.", features: ["Workplace diversity awards", "Inclusion index recognition", "Best employer certifications", "Industry leadership awards"], imageUrl1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Award" },
    { id: 10, badge: "Future Goals", title: "Our Inclusion Roadmap", description: "We continue to set ambitious goals to advance diversity and inclusion creating a more equitable future.", features: ["Representation targets", "Pay equity commitments", "Inclusion metric tracking", "Continuous improvement focus"], imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Target" },
];

export default function InclusionPage() {
    return (
        <StaticPageLayout
            heroContent={heroContent}
            introContent={introContent}
            scrollSections={scrollSections}
            sectionTitle="Our Inclusion Journey"
            sectionSubtitle="Creating a workplace where everyone belongs"
            gradientColor="from-purple-400 to-violet-500"
        />
    );
}
