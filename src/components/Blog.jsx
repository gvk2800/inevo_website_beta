import React from 'react';
import blogImg1 from '../assests/blog-card-image-1.png';
import blogImg2 from '../assests/blog-card-image-2.png';
import blogImg3 from '../assests/blog-card-image-3.png';

const Blog = () => {
  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6 md:mb-8">Blogs</h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <img 
                src={blogImg1}
                alt="Person typing on laptop with glasses" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 leading-snug">
                How does AI help in Quoting: Where it Thrives & Where it Fails?
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Across the U.S. insurance ecosystem, from mid-market...
              </p>
              <button className="ml-auto bg-teal-600 text-white py-2 md:py-2.5 px-4 md:px-5 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <img 
                src={blogImg2}
                alt="Smartphone with ChatGPT interface" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 leading-snug">
                How does AI help in Quoting: Where it Thrives & Where it Fails?
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Across the U.S. insurance ecosystem, from mid-market...
              </p>
              <button className="ml-auto bg-teal-600 text-white py-2 md:py-2.5 px-4 md:px-5 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <img 
                src={blogImg3}
                alt="Digital rain Matrix code effect" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 leading-snug">
                How does AI help in Quoting: Where it Thrives & Where it Fails?
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Across the U.S. insurance ecosystem, from mid-market...
              </p>
              <button className="ml-auto bg-teal-600 text-white py-2 md:py-2.5 px-4 md:px-5 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Explore more link */}
        <div className="text-center">
          <div className="mx-auto mb-3 h-1 w-16 md:w-24 rounded-full bg-teal-500"></div>
          <a 
            href="#" 
            className="text-teal-600 text-base md:text-lg font-semibold hover:text-teal-700 transition-colors"
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
