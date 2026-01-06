import { FileText, FolderOpen, Building2, CreditCard, Award } from 'lucide-react';
import { ImageWithFallback } from '@/components/Starc/ImageWithFallback';

const steps = [
  {
    icon: FileText,
    title: 'Fill up the Form',
    description: 'Once you fill up the enquiry form, one of our advisors will connect with you to understand your requirements. Once you fill up the enquiry form, one of our advisors will connect with you to understand your requirements.',
    number: '01',
    image: 'https://images.unsplash.com/photo-1765648684555-de2d0f6af467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY2OTI5Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FolderOpen,
    title: 'Document Collection',
    description: 'After the detailed call/meet discussion, you need to submit the required documents for your company registration procedure, as per the checklist shared by our team.',
    number: '02',
    image: 'https://images.unsplash.com/photo-1764106813759-9ef7bf42a0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2Njk4OTI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Building2,
    title: 'Company Name Reservation',
    description: "Once you share the documents with our team, we will proceed with the Company's Name Reservation process. A Company's Name is the identity for any company so, the name should be unique and not registered with MCA.",
    number: '03',
    image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY2OTQ0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CreditCard,
    title: 'Professional Fees Payment',
    description: 'After reserving your name, you need to pay the professional fee and our team will proceed with the Company Registration Filing Work.',
    number: '04',
    image: 'https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY2OTE2NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Get Certificate of Incorporation',
    description: 'At last MCA will look over the application and provide the Certificate of Incorporation on the final approval.',
    number: '05',
    image: 'https://images.unsplash.com/photo-1758691737584-a8f17fb34475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY2OTg5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500 to-red-500',
  },
];

export function StepsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 px-6 py-3 rounded-full text-sm mb-6">
            Simple & Easy Process
          </div>
          <h2 className="text-gray-900 mb-6">
            Private Limited Company Registration in 5 easy steps!
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Steps to get your Private Limited Company Registered in 5 easy Steps with Startup Movers!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Number Badge on Image */}
                    <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                      <span className="text-2xl">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100 ${isEven ? '' : 'lg:text-right'}`}>
                    {/* Icon */}
                    <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-indigo-300 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
