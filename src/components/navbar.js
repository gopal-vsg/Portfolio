import React from "react";
const Navbar = () => {
  return (
    <header className=" font-poppins">
      <nav className="flex justify-between items-center">
        <div>
        <img src={`${process.env.PUBLIC_URL}/logo_gopal.png`} alt="logo" className="  ml-7 h-16 w-25 m-4 left-10" />
        </div>
        <div className="">
          <ul className="flex flex-row space-x-12 mr-12">
            <li className="cursor-pointer hover:text-cyan-600">Home</li>
            <li className="cursor-pointer hover:text-cyan-600">About</li>
            <li className="cursor-pointer hover:text-cyan-600">Skills</li>
            <li className="cursor-pointer hover:text-cyan-600">Projects</li>
          </ul>
        </div>
        <div>
          <button className="bg-cyan-200 p-3 pt-2 pb-2 rounded-2xl mr-10 hover:pointer">Contact</button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
