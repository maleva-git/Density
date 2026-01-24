import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import Ports from './pages/Ports';
import Contact from './pages/Contact';
import FullPortAgency from './pages/services/FullPortAgency';
import HusbandryServices from './pages/services/HusbandryServices';
import TechnicalLogistics from './pages/services/TechnicalLogistics';
import ProtectingAgency from './pages/services/ProtectingAgency';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/full-port-agency-malaysia" element={<FullPortAgency />} />
          <Route path="/services/husbandry-services-malaysia" element={<HusbandryServices />} />
          <Route path="/services/technical-supply-logistics-malaysia" element={<TechnicalLogistics />} />
          <Route path="/services/protecting-agency-malaysia" element={<ProtectingAgency />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ports" element={<Ports />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
