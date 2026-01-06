// HeroSection.tsx
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';
import  Button  from '@/components/button';
import BossPage from './Boss';
import HeroBackground from '@/components/HeroBackground';

export default function HeroSectionPage() {
  // Move images inside the component
  const images = [
    'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NjczNTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NzYwMzYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NjcyMzM5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (<>

  <HeroBackground>
    <section className="max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-white uppercase">Business Growth Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-white">
              Grow Your Business
            </h1>
            <p className="text-2xl text-white mb-6">
              You've launched. Now it's time to grow.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed max-w-xl">
              Getting your first customers is just the beginning. Under Grow Your Business, we help you increase visibility, generate consistent leads, and improve conversions — so your business becomes stable and predictable.
            </p>
             <Button variant="primary" className="mt-[32px]">Talk to an Expert</Button>
            <p className="mt-8 text-slate-600 italic">
              Attract the right customers, increase revenue, and grow with intention.
            </p>
          </div>

          {/* Right - Overlapping Images */}
          <div className="relative h-[550px] hidden lg:block">
            {/* Image 1 - Top Left */}
            <div className="absolute top-0 left-0 w-80 h-72 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-30 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-white">
              <ImageWithFallback
                src={images[0]}
                alt="Business growth"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image 2 - Top Right */}
            <div className="absolute top-16 right-0 w-72 h-64 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-20 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-white">
              <ImageWithFallback
                src={images[1]}
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image 3 - Bottom Center */}
            <div className="absolute bottom-0 left-20 w-80 h-72 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-10 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-white">
              <ImageWithFallback
                src={images[2]}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Subtle Background Element */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
    </HeroBackground>
    <BossPage/>
    </>
  );
}