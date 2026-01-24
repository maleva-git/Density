import { Link } from 'react-router-dom';
import heroImg from '../../assets/services/page-1_img01.webp';
import serviceImg1 from '../../assets/home/image1 (3).webp';
import serviceImg2 from '../../assets/home/image1 (4).webp';
import serviceImg3 from '../../assets/home/image8.webp';
import serviceImg4 from '../../assets/home/image1 (9).webp';
import serviceImg5 from '../../assets/home/image1 (2).webp';
import vesselImg from '../../assets/services/Seaharbour-LR-108-1024x682.webp';
import crewImg from '../../assets/services/shipsagency_197693966_16-9.webp';

const HusbandryServices = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Ship Husbandry Services Malaysia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-white px-6 py-2 rounded-full inline-block mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ship Husbandry Services in Malaysia
            </h1>
            <p className="text-2xl leading-relaxed">
              Complete Crew & Welfare Support in Malaysian Ports
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
            <span className="text-gray-900 font-semibold">Husbandry Services</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Professional Crew & Welfare Support Services
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At <strong>Density (M) Sdn Bhd</strong>, our <strong>Husbandry Services</strong> focus on <strong>crew welfare, medical support, and financial services</strong>, ensuring your seafarers are well cared for while your vessel remains fully compliant with Malaysian regulations.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              We understand that your crew is the heart of your operations. Our dedicated husbandry team provides end-to-end support for crew changes, medical assistance, and financial services—available 24/7 across all Malaysian ports.
            </p>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <img src={serviceImg1} alt="Crew change Malaysia" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg2} alt="Maritime medical assistance" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg3} alt="Crew welfare services" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            {/* Full Width Image Section */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={vesselImg} alt="Crew support services Malaysia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <h3 className="text-4xl font-bold text-white mb-4">Complete Crew Care & Welfare Support</h3>
                  <p className="text-xl text-white/90 max-w-2xl">24/7 availability for crew changes, medical needs, and financial services</p>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Husbandry Solutions</h3>
            
            <div className="space-y-8 mb-16">
              {/* Crew Change Services */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-8 h-8 text-[#2662b0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Crew Change Management
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    End-to-end crew change coordination
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Processing of <strong>OK To Board (OTB)</strong> letters
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Immigration clearance and shore passes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Airport transfers, hotel arrangements, and logistics
                  </li>
                </ul>
              </div>

              {/* Medical Assistance */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-8 h-8 text-[#2662b0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Medical Assistance & Emergency Support
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Access to approved maritime hospitals and clinics
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Medical appointments and onboard assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Emergency medical evacuation (MEDEVAC) coordination
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    24/7 emergency response
                  </li>
                </ul>
              </div>

              {/* Financial Services */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-8 h-8 text-[#2662b0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Financial & Welfare Services
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Secure <strong>Cash to Master (CTM)</strong> delivery
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Crew wage disbursement support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2662b0] mr-2">•</span>
                    Vessel funding and financial coordination
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src={serviceImg4} alt="OTB processing Malaysia" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Fast OTB Processing</h4>
                    <p className="text-white/90">Efficient immigration clearance</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src={serviceImg5} alt="Medical assistance vessels" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Emergency Medical Support</h4>
                    <p className="text-white/90">24/7 access to maritime hospitals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Crew Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={crewImg} alt="Ship crew services Malaysia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="container mx-auto px-8 pb-12">
                  <h3 className="text-4xl font-bold text-white mb-3">Caring for Your Crew at Every Malaysian Port</h3>
                  <p className="text-xl text-white/90">Professional husbandry services from Port Klang to Labuan</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white p-10 rounded-3xl mb-12">
              <h3 className="text-3xl font-bold mb-6">Why Our Husbandry Services Stand Out</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fast Crew Change Processing</h4>
                    <p className="text-white/90">Efficient OTB and immigration clearance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Trusted Medical Networks</h4>
                    <p className="text-white/90">Access to approved maritime healthcare</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Secure Cash Handling</h4>
                    <p className="text-white/90">Safe and reliable CTM delivery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Full Compliance</h4>
                    <p className="text-white/90">Adherence to Malaysian immigration laws</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Keywords Box */}
            <div className="bg-blue-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coverage Across All Malaysian Ports</h3>
              <p className="text-gray-700 mb-4">
                Our husbandry services are available at all major Malaysian ports including Port Klang, Tanjung Pelepas (PTP), Penang, Kuantan, Bintulu, Labuan, and more.
              </p>
              <p className="text-sm text-gray-600 italic">
                Keywords: ship husbandry services Malaysia, crew change Malaysia, maritime medical assistance Malaysia, Cash to Master Malaysia
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-10 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Crew Support in Malaysia?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Contact us for professional husbandry and crew welfare services
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

export default HusbandryServices;
