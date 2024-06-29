import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_v55en5j", // Replace with your EmailJS service ID
        "template_a1u2m8b", // Replace with your EmailJS template ID
        formData,
        "CIG2otsPCGfkbxtPd" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setFormData({
      from_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-gray-300 py-16 pb-6 bg-cover bg-opacity-30" style={{ backgroundImage: "url('/19007.jpg')" }}>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
    <div className="flex flex-col md:flex-row gap-8">
      {/* Message Me Section */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <h2 className="text-3xl font-poppins font-extrabold text-gray-900 mb-6 text-center md:text-left">
          Message <span className="text-sky-600">Me</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          ></textarea>
          <button className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Let's Connect Section */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-3xl font-poppins font-extrabold text-gray-900 mb-6 text-center md:text-left">
          Let's <span className="text-sky-600">Connect</span>
        </h2>
        <div className="space-y-4">
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-sky-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>saigopalvallu7@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-sky-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+91 6300 891 446</span>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/gopal-vallu-a4822b262/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="h-10 w-10 text-sky-600 hover:text-sky-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/gopal-vsg"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="h-10 w-10 text-sky-600 hover:text-sky-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="flex justify-center md:justify-start mt-8">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Gopal_vallu.pdf"
              className="bg-sky-600 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-700 transition duration-300"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="mt-16 border-t border-gray-300 pt-8 text-center text-gray-500">
    <p>Made by ✨ Gopal Vallu - 2024</p>
  </div>
</section>

  );
};

export default Footer;
