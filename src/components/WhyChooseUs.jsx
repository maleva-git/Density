const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Local Expertise, Global Standards',
      description: 'Deep understanding of Malaysian maritime laws, customs, and port authority procedures combined with international operational excellence.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Availability',
      description: 'Our operations team is available 365 days a year, around the clock. No matter when your vessel arrives, we\'re ready.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Speed & Precision',
      description: 'Reduced port stay through proactive coordination and real-time problem solving. Every minute saved is value delivered.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Transparent Cost Control',
      description: 'Competitive agency fees, accurate disbursement accounts, and no hidden charges. Complete financial transparency guaranteed.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trust & Accountability',
      description: 'We act as your eyes, ears, and voice on the ground. Your interests are our priority in every decision we make.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Safety & Compliance',
      description: 'Strict adherence to international quality standards, Malaysian Port Authority regulations, and environmental protection practices.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2662b0] font-bold text-sm tracking-wider uppercase">Why Partner With Us</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Why Shipowners Choose Density (M) Sdn Bhd</h2>
          <p className="text-xl text-[#9a9b9d] max-w-3xl mx-auto">
            We don't just manage port calls — we manage confidence
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-xl hover:bg-[#2662b0] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-[#2662b0] group-hover:text-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500 leading-tight">
                {reason.title}
              </h3>
              <p className="text-[#9a9b9d] group-hover:text-white/95 leading-relaxed transition-colors duration-500 text-sm">
                {reason.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-[#2662b0] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-semibold">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
