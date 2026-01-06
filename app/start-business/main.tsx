
import { Scale, Palette, Package, Target, Settings, Rocket } from 'lucide-react';
import { ProcessStep } from './ProcessStep';

export function OurProcess() {
  const steps = [
    {
      stepNumber: "01",
      title: "Legal & Compliance Setup",
      description: "Stay compliant from the beginning",
      features: [
        "Business registration guidance",
        "GST & tax registration support",
        "Licenses & certifications (as needed)",
        "Drafting basic legal agreements",
        "Compliance checklist"
      ],
      icon: Scale,
      images: {
        main: "https://images.unsplash.com/photo-1764106813759-9ef7bf42a0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0fGVufDF8fHx8MTc2Njc1MTI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        secondary: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudHMlMjBsZWdhbHxlbnwxfHx8fDE3NjY4MDY5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Legal compliance documents"
      }
    },
    {
      stepNumber: "02",
      title: "Brand & Identity Creation",
      description: "Stand out with a clear brand",
      features: [
        "Brand name brainstorming",
        "Tagline & positioning",
        "Logo & visual identity guidelines",
        "Brand messaging & tone of voice",
        "Basic brand kit for launch"
      ],
      icon: Palette,
      images: {
        main: "https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2Njc2Mjc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        secondary: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY2Njk5MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Brand design and creative work"
      }
    },
    {
      stepNumber: "03",
      title: "Offer & Pricing Design",
      description: "Package your value the right way",
      features: [
        "Defining core offers & packages",
        "Pricing strategy & justification",
        "Intro/launch offers & plans",
        "Value ladder creation",
        "Upsell & cross-sell opportunities"
      ],
      icon: Package,
      images: {
        main: "https://images.unsplash.com/photo-1764344815160-0e2afc6939a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmljaW5nJTIwc3RyYXRlZ3klMjBmaW5hbmNpYWx8ZW58MXx8fHwxNzY2ODA3NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        secondary: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY2ODA2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Pricing strategy and financial planning"
      }
    },
    {
      stepNumber: "04",
      title: "Go-to-Market (GTM) Planning",
      description: "Plan how you'll enter the market",
      features: [
        "Ideal customer profile (ICP)",
        "Channel & platform selection",
        "Launch campaign outline",
        "Content & communication plan",
        "Success metrics & launch KPIs"
      ],
      icon: Target,
      images: {
        main: "https://images.unsplash.com/photo-1563705655508-d8915da702f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHRhcmdldHxlbnwxfHx8fDE3NjY4MDc1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        secondary: "https://images.unsplash.com/photo-1726594701749-04cfbc6e2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBzdGFydHVwJTIwdGVhbXxlbnwxfHx8fDE3NjY4MDY5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Marketing strategy and target planning"
      }
    },
    {
      stepNumber: "05",
      title: "Operations & Systems Setup",
      description: "Set up systems to run smoothly",
      features: [
        "Basic CRM and lead tracking setup",
        "Payment & invoicing workflows",
        "Customer onboarding process",
        "Task & project management system",
        "Standard operating procedures (SOPs)"
      ],
      icon: Settings,
      images: {
        main: "https://images.unsplash.com/photo-1759673824858-d4050871d322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9wZXJhdGlvbnMlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjY4MDc1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        secondary: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY2NzUwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Business operations and workflow systems"
      }
    },
    {
      stepNumber: "06",
      title: "Launch Support & Review",
      description: "Launch with guidance, not guesswork",
      features: [
        "Pre-launch checklist",
        "Soft launch / beta launch strategy",
        "Feedback collection framework",
        "Launch performance review",
        "Next-step recommendations"
      ],
      icon: Rocket,
      images: {
        main: "https://images.unsplash.com/photo-1586764921336-8b37580c7aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbGF1bmNoJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjY4MDc1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        secondary: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2Njc3NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Startup launch and success"
      }
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl text-gray-900">Our process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From legal setup to operations, we help you build a business that's launch-ready from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0 divide-y divide-gray-200">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              features={step.features}
              icon={step.icon}
              images={step.images}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}