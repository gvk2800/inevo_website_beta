import React, { useState } from 'react'
import './faqs.scss';

const Faqs = () => {
    const faqsArray = [
        { question: "What does Inevo.ai do?", answer: "Inevo.ai helps automate insurance workflows using AI." },
        { question: "Who is it for?", answer: "It is designed for brokers, underwriters, and insurers." },
        { question: "Do I need to change my workflow?", answer: "No, Inevo.ai integrates with your existing workflow." },
        { question: "Does it replace brokers or underwriters?", answer: "No, it assists professionals but does not replace them." },
        { question: "What lines of business do you support?", answer: "We support multiple lines of business, including property, casualty, and more." },
        { question: "What if the AI isn’t sure about a field?", answer: "The system flags uncertain fields for human review." },
        { question: "How do you handle compliance and audits?", answer: "We follow industry standards and maintain full audit trails." },
        { question: "Is my data safe?", answer: "Yes, data is encrypted and secured following best practices." },
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