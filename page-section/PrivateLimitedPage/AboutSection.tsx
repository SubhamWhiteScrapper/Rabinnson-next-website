import { Building2, Users, Scale, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

const stats = [
  { icon: Building2, label: 'Registered with RoC', value: 'Companies Act, 2013' },
  { icon: Users, label: 'Members Required', value: '2 - 200' },
  { icon: Scale, label: 'Legal Structure', value: 'Privately Held' },
  { icon: TrendingUp, label: 'Growth Potential', value: 'High Scalability' },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1762341118954-d0ce391674d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2OTQ4NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate office"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm mb-6">
              Understanding the Structure
            </div>
            <h2 className="text-gray-900 mb-6">
              What is a Private Limited Company?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Private Limited Company is one of the preferred business structures in India, 
              as they are held privately. Pvt Ltd Companies gets registered with the Registrar 
              of Companies (RoC) under the Companies Act, 2013.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Pvt Ltd Companies can be started with 2 minimum members and scale up to 200 shareholders. 
              A Private Limited Company restricts shareholders from publicly trading shares but yet 
              offers multiple benefits. Let's discuss these benefits in detail.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl border border-indigo-100">
                    <Icon className="w-8 h-8 text-indigo-600 mb-3" />
                    <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                    <div className="text-gray-900">{stat.value}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY2OTg5Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business success"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-3xl -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
