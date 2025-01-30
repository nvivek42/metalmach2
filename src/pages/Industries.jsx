import React from 'react';

const Industries = () => {
  const industries = [
    { 
      name: 'Automotive', 
      description: 'Precision components for next-generation vehicles',
      icon: '🚗'
    },
    { 
      name: 'Defense', 
      description: 'High-reliability solutions for critical applications',
      icon: '🛡️'
    },
    { 
      name: 'Energy', 
      description: 'Robust components for power generation and transmission',
      icon: '⚡'
    },
    { 
      name: 'Aerospace', 
      description: 'Lightweight, high-performance engineering',
      icon: '✈️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-br from-mmpl-blue to-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Powering Diverse Sectors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our precision-engineered aluminum components serve industries that demand uncompromising quality.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl mb-6">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-mmpl-blue">{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Product Specifications</h2>
          <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg">
            <p className="text-xl">
              Aluminum Components: 0.5–5 kg
              <br />
              Compliant with DIN, ASTM, and JIS Standards
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;