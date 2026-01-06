// HeroSection.tsx
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import BusinessSetup from './BuisnessSetup';
import { OurProcess } from './main';
import HeroBackground from '@/components/HeroBackground'; // adjust path if needed
import Button from '@/components/button';

export default function HeroSection() {
  return (
    <>
      <HeroBackground>
        <section className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Overlapping Images */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute top-0 left-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY2ODA2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1726594701749-04cfbc6e2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBzdGFydHVwJTIwdGVhbXxlbnwxfHx8fDE3NjY4MDY5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Entrepreneur startup team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[30%] left-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY2Njk5MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business strategy planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl text-white">
                  Start Your Business
                </h1>
                <p className="text-xl text-white">
                  Turn your validated idea into a real business
                </p>
              </div>

              <p className="text-lg text-white leading-relaxed">
                Once your idea is clear and validated, the next challenge is execution.
                Under Start Your Business, we help you move from planning to action — setting
                up the right structure, systems, and essentials to launch with confidence.
              </p>

              <div className="space-y-4">
                 <Button variant="primary" className="mt-[32px]">Talk to an Expert</Button>
                <p className="text-sm text-white">
                  Launch your business the right way, with clarity and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HeroBackground>

      <BusinessSetup />
      <OurProcess />
    </>
  );
}
