import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import { AboutSection } from './AboutSection';
import { BenefitsSection } from './Benefits';
import { StepsSection } from './StepSection';
import { TimelineSection } from './TimeLine';
import { WhyChooseSection } from './WhyChooseSection';
import Button from '@/components/button';

export function Hero() {
  return (<>
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLjktMiAyLTJoMThjMS4xIDAgMiAuOSAyIDJ2MThjMCAxLjEtLjkgMi0yIDJIMzhjLTEuMSAwLTItLjktMi0yVjE0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-4 ">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="border-l border-gray-300 pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-900">4.9</span>
                  <span className="text-sm text-gray-500">/5</span>
                </div>
                <p className="text-sm text-gray-600">Trusted by 5,000+ Happy Businesses!</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-white leading-tight">
                Start Your Private Limited Company with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Rabinnson Private Limited
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
                Set up your Private Limited Company in India with secure, expert, affordable guidance 
                and end-to-end support from incorporation to compliance.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Expert Guidance',
                'Fast Processing',
                'Affordable Pricing',
                '100% Compliance',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button>Get Started</Button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Overlapping Images with Professional Layout */}
          <div className="relative h-[500px] lg:h-[650px]">
            {/* Main Background Image */}
            <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY2OTAzODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Foreground Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1586764921336-8b37580c7aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVycyUyMHRlYW18ZW58MXx8fHwxNzY2OTg5MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Startup team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card - Stats */}
            <div className="absolute top-1/2 right-0 lg:right-10 bg-white rounded-2xl p-6 shadow-2xl z-30 transform -translate-y-1/2">
              <div className="text-center">
                <div className="text-4xl text-indigo-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>

    <AboutSection/>
    <BenefitsSection/>
    <StepsSection/>
    <TimelineSection/>
    <WhyChooseSection/>
    </>
  );
}
