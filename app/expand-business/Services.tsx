import React from "react";
import { TrendingUp, Users, Target, Lightbulb, Settings, Rocket } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Scaling strategy & roadmap",
    description: "Create a clear path to sustainable growth with proven frameworks and actionable milestones.",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Team building and delegation",
    description: "Build high-performing teams and establish delegation systems that free up your time.",
    color: "bg-indigo-500",
  },
  {
    icon: Target,
    title: "New markets & segments exploration",
    description: "Identify and enter profitable markets with data-driven market research and planning.",
    color: "bg-violet-500",
  },
  {
    icon: Lightbulb,
    title: "New product / service lines",
    description: "Develop complementary offerings that increase customer lifetime value and revenue.",
    color: "bg-purple-500",
  },
  {
    icon: Settings,
    title: "Process automation & systemization",
    description: "Streamline operations with automated workflows and documented processes.",
    color: "bg-fuchsia-500",
  },
  {
    icon: Rocket,
    title: "Strategic partnerships",
    description: "Form alliances and partnerships that accelerate growth and market reach.",
    color: "bg-pink-500",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-slate-900">Our Services</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Six core areas to help you expand your business strategically and sustainably
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-slate-200 hover:border-indigo-300 rounded-xl p-8 cursor-pointer"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}