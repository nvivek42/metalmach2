import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronRightIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  CogIcon 
} from '@heroicons/react/24/solid'

const StatCounter = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const stepTime = Math.abs(Math.floor(duration / end))
    
    const timer = setInterval(() => {
      setCount(prevCount => {
        const nextCount = prevCount + 1
        return nextCount > end ? end : nextCount
      })
    }, stepTime)

    return () => clearInterval(timer)
  }, [end])

  return <span>{prefix}{count}{suffix}</span>
}

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="w-12 h-12 text-mmpl-blue mr-4" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-mmpl-blue to-blue-700 text-white">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Precision Engineering <br />for Global Industries
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transforming Complex Manufacturing Challenges into Innovative Solutions
            </p>
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="bg-white text-mmpl-blue px-6 py-3 rounded-full font-bold flex items-center"
              >
                Explore Services <ChevronRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="border-2 border-white px-6 py-3 rounded-full font-bold"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <img 
              src="/images/hero.jpg" 
              alt="Manufacturing Technology" 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { end: 25, suffix: '+', title: 'Years of Experience' },
              { end: 500, suffix: '+', title: 'Projects Completed' },
              { end: 50, suffix: '+', title: 'Global Clients' },
              { end: 99, suffix: '%', title: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <div className="text-5xl font-bold text-mmpl-blue mb-4">
                  <StatCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={CogIcon}
              title="Precision Die Casting"
              description="Advanced manufacturing techniques for complex metal components with tight tolerances."
            />
            <ServiceCard 
              icon={ShieldCheckIcon}
              title="Quality Assurance"
              description="Rigorous testing and inspection to ensure highest standards of product excellence."
            />
            <ServiceCard 
              icon={GlobeAltIcon}
              title="Global Solutions"
              description="Serving diverse industries with innovative engineering and manufacturing expertise."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
