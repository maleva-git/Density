import portImage from '../assets/home/everyport.webp';

const PortCoverage = () => {
  const westMalaysia = [
    'Port Klang',
    'PTP (Tanjung Pelepas)',
    'Penang',
    'Kuantan',
    'Kemaman',
    'Port Dickson',
    'Pasir Gudang',
    'Melaka',
    'Sungai Linggi',
    'Lumut'
  ];

  const eastMalaysia = [
    'Bintulu',
    'Labuan',
    'Kota Kinabalu'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#2662b0] font-bold text-sm tracking-wider uppercase">Strategic Coverage</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Every Port. Every Time.
            </h2>
            <p className="text-xl text-[#9a9b9d] mb-12 leading-relaxed">
              No matter where your vessel calls, Density (M) Sdn Bhd is already there. 
              Comprehensive coverage across all major Malaysian ports.
            </p>

            {/* West Malaysia */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2662b0] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">West Malaysia</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {westMalaysia.map((port, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#2662b0] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{port}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* East Malaysia */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2662b0] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">East Malaysia</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {eastMalaysia.map((port, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#2662b0] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{port}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.15)] group">
              <img
                src={portImage}
                alt="Port operations"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2662b0]/90 via-[#2662b0]/40 to-transparent group-hover:from-[#2662b0]/95 transition-all duration-500"></div>
              
              {/* Animated Overlay Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full animate-ping"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-white rounded-full" style={{animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '1s'}}></div>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-4xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-500">11+ Major Ports</h3>
                <p className="text-lg text-white/95 font-medium">Complete coverage across Malaysia</p>
              </div>
            </div>

            {/* Floating Card with Animation */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-8 max-w-xs border border-gray-100 hover:shadow-[0_25px_70px_rgba(38,98,176,0.3)] hover:-translate-y-2 transition-all duration-500 group/card">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 group-hover/card:text-[#2662b0] transition-colors">100%</div>
                  <div className="text-sm text-[#9a9b9d] font-semibold uppercase tracking-wider">Port Coverage</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Full operational support at all major Malaysian ports
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortCoverage;
