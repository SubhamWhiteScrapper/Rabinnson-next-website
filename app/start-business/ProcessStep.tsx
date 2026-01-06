import { ArrowRight, LucideIcon } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  reverse?: boolean;
  images: {
    main: string;
    secondary: string;
    alt: string;
  };
}

export function ProcessStep({ 
  stepNumber, 
  title, 
  description, 
  features, 
  icon: Icon,
  reverse = false,
  images
}: ProcessStepProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center py-20 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Image/Icon Side */}
      <div className={`relative ${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="relative h-[450px]">
          {/* Background shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl opacity-50"></div>
          
          {/* Main image - larger, back */}
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-2xl overflow-hidden shadow-xl z-10">
            <ImageWithFallback 
              src={images.main}
              alt={images.alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Secondary image - smaller, front */}
          <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white">
            <ImageWithFallback 
              src={images.secondary}
              alt={images.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Icon overlay */}
          <div className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-lg z-30">
            <Icon size={48} className="text-indigo-600" />
          </div>
        </div>
        
        <div className="absolute -top-4 -left-4 bg-black text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-40">
          <span>{stepNumber}</span>
        </div>
      </div>

      {/* Content Side */}
      <div className={`space-y-6 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="space-y-3">
          <h3 className="text-3xl text-gray-900">
            {title}
          </h3>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 p-1 rounded-full mt-1">
                <ArrowRight size={16} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors group">
          <span>Learn More</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}