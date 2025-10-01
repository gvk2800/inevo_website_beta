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

    // Basic validation (all required except requirements)
    if (!formData.fullName || !formData.contactNumber || !formData.businessEmail || !formData.selectedSlot) {
      alert("Please complete all required fields and book a slot.");
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
          
          {/* Keeping only the Book a slot section. Other form fields are commented out for now. */}
          {/*
          <form onSubmit={handleSubmit} className="demo-form">
            ... Full Name, Contact Number, Business Email, Requirements, and Submit button are commented out ...
          </form>
          */}

          <div className="center-wrap">
            <button
              type="button"
              className="slot-button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  selectedSlot: new Date().toISOString()
                }));
                window.open(
                  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-JNMDToNGvfra2zW4EwEzjrFehyRwTtrfgZIpyTNqpTFAfql9UykxmZbhkj1cIUKw5JosyaXw?gv=true",
                  "Book a Slot",
                  "width=1000,height=800"
                );
              }}
            >
              Book a slot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoComponent;