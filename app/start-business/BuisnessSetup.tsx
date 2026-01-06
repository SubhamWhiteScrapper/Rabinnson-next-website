import { Building, FileText, Scale, FileCheck, Users } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

export default function BusinessSetup() {
  const features = [
    { icon: Building, text: "Choosing the right business structure" },
    { icon: FileCheck, text: "Company registration support" },
    { icon: Scale, text: "GST, tax & compliance guidance" },
    { icon: FileText, text: "Documentation & agreements" },
    { icon: Users, text: "Founder & equity structuring" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl text-gray-900">
              Business Setup & Structure
            </h2>
            <p className="text-xl text-gray-600">
              Build a strong, legal foundation
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Choosing the right structure and registering your business properly saves you from headaches later. We guide you through each decision so you launch on a solid, legally compliant base.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mt-1">
                      <Icon size={20} />
                    </div>
                    <span className="text-gray-700 pt-2">{feature.text}</span>
                  </li>
                );
              })}
            </ul>

            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors mt-6">
              Get Started
            </button>
          </div>

          <div className="relative h-[500px]">
            {/* First image - bottom left */}
            <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudHMlMjBsZWdhbHxlbnwxfHx8fDE3NjY4MDY5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business documents"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Second image - top right */}
            <div className="absolute top-0 right-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-20">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2Njc3NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business handshake"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third image - center with border */}
            <div className="absolute top-[25%] left-[20%] w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY2NzUwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}