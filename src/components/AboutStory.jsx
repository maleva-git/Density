import aboutImg1 from '../assets/home/image1 (1).webp';
import aboutImg2 from '../assets/home/image1 (2).webp';
import aboutImg3 from '../assets/home/image1 (11).webp';

const AboutStory = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2662b0]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Stacked Images */}
          <div className="relative h-[600px]">
            {/* Image 1 - Back */}
            <div 
              className="absolute top-0 left-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-[scaleIn_0.8s_ease-out_0.2s_forwards]"
              style={{ transform: 'rotate(-6deg)' }}
            >
              <img
                src={aboutImg1}
                alt="Maritime operations"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 - Middle */}
            <div 
              className="absolute top-24 left-32 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-[scaleIn_0.8s_ease-out_0.4s_forwards] z-10"
              style={{ transform: 'rotate(3deg)' }}
            >
              <img
                src={aboutImg2}
                alt="Vessel services"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 - Front */}
            <div 
              className="absolute top-48 left-16 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-[scaleIn_0.8s_ease-out_0.6s_forwards] z-20"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <img
                src={aboutImg3}
                alt="Port coordination"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Badge */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2662b0] to-[#1d4a85] text-white px-8 py-4 rounded-2xl shadow-2xl z-30 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-blue-50 px-6 py-2 rounded-full inline-block">
                About Us
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
                We Don't Just Manage <br />
                <span className="text-[#2662b0]">Port Calls</span> — <br />
                We Manage <span className="text-[#2662b0]">Confidence</span>
              </h2>
              <div className="w-20 h-1 bg-[#2662b0] rounded-full"></div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              From the moment your vessel approaches Malaysian waters until safe departure, 
              we stand beside you as a reliable, responsive, and results-driven vessel agency.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We are the critical link between ship owners, charterers, operators, and port 
              authorities — delivering seamless coordination, faster turnaround times, and 
              transparent operations across Malaysia.
            </p>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Speed & Precision</h3>
                  <p className="text-sm text-gray-600">Reduced port stay through proactive coordination</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">24/7 Availability</h3>
                  <p className="text-sm text-gray-600">Operations team ready 365 days a year</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Full Compliance</h3>
                  <p className="text-sm text-gray-600">Strict adherence to maritime regulations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2662b0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-600">Local expertise with global standards</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#2662b0] to-[#1d4a85] hover:from-[#1d4a85] hover:to-[#2662b0] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
