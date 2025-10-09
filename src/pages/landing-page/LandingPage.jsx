import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
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
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state?.scrollToContact) {
            const el = document.getElementById("contact-us-section");
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
            }
            navigate("/", { replace: true }); // clear state
        }

        if (location.state?.scrollToBlog) {
            const el = document.getElementById("blog-section");
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
            }
            navigate("/", { replace: true }); // clear state
        }
    }, [location, navigate]);
  return (
    <div style={{ background: "#F3F9F9" }}>
        <Hero />
        {/* <MainSection /> */}
        <Solutions />
        <BookDemo />
        <Services />
        <OurService />
        <Faqs />
        <div id="blog-section">
            <Blog />
        </div>
        <div id="contact-us-section">
            <ContactUs />
        </div>
    </div>
  );
}

export default LandingPage