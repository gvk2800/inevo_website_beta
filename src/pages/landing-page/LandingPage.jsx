import React from 'react'
import Hero from '../../components/Hero';
import MainSection from '../../components/MainSection';
import Solutions from '../../components/Solutions';
import BookDemo from '../../components/BookDemo';
import Services from '../../components/services/Services';
import OurService from '../../components/OurService';
import Faqs from '../../components/faqs/Faqs';
import Blog from '../../components/Blog';
import ContactUs from '../../components/ContactUs';

const LandingPage = () => {
  return (
    <div style={{ background: "#F3F9F9" }}>
      <Hero />
      <MainSection />
      <Solutions />
      <BookDemo />
      <Services />
      <OurService />
      <Faqs />
      <Blog />
      <ContactUs />
    </div>
  );
}

export default LandingPage