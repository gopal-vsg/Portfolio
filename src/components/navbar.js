import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="font-poppins">
      <nav
        className={`fixed z-50 top-0 w-full mx-auto px-4 py-3 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a className="cursor-pointer" onClick={()=>scroll('hero')}>
            <img
              src={`${process.env.PUBLIC_URL}/logo_gopal.png`}
              alt="logo"
              className="h-12 w-auto ml-4"
            />
            </a>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-8">
              <a className="hover:text-cyan-600 cursor-pointer" onClick={() => scroll('hero')}>
                Home
              </a>
              <a className="hover:text-cyan-600 cursor-pointer" onClick={() => scroll('about')}>
                About
              </a>
              <a className="hover:text-cyan-600 cursor-pointer" onClick={() => scroll('skills')}>
                Skills
              </a>
              <a className="hover:text-cyan-600 cursor-pointer" onClick={() => scroll('projects')}>
                Projects
              </a>
              <a className="hover:text-cyan-600 cursor-pointer" onClick={() => scroll('education')}>
                Education
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              className="bg-cyan-200 px-4 py-2 rounded-xl hover:bg-cyan-300 mr-4"
              onClick={() => scroll('contact')}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden bg-white">
            <a href="#" className="block py-2 hover:text-cyan-600" onClick={()=>scroll('hero')}>
              Home
            </a>
            <a href="#" className="block py-2 hover:text-cyan-600" onClick={()=>scroll('about')}>
              About
            </a>
            <a href="#" className="block py-2 hover:text-cyan-600" onClick={()=>scroll('skills')}>
              Skills
            </a>
            <a href="#" className="block py-2 hover:text-cyan-600" onClick={()=>scroll('projects')}>
              Projects
            </a>
            <button className="mt-4 w-full bg-cyan-200 px-4 py-2 rounded-xl hover:bg-cyan-300" onClick={()=>scroll('contact')}>
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
