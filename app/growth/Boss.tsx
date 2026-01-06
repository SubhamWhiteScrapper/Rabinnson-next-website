import { ProcessStep } from "./ProcessStep";
import { ServiceCard } from "./ServiceCard";

export default function BossPage() {
 

  const processStepImages = [
    'https://images.unsplash.com/photo-1620034820336-106a6bd3299a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjY4MTA2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY2Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NjczNTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NzYwMzYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NjcyMzM5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-white">
      
    
      {/* Divider */}
      <div className="bg-slate-50 py-1"></div>

      {/* Main Service Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-slate-500 uppercase">Our Approach</span>
            </div>
            <h2 className="text-5xl mb-6 text-slate-900">
              Revenue & Growth Strategy
            </h2>
            <p className="text-2xl text-slate-700 mb-6">
              Move from survival to predictable growth
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Instead of chasing random tactics, we help you build a focused growth strategy that aligns with your goals, market, and resources.
            </p>
          </div>

          <div className="max-w-2xl">
            <ServiceCard
              title="Strategic Growth Planning"
              description="Build a comprehensive roadmap for sustainable business growth"
              features={[
                'Growth planning & targets',
                'Revenue stream optimization',
                'Lead generation framework',
                'Funnel & conversion strategy',
                'Retention & repeat business planning'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-slate-50 py-1"></div>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-slate-500 uppercase">How We Work</span>
            </div>
            <h2 className="text-5xl mb-6 text-slate-900">Our process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From awareness to retention, we help you design and optimize every stage of your growth engine.
            </p>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <ProcessStep
              stepNumber="01"
              title="Marketing Foundation & Positioning"
              description="Be clear about who you are and who you serve. Before scaling, your message must be sharp. We refine how you present your business so customers instantly understand your value."
              features={[
                'Niche & positioning refinement',
                'Ideal customer clarity',
                'Core messaging & hooks',
                'Competitor differentiation',
                'Website & profile review'
              ]}
              image={processStepImages[0]}
            />

            {/* Step 2 */}
            <ProcessStep
              stepNumber="02"
              title="Lead Generation Engine"
              description="Consistent, quality leads every month. We help you build channels that bring you qualified leads, not just random traffic or vanity metrics."
              features={[
                'Organic marketing strategies (SEO, content, social)',
                'Paid campaign structure (if relevant)',
                'Landing page & offer optimization',
                'Lead magnets & nurturing journeys',
                'Tracking lead sources & performance'
              ]}
              image={processStepImages[1]}
              reverse
            />

            {/* Step 3 */}
            <ProcessStep
              stepNumber="03"
              title="Sales & Conversion Optimization"
              description="Turn more leads into paying customers. If leads are coming in but not converting, you're leaking revenue. We help you fix the journey from interest to purchase."
              features={[
                'Sales process design',
                'Script & pitch structure',
                'Objection handling frameworks',
                'Proposal & pricing presentation',
                'Follow-up and closing systems'
              ]}
              image={processStepImages[2]}
            />

            {/* Step 4 */}
            <ProcessStep
              stepNumber="04"
              title="Customer Experience & Retention"
              description="Keep customers coming back. Growth isn't just about new customers — it's about keeping existing ones happy. We help you design an experience that builds loyalty."
              features={[
                'Onboarding experience design',
                'Service delivery workflows',
                'Feedback & review collection',
                'Retention & loyalty programs',
                'Referral systems'
              ]}
              image={processStepImages[3]}
              reverse
            />

            {/* Step 5 */}
            <ProcessStep
              stepNumber="05"
              title="Performance Tracking & Optimization"
              description="Make decisions based on data, not guesses. We help you track what matters so you know which actions actually grow your business."
              features={[
                'Setting key metrics & dashboards',
                'Revenue and funnel performance tracking',
                'Campaign performance analysis',
                'Monthly growth review',
                'Experiment & improvement roadmap'
              ]}
              image={processStepImages[4]}
            />
          </div>
        </div>
      </section>

    

      
    </div>
  );
}
