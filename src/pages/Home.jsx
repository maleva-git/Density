import Hero from '../components/Hero';
import AboutStory from '../components/AboutStory';
import Services from '../components/Services';
import CinematicSection from '../components/CinematicSection';
import WhyChooseUs from '../components/WhyChooseUs';
import PortCoverage from '../components/PortCoverage';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutStory />
      <Services />
      <CinematicSection />
      <WhyChooseUs />
      <PortCoverage />
    </div>
  );
};

export default Home;
