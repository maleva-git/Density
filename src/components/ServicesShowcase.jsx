import image5 from '../assets/home/comparisioncargoslution.webp';
import image6 from '../assets/home/vesalhurbency.webp';
import image7 from '../assets/home/shiprepairandamatiance.webp';
import image8 from '../assets/home/logisticandsupply.webp';

const ServicesShowcase = () => {
  const services = [
    {
      image: image5,
      title: "Cargo Operations",
      description: "Complete port clearance and cargo coordination services",
      highlights: ["Port Authority Clearance", "Cargo Loading/Discharge", "Documentation Management"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      image: image6,
      title: "Vessel Husbandry",
      description: "Comprehensive crew and vessel support services",
      highlights: ["Crew Management", "Medical Support", "Shore Leave Arrangements"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      image: image7,
      title: "Ship Repair & Maintenance",
      description: "Expert maintenance and repair coordination",
      highlights: ["In-Water Repairs", "Dry Dock Coordination", "Equipment Maintenance"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      image: image8,
      title: "Logistics & Supply",
      description: "Complete supply chain and logistics solutions",
      highlights: ["Vessel Supplies", "Bunker Procurement", "Freight Forwarding"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-blue-50 px-6 py-3 rounded-full inline-block mb-6 shadow-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Maritime <span className="text-[#2662b0]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cargo operations to vessel maintenance, we provide comprehensive maritime agency services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative rounded-3xl overflow-hidden shadow-xl mb-8 group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
              
              {/* Service Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900">Key Features:</h4>
                <div className="grid gap-3">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                      <div className="w-2 h-2 bg-[#2662b0] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#2662b0] to-[#1d4a85] rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-8 opacity-90">Contact us today for comprehensive maritime agency solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2662b0] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
                Get Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2662b0] transition-all duration-300 hover:scale-105 transform">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;