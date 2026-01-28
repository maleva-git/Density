import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage1 from '../assets/home/image1 (10).webp';


const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Define image variables
  const mainBg = heroImage1;
 

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      {/* Main Background with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={mainBg}
          alt="Malaysian port operations"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Floating Images Layer */}
   

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {/* Main Heading with stagger animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] drop-shadow-2xl">
            <span className="text-white">Density (M) Sdn Bhd</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl mb-8 font-light text-gray-100 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] leading-relaxed">
            Your Premier Maritime Partner <br className="hidden md:block" />in Malaysian Waters
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-gray-200 leading-relaxed max-w-2xl opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            Every minute matters when your vessel needs expert handling. 
            We deliver seamless port operations across Malaysia—
            <span className="font-bold text-white"> 24/7 availability, full port coverage</span>, 
            and operational excellence without compromise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            <button 
              onClick={() => setShowModal(true)}
              className="group relative bg-[#2662b0] hover:bg-[#1d4a85] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(38,98,176,0.6)] hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10">Request a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#2662b0] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-110 backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Demo Request Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 animate-[scaleIn_0.3s_ease-out]">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>

            {/* Content */}
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Discover Precision in Every Move
            </h2>
            <p className="text-xl text-[#9a9b9d] text-center mb-8 leading-relaxed">
              See how Density (M) Sdn Bhd transforms port operations with our comprehensive vessel agency services.
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-[#2662b0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Round-the-clock operations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-[#2662b0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">11+ Major Ports</h3>
                  <p className="text-sm text-gray-600">Full Malaysian coverage</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-[#2662b0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Expert Team</h3>
                  <p className="text-sm text-gray-600">Experienced professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-[#2662b0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Fast Turnaround</h3>
                  <p className="text-sm text-gray-600">Optimized operations</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 bg-gradient-to-r from-[#2662b0] to-[#1d4a85] hover:from-[#1d4a85] hover:to-[#2662b0] text-white text-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Schedule a Demo
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border-2 border-gray-300 hover:border-[#2662b0] text-gray-700 hover:text-[#2662b0] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
