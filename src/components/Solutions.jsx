import React, { useState } from 'react';
import { FiHeadphones, FiBriefcase, FiShield } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import greenTickIcon from '../assests/greentickicon.png';

const solutionsData = {
  agents: {
    icon: <FiHeadphones size={28} />,
    title: 'Agents',
    subtitle: 'Accelerate your quote process with AI-powered Assistant',
    points: [
      { title: 'AI-assisted Business Intelligence Co-Pilot', description: '80% Faster Quote Submission, Real-Time Quote Status, Automated Document Processing' },
      { title: 'Customer Servicing', description: 'Track submissions from initial request to final carrier response' },
      { title: 'Customer Data Ingestion', description: 'Access previous applications and auto-populate recurring client data' },
    ],
  },
  brokers: {
    icon: <FiBriefcase size={28} />,
    title: 'Brokers',
    subtitle: 'Scale your operations with automated workflows and comprehensive management tools.',
    points: [
      { title: 'Quote Management Agent', description: '(Email parser, Document Parser, Business Type Detection)' },
      { title: 'Document Parsing Agent', description: '(Commercial & Personal LOB Quote Forms parsing)' },
      { title: 'Carrier Response', description: 'Management, Agent Quote Submission, comparator, and Quote Preview, Customer Management' },
    ],
  },
  insuranceCompanies: {
    icon: <FiShield size={28} />,
    title: 'Insurance Companies',
    subtitle: 'Receive high-quality, pre-validated submissions with comprehensive risk analysis.',
    points: [
      { title: 'Risk Analysis Agent', description: '(ML Model for Risk Scoring and Eligibility, Dynamic Pricing)' },
      { title: 'Underwriter Review Portal', description: '(Quote dashboard, risk score, quote prioritization based on valuation)' },
    ],
  },
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('agents');

  const { title, subtitle, points } = solutionsData[activeTab];

  return (
    <div className="py-12 md:py-24 px-4 bg-slate-50">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#22C5C1]">Solutions</h2>
        <p className="mt-4 text-lg md:text-xl font-bold text-dark-text max-w-4xl mx-auto">
          Insurance Quoting & Risk Management, Reimagined with AI
        </p>
        <p className="mt-2 text-sm md:text-md text-gray-500 max-w-4xl mx-auto">
          Delivering ultra-fast commercial insurance quotes AI-driven risk insights, and seamless workflows for Agents, Brokers, and MGAs, all powered by secure, cloud-native technology.
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 border-2 border-brand-teal-light flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex md:flex-col justify-center md:justify-start gap-3 md:gap-4 w-full md:w-1/3">
          {Object.keys(solutionsData).map((key) => (
            <TabButton 
              key={key} 
              icon={solutionsData[key].icon} 
              label={solutionsData[key].title} 
              tabName={key} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />
          ))}
        </div>
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border-2 border-brand-teal-light h-full"
            >
              <div className="bg-brand-blue text-white p-4 md:p-8 rounded-t-xl">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h3>
                <p className="mt-2 text-sm md:text-lg">{subtitle}</p>
              </div>
              <div className="p-4 md:p-8">
                <div className="space-y-4 md:space-y-6">
                  {points.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <img src={greenTickIcon} alt="Green tick" className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 mt-1" />
                      <div>
                        <h4 className="font-bold text-dark-text text-base md:text-lg">{point.title}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, tabName, activeTab, setActiveTab }) => {
  const isActive = activeTab === tabName;
  return (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex items-center text-left p-3 md:p-6 rounded-xl transition-all duration-300 w-full border-2 ${isActive ? 'bg-brand-blue text-white border-brand-blue shadow-lg' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
    >
      <div className={`mr-3 md:mr-4 ${isActive ? 'text-white' : 'text-brand-blue'}`}>{icon}</div>
      <span className="font-semibold text-sm md:text-lg">{label}</span>
    </button>
  );
};

export default Solutions;
