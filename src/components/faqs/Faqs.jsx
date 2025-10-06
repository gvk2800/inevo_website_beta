import React, { useState } from 'react'
import './faqs.scss';

const Faqs = () => {
    const faqsArray = [
        {
            question: "What does Inevo AI do?",
            answer: "Inevo AI is an AI-powered insurance distribution platform that automates the entire quoting process—from capturing data in forms and emails, to validating information, scoring risks, and enabling one-click submission to carriers. It helps brokers, agents, MGAs, and insurers accelerate sales, reduce errors, and deliver cleaner, carrier-ready submissions quickly."
        },
        {
            question: "What problems does Inevo AI solve for insurance professionals?",
            answer: "Inevo AI addresses key bottlenecks: manual data entry, incomplete or inaccurate submissions, slow underwriting reviews, and inefficient communication between agents and underwriters. By automating intake, data validation, risk scoring, and prioritization, it ensures faster processing and higher-quality submissions, resulting in better quote-to-bind ratios."
        },
        {
            question: "How can insurance agents use Inevo AI to increase earnings?",
            answer: "By automating form filling, email parsing, and validation, Inevo AI frees agents from time-consuming data tasks, allowing them to focus on selling. Faster, error-free submissions and real-time tracking enable agents to handle more accounts daily, increasing close rates and boosting commissions with less effort."
        },
        {
            question: "How does Inevo AI help maximize insurance sales revenue?",
            answer: "Inevo AI improves revenue through automation and intelligence—it prioritizes the most valuable opportunities and streamlines workflows among agents, underwriters, and carriers. Faster submissions mean more policies bound, improved retention, and a greater return on investment for all stakeholders."
        },
        {
            question: "Does Inevo AI include a quote generation tool?",
            answer: "Yes, Inevo AI offers a Quote Co-Pilot that instantly reads, extracts, and validates data from emails, documents, and digital forms. It structures submissions with built-in risk scoring and eligibility checks, functioning as a smart quote generator personalized for insurance workflows."
        },
        {
            question: "Will Inevo AI replace human insurance professionals?",
            answer: "No. Inevo AI is designed to enhance human work, not replace it. It automates repetitive, manual tasks like data entry and validation so brokers, agents, and underwriters can focus on client relationships, negotiation, and strategic risk assessment."
        },
        {
            question: "How secure is customer data on Inevo AI?",
            answer: "Data security is fundamental to Inevo AI. The platform follows enterprise-grade security protocols including encryption at rest and in transit, PII masking, role-based access controls, and audit logging. Hosted on AWS with SOC-2 and ISO 27001 compliance, Inevo AI ensures your data is protected at every step."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="text-center mb-16 mt-16">
                <h2 className="text-5xl font-extrabold text-brand-blue">FAQs</h2>
            </div>
            <div className="faq-container">
                {faqsArray.map((item, index) => (
                    <div key={index} className="faq-item">
                    <div className="faq-header">
                        <p className="faq-question">{item.question}</p>
                        <button 
                        className="faq-toggle"
                        onClick={() => toggleFAQ(index)}
                        >
                        {activeIndex === index ? "−" : "+"}
                        </button>
                    </div>
                    {activeIndex === index && (
                        <p className="faq-answer">{item.answer}</p>
                    )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs