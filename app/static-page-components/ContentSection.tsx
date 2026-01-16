"use client";

import Link from 'next/link';
import { Check, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import { useScrollAnimation } from "./AnimatedSection";
import { IconRenderer } from "./IconRenderer";
import { ScrollSection } from "./types";

interface ContentSectionProps {
    section: ScrollSection;
    index: number;
}

export function ContentSection({ section, index }: ContentSectionProps) {
    const { ref, isVisible } = useScrollAnimation();
    const isEven = section.imagePosition === "left";

    return (
        <section
            ref={ref}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full"
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
                {/* Text Content */}
                <div
                    className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${isEven ? "md:order-2" : ""}`}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateX(0)"
                            : `translateX(${isEven ? "40px" : "-40px"})`,
                    }}
                >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full w-fit hover:bg-slate-200 transition-colors duration-300">
                        <IconRenderer name={section.icon} className="w-4 h-4 text-slate-700" />
                        <span className="text-slate-700 font-medium text-sm sm:text-base">
                            {section.badge}
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold">
                        {section.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                        {section.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3 pt-2">
                        {section.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 transition-all duration-500"
                                style={{
                                    transitionDelay: `${idx * 100 + 300}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateX(0)"
                                        : "translateX(-20px)",
                                }}
                            >
                                <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 mt-0.5">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <p className="text-slate-700 text-sm lg:text-base">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Link href="/contact" className="w-fit">
                        <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

                {/* Image Content */}
                <div
                    className={`${isEven ? "md:order-1" : ""} transition-all duration-700 ease-out`}
                    style={{
                        transitionDelay: "200ms",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateX(0)"
                            : `translateX(${isEven ? "-40px" : "40px"})`,
                    }}
                >
                    {section.hasOverlappingImages ? (
                        <OverlappingImages section={section} index={index} />
                    ) : (
                        <SingleImage section={section} index={index} />
                    )}
                </div>
            </div>
        </section>
    );
}

function OverlappingImages({ section, index }: { section: ScrollSection; index: number }) {
    return (
        <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
            <div className="absolute top-0 right-4 sm:right-12 w-[60%] sm:w-[65%] h-[55%] sm:h-[60%] rounded-2xl overflow-hidden shadow-xl z-10 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <ImageWithFallback
                    src={section.imageUrl1}
                    alt={`${section.badge} 1`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] h-[60%] sm:h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <ImageWithFallback
                    src={section.imageUrl2!}
                    alt={`${section.badge} 2`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 z-30 hover:shadow-xl transition-shadow duration-300">
                <div className="text-slate-900 font-bold text-lg sm:text-xl">
                    {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm">Step</div>
            </div>
        </div>
    );
}

function SingleImage({ section, index }: { section: ScrollSection; index: number }) {
    return (
        <div className="relative h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full hover:scale-[1.02] transition-all duration-500">
                <ImageWithFallback
                    src={section.imageUrl1}
                    alt={section.badge}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-xs lg:text-sm text-slate-500">Step</div>
            </div>
        </div>
    );
}
