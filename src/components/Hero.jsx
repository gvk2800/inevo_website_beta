import { useState, useEffect } from 'react';
import heroImage from '../assests/hero-image.png';

const Hero = () => {
  const personas = [
    {
      role: 'Agent',
      message: 'Create submission with AI, or Send quote form in email attachment.'
    },
    {
      role: 'Broker',
      message: 'InEvoAI, evaluate Email, fix errors , Assess attached forms, score Risk, assign it to Underwriter.'
    },
    {
      role: 'Underwriter',
      message: 'InEvoAI, Create Quote submission queue, show risk score, provide agent communication, option for carrier submission at one click .'
    }
  ];

  const [personaIndex, setPersonaIndex] = useState(0);
  const [roleCharIndex, setRoleCharIndex] = useState(0);
  const [messageCharIndex, setMessageCharIndex] = useState(0);

  useEffect(() => {
    const current = personas[personaIndex];
    let timeoutId;

    if (roleCharIndex < current.role.length) {
      timeoutId = setTimeout(() => {
        setRoleCharIndex((prev) => prev + 1);
      }, 200);
    } else if (messageCharIndex < current.message.length) {
      timeoutId = setTimeout(() => {
        setMessageCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setPersonaIndex((prev) => (prev + 1) % personas.length);
        setRoleCharIndex(0);
        setMessageCharIndex(0);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [roleCharIndex, messageCharIndex, personaIndex, personas]);

  return (
    <div className="bg-slate-50 py-16 px-8 md:px-0 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark-text leading-tight">
          {/* Static first line */}
          <span className="block">Accelerate Insurance Sales with AI</span>

          {/* Fixed height container for dynamic text to prevent layout shifts */}
          <div className="h-96 md:h-48 flex flex-col justify-start">
            {/* Dynamic lines with typewriter effect (role + message) */}
            <span className="text-brand-blue block mt-2">
              {personas[personaIndex].role.slice(0, roleCharIndex)}
            </span>
            <span className="block mt-2 text-2xl md:text-3xl">
              {personas[personaIndex].message.slice(0, messageCharIndex)}
            </span>
          </div>

          {/* Static fourth line */}
          {/* <span className="block mt-4">
            InEvo AI, Empower Agents, Brokers, and Underwriters with automated submission workflows, From agent inbox to carrier on a single platform.
          </span> */}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
        InEvo AI, Empower Agents, Brokers, and Underwriters with automated submission workflows, From agent inbox to carrier on a single platform.
        </p>
      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0 flex justify-end w-full">
        <img 
          src={heroImage} 
          alt="AI powered solutions" 
          className="w-80 md:w-[500px] h-auto" 
        />
      </div>
    </div>
  );
};

export default Hero;
