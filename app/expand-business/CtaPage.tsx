import React from "react";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import { TrendingUp, Users, Target } from "lucide-react";

export function ValueProposition() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Overlapping Images */}
          <div className="relative h-[550px] order-2 lg:order-1">
            {/* Background decorative element */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-100 rounded-3xl"></div>
            
            <div className="absolute top-0 left-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl z-20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NjczNTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business team meeting"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-40 right-0 w-72 h-80 rounded-2xl overflow-hidden shadow-2xl z-30 border-8 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NzI5NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-0 left-16 w-64 h-72 rounded-2xl overflow-hidden shadow-2xl z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NjcyMzM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business growth"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 right-12 bg-white rounded-xl shadow-2xl p-6 z-40 border border-slate-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-1">3x</div>
                <div className="text-slate-600 text-sm">Average Growth</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="text-indigo-600 tracking-wider text-sm uppercase">Our Approach</div>
              <h2 className="text-slate-900 leading-tight">
                Scale, Diversify & Systemize Your Operations
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Move beyond founder dependency and build a business that grows sustainably through proven systems, strong teams, and strategic opportunities.
              </p>
            </div>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Strategic Growth</h3>
                  <p className="text-slate-600">Data-driven expansion strategies tailored to your market and capabilities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Team Excellence</h3>
                  <p className="text-slate-600">Build high-performing teams with clear roles, processes, and accountability.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">System Optimization</h3>
                  <p className="text-slate-600">Automated workflows and processes that scale without increasing overhead.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                <p className="text-slate-600 text-sm">Businesses Scaled</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$2B+</div>
                <p className="text-slate-600 text-sm">Revenue Generated</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">95%</div>
                <p className="text-slate-600 text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}