import { Clock, Phone, FolderOpen, Building2, FileText, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

const timelineData = [
  { sno: '1', particular: 'Enquiry & Advisor Call', time: '1 Day', icon: Phone },
  { sno: '2', particular: 'Document Collection', time: '1-2 Days', icon: FolderOpen },
  { sno: '3', particular: 'Name Reservation', time: '2-3 Hrs', icon: Building2 },
  { sno: '4', particular: 'Name Approval', time: '1-2 Days', icon: CheckCircle2 },
  { sno: '5', particular: 'Form Filing', time: '1-2 Days', icon: FileText },
  { sno: '6', particular: 'MCA Approval', time: '2-3 Days', icon: CheckCircle2 },
];

export function TimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content & Table */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span>Quick Processing Time</span>
              </div>
              <h2 className="text-gray-900 mb-4">
                Time Required to Register a Private Limited Company
              </h2>
              <p className="text-lg text-gray-700">
                In order to register a Private Limited Company in India, it usually requires{' '}
                <span className="text-indigo-600">7-10 days</span>. Following is the detailed 
                time division to register a Private Limited Company:
              </p>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <div className="grid grid-cols-12 gap-4 px-6 py-4">
                  <div className="col-span-2 text-sm">S. No.</div>
                  <div className="col-span-6 text-sm">Particulars</div>
                  <div className="col-span-4 text-sm">Time Required</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {timelineData.map((row, index) => {
                  const Icon = row.icon;
                  return (
                    <div 
                      key={index}
                      className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-indigo-50 transition-colors group"
                    >
                      <div className="col-span-2 flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <span>{row.sno}</span>
                        </div>
                      </div>
                      <div className="col-span-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-900">{row.particular}</span>
                      </div>
                      <div className="col-span-4 flex items-center">
                        <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                          <Clock className="w-4 h-4" />
                          <span>{row.time}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table Footer */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-5 border-t-2 border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Total Time Required</div>
                      <div className="text-2xl text-gray-900">7-10 Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761336721086-67248cb24ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbG9jayUyMHRpbWV8ZW58MXx8fHwxNzY2OTkwMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Time management"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
