import { Link } from 'react-router-dom';
import heroImg from '../../assets/services/port-state-control-psc.webp';
import serviceImg1 from '../../assets/home/image1 (9).webp';
import serviceImg2 from '../../assets/home/image1 (10).webp';
import serviceImg3 from '../../assets/home/image1 (11).webp';
import serviceImg4 from '../../assets/home/image10.webp';
import serviceImg5 from '../../assets/home/image1 (3).webp';
import portImg from '../../assets/services/Malaysian-port-handles-11.2-million-TEUs-eyes-further-expansion-768x512.webp';
import vesselImg from '../../assets/services/558812full_port_agency.webp';
import agencyImg from '../../assets/services/Seaharbour-LR-108-1024x682.webp';

const ProtectingAgency = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Protecting Agency OPA Malaysia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-white px-6 py-2 rounded-full inline-block mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Protecting Agency (OPA) Services in Malaysia
            </h1>
            <p className="text-2xl leading-relaxed">
              Independent Oversight Protecting Your Interests
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
            <span className="text-gray-900 font-semibold">Protecting Agency (OPA)</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Owner's Protective Agency (OPA) — Your Independent Eyes at the Port
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When a vessel is calling at a port where the <strong>port agent is appointed by the charterer</strong>, ship owners need independent representation to protect their interests. <strong>Density (M) Sdn Bhd</strong> provides professional <strong>Protecting Agency (OPA) services</strong> in Malaysia, acting as your trusted, independent watchdog.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Our OPA services ensure that port costs are verified, operations are monitored, and any potential issues are flagged before they become disputes—giving you peace of mind and cost transparency.
            </p>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <img src={serviceImg1} alt="Port cost verification Malaysia" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg2} alt="Independent vessel monitoring" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <img src={serviceImg3} alt="Owner protection services" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </div>

            {/* Full Width Image Section */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={vesselImg} alt="OPA services Malaysia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <h3 className="text-4xl font-bold text-white mb-4">Independent Representation You Can Trust</h3>
                  <p className="text-xl text-white/90 max-w-2xl">Protecting ship owners' interests during port calls handled by charterer-appointed agents</p>
                </div>
              </div>
            </div>

            {/* What is OPA */}
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-[#2662b0] mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a Protecting Agent (OPA)?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A <strong>Protecting Agent (Owner's Protective Agent)</strong> is an independent port agent appointed by the ship owner to monitor and verify the work of the <strong>charterer-appointed port agent</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The OPA ensures that all port costs, services, and operations are accurate, reasonable, and in the owner's best interest—acting as an independent check to prevent overcharges, errors, or disputes.
              </p>
            </div>

            {/* Service Details */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Our OPA Services Include</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Cost Verification */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Port Cost Verification</h4>
                    <p className="text-gray-600 text-sm">Independent verification of disbursement accounts (DA) and port charges</p>
                  </div>
                </div>
              </div>

              {/* Monitoring */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Independent Monitoring</h4>
                    <p className="text-gray-600 text-sm">On-site oversight of port operations and service delivery</p>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Dispute Prevention & Resolution</h4>
                    <p className="text-gray-600 text-sm">Early identification and resolution of potential disputes</p>
                  </div>
                </div>
              </div>

              {/* Time & Cost Control */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Time & Cost Monitoring</h4>
                    <p className="text-gray-600 text-sm">Tracking berthing delays, demurrage, and operational efficiency</p>
                  </div>
                </div>
              </div>

              {/* Documentation Review */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Documentation Review</h4>
                    <p className="text-gray-600 text-sm">Cross-checking all port documentation and invoices</p>
                  </div>
                </div>
              </div>

              {/* Communication */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#2662b0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Direct Owner Communication</h4>
                    <p className="text-gray-600 text-sm">Real-time reporting to ship owners and operators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src={serviceImg4} alt="Port operations oversight" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Cost Transparency</h4>
                    <p className="text-white/90">Detailed verification of all expenses</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src={serviceImg5} alt="Independent vessel representation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Independent Oversight</h4>
                    <p className="text-white/90">Unbiased monitoring and reporting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Port Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={portImg} alt="Malaysian port protecting agency" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="container mx-auto px-8 pb-12">
                  <h3 className="text-4xl font-bold text-white mb-3">Protecting Your Interests at Every Malaysian Port</h3>
                  <p className="text-xl text-white/90">Comprehensive OPA services from Port Klang to Labuan</p>
                </div>
              </div>
            </div>

            {/* Additional Vessel Image */}
            <img src={agencyImg} alt="Owner protective agent services" className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-16" />

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white p-10 rounded-3xl mb-12">
              <h3 className="text-3xl font-bold mb-6">Why Choose Density (M) as Your OPA?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Unbiased Independence</h4>
                    <p className="text-white/90">We work exclusively for the ship owner, not the charterer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Local Expertise</h4>
                    <p className="text-white/90">Deep knowledge of Malaysian port costs and procedures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Transparent Reporting</h4>
                    <p className="text-white/90">Clear, detailed reports and cost breakdowns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Dispute Prevention</h4>
                    <p className="text-white/90">Identifying issues before they become costly disputes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* When Do You Need OPA */}
            <div className="bg-blue-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Do You Need a Protecting Agent?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-2">•</span>
                  <span>When the port agent is appointed by the <strong>charterer</strong>, not the owner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-2">•</span>
                  <span>When you need <strong>independent cost verification</strong> for disbursement accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-2">•</span>
                  <span>When you want to <strong>prevent disputes</strong> over port costs or delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-2">•</span>
                  <span>When calling at <strong>unfamiliar ports</strong> or using unfamiliar agents</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic mt-6">
                Keywords: protecting agency Malaysia, OPA Malaysia, owner's protective agent, port cost verification Malaysia, independent vessel agent Malaysia
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-10 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Independent Oversight for Your Vessel?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for professional Protecting Agency (OPA) services in Malaysia
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

export default ProtectingAgency;
