import React from 'react';
import handShake from '../../assests/icons/hand-shake.png';

const heroPlaceholder = handShake;

const Overview = ({
  heroSrc = heroPlaceholder,
  heroAlt = 'Insurance document being signed, representing insurance quoting and risk management',
}) => {
  return (
    <section aria-labelledby="solutions-heading" className="bg-[#F3F9F9]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 md:py-12 lg:py-14">
        {/* Hero Section */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_minmax(480px,680px)] md:gap-10">
          {/* Left column - headings */}
          <div className="text-center md:text-left">
            <div className="inline-block mx-auto md:mx-0">
              <h2
                id="solutions-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
              >
                Services
              </h2>
              <div
                className="mt-2 h-1 w-full rounded bg-[#22C5C1]"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
              <span className="block">Transforming Insurance with
              Technology & AI</span>
              
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base mx-auto md:mx-0">
            At InEvo Solutions, we specialize in technology
            implementation services tailored for the insurance
            industry. Our primary focus is on package implementations
            and seamless industry integrations, ensuring faster time-
            to-market, reduced operational costs, and scalable digital
            transformation.
            </p>
          </div>

          {/* Right column - image */}
          <div className="md:justify-self-end">
            <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-[#22C5C1]">
              <img
                src={heroSrc}
                alt={heroAlt}
                loading="lazy"
                className="block h-48 w-full object-cover sm:h-56 md:h-72 lg:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
