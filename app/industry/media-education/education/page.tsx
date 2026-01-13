import { StaticPageLayout } from "@/app/static-page-components";
import { HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components/types";

const heroContent: HeroContent = {
  title: "Education Solutions",
  description: "Transform learning experiences with innovative education technology. We help educational institutions embrace digital transformation to enhance student outcomes, streamline operations, and prepare learners for the future.",
  ctaText: "Explore EdTech",
  ctaLink: "/start-generating-your-idea",
  subText: "Empowering Education for Tomorrow",
  mobileLabel: "EdTech Solutions"
};

const introContent: IntroContent = {
  badge: "Education Industry",
  badgeIcon: "Award",
  title: "Education Technology Solutions",
  subtitle: "Learning Reimagined",
  description: "Education is evolving to meet the needs of digital-native learners. From K-12 to higher education and corporate training, we provide comprehensive solutions that enable personalized learning, improve administrative efficiency, and create engaging educational experiences.",
  features: [
    "Learning management system implementation",
    "Student information systems",
    "Virtual classroom solutions",
    "Educational content development",
    "Assessment and analytics platforms",
  ],
  image1: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1080",
};

const scrollSections: ScrollSection[] = [
  { id: 1, badge: "LMS", title: "Learning Management Systems", description: "Deploy powerful learning management platforms that engage students and simplify course administration. Our LMS solutions support blended, online, and in-person learning.", features: ["Course content management", "Student progress tracking", "Assignment and grading tools", "Mobile learning support"], imageUrl1: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Briefcase" },
  { id: 2, badge: "Virtual Learning", title: "Virtual Classroom Solutions", description: "Create immersive virtual learning experiences. Our solutions enable real-time collaboration, engagement, and effective remote education.", features: ["Live video conferencing", "Interactive whiteboard tools", "Breakout room functionality", "Recording and playback"], imageUrl1: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Globe" },
  { id: 3, badge: "Student Systems", title: "Student Information Systems", description: "Manage student data efficiently with comprehensive SIS platforms. From enrollment to graduation, track every aspect of the student journey.", features: ["Enrollment management", "Academic records management", "Attendance tracking", "Parent and guardian portals"], imageUrl1: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Users" },
  { id: 4, badge: "Assessment", title: "Assessment & Testing", description: "Evaluate learning outcomes with sophisticated assessment tools. Our solutions support various testing formats and provide actionable insights.", features: ["Online examination platforms", "Automated grading systems", "Formative assessment tools", "Learning outcome analytics"], imageUrl1: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Target" },
  { id: 5, badge: "Content", title: "Educational Content Development", description: "Create engaging educational content that captures attention and enhances learning. Our content solutions support multiple formats and learning styles.", features: ["Interactive course content", "Video-based learning modules", "Gamification elements", "Accessible content design"], imageUrl1: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Lightbulb" },
  { id: 6, badge: "Analytics", title: "Learning Analytics", description: "Gain insights into learning effectiveness with advanced analytics. Identify at-risk students, measure outcomes, and optimize teaching strategies.", features: ["Student performance dashboards", "Predictive analytics for retention", "Course effectiveness metrics", "Engagement tracking"], imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "TrendingUp" },
  { id: 7, badge: "Administration", title: "Campus Administration", description: "Streamline campus operations with integrated administrative solutions. From facilities to finance, manage all aspects of institutional operations.", features: ["Resource scheduling", "Financial management", "HR and payroll systems", "Facilities management"], imageUrl1: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Building2" },
  { id: 8, badge: "Engagement", title: "Student Engagement Platforms", description: "Keep students connected and engaged throughout their educational journey. Our platforms foster community and enhance the student experience.", features: ["Student communication tools", "Campus event management", "Club and activity platforms", "Alumni engagement solutions"], imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Heart" },
  { id: 9, badge: "Corporate Training", title: "Corporate Learning Solutions", description: "Develop workforce capabilities with enterprise learning solutions. Our platforms support compliance training, skill development, and career growth.", features: ["Corporate LMS platforms", "Compliance training management", "Skills assessment tools", "Learning path customization"], imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080", imagePosition: "right", hasOverlappingImages: false, icon: "Award" },
  { id: 10, badge: "Innovation", title: "EdTech Innovation", description: "Explore the future of education with emerging technologies. From AI tutoring to VR experiences, we help you pioneer new learning approaches.", features: ["AI-powered tutoring systems", "Virtual reality learning", "Adaptive learning platforms", "Blockchain credentials"], imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080", imageUrl2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080", imagePosition: "left", hasOverlappingImages: true, icon: "Sparkles" },
];

export default function EducationPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Education Technology Solutions"
      sectionSubtitle="Empowering learners and educators with innovative technology"
      gradientColor="from-orange-500 to-amber-600"
    />
  );
}