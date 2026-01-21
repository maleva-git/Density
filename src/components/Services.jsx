import serviceImage1 from '../assets/home/image1 (1).webp';
import serviceImage2 from '../assets/home/image1 (2).webp';
import serviceImage3 from '../assets/home/image1 (3).webp';
import serviceImage4 from '../assets/home/image1 (4).webp';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Full Port Agency',
      description: 'A seamless bridge between ship and shore. We handle every detail — documentation, port formalities, berthing coordination, and cargo oversight — ensuring smooth and delay-free port operations.',
      image: serviceImage1,
      features: ['Documentation handling', 'Berthing coordination', 'Cargo oversight', 'Port formalities']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Husbandry Services',
      description: 'Your crew\'s home away from home. From crew changes and medical assistance to secure cash handling, we take care of the people who keep your vessel moving.',
      image: serviceImage2,
      features: ['Crew changes', 'Medical assistance', 'Cash handling', 'Provisions']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Technical & Supply Logistics',
      description: 'Keeping your vessel operational and voyage-ready. We coordinate bunkering, ship spares, provisions, and last-mile logistics with speed and accuracy.',
      image: serviceImage3,
      features: ['Bunkering coordination', 'Ship spares', 'Provisions supply', 'Last-mile logistics']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Protecting Agency (OPA)',
      description: 'Independent oversight. Total peace of mind. We safeguard shipowners\' interests through cost verification, operational monitoring, and dispute resolution.',
      image: serviceImage4,
      features: ['Cost verification', 'Operational monitoring', 'Dispute resolution', 'Independent oversight']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2662b0] font-bold text-sm tracking-wider uppercase">What We Do Best</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Our Specialized Services</h2>
          <p className="text-xl text-[#9a9b9d] max-w-3xl mx-auto">
            We offer full-service coverage from documentation to delivery, designed for time-sensitive maritime operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(38,98,176,0.15)] transition-all duration-700 hover:-translate-y-4 border border-gray-100 hover:border-[#2662b0]/30"
              style={{
                animation: `scaleIn 0.6s ease-out ${index * 0.15}s forwards`,
                opacity: 0
              }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-[1000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                
                {/* Animated Icon */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 group-hover:bg-[#2662b0] group-hover:scale-110 transition-all duration-500">
                  <div className="text-white group-hover:rotate-12 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold group-hover:translate-x-2 transition-transform duration-500 drop-shadow-lg">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-[#9a9b9d] leading-relaxed mb-8 text-base">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700 group/item hover:text-[#2662b0] transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover/item:bg-[#2662b0] group-hover/item:scale-110 transition-all duration-300">
                        <svg className="w-3 h-3 text-[#2662b0] group-hover/item:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-4 text-[#2662b0] font-bold flex items-center group-hover:translate-x-3 transition-transform duration-500 text-base">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
