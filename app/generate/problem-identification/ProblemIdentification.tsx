"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, TrendingUp, DollarSign, Check, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

export default function ProblemIdentifica() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const sections = [
    {
      id: 1,
      badge: "Problem Identification",
      title: "Great businesses solve real problems",
      description:
        "A strong business idea starts with a real-world problem. We help you identify, define, and prioritize problems worth solving — problems people are ready to pay for.",
      features: [
        "Identifying pain points",
        "Customer problem interviews",
        "Industry problem analysis",
        "Problem validation checklist",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1758876020204-5b974036acb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2JsZW0lMjBzb2x1dGlvbnxlbnwxfHx8fDE3NjY1NjAzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "right" as const,
      icon: Search,
    },
    {
      id: 2,
      badge: "Market Research & Validation",
      title: "Validate before you invest",
      description:
        "Before spending time or money, validate your idea with real data. Our market research process ensures your idea has demand, competition clarity, and growth potential.",
      features: [
        "Target audience analysis",
        "Market size estimation",
        "Competitor analysis",
        "Demand validation techniques",
        "SWOT analysis",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1727072206145-bf6f47befe9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXQlMjByZXNlYXJjaCUyMGRhdGF8ZW58MXx8fHwxNzY2NTYwMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "left" as const,
      icon: TrendingUp,
    },
    {
      id: 3,
      badge: "Business Model Ideation",
      title: "Turn ideas into income",
      description:
        "An idea becomes a business only when it generates revenue. We help you design practical and sustainable business models suited to your idea.",
      features: [
        "Revenue model selection",
        "Pricing strategy",
        "Cost structure planning",
        "Value proposition design",
        "Business Model Canvas",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1650978810505-12705ba70e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1vZGVsJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY2NTYwMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imagePosition: "right" as const,
      icon: DollarSign,
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
      {/* Optional header similar to your other page */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
          Our process
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
          From identifying the right problem to validating the market and shaping a sustainable business model.
        </p>
      </div>

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
                    ${isEven ? "" : ""}
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
                      <span className="text-slate-700 text-sm font-medium">
                        {section.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl text-slate-900">
                      {section.title}
                    </h2>

                    <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-slate-700 text-sm lg:text-base">
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
                    <div className="relative h-[320px] md:h-[420px] lg:h-[520px]">
                      <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full">
                        <ImageWithFallback
                          src={section.imageUrl}
                          alt={section.badge}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-6 py-4">
                        <div className="text-3xl lg:text-4xl font-bold text-slate-900">
                          0{section.id}
                        </div>
                        <div className="text-xs lg:text-sm text-slate-500">
                          Step
                        </div>
                      </div>
                    </div>
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
