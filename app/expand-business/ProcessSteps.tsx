import React from "react";
import { Target, Users, ChartBar, Lightbulb, Settings, Rocket, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Scale Readiness Assessment",
    subtitle: "Check if you're truly ready to scale",
    description: "Not every business should scale immediately. We evaluate your current state and identify what needs fixing before you expand.",
    features: [
      "Current operations & capacity review",
      "Financial health & profitability check",
      "System gaps & bottlenecks",
      "Risk & dependency analysis",
      "Scale readiness scorecard",
    ],
    icon: Target,
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NjcyMzM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "02",
    title: "Team, Roles & Delegation",
    subtitle: "Build a team that can run the engine",
    description: "You can't scale alone. We help you design the right team structure and processes so work moves without constant founder involvement.",
    features: [
      "Org structure & key roles mapping",
      "Hiring strategy & role clarity",
      "Delegation framework for founders",
      "SOPs for repeatable tasks",
      "Performance tracking for teams",
    ],
    icon: Users,
    image: "https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjY3MjAxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "03",
    title: "Market & Geography Expansion",
    subtitle: "Enter new markets with a plan",
    description: "If you're adding new cities, regions, or customer segments, we help you do it strategically — not on gut feeling.",
    features: [
      "New market research & feasibility",
      "Local adaptation of offers & pricing",
      "Channel & partner strategy",
      "Expansion launch playbook",
      "Risk & compliance considerations",
    ],
    icon: ChartBar,
    image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY2Njk5MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "04",
    title: "New Products & Revenue Streams",
    subtitle: "Unlock additional growth opportunities",
    description: "We help you identify and design new products, services, or add-ons that increase revenue without diluting your core.",
    features: [
      "Opportunity identification workshops",
      "Add-on and upsell design",
      "Productization of services",
      "Subscription & recurring models",
      "Testing and pilot launch plans",
    ],
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NjczNTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "05",
    title: "Systems, Automation & Optimization",
    subtitle: "Scale with systems, not stress",
    description: "As you expand, systems must take over what people used to do manually. We help you automate and optimize key parts of your business.",
    features: [
      "Process mapping & documentation",
      "Tool and platform selection",
      "Workflow automation (CRM, marketing, ops)",
      "Efficiency and cost optimization",
      "Scale-friendly reporting dashboards",
    ],
    icon: Settings,
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NzI5NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "06",
    title: "Strategic Partnerships & Funding Readiness",
    subtitle: "Expand your reach and resources",
    description: "For the next level of expansion, you may need stronger partnerships or funding. We prepare you for both.",
    features: [
      "Partnership & collaboration strategy",
      "Channel partner / reseller models",
      "Investor pitch narrative & deck guidance",
      "Business & financial story alignment",
      "Expansion roadmap for investors/stakeholders",
    ],
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2Njc3NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const Icon = step.icon;

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-80 lg:h-auto">
          <ImageWithFallback
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full border-2 border-indigo-600">
            <span className="text-indigo-600 font-semibold">Step {step.number}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <h3 className="text-slate-900 mb-2">{step.title}</h3>
          <p className="text-indigo-600 mb-4">{step.subtitle}</p>
          <p className="text-slate-600 mb-6">{step.description}</p>
          
          <div className="space-y-3">
            {step.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-slate-900">Our Process</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            From scaling operations to expanding markets, we help you grow confidently and sustainably through our proven 6-step framework.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}