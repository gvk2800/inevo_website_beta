import React, { useState } from 'react';
import handShakeImage from '../../assests/icons/hand-shake.png';
import './DemoComponent.css';

const DemoComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    businessEmail: '',
    requirements: '',
    selectedSlot: '' // we’ll store slot here later if needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (check if slot is picked)
    if (!formData.fullName || !formData.contactNumber || !formData.businessEmail) {
      alert("Please fill all required fields.");
      return;
    }

    // Redirect user to Google Calendar scheduling link
    const gCalUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-JNMDToNGvfra2zW4EwEzjrFehyRwTtrfgZIpyTNqpTFAfql9UykxmZbhkj1cIUKw5JosyaXw?gv=true";

    // Open in popup window
    window.open(gCalUrl, "Book a Slot", "width=1000,height=800");

    console.log('Form submitted:', formData);
  };

  return (
    <div className="demo-container">
      <div className="demo-content">
        {/* Left Section */}
        <div className="image-section">
          <div className="image-placeholder">
            <img src={handShakeImage} alt="Handshake" className="handshake-image" />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="form-section">
          <h1 className="demo-title">Book a Demo</h1>
          
          <form onSubmit={handleSubmit} className="demo-form">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="form-group">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            {/* Business Email */}
            <div className="form-group">
              <label htmlFor="businessEmail" className="form-label">
                Business Email<span className="required">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                placeholder="Business Email"
                value={formData.businessEmail}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            {/* Requirements */}
            <div className="form-group">
              <label htmlFor="requirements" className="form-label">
                Brief your requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                placeholder="Brief your requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                className="form-textarea"
                rows="4"
              />
            </div>

            {/* Slot Picker (optional – for storing slot info) */}
            <div className="form-group">
              <label className="form-label">Book a slot</label>
              <button
                type="button"
                className="slot-button"
                onClick={() => window.open(
                  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-JNMDToNGvfra2zW4EwEzjrFehyRwTtrfgZIpyTNqpTFAfql9UykxmZbhkj1cIUKw5JosyaXw?gv=true",
                  "Book a Slot",
                  "width=1000,height=800"
                )}
              >
                Book a slot
              </button>
            </div>

            {/* Submit */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoComponent;