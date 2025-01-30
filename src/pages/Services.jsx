import React from 'react'
import { motion } from 'framer-motion'
import { 
  CogIcon, 
  ShieldCheckIcon, 
  BeakerIcon, 
  ScaleIcon, 
  ChartBarIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/solid'

const ServiceDetailCard = ({ icon: Icon, title, description, features }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-6">
      <Icon className="w-16 h-16 text-mmpl-blue mr-6" />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const Services = () => {
  const servicesData = [
    {
      icon: CogIcon,
      title: "Precision Die Casting",
      description: "Advanced manufacturing techniques for complex metal components with tight tolerances.",
      features: [
        "High-precision metal component manufacturing",
        "Complex geometries and intricate designs",
        "Multiple alloy capabilities",
        "Consistent quality and repeatability"
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "Rigorous testing and inspection to ensure highest standards of product excellence.",
      features: [
        "ISO 9001:2015 Certified",
        "Advanced metrology equipment",
        "Comprehensive dimensional inspection",
        "Material and performance testing"
      ]
    },
    {
      icon: BeakerIcon,
      title: "Engineering Solutions",
      description: "Innovative design and engineering support for complex manufacturing challenges.",
      features: [
        "CAD/CAM design optimization",
        "Prototype development",
        "Material selection consulting",
        "Process engineering"
      ]
    },
    {
      icon: ScaleIcon,
      title: "Precision Machining",
      description: "Advanced CNC machining for high-tolerance mechanical components.",
      features: [
        "5-axis CNC machining",
        "Micro and macro precision",
        "Complex surface finishing",
        "Multi-material capabilities"
      ]
    },
    {
      icon: ChartBarIcon,
      title: "Production Scaling",
      description: "Flexible manufacturing solutions for small to large-scale production runs.",
      features: [
        "Rapid prototyping",
        "Scalable production models",
        "Just-in-time manufacturing",
        "Global supply chain integration"
      ]
    },
    {
      icon: GlobeAltIcon,
      title: "Global Industry Solutions",
      description: "Serving diverse sectors with specialized manufacturing expertise.",
      features: [
        "Automotive components",
        "Defense and aerospace",
        "Energy sector solutions",
        "Medical device manufacturing"
      ]
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mmpl-blue to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Comprehensive Manufacturing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Transforming Complex Manufacturing Challenges into Innovative, High-Precision Solutions
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceDetailCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Manufacturing Process?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Contact our expert team to discuss how we can bring precision, innovation, and efficiency to your next project.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-mmpl-blue text-white px-8 py-4 rounded-full text-lg font-bold"
          >
            Get a Consultation
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Services