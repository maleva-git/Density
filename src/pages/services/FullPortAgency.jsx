import { Link } from 'react-router-dom';
import heroImg from '../../assets/services/558812full_port_agency.webp';
import serviceImg1 from '../../assets/home/image1 (10).webp';
import serviceImg2 from '../../assets/home/image1 (11).webp';
import serviceImg3 from '../../assets/home/image1 (5).webp';
import serviceImg4 from '../../assets/home/image1 (6).webp';
import serviceImg5 from '../../assets/home/image7.webp';
import portImg from '../../assets/home/image23.webp';
import vesselImg from '../../assets/services/shipsagency_197693966_16-9.webp';
import cargoImg from '../../assets/services/sea-freight-aerial-view-cargo-ship-cargo-container-harbor.webp';

const FullPortAgency = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Full Port Agency Malaysia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-white px-6 py-2 rounded-full inline-block mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Full Port Agency Services in Malaysia
            </h1>
            <p className="text-2xl leading-relaxed">
              Your Seamless Bridge Between Ship and Shore
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#2662b0]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-[#2662b0]">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">Full Port Agency</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Comprehensive Port Agency Services Across Malaysian Ports
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Density (M) Sdn Bhd</strong> provides full-service port agency solutions for vessels calling at Malaysian ports. We act as the vital operational link between ship owners, charterers, operators, and port authorities—ensuring every vessel call is handled with precision, transparency, and efficiency.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              From pre-arrival planning to safe departure, we manage every detail with proactive communication and local expertise, minimizing vessel turnaround time and ensuring regulatory compliance.
            </p>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <img src={serviceImg1} alt="Port operations Malaysia" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg2} alt="Vessel berthing coordination" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg3} alt="Maritime cargo operations" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            {/* Full Width Hero Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={vesselImg} alt="Ship agency services Malaysia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <h3 className="text-4xl font-bold text-white mb-4">Your Trusted Vessel Port Agent in Malaysia</h3>
                  <p className="text-xl text-white/90 max-w-2xl">Handling every aspect of your port call with precision and efficiency</p>
                </div>
              </div>
            </div>

            {/* What We Handle */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Our Full Port Agency Service Includes</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Documentation & Clearance</h4>
                    <p className="text-gray-600 text-sm">Port clearance, customs documentation, and regulatory compliance</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Berthing Coordination</h4>
                    <p className="text-gray-600 text-sm">Liaison with port authorities, pilot booking, and berth allocation</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Cargo Operations</h4>
                    <p className="text-gray-600 text-sm">Cargo oversight, stevedoring coordination, and cargo documentation</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Port Formalities</h4>
                    <p className="text-gray-600 text-sm">Immigration, health clearance, and port security compliance</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Disbursement Account (DA)</h4>
                    <p className="text-gray-600 text-sm">Transparent cost management and detailed financial reporting</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">24/7 Communication</h4>
                    <p className="text-gray-600 text-sm">Real-time updates and round-the-clock operational support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Images Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <img src={serviceImg4} alt="Port documentation services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg5} alt="Vessel clearance Malaysia" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
            </div>

            {/* Full Width Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={cargoImg} alt="Malaysian port operations" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="container mx-auto px-8 pb-12">
                  <h3 className="text-4xl font-bold text-white mb-3">Comprehensive Port Coverage Across Malaysia</h3>
                  <p className="text-xl text-white/90">From Port Klang to Labuan — Seamless service nationwide</p>
                </div>
              </div>
            </div>

            <img src={portImg} alt="Vessel port operations" className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-16" />

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white p-10 rounded-3xl mb-12">
              <h3 className="text-3xl font-bold mb-6">Why Choose Density (M) Sdn Bhd as Your Port Agent?</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Local Expertise:</strong> Deep knowledge of Malaysian port regulations and procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Proactive Service:</strong> Anticipate challenges before they impact your schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Transparent Costs:</strong> No hidden fees, accurate disbursement accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Full Port Coverage:</strong> Services at all major Malaysian ports</span>
                </li>
              </ul>
            </div>

            {/* Ports Covered */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ports We Cover</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {['Port Klang', 'Tanjung Pelepas (PTP)', 'Penang', 'Kuantan', 'Kemaman', 'Pasir Gudang', 'Melaka', 'Bintulu', 'Labuan'].map((port, idx) => (
                <div key={idx} className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-[#2662b0] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-gray-900">{port}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-10 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Streamline Your Port Operations?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for professional port agency services in Malaysia
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="bg-[#2662b0] hover:bg-[#1d4a85] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Contact Us
                </Link>
                <Link to="/services" className="border-2 border-[#2662b0] text-[#2662b0] hover:bg-[#2662b0] hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullPortAgency;
