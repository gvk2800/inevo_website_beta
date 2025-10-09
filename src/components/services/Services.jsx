import React, { useState } from 'react';
import './services.scss';
import ai_testing from '../../assests/services/ai_testing.svg';
import ai_rating from '../../assests/services/ai_rating.svg';
import jdp_dev from '../../assests/services/jdp_dev.svg';

const services = [
    {
      id: 1,
      title: "AI Testing",
      desc: "Automate Guidewire Cloud migration Testing with our AI solution. Trusted by Tier 1 Insurance companies",
      img: ai_testing,
      detailsHeading: "AI-Based Testing Automation (RapidBotz)",
      details: [
        "Testing that runs in hours, not weeks.",
        "AI-powered low-code automation designed specifically for Guidewire Cloud migrations, upgrades, and digital workflows.",
        "Eliminate manual effort, reduce regression cycles, and improve reliability with prebuilt accelerators."
      ]
    },
    {
      id: 2,
      title: "AI Based Rating",
      desc: "Seamlessly convert your Excel based rating sheets into API based solution with our AI solutions",
      img: ai_rating,
      detailsHeading: "Guidewire Cloud Consulting",
      details: [
        "Expert implementation and optimization of Guidewire Policy, Billing, and Claims.",
        "Cloud-native rollouts that reduce deployment risks and accelerate digital adoption.",
        "Hands-on domain expertise for MGAs, Carriers, and Brokers transitioning to modern platforms."
      ]
    },
    {
      id: 3,
      title: "Guidewire JDP Development",
      desc: "Develop, Enhance, Or Maintain Insurance processes using Guidewire JDP that fits right into Enterprise applications.",
      img: jdp_dev,
      detailsHeading: "Guidewire Digital Development",
      details: [
        "Build and manage carrier portals and workflows across the full policy lifecycle: Quote & Bind, Renewal, Payment & Cancellation, FNOL.",
        "Enhance customer experience and empower agents with digital-first solutions."
      ]
    }
];

const Services = () => {
    const [active, setActive] = useState(null);

    const toggleCard = (id) => {
        setActive((prev) => (prev === id ? null : id));
    };

    const handleKey = (e, id) => {
        if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCard(id);
        }
    };

    return (
        <div>
            <div className="text-center mb-4 mt-16">
                <h2 className="text-5xl font-extrabold text-brand-blue">Services</h2>
                <p className="mt-4 text-xl font-bold text-dark-text max-w-md mx-auto">
                    Guidewire Cloud Migration
                </p>
                {/* <p className="text-xl font-bold text-dark-text max-w-4xl mx-auto">
                    Migration
                </p> */}
            </div>
            <section className="services-flip">
                <div className="services-flip__grid">
                    {services.map((s) => {
                    const isFlipped = active === s.id;
                    return (
                        <div
                        key={s.id}
                        className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isFlipped}
                        aria-expanded={isFlipped}
                        onClick={() => toggleCard(s.id)}
                        onKeyDown={(e) => handleKey(e, s.id)}
                        >
                        <div className="flip-card__inner">
                            <div className="flip-card__face flip-card__face--front">
                            <div className="card-content">
                                <div className="card-icon">
                                    <img src={s.img} alt={`${s.title} icon`} />
                                </div>
                                <h3 className="card-title">{s.title}</h3>
                                <p className="card-desc">{s.desc}</p>
                            </div>
                            </div>

                            <div className="flip-card__face flip-card__face--back">
                            <div className="card-back-content">
                                <h4 className="back-heading text-xl font-semibold text-[#1B2428] relative inline-block pb-2">{s.detailsHeading}</h4>
                                <ul className="back-list">
                                {s.details.map((pt, i) => (
                                    <li key={i}><span>{pt}</span></li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    );
                    })}
                </div>
            </section>
        </div>
    )
}

export default Services