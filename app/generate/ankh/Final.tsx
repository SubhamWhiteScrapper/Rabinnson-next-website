"use client";

import React, { useEffect, useRef, useState } from "react";
import { Target, Lightbulb, Users, MapPin, Check, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const sections = [
    {
      id: 1,
      badge: "Startup Idea Evaluation",
      title: "Know if your idea is worth pursuing",
      description:
        "Not every idea should be executed. Our evaluation framework helps you assess feasibility, risk, scalability, and profitability before moving forward.",
      features: [
        "Feasibility analysis",
        "Risk assessment",
        "Scalability check",
        "Legal & compliance considerations",
        "Go / No-Go decision support",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3MlMjBldmFsdWF0aW9ufGVufDF8fHx8MTc2NjU2NjIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageUrl2:
        "https://images.unsplash.com/photo-1758873271740-f1fd6c6f1524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBhbmFseXNpc3xlbnwxfHx8fDE3NjY1NjYyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "right" as const,
      hasOverlappingImages: true,
      icon: Target,
    },
    {
      id: 2,
      badge: "MVP & Concept Development",
      title: "Build small, learn fast",
      description:
        "We help convert your idea into a Minimum Viable Product (MVP) or concept — just enough to test the market and collect feedback.",
      features: [
        "MVP planning",
        "Prototype roadmap",
        "Feature prioritization",
        "Customer feedback loops",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1695634621145-9133286e0247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdnAlMjBwcm9kdWN0JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY2NTY2MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "left" as const,
      hasOverlappingImages: false,
      icon: Lightbulb,
    },
    {
      id: 3,
      badge: "Mentorship & Expert Guidance",
      title: "Learn from those who've done it",
      description:
        "Get expert guidance from industry professionals, startup mentors, and business consultants to refine your idea and avoid costly mistakes.",
      features: [
        "1-on-1 mentoring",
        "Industry expert sessions",
        "Idea review workshops",
        "Strategic guidance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1561346745-5db62ae43861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBndWlkYW5jZSUyMGNvYWNoaW5nfGVufDF8fHx8MTc2NjU2NjIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users,
    },
    {
      id: 4,
      badge: "Idea to Startup Roadmap",
      title: "From concept to company",
      description:
        "We provide a step-by-step roadmap to take your idea from concept to company — covering legal setup, branding, funding, and launch.",
      features: [
        "Execution timeline",
        "Legal & registration guidance",
        "Branding & positioning",
        "Launch planning",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1666148670142-2f01b117e6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcm9hZG1hcCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NjU2NjIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "left" as const,
      hasOverlappingImages: false,
      icon: MapPin,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
     

      {/* Sticky full-height sections container */}
      <div className="relative">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isEven = section.imagePosition === "left";

          return (
            <section
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="
                sticky 
                top-0 
                h-screen 
                flex 
                items-center 
                bg-white 
                overflow-hidden
              "
            >
              <div className="max-w-9xl mx-auto px-6 lg:px-12 w-full h-full">
                <div
                  className={`
                    grid md:grid-cols-2 gap-10 lg:gap-16 h-full items-center
                  `}
                >
                  {/* Content */}
                  <div
                    className={`
                      flex flex-col justify-center space-y-6 
                      ${isEven ? "md:order-2" : ""}
                    `}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full w-fit">
                      <Icon className="w-4 h-4 text-slate-700" />
                      <span className="text-slate-700 font-medium">
                        {section.badge}
                      </span>
                    </div>

                    <h2 className="text-slate-900">
                      {section.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-slate-700">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 group px-7 py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 w-fit">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? "md:order-1" : ""}`}>
                    {section.hasOverlappingImages ? (
                      // Overlapping images layout
                      <div className="relative h-[420px] md:h-[480px] lg:h-[540px]">
                        {/* First image (back) */}
                        <div className="absolute top-0 right-12 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-10">
                          <ImageWithFallback
                            src={section.imageUrl1}
                            alt={`${section.badge} 1`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Second image (front) */}
                        <div className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20">
                          <ImageWithFallback
                            src={section.imageUrl2!}
                            alt={`${section.badge} 2`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Step badge */}
                        <div className="absolute -bottom-4 right-8 bg-white rounded-xl shadow-lg px-6 py-4 z-30">
                          <div className="text-slate-900">
                            0{section.id}
                          </div>
                          <div className="text-slate-500">
                            Step
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Single image layout
                      <div className="relative h-[380px] md:h-[440px] lg:h-[500px]">
                        <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full">
                          <ImageWithFallback
                            src={section.imageUrl1}
                            alt={section.badge}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-6 py-4">
                          <div className="text-slate-900">
                            0{section.id}
                          </div>
                          <div className="text-slate-500">
                            Step
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
