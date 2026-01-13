"use client";

import Link from 'next/link';
import { Check } from "lucide-react";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import { useScrollAnimation } from "./AnimatedSection";
import { IconRenderer } from "./IconRenderer";
import { IntroContent } from "./types";

interface IntroSectionProps {
    content: IntroContent;
    ctaLink: string;
    ctaButtonText?: string;
    gradientColor?: string;
}

export function IntroSection({
    content,
    ctaLink,
    ctaButtonText = "Get Started",
    gradientColor = "from-orange-400 to-amber-500"
}: IntroSectionProps) {
    const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
    const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

    return (
        <div className="min-h-screen bg-white relative z-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div
                        ref={textRef}
                        className="space-y-6 sm:space-y-8 transition-all duration-700 ease-out"
                        style={{
                            opacity: textVisible ? 1 : 0,
                            transform: textVisible ? "translateY(0)" : "translateY(40px)",
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors duration-300">
                            <IconRenderer name={content.badgeIcon} className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
                            <span className="text-slate-700 font-medium text-sm sm:text-base">
                                {content.badge}
                            </span>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
                                {content.title}
                            </h1>
                            {content.subtitle && (
                                <h2 className="text-xl sm:text-2xl text-slate-600">
                                    {content.subtitle}
                                </h2>
                            )}
                        </div>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                            {content.description}
                        </p>

                        {/* Feature List with staggered animation */}
                        <div ref={featuresRef} className="space-y-3">
                            {content.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 transition-all duration-500 ease-out"
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        opacity: featuresVisible ? 1 : 0,
                                        transform: featuresVisible ? "translateX(0)" : "translateX(-20px)",
                                    }}
                                >
                                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-slate-700 text-sm sm:text-base">{feature}</p>
                                </div>
                            ))}
                        </div>

                        <Link href={ctaLink}>
                            <button className="mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95">
                                {ctaButtonText}
                            </button>
                        </Link>
                    </div>

                    {/* Image Content */}
                    <div
                        ref={imageRef}
                        className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full transition-all duration-700 ease-out"
                        style={{
                            transitionDelay: "200ms",
                            opacity: imageVisible ? 1 : 0,
                            transform: imageVisible ? "translateY(0)" : "translateY(40px)",
                        }}
                    >
                        <div className={`absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br ${gradientColor} rounded-3xl opacity-20 blur-3xl animate-pulse`} />
                        <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                            <ImageWithFallback
                                src={content.image1}
                                alt="Intro visual 1"
                                className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                            />
                        </div>
                        <div className="absolute bottom-8 sm:bottom-10 lg:bottom-20 left-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 sm:border-8 border-white z-20">
                            <ImageWithFallback
                                src={content.image2}
                                alt="Intro visual 2"
                                className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
