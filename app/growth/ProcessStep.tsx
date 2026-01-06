import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import { Button } from '@/components/ui/button';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
}

export function ProcessStep({ stepNumber, title, description, features, image, reverse = false }: ProcessStepProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content */}
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center">
            <span className="text-xl">{stepNumber}</span>
          </div>
          <span className="text-sm tracking-wider text-slate-500 uppercase">Step</span>
        </div>
        
        <h3 className="text-4xl mb-4 text-slate-900">{title}</h3>
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
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-6">
          Learn More
        </Button>
      </div>
      
      {/* Image */}
      <div className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white group">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
