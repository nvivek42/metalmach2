import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  BuildingOffice2Icon 
} from '@heroicons/react/24/solid'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      })
      return
    }

    try {
      // Simulated form submission
      const response = await fetch('https://api.metalmachmastery.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message. We\'ll get back to you soon!'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.'
      })
    }
  }

  const ContactInfoItem = ({ icon: Icon, title, description }) => (
    <motion.div 
      className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Icon className="w-12 h-12 text-mmpl-blue" />
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We're Here to Support Your Manufacturing Excellence
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfoItem 
                icon={BuildingOffice2Icon}
                title="Office Address"
                description="Plot No. F-39, Chincholi MIDC, Solapur, Maharashtra, India"
              />
              <ContactInfoItem 
                icon={PhoneIcon}
                title="Phone Number"
                description="+91 9876 543 210"
              />
              <ContactInfoItem 
                icon={EnvelopeIcon}
                title="Email Address"
                description="info@metalmachmastery.com"
              />
              <ContactInfoItem 
                icon={MapPinIcon}
                title="Location"
                description="Solapur Industrial Area, Maharashtra"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
            
            {formStatus.message && (
              <div className={`
                mb-6 p-4 rounded-lg text-center
                ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}
              `}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mmpl-blue"
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mmpl-blue"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mmpl-blue"
                />
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mmpl-blue"
                />
              </div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mmpl-blue"
                required
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-mmpl-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage