import { Link } from 'react-router-dom';
import heroImg from '../assets/services/sea-freight-aerial-view-cargo-ship-cargo-container-harbor.webp';
import portAgencyImg from '../assets/services/558812full_port_agency.webp';
import husbandryImg from '../assets/services/page-1_img01.webp';
import technicalImg from '../assets/services/methanol-bunkering.028b69.webp';
import protectingImg from '../assets/services/port-state-control-psc.webp';
import portOperationsImg from '../assets/services/Malaysian-port-handles-11.2-million-TEUs-eyes-further-expansion-768x512.webp';
import vesselImg from '../assets/services/Seaharbour-LR-108-1024x682.webp';
import agencyImg from '../assets/services/shipsagency_197693966_16-9.webp';

const ServicesPage = () => {
  const services = [
    {
      title: 'Full Port Agency Services',
      subtitle: 'Complete Port Call Management',
      description: 'Professional port agency services covering documentation, berthing coordination, cargo operations, and departure clearance across all Malaysian ports.',
      image: portAgencyImg,
      link: '/services/full-port-agency-malaysia',
      features: ['Port Documentation', 'Berthing Coordination', 'Cargo Operations', 'Customs Clearance']
    },
    {
      title: 'Husbandry Services',
      subtitle: 'Crew Welfare & Support',
      description: 'Comprehensive crew change management, medical assistance, and cash-to-master services ensuring crew welfare and vessel compliance.',
      image: husbandryImg,
      link: '/services/husbandry-services-malaysia',
      features: ['Crew Changes', 'Medical Assistance', 'Cash to Master', 'Immigration Support']
    },
    {
      title: 'Technical & Supply Logistics',
      subtitle: 'Vessel Operations Support',
      description: 'Bunkering coordination, ship spares delivery, provisions supply, and technical logistics keeping your vessel operational.',
      image: technicalImg,
      link: '/services/technical-supply-logistics-malaysia',
      features: ['Bunkering Services', 'Ship Spares', 'Provisions', 'Fresh Water Supply']
    },
    {
      title: 'Protecting Agency (OPA)',
      subtitle: 'Independent Vessel Representation',
      description: 'Independent oversight and cost verification protecting ship owners\' interests during port calls handled by charterer-appointed agents.',
      image: protectingImg,
      link: '/services/protecting-agency-malaysia',
      features: ['Cost Verification', 'Independent Monitoring', 'Dispute Resolution', 'Owner Protection']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vessel Agency Services Malaysia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-white px-6 py-2 rounded-full inline-block mb-6">
              What We Offer
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Vessel Agency Services in Malaysia
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed mb-8">
              Reliable Port Agency & Maritime Support by Density (M) Sdn Bhd
            </p>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
              We act as the <strong>trusted local representative</strong> for ship owners, operators, and charterers, ensuring smooth port calls, regulatory compliance, fast turnaround, and cost transparency in Malaysian waters.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Comprehensive <span className="text-[#2662b0]">Maritime Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#2662b0] mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              Density (M) Sdn Bhd is a <strong>leading vessel agency in Malaysia</strong>, providing professional port agency services, husbandry support, technical logistics, and protecting agency services across all major Malaysian ports.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              From pre-arrival planning to safe departure, we ensure every vessel call is handled with precision, efficiency, and complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-xl text-white/90">{service.subtitle}</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-5 h-5 text-[#2662b0] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-[#2662b0] font-bold text-lg group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={portOperationsImg} alt="Malaysian port operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Nationwide Port Coverage in Malaysia
            </h2>
            <p className="text-2xl leading-relaxed mb-8">
              One vessel agent for all Malaysian ports — consistent service quality from Port Klang to Labuan
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">West Malaysia</h3>
                <p className="text-white/90">Port Klang, PTP, Penang, Kuantan, Kemaman, and more</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">East Malaysia</h3>
                <p className="text-white/90">Bintulu, Labuan, Kota Kinabalu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#2662b0]">Density (M) Sdn Bhd</span>
            </h2>
            <div className="w-24 h-1 bg-[#2662b0] mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <img src={vesselImg} alt="Professional vessel agency" className="w-full h-80 object-cover rounded-2xl shadow-xl" />
            <img src={agencyImg} alt="Ship agency services" className="w-full h-80 object-cover rounded-2xl shadow-xl" />
            <img src={protectingImg} alt="Port operations" className="w-full h-80 object-cover rounded-2xl shadow-xl" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#2662b0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of Malaysian ports and regulations</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#2662b0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock operational availability</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#2662b0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Minimized vessel port stay time</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#2662b0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear costs with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your vessel's requirements and experience seamless maritime support across Malaysia
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#2662b0] px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#2662b0] transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
