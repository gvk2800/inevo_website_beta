import React from 'react';
// import timeImg from '../assests/benefits/benefits-time.png';
import timeImg from  "../../assests/benefits/benefits-time.png"
import handshakeImg from '../../assests/benefits/benefits-handshake.png';
import alertImg from '../../assests/benefits/benefits-alert.png';
import gearImg from '../../assests/benefits/benefits-gear.png';
import networkImg from '../../assests/benefits/benefits-network.png';

// Expected asset locations (you will add these files):
// Place under: src/assests/benefits/
// - benefits-time.png
// - benefits-handshake.png
// - benefits-alert.png
// - benefits-gear.png
// - benefits-network.png

const benefits = [
  {
    img: timeImg,
    alt: 'Clock with circular arrow',
    textTop: 'Generate accurate commercial',
    textBottom: 'quotes in hours, not days',
  },
  {
    img: handshakeImg,
    alt: 'Handshake icon',
    textTop: 'Provide accurate status, and',
    textBottom: 'maintain constant communication',
  },
  {
    img: alertImg,
    alt: 'Triangle alert with exclamation',
    textTop: 'Automated risk scoring with',
    textBottom: 'highlighted concerns and recommendation summaries',
  },
  {
    img: gearImg,
    alt: 'Gear in a circle',
    textTop: 'Automate workflows while',
    textBottom: 'ensuring compliance and auditibility',
  },
  {
    img: networkImg,
    alt: 'People connected through nodes',
    textTop: 'Connects across digital channels to',
    textBottom: 'meet customers where they are',
  },
];

const Benefit = () => {
  return (
    <section aria-labelledby="benefits-heading" className="bg-[#F3F9F9]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">
        <h2
          id="benefits-heading"
          className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
        >
          Benefits of these solutions
        </h2>

        {/* Grid: 3 items top row, 2 items bottom row aligned under left/right */}
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, idx) => {
            // Align bottom-row items under left and right columns on lg
            let layoutClass = '';
            if (idx === 3) layoutClass = 'lg:row-start-2 lg:col-start-1';
            if (idx === 4) layoutClass = 'lg:row-start-2 lg:col-start-2';
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${layoutClass}`}
              >
                <img
                  src={b.img}
                  alt={b.alt}
                  className="h-12 w-12 object-contain drop-shadow-sm sm:h-14 sm:w-14 md:h-16 md:w-16"
                />
                <p className="mt-3 text-base font-medium text-gray-900 sm:text-lg">
                  {b.textTop}
                </p>
                <p className="mt-1 max-w-xs text-sm text-gray-700 sm:text-base">
                  {b.textBottom}
                </p>
              </div>
            );
          })}
        </div>

        {/* Explore More text (no link) and tilted divider with spacing */}
        <div className="mt-10 flex flex-col items-center">
          <span className="text-teal-700 font-semibold">Explore More</span>
          <div className="mt-3 h-0.5 w-24 bg-gray-300 transform rotate-2" />
        </div>
      </div>
    </section>
  );
};

export default Benefit;


