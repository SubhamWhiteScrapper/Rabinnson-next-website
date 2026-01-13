import { Check, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

export default function IdeaDisco() {

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-primary">Idea Discovery</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl text-foreground">
                Find the right idea for you
              </h1>

              <h2 className="text-2xl text-foreground/80">
                Not sure where to start?
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              We help you discover business ideas based on your skills, interests, budget, and market demand.
              Whether you are a student, professional, or entrepreneur, we help uncover ideas that match who you are and what the market needs.
            </p>

         <div className="space-y-3">
                {[
                  "Skill-based idea discovery",
                  "Interest & passion mapping",
                  "Problem-solution brainstorming",
                  "Trend-based business ideas",
                  "Low-investment startup ideas"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

            {/* Black CTA button */}
            <button
              className="
                mt-8 inline-flex items-center justify-center
                px-8 py-4 rounded-lg
                bg-black text-white
                text-base font-semibold
                shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                transition
                hover:bg-zinc-900
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.5)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-offset-2
                focus-visible:ring-black
              "
            >
              Get Started
            </button>
          </div>

          {/* Right Visual Section */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Background decorative element */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-3xl" />

            {/* First Image - Back */}
            <div className="absolute top-0 right-0 w-80 lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519288176-0cde8339e06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjB0aGlua2luZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjU1NjU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Entrepreneur thinking about business ideas"
                className="w-full h-96 lg:h-[450px] object-cover"
              />
            </div>

            {/* Second Image - Front */}
            <div className="absolute bottom-0 left-0 w-80 lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736934-e5d6d0c7f875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicmFpbnN0b3JtaW5nJTIwaWRlYXxlbnwxfHx8fDE3NjY1NTY1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional brainstorming and idea discovery"
                className="w-full h-96 lg:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
