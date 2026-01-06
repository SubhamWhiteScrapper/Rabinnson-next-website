import { DollarSign, Building, ShieldCheck, TrendingUp, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

const benefits = [
  {
    icon: DollarSign,
    title: 'No Minimum Capital Requirement',
    description: "Start your business with any amount as there's no minimum investment required to register a Private Limited Company.",
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Building,
    title: 'Separate Legal Entity',
    description: 'A Private Limited Company is considered as a separate legal entity, which simply means the company can own property, enter into contracts, and face legal proceedings by itself.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Limited Liability Protection',
    description: "Enjoy peace of mind knowing that your personal assets are not liable for the company's liability under a Private Limited Company.",
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Tax Benefits',
    description: 'Enjoy a reduced corporate tax rate of 25% with a turnover of less than INR 250 crores. Private Company helps you save more compared to other business structures taxed at 30%.',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Users,
    title: 'Only 2 Members Required',
    description: 'One can start their Private Limited Company with just 2 members, and scale up to a maximum of 200 shareholders as your business grows.',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Award,
    title: 'Easier Access to Funding',
    description: 'Raise capital easily by issuing shares or taking loans, as Private Limited Companies are viewed more favorably by investors and financial institutions.',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2Njk1NzExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business growth"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Image */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1697335713414-42693f1a455f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYmFua2luZyUyMG1vZGVybnxlbnwxfHx8fDE3NjY5ODkyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Finance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
          <h2 className="text-gray-900 mb-4">
            Benefits of Private Limited Company Registration
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A Private Limited Company Registration offers numerous benefits, including an increase 
            in credibility, protection, and potential growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${benefit.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                  
                  <h3 className="text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
