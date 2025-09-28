import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic UI handling only
    alert('Thanks! Your message is captured locally.');
  };

  return (
    <section className="bg-[#F3F9F9] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
            Let AI simplify your insurance journey — while you focus on what matters the most.
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Our team is here to help you streamline processes, personalize policies, and maximize efficiency with AI-powered solutions.
          </p>
        </div>

        {/* Right form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Contact Number*"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Business Email*"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#D8EFEF] text-[#1f2937] font-semibold py-3 tracking-wide hover:bg-[#cfe9e9] transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


