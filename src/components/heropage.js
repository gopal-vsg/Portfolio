import React from "react";

const Heropage = () => {
  return (
    <div className="container mx-auto px-4 py-36">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
          <img
            src={`${process.env.PUBLIC_URL}/intro.png`}
            alt="Introduction"
            className="h-auto max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="Profile"
            className="h-auto max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;