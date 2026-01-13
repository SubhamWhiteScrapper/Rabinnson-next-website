"use client";

import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import HeroBackground from '@/components/HeroBackground';
import Button from '@/components/button';
import { Building, Users, TrendingUp, FileCheck, BarChart3, ArrowRight, LucideIcon, Palette, Target, Settings, Calculator, Briefcase } from 'lucide-react';

// ==================== HERO SECTION ====================
function HeroSection() {
    return (
        <HeroBackground>
            <section className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Overlapping Images */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        <div className="absolute top-0 left-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080"
                                alt="Modern office workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-[30%] left-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080"
                                alt="Business strategy meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl text-white">
                                Manage Your Business
                            </h1>
                            <p className="text-xl text-white">
                                Streamline operations, empower your team, and drive growth
                            </p>
                        </div>

                        <p className="text-lg text-white leading-relaxed">
                            Once your business is up and running, the real challenge begins — managing operations,
                            people, and growth efficiently. Under Manage Your Business, we help you optimize every
                            aspect of your operations to run like a well-oiled machine.
                        </p>

                        <div className="space-y-4">
                            <Button variant="primary" className="mt-[32px]">Talk to an Expert</Button>
                            <p className="text-sm text-white">
                                Optimize your business operations with expert guidance and proven systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HeroBackground>
    );
}

// ==================== BUSINESS SETUP SECTION ====================
function ManageBusinessSetup() {
    const features = [
        { icon: Building, text: "Office setup & workspace planning" },
        { icon: Users, text: "People & project management" },
        { icon: FileCheck, text: "Product design & MVP planning" },
        { icon: TrendingUp, text: "Strategic decision-making" },
        { icon: BarChart3, text: "Performance & tax optimization" }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl text-gray-900">
                            Operational Excellence
                        </h2>
                        <p className="text-xl text-gray-600">
                            Run your business like a well-oiled machine
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Managing a business requires juggling multiple priorities — from setting up your office and managing your team to strategic planning and tax compliance. We provide comprehensive solutions to help you operate efficiently and grow sustainably.
                        </p>

                        <ul className="space-y-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="bg-gray-200 text-gray-800 p-2 rounded-lg mt-1">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-gray-700 pt-2">{feature.text}</span>
                                    </li>
                                );
                            })}
                        </ul>

                        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors mt-6">
                            Get Started
                        </button>
                    </div>

                    <div className="relative h-[500px]">
                        <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-10">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080"
                                alt="Modern office workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-0 right-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-[25%] left-[20%] w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080"
                                alt="Business strategy meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ==================== PROCESS STEP COMPONENT ====================
interface ProcessStepProps {
    stepNumber: string;
    title: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    reverse?: boolean;
    images: {
        main: string;
        secondary: string;
        alt: string;
    };
}

function ProcessStep({
    stepNumber,
    title,
    description,
    features,
    icon: Icon,
    reverse = false,
    images
}: ProcessStepProps) {
    return (
        <div className={`grid lg:grid-cols-2 gap-12 items-center py-20 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Image/Icon Side */}
            <div className={`relative ${reverse ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl opacity-50"></div>

                    <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-2xl overflow-hidden shadow-xl z-10">
                        <ImageWithFallback
                            src={images.main}
                            alt={images.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                        <ImageWithFallback
                            src={images.secondary}
                            alt={images.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-lg z-30">
                        <Icon size={48} className="text-gray-800" />
                    </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-40">
                    <span className="font-semibold">{stepNumber}</span>
                </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-6 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-3">
                    <h3 className="text-3xl text-gray-900">
                        {title}
                    </h3>
                    <p className="text-xl text-gray-600">
                        {description}
                    </p>
                </div>

                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="bg-gray-200 text-gray-800 p-1 rounded-full mt-1">
                                <ArrowRight size={16} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition-colors group">
                    <span>Learn More</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

// ==================== OUR PROCESS SECTION ====================
function ManageProcess() {
    const steps = [
        {
            stepNumber: "01",
            title: "Office Setup Planning",
            description: "Create the perfect workspace environment",
            features: [
                "Virtual office setup & management",
                "Flex/Fixed desk & co-working space solutions",
                "Meeting room booking & management",
                "Facility management & maintenance",
                "Workspace optimization strategies"
            ],
            icon: Building,
            images: {
                main: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080",
                secondary: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1080",
                alt: "Modern office workspace"
            }
        },
        {
            stepNumber: "02",
            title: "People & Project Planning",
            description: "Build and manage high-performing teams",
            features: [
                "Hiring, recruitment & employee onboarding",
                "Payroll management & compliance",
                "People management & HR systems",
                "Project management frameworks",
                "Employee engagement & finance management"
            ],
            icon: Users,
            images: {
                main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
                secondary: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
                alt: "Team collaboration"
            }
        },
        {
            stepNumber: "03",
            title: "Product Design & Planning",
            description: "Design products that customers love",
            features: [
                "MVP designing & prototyping",
                "Product-Market Fit (PMF) planning",
                "Concept creation & validation",
                "Training & assessment programs",
                "User experience optimization"
            ],
            icon: Palette,
            images: {
                main: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1080",
                secondary: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1080",
                alt: "Product design and planning"
            }
        },
        {
            stepNumber: "04",
            title: "Strategic Planning",
            description: "Make informed decisions for growth",
            features: [
                "Strategic decision-making frameworks",
                "Funding & capital structure advisory",
                "Financial strategy & planning",
                "Market analysis & positioning",
                "Growth roadmap development"
            ],
            icon: Target,
            images: {
                main: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
                secondary: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
                alt: "Strategic planning session"
            }
        },
        {
            stepNumber: "05",
            title: "Performance Management",
            description: "Optimize costs and maximize returns",
            features: [
                "Cost management & optimization",
                "Cash flow management strategies",
                "Budgeting & forecasting",
                "KPI tracking & analytics",
                "Performance review systems"
            ],
            icon: BarChart3,
            images: {
                main: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
                secondary: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
                alt: "Performance analytics"
            }
        },
        {
            stepNumber: "06",
            title: "Tax Planning & Compliance",
            description: "Stay compliant and optimize taxes",
            features: [
                "Tax planning & investment advisory",
                "CA services & consultation",
                "Statutory compliance management",
                "Tax filing & documentation",
                "Audit preparation & support"
            ],
            icon: Calculator,
            images: {
                main: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
                secondary: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
                alt: "Tax planning and compliance"
            }
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl text-gray-900">Our Management Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From office setup to tax compliance, we help you manage every aspect of your business operations efficiently.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-0 divide-y divide-gray-200">
                    {steps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            stepNumber={step.stepNumber}
                            title={step.title}
                            description={step.description}
                            features={step.features}
                            icon={step.icon}
                            images={step.images}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ==================== MAIN PAGE EXPORT ====================
export default function ManageBusinessPage() {
    return (
        <>
            <HeroSection />
            <ManageBusinessSetup />
            <ManageProcess />
        </>
    );
}
