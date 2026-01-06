import { Briefcase, DollarSign, Zap, Headphones, Users, Rocket } from 'lucide-react';

import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

const reasons = [
  {
    icon: Briefcase,
    title: 'Expert Guidance',
    description: '11+ years of experience with 120+ experts guiding you every step of the way.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'All-inclusive pricing with no hidden fees.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Get your company registered in just 10 days.',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-500',
  },
  {
    icon: Headphones,
    title: 'Comprehensive Support',
    description: 'From documents to compliance, we handle it all.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Trusted by 5000+ Startups',
    description: 'Join a large community of successful businesses.',
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-50 to-blue-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500',
  },
  {
    icon: Rocket,
    title: '3+ Unicorns',
    description: "We've helped startups grow into billion-dollar businesses.",
    gradient: 'from-rose-500 to-red-500',
    bgGradient: 'from-rose-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-red-500',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-blue-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20"></div>
            </div>
          </div>
          
          <h2 className="text-gray-900 mb-4">
            Why choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Rabinnson Private Limited</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your one-stop solution for effortless Private Company Registration
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Colorful Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 ${reason.iconBg} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Small accent circle */}
                    
                  </div>
                  
                  <h3 className="text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${reason.gradient} transition-all">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative Corner Gradient */}
                <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br ${reason.gradient} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <Rocket className="w-6 h-6 group-hover:translate-y-[-4px] transition-transform" />
            <span className="text-lg">Start Your Registration Journey Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
