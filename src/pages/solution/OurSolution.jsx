import React from 'react';
import insuranceHero from '../../assests/solutions/insurance-hero.png';
import suiteIllustration from '../../assests/solutions/suite-illustration.png';

const features = [
  {
    title: 'AI-assisted Business Intelligence Co-Pilot',
    detail:
      'Realtime Stakeholder Collaboration, Insurance Documentation, Forms Data, LossRuns, Claims Data, Account View, Customer Insight',
  },
  {
    title: 'Quote Management Agent',
    detail: 'Email parser, Document Parser, Business Type Detection',
  },
  {
    title: 'Document Parsing Agent',
    detail: 'Commercial & Personal LOB Quote Forms parsing',
  },
  {
    title: 'Risk Analysis Agent',
    detail: 'ML Model for Risk Scoring and Eligibility, Dynamic Pricing',
  },
  {
    title: 'Underwriter Review Portal',
    detail: 'Quote Dashboard, Risk score, Quote prioritization based on valuation',
  },
  {
    title: 'Carrier Response Management Agent',
    detail: 'Quote Submission, Comparator, and Quote Preview, Customer Management',
  },
];

const OurSolution = ({
  heroSrc = insuranceHero,
  suiteSrc = suiteIllustration,
  heroAlt = 'Insurance document being signed, representing insurance quoting and risk management',
  suiteAlt = 'Placeholder illustration representing the InEvo AI product suite',
}) => {
  return (
    <section aria-labelledby="solutions-heading" className="bg-[#F3F9F9]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 md:py-12 lg:py-14">
        {/* Hero */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_minmax(480px,680px)] md:gap-10">
          {/* Left column - headings */}
          <div>
            <div className="inline-block">
              <h2
                id="solutions-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
              >
                Solutions
              </h2>
              <div className="mt-2 h-1 w-full rounded bg-[#22C5C1]" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
              <span className="block">Insurance Quoting & Risk</span>
              <span className="block"> Management Reimagined with AI</span>
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Delivering ultra-fast commercial insurance quotes, AI-driven risk insights, and seamless workflows for Agents, Brokers, and MGAs, all powered by secure, cloud-native technology.
            </p>
          </div>

          {/* Right column - image */}
          <div className="md:justify-self-end">
            <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-[#22C5C1]">
              <img
                src={heroSrc}
                alt={heroAlt}
                className="block h-56 w-full object-cover object-[100%] sm:h-64 md:h-72 lg:h-80 sm:object-[100%] md:object-[100%] lg:object-[100%]"
              />
            </div>
          </div>
        </div>

        {/* Suite Title */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <h3 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            The InEvo AI Product Suite
          </h3>
        </div>

        {/* Product Suite Layout */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-12 lg:gap-16 items-start">
          {/* Illustration */}
          <div className="order-first md:order-none max-w-md md:max-w-none">
            <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-[#22C5C1]">
              <img
                src={suiteSrc}
                alt={suiteAlt}
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Features - bullet list style */}
          <div>
            <ul className="list-disc space-y-4 pl-6 marker:text-gray-900">
              {features.map((item) => (
                <li key={item.title} className="text-gray-900">
                  <h4 className="text-lg font-extrabold sm:text-xl">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-base leading-7 text-gray-600 sm:text-lg">
                    ({item.detail})
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;


