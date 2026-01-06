import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
}

export function ServiceCard({ title, description, features, buttonText = "Get Started" }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-300 border border-slate-100">
      <h3 className="text-3xl mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-8 text-lg leading-relaxed">{description}</p>
      
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-slate-700 text-lg">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6">
        {buttonText}
      </Button>
    </div>
  );
}
