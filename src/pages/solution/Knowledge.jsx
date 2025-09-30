import React from 'react';

const Knowledge = () => {
  return (
    <div className="bg-[#F7FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: AI at the Core */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">AI at the Core</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">AI-assisted form completion & missing data inference.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">GenAI copilots for agents and brokers.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Risk-aware pricing & behavioral lead scoring.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Custom ML models tuned for insurance datasets.</p>
              </li>
            </ul>
          </div>

          {/* Card 2: For Important Players */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">For Important Players in the Insurance value chain</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Agents: Faster submissions, auto-filled forms, omnichannel quoting.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Brokers: Lead ranking, better carrier hit ratios, seamless communication.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">MGAs/Carriers: Risk-adjusted pricing, audit-ready compliance, scalable cloud deployment.</p>
              </li>
            </ul>
          </div>

          {/* Card 3: Case Studies */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Case Studies</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Showcase a demo case: "Reduced quoting time from 2 hours to 5 seconds."</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Testimonials, metrics (conversion uplift, processing cost savings).</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-3 mt-1">•</span>
                <p className="text-gray-600">Download Product Brochure</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Knowledge;
