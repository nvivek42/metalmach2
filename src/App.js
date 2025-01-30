import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Quality from './pages/Quality';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

// Analytics Tracking Component
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-YOUR_TRACKING_ID'); // Replace with actual tracking ID
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

// Header Component
const Header = () => (
  <header className="bg-mmpl-gray text-white">
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">MetalMach Mastery</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About Us</Link>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <Link to="/quality" className="hover:text-blue-400">Quality</Link>
          <Link to="/industries" className="hover:text-blue-400">Industries</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="bg-mmpl-gray text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">MetalMach Mastery</h3>
          <p>"Innovate, Integrate, Elevate"</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/about" className="block hover:text-blue-400">About Us</Link>
            <Link to="/services" className="block hover:text-blue-400">Services</Link>
            <Link to="/quality" className="block hover:text-blue-400">Quality</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <p>Plot No. F-39, Chincholi MIDC</p>
          <p>Solapur, Maharashtra, India</p>
          <p>Email: info@metalmachmastery.com</p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-6">
        <p>&copy; 2025 MetalMach Mastery Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
