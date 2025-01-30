import React from 'react';

const Quality = () => {
  const qualityFeatures = [
    {
      title: 'Advanced Testing Equipment',
      items: [
        'Optical Emission Spectrometers',
        'Trimos Measurement Systems',
        'Hardness Testers',
        'Millipore Dirt Testing'
      ]
    },
    {
      title: 'Process Control',
      items: [
        'Rigorous raw material analysis',
        'In-process quality checks',
        'Final inspection protocols'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-br from-mmpl-blue to-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Quality at Every Stage</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to excellence is unwavering, with precision embedded in our DNA.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-mmpl-blue">{feature.title}</h3>
              <ul className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-3 text-mmpl-blue">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Quality Promise</h2>
          <blockquote className="text-xl italic max-w-2xl mx-auto text-gray-700">
            "Precision isn't an accident—it's our promise."
          </blockquote>
          <div className="mt-8">
            <a 
              href="/iso-certificate.pdf" 
              download 
              className="bg-mmpl-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Download ISO 9001:2015 Certificate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;