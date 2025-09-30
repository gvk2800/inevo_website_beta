import React from 'react';

import badgeStar from '../../assests/icons/badge-star.png';
import rocketLaunch from '../../assests/icons/rocket-launch.png';
import aiBadge from '../../assests/icons/ai-badge.png';
import shieldCheck from '../../assests/icons/shield-check.png';

const items = [
  {
    key: 'badge-star',
    icon: badgeStar,
    title: 'Insurance Domain Expertise',
    description: '15+ years in P&C, MGA, and specialty markets.',
  },
  {
    key: 'rocket-launch',
    icon: rocketLaunch,
    title: 'Speed to Market',
    description: 'Accelerators that cut delivery timelines by 50–70%.',
  },
  {
    key: 'ai-badge',
    icon: aiBadge,
    title: 'AI-Powered',
    description: 'Custom models for testing, quoting, and rating automation.',
  },
  {
    key: 'shield-check',
    icon: shieldCheck,
    title: 'Secure & Compliant',
    description: 'SOC2 aligned, with enterprise‑grade data safety.',
  },
];

const Whyinevo = () => {
  return (
    <section className="bg-[#F3F9F9] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Why InEvo?
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.key} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center justify-center">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-[#E7F5F5] flex items-center justify-center">
                  <img src={item.icon} alt="" loading="lazy" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain" />
                </div>
              </div>

              <h3 className="mt-4 text-center text-xl font-extrabold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-center text-gray-700 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyinevo;



