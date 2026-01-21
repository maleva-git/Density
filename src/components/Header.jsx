import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/98 backdrop-blur-sm shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-1">
              <img src={logo} alt="Density Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">
                Density (M) Sdn Bhd
              </div>
              <div className="text-xs font-medium text-gray-600">
                Maritime Excellence
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-colors ${
                isActive('/') ? 'text-[#2662b0]' : 'text-gray-900 hover:text-[#2662b0]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-semibold transition-colors ${
                isActive('/services') ? 'text-[#2662b0]' : 'text-gray-900 hover:text-[#2662b0]'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-colors ${
                isActive('/about') ? 'text-[#2662b0]' : 'text-gray-900 hover:text-[#2662b0]'
              }`}
            >
              About
            </Link>
            <Link
              to="/ports"
              className={`font-semibold transition-colors ${
                isActive('/ports') ? 'text-[#2662b0]' : 'text-gray-900 hover:text-[#2662b0]'
              }`}
            >
              Port Coverage
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#2662b0] to-[#1d4a85] hover:from-[#1d4a85] hover:to-[#2662b0] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900 hover:text-[#2662b0] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg p-6">
            <Link to="/" className="block text-gray-900 hover:text-[#2662b0] font-medium">
              Home
            </Link>
            <Link to="/services" className="block text-gray-900 hover:text-[#2662b0] font-medium">
              Services
            </Link>
            <Link to="/about" className="block text-gray-900 hover:text-[#2662b0] font-medium">
              About
            </Link>
            <Link to="/ports" className="block text-gray-900 hover:text-[#2662b0] font-medium">
              Port Coverage
            </Link>
            <Link to="/contact" className="block text-white bg-[#2662b0] px-6 py-2 rounded-full font-medium text-center">
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
