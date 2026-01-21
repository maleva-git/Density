import { useState, useEffect } from 'react';
import cinematicBg from '../assets/home/image23.webp';
import FeaturesSection from './FeaturesSection';
import ServicesShowcase from './ServicesShowcase';

const CinematicSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mission Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-blue-50 px-6 py-3 rounded-full inline-block shadow-sm">
                Our Mission
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Operational Excellence <br />
                <span className="text-[#2662b0]">Without Compromise</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                To optimize vessel turnaround times through 
                <span className="text-gray-900 font-semibold"> innovative logistics solutions</span>, 
                <span className="text-gray-900 font-semibold"> proactive real-time communication</span>, 
                and an uncompromising focus on 
                <span className="text-[#2662b0] font-bold"> safety, efficiency, and accountability</span>.
              </p>

              <div className="grid gap-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900 mb-2">Precision</div>
                      <div className="text-gray-600">Every detail matters in maritime operations</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900 mb-2">Speed</div>
                      <div className="text-gray-600">Optimized vessel turnaround times</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900 mb-2">Reliability</div>
                      <div className="text-gray-600">Your trusted maritime partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={cinematicBg}
                  alt="Maritime excellence"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Image Highlights */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[#2662b0] font-bold text-sm">Live Operations</span>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <span className="text-[#2662b0] font-bold text-sm">Malaysian Waters</span>
                </div>
                
                <div className="absolute bottom-20 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <span className="text-[#2662b0] font-bold text-sm">Expert Team</span>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-[#2662b0] mb-1">24/7</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Operations</div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-[#2662b0] mb-1">100%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Services Showcase */}
      <ServicesShowcase />
    </>
  );
};

export default CinematicSection;
