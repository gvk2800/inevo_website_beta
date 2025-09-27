import logo from '../assests/logo.png';

const Header = () => {
  return (
    <header className="bg-white py-4 px-8 md:px-16 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="InEvo AI Logo" className="h-8" />
        <span className="text-2xl font-bold text-dark-text ml-2">InEvo AI</span>
      </div>
      <nav className="flex items-center space-x-8">
        <a href="#" className="text-dark-text hover:text-brand-blue">Solutions</a>
        <a href="#" className="text-dark-text hover:text-brand-blue">Services</a>
        <a href="#" className="text-dark-text hover:text-brand-blue">Blogs</a>
        <a href="#" className="text-dark-text hover:text-brand-blue">Contact us</a>
      </nav>
      <button className="bg-brand-blue text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90">
        Book Demo
      </button>
    </header>
  );
};

export default Header;
