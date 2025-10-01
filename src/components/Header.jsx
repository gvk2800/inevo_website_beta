import logo from "../assests/logo.png";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const handleScrollToContact = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById("contact-us-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  const handleScrollToBlog = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById("blog-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToBlog: true } });
    }
  };

  // Handle scroll show/hide
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // hide on scroll down
      } else {
        setShowHeader(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Common styles for links
  const navLinkClasses =
    "font-medium transition-colors px-2 py-1 hover:text-teal-600";
  const activeClasses = "text-gray-500"; // active tab color

  return (
    <header
      className={`bg-white py-3 md:py-5 px-4 md:px-8 lg:px-16 flex justify-between items-center fixed w-full top-0 left-0 z-50 transition-transform duration-300 shadow-md ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left vertical line - hidden on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 hidden md:block"></div>

      {/* Logo and brand */}
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="InEvo AI Logo" className="h-7 md:h-9" />
        <span className="text-lg md:text-xl font-bold text-gray-800 ml-2">
          InEvo AI
        </span>
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-700"}`
          }
        >
          Solutions
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-700"}`
          }
        >
          Services
        </NavLink>
        <button
          onClick={handleScrollToBlog}
          className={`${navLinkClasses} text-gray-700`}
        >
          Blogs
        </button>
        <button
          onClick={handleScrollToContact}
          className={`${navLinkClasses} text-gray-700`}
        >
          Contact Us
        </button>
      </nav>

      {/* Desktop Book Demo button */}
      <NavLink
        to="/book-demo"
        className="hidden lg:block bg-teal-600 text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-lg hover:bg-teal-700 transition-colors text-sm md:text-base"
      >
        Book Demo
      </NavLink>

      {/* Mobile menu button */}
      <button
        className="lg:hidden flex flex-col space-y-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-transform ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-transform ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col py-4">
          <NavLink
            to="/solutions"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-6 py-3 block ${
                isActive ? activeClasses : "text-gray-700"
              } hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-6 py-3 block ${
                isActive ? activeClasses : "text-gray-700"
              } hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors`
            }
          >
            Services
          </NavLink>
          <button
            onClick={handleScrollToBlog}
            className="px-6 py-3 block text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors text-left"
          >
            Blogs
          </button>
          <button
            onClick={handleScrollToContact}
            className="px-6 py-3 block text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors text-left"
          >
            Contact Us
          </button>
          <div className="px-6 py-3">
            <NavLink
              to="/book-demo"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors block text-center"
            >
              Book Demo
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
