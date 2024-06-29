import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scroll = (sectionId)=>{
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView();
    }
  }
  return (
    <header className="font-poppins">
      <nav className="fixed top-0 w-full mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img
              src={`${process.env.PUBLIC_URL}/logo_gopal.png`}
              alt="logo"
              className="h-12 w-auto ml-4"
            />
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-8">
              <a className="hover:text-cyan-600">
                Home
              </a>
              <a  className="hover:text-cyan-600 cursor-pointer" onClick={()=>scroll('about')}>
                About
              </a>
              <a className="hover:text-cyan-600 cursor-pointer" onClick={()=>scroll('skills')}>
                Skills
              </a>
              <a href="#" className="hover:text-cyan-600">
                Projects
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-cyan-200 px-4 py-2 rounded-xl hover:bg-cyan-300 mr-4">
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
            <a href="#" className="block py-2 hover:text-cyan-600">
              Home
            </a>
            <a href="#" className="block py-2 hover:text-cyan-600">
              About
            </a>
            <a href="#" className="block py-2 hover:text-cyan-600">
              Skills
            </a>
            <a href="#" className="block py-2 hover:text-cyan-600">
              Projects
            </a>
            <button className="mt-4 w-full bg-cyan-200 px-4 py-2 rounded-xl hover:bg-cyan-300">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
