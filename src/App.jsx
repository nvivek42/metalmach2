import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Import page components
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Quality from './pages/Quality.jsx'
import Industries from './pages/Industries.jsx'
import Contact from './pages/Contact.jsx'

// Header Component
const Header = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/quality', label: 'Quality' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 navbar-metal-bg opacity-95"></div>
      <nav className="relative container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span 
            className="metal-text" 
            data-text="MetalMach Mastery"
            style={{
              fontSize: '2rem',
              fontWeight: 900
            }}
          >
            MetalMach Mastery
          </span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ to, label }) => (
            <Link 
              key={to} 
              to={to} 
              className="navbar-text hover:text-opacity-80 transition-colors relative group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

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
)

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen pt-16">
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
  )
}

export default App
