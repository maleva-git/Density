import { Link } from 'react-router-dom';
import heroImg from '../../assets/services/methanol-bunkering.028b69.webp';
import serviceImg1 from '../../assets/home/image1 (1).webp';
import serviceImg2 from '../../assets/home/image1 (5).webp';
import serviceImg3 from '../../assets/home/image1 (6).webp';
import serviceImg4 from '../../assets/home/image7.webp';
import serviceImg5 from '../../assets/home/image8.webp';
import bunkeringImg from '../../assets/services/methanol-bunkering.028b69.webp';
import inspectionImg from '../../assets/services/Marine-inspection.webp';
import logisticsImg from '../../assets/services/sea-freight-aerial-view-cargo-ship-cargo-container-harbor.webp';

const TechnicalLogistics = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Technical & Supply Logistics Malaysia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-white px-6 py-2 rounded-full inline-block mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Technical & Supply Logistics in Malaysia
            </h1>
            <p className="text-2xl leading-relaxed">
              Keeping Your Vessel Operational & Fully Provisioned
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
            <span className="text-gray-900 font-semibold">Technical & Supply Logistics</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Complete Technical & Supply Chain Solutions for Vessels
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Density (M) Sdn Bhd</strong> provides comprehensive <strong>technical logistics and supply services</strong> to keep your vessel fully operational during port calls. From <strong>bunkering coordination</strong> to <strong>ship spares delivery</strong>, we ensure your vessel has everything it needs, when it needs it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Our experienced team coordinates with trusted suppliers across Malaysia to deliver marine fuels, lubricants, spare parts, provisions, and technical services—minimizing delays and ensuring cost efficiency.
            </p>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <img src={serviceImg1} alt="Bunkering services Malaysia" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg2} alt="Ship spares delivery" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg3} alt="Vessel provisions supply" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            {/* Full Width Bunkering Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={bunkeringImg} alt="Marine fuel bunkering Malaysia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <h3 className="text-4xl font-bold text-white mb-4">Reliable Bunkering Services</h3>
                  <p className="text-xl text-white/90 max-w-2xl">Coordinating marine fuel, gas oil, and lubricant supplies across all Malaysian ports</p>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What We Provide</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Bunkering */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Bunkering Coordination</h4>
                    <p className="text-gray-600 text-sm">Marine gas oil (MGO), fuel oil, and lubricants from trusted suppliers</p>
                  </div>
                </div>
              </div>

              {/* Ship Spares */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Ship Spares & Equipment</h4>
                    <p className="text-gray-600 text-sm">Fast procurement and delivery of spare parts and technical equipment</p>
                  </div>
                </div>
              </div>

              {/* Provisions */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Provisions & Stores</h4>
                    <p className="text-gray-600 text-sm">Fresh provisions, bonded stores, and ship supplies</p>
                  </div>
                </div>
              </div>

              {/* Water Supply */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Fresh Water Supply</h4>
                    <p className="text-gray-600 text-sm">Potable water and ballast water supply coordination</p>
                  </div>
                </div>
              </div>

              {/* Technical Services */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Technical Services</h4>
                    <p className="text-gray-600 text-sm">Arranging technical inspections, surveys, and repairs</p>
                  </div>
                </div>
              </div>

              {/* Waste Disposal */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Waste Disposal</h4>
                    <p className="text-gray-600 text-sm">MARPOL-compliant waste collection and disposal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <img src={serviceImg4} alt="Marine technical services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg5} alt="Ship supply chain Malaysia" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
            </div>

            {/* Marine Inspection Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={inspectionImg} alt="Marine inspection services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="container mx-auto px-8 pb-12">
                  <h3 className="text-4xl font-bold text-white mb-3">Technical Inspection & Survey Coordination</h3>
                  <p className="text-xl text-white/90">Arranging class surveys, PSC inspections, and technical audits</p>
                </div>
              </div>
            </div>

            {/* Logistics Image */}
            <img src={logisticsImg} alt="Vessel supply logistics" className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-16" />

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white p-10 rounded-3xl mb-12">
              <h3 className="text-3xl font-bold mb-6">Why Choose Our Technical & Supply Services?</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Trusted Supplier Network:</strong> Long-standing relationships with reliable vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Fast Delivery:</strong> Urgent spares and provisions delivered promptly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Cost Transparency:</strong> Competitive pricing with clear invoicing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span><strong>Full Coordination:</strong> End-to-end logistics management</span>
                </li>
              </ul>
            </div>

            {/* Services Offered Box */}
            <div className="bg-blue-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Supply Chain Solutions</h3>
              <p className="text-gray-700 mb-4">
                From marine fuel bunkering to technical equipment delivery, we provide end-to-end supply logistics for vessels calling at all Malaysian ports including Port Klang, PTP, Penang, Kuantan, Bintulu, and Labuan.
              </p>
              <p className="text-sm text-gray-600 italic">
                Keywords: bunkering services Malaysia, ship spares Malaysia, vessel provisions Malaysia, marine fuel supply Malaysia, technical logistics Malaysia
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-10 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Technical or Supply Support?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Contact us to arrange bunkering, spares, provisions, or technical services in Malaysia
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

export default TechnicalLogistics;
