import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-br from-mmpl-blue to-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Who Are We?</h1>
          <p className="text-xl max-w-3xl mx-auto">
            MetalMach Mastery Pvt. Ltd. (MMPL) is a Solapur-based, professionally managed organization 
            specializing in gravity die casting and precision machining.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Legacy</h2>
            <p className="text-lg mb-4">
              Established in 1998, our journey is rooted in engineering excellence and 
              customer-centric innovation. With over 25 years of experience, we have 
              consistently pushed the boundaries of manufacturing precision.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-mmpl-blue">✓</span>
                State-of-the-Art Infrastructure: 10,432 sqm facility
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-mmpl-blue">✓</span>
                Skilled Workforce: 50+ experts
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-mmpl-blue">✓</span>
                ISO 9001:2015 Certified
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-mmpl-blue">✓</span>
                Capacity: 35–40 tonnes/month of aluminum components
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <blockquote className="text-xl italic max-w-2xl mx-auto">
            "To redefine manufacturing through innovation, integration of advanced technologies, 
            and elevation of industry standards."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;