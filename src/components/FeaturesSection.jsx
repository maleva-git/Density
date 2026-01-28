import image1 from '../assets/home/image1 (10).webp';
import image2 from '../assets/home/image1 (5).webp';
import image3 from '../assets/home/image1 (9).webp';
import image4 from '../assets/home/image1 (11).webp';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2662b0] font-bold text-sm tracking-[0.3em] uppercase bg-white px-6 py-3 rounded-full inline-block mb-6 shadow-sm">
            Why Choose Density
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Precision in Every Move <span className="text-[#2662b0]">Delivered</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unparalleled maritime agency services with our comprehensive solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={image1} alt="Port Operations" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2662b0]/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-[#2662b0] font-bold text-sm">24/7 Operations</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Round-the-Clock Support</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated team operates <span className="text-[#2662b0] font-semibold">24/7</span> to ensure your vessels receive immediate attention and support whenever needed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2662b0] rounded-full"></div>
                  <span className="text-gray-700">Emergency response within 30 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2662b0] rounded-full"></div>
                  <span className="text-gray-700">Dedicated operations center</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={image2} alt="Cargo Operations" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2662b0]/20 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-[#2662b0] font-bold text-sm">Expert Handling</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Comprehensive Cargo Solutions</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From <span className="text-[#2662b0] font-semibold">port clearance</span> to cargo coordination, we handle every aspect of your maritime logistics with precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2662b0] rounded-full"></div>
                  <span className="text-gray-700">Government authority clearance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#2662b0] rounded-full"></div>
                  <span className="text-gray-700">Bills of lading management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#2662b0]">11+</div>
              <div className="text-gray-600 font-medium">Major Ports Covered</div>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#2662b0]">24/7</div>
              <div className="text-gray-600 font-medium">Available Support</div>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#2662b0]">100%</div>
              <div className="text-gray-600 font-medium">Compliance Rate</div>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2662b0] to-[#1d4a85] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#2662b0]">Fast</div>
              <div className="text-gray-600 font-medium">Turnaround Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;