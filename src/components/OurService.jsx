import React from 'react';

// Importing partner logos
import RapidBotz from '../assests/RapidBotz.png';
import Coherent from '../assests/Coherent.png';
import Aws from '../assests/Aws.png';
import InvoiceCloud from '../assests/Invoic Cloud.png';
import GoogleCloud from '../assests/Google Cloud.png';

const partners = [
  { name: 'RapidBotz', logo: RapidBotz },
  { name: 'Coherent', logo: Coherent }, // removed featured flag
  { name: 'AWS', logo: Aws },
  { name: 'InvoiceCloud', logo: InvoiceCloud },
  { name: 'GoogleCloud', logo: GoogleCloud },
];

const OurService = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#22C5C1] mb-8">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-4 flex justify-center items-center h-28"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-20 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
