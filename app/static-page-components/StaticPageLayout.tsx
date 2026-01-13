import { HeroSection } from "./HeroSection";
import { IntroSection } from "./IntroSection";
import { ContentSection } from "./ContentSection";
import { AnimatedSection } from "./AnimatedSection";
import { StaticPageProps } from "./types";

export function StaticPageLayout({
    heroContent,
    introContent,
    scrollSections,
    sectionTitle,
    sectionSubtitle,
    gradientColor = "from-orange-400 to-amber-500"
}: StaticPageProps) {
    return (
        <div className="overflow-x-hidden">
            <HeroSection content={heroContent} />
            <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
            <IntroSection
                content={introContent}
                ctaLink={heroContent.ctaLink}
                gradientColor={gradientColor}
            />
            <div className="bg-white min-h-screen">
                <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">
                        {sectionTitle}
                    </h1>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
                        {sectionSubtitle}
                    </p>
                </AnimatedSection>
                <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-12 sm:pb-20">
                    {scrollSections.map((section, index) => (
                        <ContentSection key={section.id} section={section} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
