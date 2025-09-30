import React from 'react';

const cards = [
  {
    title: 'Guidewire Cloud Consulting',
    bullets: [
      'Expert implementation and optimization of Guidewire Policy, Billing, and Claims.',
      'Cloud-native rollouts that reduce deployment risks and accelerate digital adoption.',
      'Hands-on domain expertise for MGAs, Carriers, and Brokers transitioning to modern platforms.',
    ],
  },
  {
    title: 'AI-Based Testing Automation (RapidBotz)',
    bullets: [
      'Testing that runs in hours, not weeks.',
      'AI-powered low-code automation designed specifically for Guidewire Cloud migrations, upgrades, and digital workflows.',
      'Eliminate manual effort, reduce regression cycles, and improve reliability with prebuilt accelerators.',
    ],
  },
  {
    title: 'Guidewire Digital Development',
    bullets: [
      {
        text: 'Build and manage carrier portals and workflows across the full policy lifecycle:',
        subBullets: [
          'Quote & Bind',
          'Renewal',
          'Payment & Cancellation',
          'First Notice of Loss (FNOL)',
        ],
      },
      'Enhance customer experience and empower agents with digital-first solutions.',
    ],
  },
];

const CoreServicesOffering = () => {
  return (
    <section className="bg-[#F3F9F9] py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Our Core Service Offerings
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-center text-xl font-extrabold text-gray-900 sm:text-2xl">
                {card.title}
              </h3>
              <div className="mx-auto mt-3 h-1 w-32 rounded bg-[#22C5C1]" aria-hidden="true" />
              <ul className="mt-4 sm:mt-5 space-y-3 text-gray-700">
                {card.bullets.map((b, idx) => {
                  const isNested = typeof b === 'object' && b !== null && 'text' in b;
                  if (!isNested) {
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-800" aria-hidden="true" />
                        <span className="text-sm leading-6 sm:text-base">{b}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-800" aria-hidden="true" />
                        <span className="text-sm leading-6 sm:text-base">{b.text}</span>
                      </div>
                      <ul className="ml-5 space-y-2">
                        {b.subBullets?.map((sb, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-gray-600" aria-hidden="true" />
                            <span className="text-sm leading-6 sm:text-base">{sb}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesOffering;



