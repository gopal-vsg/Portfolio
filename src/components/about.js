import React from "react";

const About = () => {
  return (
    <section className="py-20 md:py-28 lg:py-1" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-3xl font-poppins font-bold text-gray-900 mb-8 text-center">
            About <span className="text-sky-600">Me</span>
          </h2>
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-10 lg:p-12">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-sky-400 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed text-center italic">
              &ldquo;Hello, I'm Sai Gopal Vallu, a third-year B.Tech student at SRM University, specializing in Artificial Intelligence and Machine Learning. With a passion for technology and innovation, I am driven by curiosity and a desire to explore the endless possibilities that this ever-evolving field offers. I thrive on challenges and am always eager to learn new skills and apply them to real-world problems. My goal is to contribute meaningfully to the tech community and collaborate with like-minded individuals. Let’s connect and explore opportunities to innovate and make a difference together.&rdquo;
            </p>
            <svg className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6 h-16 w-16 text-sky-400 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M22.648 28C27.544 24.544 31 18.88 31 12.64c0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;