import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // ✅ import EmailJS

const ContactUs = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      name: form.fullName,
      contact: form.phone,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          setForm({ fullName: '', phone: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('❌ Failed to send message. Please try again.');
        }
      )
      .finally(() => setSending(false));
  };

  // Check if the form is completely filled
  const isFormComplete =
    form.fullName.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.email.trim() !== '' &&
    form.message.trim() !== '';

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
            Our team is here to help you streamline processes, personalize policies, and maximize
            efficiency with AI-powered solutions.
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
            

            <button
              type="submit"
              disabled={sending || !isFormComplete}
              className={`w-full rounded-xl font-semibold py-3 tracking-wide transition-colors
                ${
                  isFormComplete
                    ? 'bg-[#13BDB9] text-white hover:bg-[#87CFCF]'
                    : 'bg-[#13BDB9] text-[#1f2937] hover:bg-[#cfe9e9]'
                } disabled:opacity-70`}
            >
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


