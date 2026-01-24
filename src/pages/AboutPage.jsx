import aboutHero from '../assets/home/image23.webp';
import operationsImg1 from '../assets/home/image1 (1).webp';
import operationsImg2 from '../assets/home/image1 (2).webp';
import operationsImg3 from '../assets/home/image1 (3).webp';
import serviceImg1 from '../assets/home/image1 (4).webp';
import serviceImg2 from '../assets/home/image1 (5).webp';
import serviceImg3 from '../assets/home/image1 (6).webp';
import teamImg1 from '../assets/home/image1 (9).webp';
import teamImg2 from '../assets/home/image1 (10).webp';
import teamImg3 from '../assets/home/image1 (11).webp';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Density Maritime"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Your Trusted Vessel Agency Partner in Malaysian Waters
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              <span className="font-bold text-[#2662b0]">Density (M) Sdn Bhd</span> is a premier Malaysian-based vessel agency committed to delivering <strong>world-class maritime support services</strong> across all major ports in Malaysia. We specialize in providing reliable, efficient, and cost-effective agency solutions that ensure smooth port operations for vessels trading in Malaysian waters.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              With a strong local presence and in-depth understanding of port regulations, we act as the <strong>vital operational link</strong> between <strong>ship owners, charterers, operators, and port authorities</strong>, ensuring that every vessel call is handled with precision, transparency, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are with Images */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Who <span className="text-[#2662b0]">We Are</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We are a <strong>full-service vessel agency</strong> built on operational excellence, local expertise, and proactive communication. Our team consists of experienced maritime professionals who understand the time-critical nature of port operations and the importance of minimizing vessel turnaround time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From routine port calls to complex operational requirements, we manage every aspect with a hands-on approach—ensuring compliance, efficiency, and peace of mind for our principals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={operationsImg1}
                alt="Port operations"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={operationsImg2}
                alt="Vessel management"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
              <img
                src={operationsImg3}
                alt="Maritime services"
                className="w-full h-64 object-cover rounded-2xl shadow-lg col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do with Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What <span className="text-[#2662b0]">We Do</span>
            </h2>
            <div className="w-24 h-1 bg-[#2662b0] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <img
              src={serviceImg1}
              alt="Full port agency services"
              className="w-full h-80 object-cover rounded-3xl shadow-xl"
            />
            <img
              src={serviceImg2}
              alt="Crew husbandry"
              className="w-full h-80 object-cover rounded-3xl shadow-xl"
            />
            <img
              src={serviceImg3}
              alt="Technical logistics"
              className="w-full h-80 object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              At Density (M) Sdn Bhd, we provide <strong>end-to-end vessel agency services</strong>, including:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full Port Agency</h3>
                <p className="text-gray-600">Complete documentation handling and port coordination</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Crew Husbandry</h3>
                <p className="text-gray-600">Welfare support and crew management services</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Logistics</h3>
                <p className="text-gray-600">Bunkering, ship supplies, and spare parts</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-[#2662b0]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Protecting Agency</h3>
                <p className="text-gray-600">Independent oversight and cost verification</p>
              </div>
            </div>

            <div className="mt-16 bg-[#2662b0] text-white p-10 rounded-3xl text-center">
              <p className="text-3xl font-bold">
                Our goal is simple: Ensure every vessel call is smooth, compliant, and cost-efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Philosophy */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Operational <span className="text-[#2662b0]">Philosophy</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center">
              We believe that <strong>successful port operations</strong> depend on:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2662b0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advance Planning</h3>
                <p className="text-gray-600">Proactive preparation for every vessel call</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2662b0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Communication</h3>
                <p className="text-gray-600">Timely updates and transparent reporting</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2662b0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strong Relationships</h3>
                <p className="text-gray-600">Trusted partnerships with port authorities</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-12 text-center leading-relaxed">
              By combining local knowledge with global standards, we proactively anticipate challenges and resolve issues before they impact vessel schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white p-12 rounded-3xl shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">Vision</h2>
              <p className="text-xl leading-relaxed text-white/95">
                To become a <strong>world-class maritime partner</strong> that defines operational excellence and reliability in the <strong>Southeast Asian shipping industry</strong>, recognized for professionalism, transparency, and long-term partnerships.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 rounded-3xl shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">Mission</h2>
              <p className="text-xl leading-relaxed mb-6 text-white/95">
                To optimize vessel turnaround times through:
              </p>
              <ul className="space-y-3 text-lg text-white/90">
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-3">✓</span>
                  Innovative logistics solutions
                </li>
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-3">✓</span>
                  Proactive and transparent communication
                </li>
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-3">✓</span>
                  Strict compliance with port and maritime regulations
                </li>
                <li className="flex items-start">
                  <span className="text-[#2662b0] mr-3">✓</span>
                  Uncompromising focus on efficiency and cost control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out with Images */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why We <span className="text-[#2662b0]">Stand Out</span>
            </h2>
            <div className="w-24 h-1 bg-[#2662b0] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <img
              src={teamImg1}
              alt="Expert team"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src={teamImg2}
              alt="Port operations"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src={teamImg3}
              alt="Maritime expertise"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-[#2662b0] text-5xl font-bold mb-3">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strong Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of Malaysian ports, regulations, and authorities.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-[#2662b0] text-5xl font-bold mb-3">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Operational Support</h3>
              <p className="text-gray-600">Our team is available round-the-clock to support vessels without interruption.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-[#2662b0] text-5xl font-bold mb-3">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Operations</h3>
              <p className="text-gray-600">Clear disbursement accounts, honest reporting, and no hidden costs.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-[#2662b0] text-5xl font-bold mb-3">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Focused Approach</h3>
              <p className="text-gray-600">Every client receives personalized attention and tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Our <span className="text-[#2662b0]">Commitment</span>
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              At Density (M) Sdn Bhd, we don't just act as agents — <strong>we act as partners</strong>.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our commitment is to protect our clients' interests, ensure regulatory compliance, and deliver seamless port operations that allow vessels to sail on schedule, safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Built on Trust, Performance, <br />
              and Maritime Expertise
            </h2>
            <p className="text-2xl md:text-3xl leading-relaxed mb-12">
              When your vessel calls at a Malaysian port, you can rely on us to be your <strong>eyes, ears, and operational backbone on the ground</strong>.
            </p>
            <button className="bg-white text-[#2662b0] px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
              Partner With Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
