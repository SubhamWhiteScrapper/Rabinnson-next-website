import { StaticPageLayout, HeroContent, IntroContent, ScrollSection } from "@/app/static-page-components";

const heroContent: HeroContent = {
  title: "Consysmind Platform",
  description: "Consysmind is an intelligent business automation platform that leverages AI and machine learning to streamline operations, enhance decision-making, and drive digital transformation across your enterprise.",
  ctaText: "Get Started",
  ctaLink: "/start-generating-your-idea",
  subText: "Transform Your Business with Intelligent Automation",
  mobileLabel: "Trusted by Enterprises"
};

const introContent: IntroContent = {
  badge: "AI-Powered Platform",
  badgeIcon: "Lightbulb",
  title: "Overview of Consysmind",
  subtitle: "Intelligent Business Automation",
  description: "Consysmind is a comprehensive AI-powered platform designed to revolutionize how businesses operate. By integrating advanced machine learning algorithms with intuitive user interfaces, Consysmind enables organizations to automate complex processes, gain actionable insights, and make data-driven decisions with unprecedented accuracy and speed.",
  features: [
    "AI-driven workflow automation for enhanced operational efficiency",
    "Real-time analytics and predictive insights for strategic planning",
    "Seamless integration with existing enterprise systems and databases",
    "Customizable dashboards and reporting for stakeholder visibility",
    "Enterprise-grade security with compliance management capabilities"
  ],
  image1: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080",
  image2: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1080"
};

const scrollSections: ScrollSection[] = [
  {
    id: 1,
    badge: "Core Features",
    title: "Intelligent Process Automation",
    description: "Consysmind's core automation engine uses advanced AI to identify, optimize, and automate business processes. From routine tasks to complex workflows, our platform learns and adapts to your unique operational requirements.",
    features: [
      "Smart workflow designer with drag-and-drop interface",
      "Machine learning-powered process optimization",
      "Automated decision trees and business rules engine",
      "Real-time process monitoring and alerting"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Settings"
  },
  {
    id: 2,
    badge: "Data Intelligence",
    title: "Advanced Analytics & Insights",
    description: "Transform raw data into actionable intelligence with Consysmind's powerful analytics suite. Our platform aggregates data from multiple sources, applies sophisticated algorithms, and delivers insights that drive business growth.",
    features: [
      "Multi-source data integration and normalization",
      "Predictive analytics with machine learning models",
      "Interactive visualization and custom dashboards",
      "Automated report generation and distribution"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "BarChart"
  },
  {
    id: 3,
    badge: "Integration",
    title: "Seamless System Integration",
    description: "Consysmind connects effortlessly with your existing technology stack. Whether you're using legacy systems or modern cloud applications, our platform ensures smooth data flow and unified operations across your enterprise.",
    features: [
      "Pre-built connectors for 200+ popular applications",
      "RESTful API and webhook support for custom integrations",
      "Real-time data synchronization across systems",
      "Legacy system modernization capabilities"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Network"
  },
  {
    id: 4,
    badge: "Security",
    title: "Enterprise-Grade Security",
    description: "Security is built into every layer of Consysmind. Our platform employs industry-leading encryption, access controls, and compliance frameworks to protect your sensitive business data and ensure regulatory adherence.",
    features: [
      "End-to-end encryption for data at rest and in transit",
      "Role-based access control with audit trails",
      "GDPR, HIPAA, and SOC 2 compliance ready",
      "Regular security assessments and penetration testing"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Shield"
  },
  {
    id: 5,
    badge: "Scalability",
    title: "Cloud-Native Architecture",
    description: "Built on modern cloud infrastructure, Consysmind scales seamlessly with your business needs. From startup to enterprise, our platform grows with you while maintaining optimal performance and reliability.",
    features: [
      "Auto-scaling infrastructure for variable workloads",
      "Multi-region deployment for global operations",
      "99.9% uptime SLA with disaster recovery",
      "Containerized microservices architecture"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Globe"
  },
  {
    id: 6,
    badge: "Step 1",
    title: "Discovery & Assessment",
    description: "Our implementation journey begins with a comprehensive assessment of your current processes, systems, and goals. We identify automation opportunities and create a tailored roadmap for your digital transformation.",
    features: [
      "Current state process mapping and analysis",
      "Technology infrastructure assessment",
      "Automation opportunity identification",
      "Custom implementation roadmap creation"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Target"
  },
  {
    id: 7,
    badge: "Step 2",
    title: "Configuration & Integration",
    description: "Our expert team configures Consysmind to match your specific requirements. We integrate with your existing systems, set up workflows, and customize the platform to align with your business processes.",
    features: [
      "Platform configuration and customization",
      "System integration and data migration",
      "Workflow design and automation setup",
      "User role and permission configuration"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "Settings"
  },
  {
    id: 8,
    badge: "Step 3",
    title: "Training & Go-Live",
    description: "We ensure your team is fully equipped to leverage Consysmind's capabilities. Comprehensive training programs and ongoing support guarantee a smooth transition and rapid adoption across your organization.",
    features: [
      "Comprehensive user training programs",
      "Administrator and power user workshops",
      "Go-live support and monitoring",
      "Ongoing optimization and support"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
    imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "left",
    hasOverlappingImages: true,
    icon: "Clock"
  },
  {
    id: 9,
    badge: "Why Consysmind",
    title: "Why Choose Consysmind?",
    description: "Consysmind stands apart with its unique combination of powerful AI capabilities, user-friendly design, and enterprise-grade reliability. Join hundreds of organizations that have transformed their operations with our platform.",
    features: [
      "Proven track record with Fortune 500 companies",
      "Rapid ROI with average 6-month payback period",
      "Dedicated customer success team",
      "Continuous innovation with regular feature updates",
      "24/7 global support and maintenance"
    ],
    imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    imagePosition: "right",
    hasOverlappingImages: false,
    icon: "BadgeCheck"
  }
];

export default function ConsysmindPage() {
  return (
    <StaticPageLayout
      heroContent={heroContent}
      introContent={introContent}
      scrollSections={scrollSections}
      sectionTitle="Consysmind Platform Features"
      sectionSubtitle="Everything you need for intelligent business automation"
      gradientColor="from-blue-400 to-purple-500"
    />
  );
}