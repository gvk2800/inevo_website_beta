import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const BookDemo = () => {
  return (
    <div className="w-full px-0 -mt-8"> {/* Full width, no horizontal padding */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between w-full rounded-2xl shadow-lg mx-auto max-w-7xl px-4"
        style={{
          background: 'linear-gradient(90deg, #1554b0 0%, #207acb 100%)',
        }}
      >
        {/* Left Content */}
        <div className="p-8 flex-1 text-white text-left">
          <h2 className="text-2xl lg:text-2xl font-semibold mb-2">
            Discover how InevoAI can work for your business!
          </h2>
          <p className="text-sm lg:text-base font-normal m-0">
            Instant quotes. Zero friction. Effortless process.<br />Maximum impact.
          </p>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0 p-8">
          <button
            className="bg-white text-[#207acb] font-semibold py-3 px-7 rounded-full hover:bg-blue-100 transition-all duration-300 flex items-center justify-center min-w-[160px] shadow-md"
          >
            Book a Demo
            <FiArrowRight className="ml-2 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;