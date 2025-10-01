import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const BookDemo = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 md:px-0 -mt-4 md:-mt-8">
      <div
        className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full rounded-2xl shadow-lg mx-auto max-w-7xl px-4 md:px-6
                   py-8 md:py-10 lg:py-12"
        style={{
          background: 'linear-gradient(90deg, #1554b0 0%, #207acb 100%)',
        }}
      >
        {/* Left Content */}
        <div className="flex-1 w-full px-2 md:px-6 lg:px-8">
          <div className="text-white text-left max-w-xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-[-0.01em] mb-1">
              Discover how InevoAI can 
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-[-0.01em] mb-1">
              work for your business!
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal leading-relaxed mt-0">
              Instant quotes. Zero friction. Effortless process.<br className="hidden sm:block" />
              Maximum impact.
            </p>
          </div>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0 w-full lg:w-auto px-2 md:px-6 lg:px-8 mt-4 md:mt-6 lg:mt-0">
          <div className="flex lg:block justify-start lg:justify-end">
            <button
              className="bg-white text-[#207acb] font-semibold py-2 md:py-3 px-4 md:px-7 rounded-full hover:bg-blue-100 transition-all duration-300 flex items-center justify-center min-w-[140px] md:min-w-[160px] shadow-md text-sm md:text-base"
              onClick={() => navigate('/book-demo')}
            >
              Book a Demo
              <FiArrowRight className="ml-2 text-sm md:text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
