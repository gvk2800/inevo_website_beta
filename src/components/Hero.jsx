import heroImage from '../assests/hero-image.png';

const Hero = () => {
  return (
    <div className="bg-slate-50 py-16 px-8 md:px-0 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end w-full order-1 md:order-2">
        <img 
          src={heroImage} 
          alt="AI powered solutions" 
          className="w-80 md:w-[500px] h-auto" 
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left px-6 md:px-16 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-text leading-tight">
          <span className="block">THE ONLY</span>
          <span className="text-brand-blue">AI-Powered Insurance Distribution Platform</span>
          <span className="block">That Brokers, Agents, MGAs & Insurers Ever Need!</span>
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-600">
          At InEvo AI, we accelerate insurance sales, simplify operations and improve stakeholder communication.
        </p>
      </div>
    </div>
  );
};

export default Hero;
