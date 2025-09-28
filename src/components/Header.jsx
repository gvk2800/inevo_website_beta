import logo from '../assests/logo.png';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 md:py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center relative">
      {/* Left vertical line - hidden on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 hidden md:block"></div>
      
      {/* Logo and brand */}
      <div className="flex items-center">
        <img src={logo} alt="InEvo AI Logo" className="h-8 md:h-10" />
        <span className="text-xl md:text-2xl font-bold text-gray-800 ml-2 md:ml-3">InEvo AI</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
        <a href="#" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Solutions</a>
        <a href="#" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Services</a>
        <a href="#" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Blogs</a>
        <a href="#" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Contact us</a>
      </nav>
      
      {/* Desktop Book Demo button */}
      <button className="hidden lg:block bg-teal-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-teal-700 transition-colors">
        Book Demo
      </button>

      {/* Mobile menu button */}
      <button 
        className="lg:hidden flex flex-col space-y-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`absolute top-full left-0 right-0 bg-white shadow-lg z-50 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col py-4">
          <a href="#" className="px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors">Solutions</a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors">Services</a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors">Blogs</a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors">Contact us</a>
          <div className="px-6 py-3">
            <button className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors">
              Book Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
