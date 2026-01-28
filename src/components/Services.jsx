import { useState } from 'react';
import { Link } from 'react-router-dom';
import serviceImage1 from '../assets/home/fullportagency.jfif';
import serviceImage2 from '../assets/home/husbandryservices.webp';
import serviceImage3 from '../assets/home/techinacialsupplylogistic.webp';
import serviceImage4 from '../assets/home/productingagency.webp';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Full Port Agency',
      description: 'A seamless bridge between ship and shore. We handle every detail — documentation, port formalities, berthing coordination, and cargo oversight — ensuring smooth and delay-free port operations.',
      image: serviceImage1,
      link: '/services/full-port-agency-malaysia',
      features: ['Documentation handling', 'Berthing coordination', 'Cargo oversight']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Husbandry Services',
      description: 'Your crew\'s home away from home. From crew changes and medical assistance to secure cash handling, we take care of the people who keep your vessel moving.',
      image: serviceImage2,
      link: '/services/husbandry-services-malaysia',
      features: ['Crew changes', 'Medical assistance',' Cash handling','Provisions']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Technical & Supply',
      description: 'Keeping your vessel operational and voyage-ready. We coordinate bunkering, ship spares, provisions, and last-mile logistics with speed and accuracy.',
      image: serviceImage3,
      link: '/services/technical-supply-logistics-malaysia',
      features: ['Bunkering coordination','Ship spares','Provisions supply','Last-mile logistics']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Protecting Agency',
      description: 'Independent oversight. Total peace of mind. We safeguard shipowners\' interests through cost verification, operational monitoring, and dispute resolution.',
      image: serviceImage4,
      link: '/services/protecting-agency-malaysia',
      features: ['Cost verification','Operational monitoring','Dispute resolution','Independent oversight']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Large Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={services[expandedIndex].image}
              alt={services[expandedIndex].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white ">
              <h2 className="text-4xl font-bold mb-3">{services[expandedIndex].title}</h2>
              <p className="text-lg text-white ">{services[expandedIndex].description}</p>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="space-y-4">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900  mb-4">Our Specialized Services</h2>
              <p className="text-xl text-gray-900 ">
                We offer full-service coverage from documentation to delivery, designed for time-sensitive maritime operations
              </p>
            </div>

            {services.map((service, index) => (
  <div
    key={index}
    onClick={() => setExpandedIndex(index)}
    className={`rounded-xl cursor-pointer transition-all duration-500 border
      ${
        expandedIndex === index
          ? 'bg-[#3377ca] border-[#3377ca] shadow-xl'
          : 'bg-white border-[#1f4f8f] hover:bg-[#1555f3]/5'
      }`}
  >
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">

          {/* ICON */}
          <div
            className={`p-3 rounded-xl transition-all
              ${
                expandedIndex === index
                  ? 'bg-white/20 text-white'
                  : 'bg-[#1555f3]/10 text-[#1555f3]'
              }`}
          >
            {service.icon}
          </div>

          {/* TITLE */}
          <h3
            className={`text-xl font-bold transition-colors
              ${
                expandedIndex === index
                  ? 'text-white'
                  : 'text-black'
              }`}
          >
            {service.title}
          </h3>
        </div>

        {/* ARROW */}
        <svg
          className={`w-6 h-6 transition-transform duration-300
            ${
              expandedIndex === index
                ? 'rotate-90 text-white'
                : 'text-[#1f4f8f]'
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* EXPANDED CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-500
          ${
            expandedIndex === index
              ? 'max-h-96 opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          }`}
      >
        {service.features.length > 0 && (
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center
                  ${
                    expandedIndex === index
                      ? 'text-white'
                      : 'text-black'
                  }`}
              >
               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1555f3] mr-3 flex-shrink-0">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </span>
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
))}


            <Link
              to="/services"
              className="inline-flex items-center text-[#2662b0] bg-white px-6 py-3 rounded-full font-bold mt-6 hover:bg-gray-100 transition-all duration-300"
            >
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
