"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

// Custom hook for scroll-based visibility detection
export function useScrollAnimation() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return { ref, isVisible };
}

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animation?: "fadeUp" | "fadeLeft" | "fadeRight";
}

export function AnimatedSection({
    children,
    delay = 0,
    className = "",
    animation = "fadeUp"
}: AnimatedSectionProps) {
    const { ref, isVisible } = useScrollAnimation();

    const getTransform = () => {
        if (isVisible) return "translate(0, 0)";
        switch (animation) {
            case "fadeLeft": return "translateX(-40px)";
            case "fadeRight": return "translateX(40px)";
            default: return "translateY(40px)";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
            }}
        >
            {children}
        </div>
    );
}

interface AnimatedFeatureItemProps {
    feature: string;
    index: number;
    baseDelay?: number;
    isVisible?: boolean;
}

export function AnimatedFeatureItem({ feature, index, baseDelay = 0, isVisible = false }: AnimatedFeatureItemProps) {
    return (
        <div
            className="flex items-start gap-3 transition-all duration-500"
            style={{
                transitionDelay: `${index * 100 + baseDelay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            }}
        >
            {feature}
        </div>
    );
}

interface FeatureListProps {
    features: string[];
    renderFeature?: (feature: string, isVisible: boolean, index: number) => ReactNode;
}

export function FeatureList({ features, renderFeature }: FeatureListProps) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div ref={ref} className="space-y-3">
            {features.map((feature, index) =>
                renderFeature ? (
                    <div
                        key={index}
                        className="transition-all duration-500 ease-out"
                        style={{
                            transitionDelay: `${index * 100}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                        }}
                    >
                        {renderFeature(feature, isVisible, index)}
                    </div>
                ) : (
                    <div
                        key={index}
                        className="flex items-center gap-3 transition-all duration-500 ease-out"
                        style={{
                            transitionDelay: `${index * 100}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                        }}
                    >
                        {feature}
                    </div>
                )
            )}
        </div>
    );
}
