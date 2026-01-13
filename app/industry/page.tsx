"use client";

import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import HeroBackground from '@/components/HeroBackground';
import Button from '@/components/button';
import { TrendingUp, Megaphone, Cog, ShoppingBag, ArrowRight, LucideIcon, Building2, Landmark, Shield, Radio, GraduationCap, Leaf, Zap, Factory, HeartPulse, FlaskConical, Building, Store, Plane } from 'lucide-react';

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
                                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1080&q=80"
                                alt="Corporate buildings"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1080&q=80"
                                alt="Business analytics"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-[30%] left-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1080&q=80"
                                alt="Industry professionals"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl text-white">
                                Industry Solutions
                            </h1>
                            <p className="text-xl text-white">
                                Tailored expertise for every sector of the economy
                            </p>
                        </div>

                        <p className="text-lg text-white leading-relaxed">
                            Every industry has unique challenges and opportunities. We provide specialized solutions
                            across Financial Services, Media & Education, Resources & Sustainability, and Health & Public
                            sectors to help businesses thrive in their specific market environment.
                        </p>

                        <div className="space-y-4">
                            <Button variant="primary" className="mt-[32px]">Find Your Industry</Button>
                            <p className="text-sm text-white">
                                Discover industry-specific services designed for your sector&apos;s unique requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HeroBackground>
    );
}

// ==================== INDUSTRY OVERVIEW SECTION ====================
function IndustryOverview() {
    const features = [
        { icon: TrendingUp, text: "Financial Services & Capital Markets" },
        { icon: Megaphone, text: "Media, Communications & Education" },
        { icon: Cog, text: "Resources, Energy & Sustainability" },
        { icon: ShoppingBag, text: "Healthcare, Retail & Public Services" },
        { icon: Building2, text: "Cross-industry expertise & solutions" }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl text-gray-900">
                            Industry Expertise
                        </h2>
                        <p className="text-xl text-gray-600">
                            Specialized solutions for every sector
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We understand that each industry operates under different regulations, market dynamics, and customer expectations. Our sector-specific teams bring deep domain knowledge combined with cross-functional expertise to deliver solutions that truly fit your business context.
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
                            Explore Industries
                        </button>
                    </div>

                    <div className="relative h-[500px]">
                        <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-10">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1080&q=80"
                                alt="Financial district"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-0 right-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&q=80"
                                alt="Technology and innovation"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-[25%] left-[20%] w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80"
                                alt="Healthcare technology"
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
interface IndustryStepProps {
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

function IndustryStep({
    stepNumber,
    title,
    description,
    subItems,
    icon: Icon,
    reverse = false,
    images
}: IndustryStepProps) {
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
                    <span>View All Services</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

// ==================== INDUSTRY SECTORS SECTION ====================
function IndustrySectors() {
    const sectors = [
        {
            stepNumber: "01",
            title: "Financial Services",
            description: "Banking, capital markets, and insurance solutions",
            subItems: [
                { label: "Banking Capital Markets", path: "/industry/financial-services/banking-capital-markets", icon: Landmark },
                { label: "Insurance", path: "/industry/financial-services/insurance", icon: Shield }
            ],
            icon: TrendingUp,
            images: {
                main: "https://images.unsplash.com/photo-1565514020179-026b92b2d5b6?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1080&q=80",
                alt: "Financial services"
            }
        },
        {
            stepNumber: "02",
            title: "Media & Education",
            description: "Communications, media services, and educational excellence",
            subItems: [
                { label: "Communications, Media, and Information Services", path: "/industry/media-education/communications-media-information-services", icon: Radio },
                { label: "Education", path: "/industry/media-education/education", icon: GraduationCap }
            ],
            icon: Megaphone,
            images: {
                main: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&q=80",
                alt: "Media and education"
            }
        },
        {
            stepNumber: "03",
            title: "Resources & Sustainability",
            description: "Environment, energy, utilities, and manufacturing",
            subItems: [
                { label: "Environment", path: "/industry/resources-sustainability/environment", icon: Leaf },
                { label: "Energy, Resources, and Utilities", path: "/industry/resources-sustainability/energy-resources-utilities", icon: Zap },
                { label: "Manufacturing", path: "/industry/resources-sustainability/manufacturing", icon: Factory }
            ],
            icon: Cog,
            images: {
                main: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1080&q=80",
                alt: "Resources and sustainability"
            }
        },
        {
            stepNumber: "04",
            title: "Health & Public",
            description: "Healthcare, life sciences, public services, retail, and logistics",
            subItems: [
                { label: "Healthcare", path: "/industry/health-public/healthcare", icon: HeartPulse },
                { label: "Life Sciences", path: "/industry/health-public/life-sciences", icon: FlaskConical },
                { label: "Public Services", path: "/industry/health-public/public-services", icon: Building },
                { label: "Retail", path: "/industry/health-public/retail", icon: Store },
                { label: "Travel and Logistics", path: "/industry/health-public/travel-logistics", icon: Plane }
            ],
            icon: ShoppingBag,
            images: {
                main: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1080&q=80",
                secondary: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1080&q=80",
                alt: "Health and public services"
            }
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl text-gray-900">Our Industry Sectors</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We deliver specialized solutions across four major industry verticals, each with dedicated experts who understand your sector&apos;s unique challenges.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-0 divide-y divide-gray-200">
                    {sectors.map((sector, index) => (
                        <IndustryStep
                            key={index}
                            stepNumber={sector.stepNumber}
                            title={sector.title}
                            description={sector.description}
                            subItems={sector.subItems}
                            icon={sector.icon}
                            images={sector.images}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ==================== MAIN PAGE EXPORT ====================
export default function IndustryPage() {
    return (
        <>
            <HeroSection />
            <IndustryOverview />
            <IndustrySectors />
        </>
    );
}