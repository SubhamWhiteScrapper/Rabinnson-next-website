"use client";

import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import HeroBackground from '@/components/HeroBackground';
import Button from '@/components/button';
import { Package, Calendar, MessageSquare, Database, Code2, Handshake, ArrowRight, LucideIcon, Cpu, Radio, Phone, Network, PartyPopper, Users, Trophy, Sword, Globe, Medal, Mail, Megaphone, Brain, UserCircle, Receipt, AppWindow, Blocks } from 'lucide-react';

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
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1080&q=80"
                                alt="Technology platform"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80"
                                alt="Digital solutions"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-[30%] left-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1080&q=80"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl text-white">
                                Our Platforms
                            </h1>
                            <p className="text-xl text-white">
                                Powerful solutions to accelerate your digital transformation
                            </p>
                        </div>

                        <p className="text-lg text-white leading-relaxed">
                            Discover our comprehensive suite of platforms designed to streamline your business operations.
                            From innovative products and real-time event management to advanced communication suites and
                            data management solutions — we have everything you need to succeed.
                        </p>

                        <div className="space-y-4">
                            <Button variant="primary" className="mt-[32px]">Explore Platforms</Button>
                            <p className="text-sm text-white">
                                Choose from our range of cutting-edge platforms tailored for modern enterprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HeroBackground>
    );
}

// ==================== PLATFORM OVERVIEW SECTION ====================
function PlatformOverview() {
    const features = [
        { icon: Package, text: "Innovative Products & Solutions" },
        { icon: Calendar, text: "Realtime Events & Conferences" },
        { icon: MessageSquare, text: "Communication Suites" },
        { icon: Database, text: "Data Management Solutions" },
        { icon: Code2, text: "Low-code App Development" },
        { icon: Handshake, text: "Alliance Products & Partnerships" }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl text-gray-900">
                            Platform Excellence
                        </h2>
                        <p className="text-xl text-gray-600">
                            Technology solutions for every business need
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our platforms are built with cutting-edge technology to help businesses automate processes,
                            manage data intelligently, and communicate effectively. Each platform is designed to integrate
                            seamlessly with your existing systems while providing powerful new capabilities.
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
                            View All Platforms
                        </button>
                    </div>

                    <div className="relative h-[500px]">
                        <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-10">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1080&q=80"
                                alt="Dashboard analytics"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-0 right-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80"
                                alt="Data visualization"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-[25%] left-[20%] w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&q=80"
                                alt="Server infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ==================== PLATFORM STEP COMPONENT ====================
interface PlatformStepProps {
    stepNumber: string;
    title: string;
    description: string;
    subItems: { label: string; path: string; icon: LucideIcon }[];
    icon: LucideIcon;
    reverse?: boolean;
    images: {
        main: string;
        secondary: string;
        alt: string;
    };
}

function PlatformStep({
    stepNumber,
    title,
    description,
    subItems,
    icon: Icon,
    reverse = false,
    images
}: PlatformStepProps) {
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
                    {subItems.map((item, index) => {
                        const SubIcon = item.icon;
                        return (
                            <li key={index}>
                                <a href={item.path} className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                    <div className="bg-gray-200 text-gray-800 p-1.5 rounded-full mt-0.5">
                                        <SubIcon size={16} />
                                    </div>
                                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <button className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition-colors group">
                    <span>Learn More</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

// ==================== PLATFORM SECTIONS ====================
function PlatformSections() {
    const platforms = [
        {
            stepNumber: "01",
            title: "Products",
            description: "Innovative software products for modern businesses",
            subItems: [
                { label: "Consysmind", path: "/platforms/products/consys", icon: Cpu },
                { label: "Y2f Hub", path: "/platforms/products/ytof", icon: Radio },
                { label: "IVR Bookings", path: "/platforms/products/ivr", icon: Phone },
                { label: "IB Network", path: "/platforms/products/ib", icon: Network }
            ],
            icon: Package,
            images: {
                main: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1080&q=80",
                alt: "Product innovation"
            }
        },
        {
            stepNumber: "02",
            title: "Realtime Events",
            description: "World-class conferences and networking events",
            subItems: [
                { label: "TESK Event", path: "/platforms/plans/rewards-hub", icon: PartyPopper },
                { label: "CXO Meet Event", path: "/platforms/plans/rewards-123", icon: Users },
                { label: "FIIACON - Future Innovation Industry Award Conference", path: "/platforms/plans/suraksha", icon: Trophy },
                { label: "Smart Code Warrior", path: "/platforms/plans/traveller", icon: Sword },
                { label: "WCR - World Cyber Ready Hackathon", path: "/platforms/plans/traveller", icon: Globe },
                { label: "Pro Talent Championship", path: "/platforms/plans/traveller", icon: Medal }
            ],
            icon: Calendar,
            images: {
                main: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1080&q=80",
                alt: "Conference events"
            }
        },
        {
            stepNumber: "03",
            title: "Communication Suites",
            description: "Streamline customer and marketing communications",
            subItems: [
                { label: "Customer Communication Manager", path: "/platforms/security/safe-pay", icon: Mail },
                { label: "Marketing Automation Tool Organiser", path: "/platforms/security/fraud-alarm", icon: Megaphone }
            ],
            icon: MessageSquare,
            images: {
                main: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1080&q=80",
                alt: "Communication tools"
            }
        },
        {
            stepNumber: "04",
            title: "Data Management",
            description: "Intelligent data and identity management solutions",
            subItems: [
                { label: "Intelligent Data Management", path: "/platforms/payments/auto", icon: Brain },
                { label: "Customer Identity Management", path: "/platforms/payments/recharges", icon: UserCircle },
                { label: "Utility Bill Payments", path: "/platforms/payments/bills", icon: Receipt }
            ],
            icon: Database,
            images: {
                main: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&q=80",
                alt: "Data management"
            }
        },
        {
            stepNumber: "05",
            title: "Low Code App Development",
            description: "Build applications faster with minimal coding",
            subItems: [
                { label: "Low Code App Development", path: "/platforms/payments/auto", icon: AppWindow }
            ],
            icon: Code2,
            images: {
                main: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1080&q=80",
                alt: "App development"
            }
        },
        {
            stepNumber: "06",
            title: "Alliance Products",
            description: "Partner solutions and integrated offerings",
            subItems: [
                { label: "Alliance Products", path: "/platforms/payments/auto", icon: Blocks }
            ],
            icon: Handshake,
            images: {
                main: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1080&q=80",
                alt: "Alliance partnerships"
            }
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl text-gray-900">Our Platform Suite</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our comprehensive range of platforms designed to transform your business operations and drive digital innovation.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-0 divide-y divide-gray-200">
                    {platforms.map((platform, index) => (
                        <PlatformStep
                            key={index}
                            stepNumber={platform.stepNumber}
                            title={platform.title}
                            description={platform.description}
                            subItems={platform.subItems}
                            icon={platform.icon}
                            images={platform.images}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ==================== MAIN PAGE EXPORT ====================
export default function PlatformsPage() {
    return (
        <>
            <HeroSection />
            <PlatformOverview />
            <PlatformSections />
        </>
    );
}
