import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#2662b0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <div>
                <div className="font-bold text-xl">Density (M) Sdn Bhd</div>
                <div className="text-sm text-gray-400">Precision in Every Move</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Your Premier Maritime Partner in Malaysian Waters. We don't just manage port calls — we manage confidence.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#2662b0] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-400">
                  No 20-1, Jalan MPMU 2<br />
                  Medan Perniagaan Mambau Utama<br />
                  70300 Seremban, Negeri Sembilan
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#2662b0] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#2662b0] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#2662b0] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ports" className="text-gray-400 hover:text-[#2662b0] transition-colors">
                  Port Coverage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#2662b0] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+60122417151" className="flex items-center text-gray-400 hover:text-[#2662b0] transition-colors">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +60122417151
                </a>
              </li>
              <li>
                <a href="mailto:eswaran@density.com.my" className="flex items-center text-gray-400 hover:text-[#2662b0] transition-colors">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  eswaran@density.com.my
                </a>
              </li>
              <li>
                <a href="https://www.density.com.my" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#2662b0] transition-colors">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  www.density.com.my
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 bg-[#2662b0]/10 p-4 rounded-lg">
              <div className="flex items-center text-[#2662b0] mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">24/7 Available</span>
              </div>
              <p className="text-sm text-gray-400">
                365 days a year operations
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Density (M) Sdn Bhd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#2662b0] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#2662b0] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#2662b0] transition-colors">Safety & Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
