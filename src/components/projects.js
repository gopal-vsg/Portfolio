import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const details = [
    {
      name: "Active Crash Detection",
      img: `${process.env.PUBLIC_URL}projects/accident.png`,
      description:
        "Utilizing AI crash detection on Jetson Nano, incidents trigger alert frames to AWS cloud. The severity of crashes determines automated email alerts to emergency services, ensuring swiftresponse",
        link : 'https://github.com/gopal-vsg/Active-Crash-Detection-and-Alarming-System'
    },
    {
      name: "Digital Twin - SIH2023",
      img: `${process.env.PUBLIC_URL}projects/digital.png`,
      description:
        "Machine learning, using real power generation data, replicates system behavior. This virtual testing ground identifies anomalies, mitigating risks associated with actual machinery",
        link : 'https://github.com/gopal-vsg/Digital_Twin_of_power_generation_systems_SIH_Internal_hackathon_2023'
    },
    {
      name: "Gen AI - Tune&Tale",
      img: `${process.env.PUBLIC_URL}projects/genai.png`,
      description:
        "Integrating Generative AI tools such as Transformers and SentencePiece, 'Tune & Tale' crafts immersive narratives with visuals and music offering a unique fusion of art and technology.",
      link : 'https://github.com/gopal-vsg/Generative-AI-LLM-'
    },
    {
      name: "Legal Link ",
      img: `${process.env.PUBLIC_URL}projects/legal.png`,
      description:
        "This website is a comprehensive tool designed to streamline and manage legal cases. The website also provides details of your case, using a classification model, which helps classify your case type.",
        link : 'https://github.com/gopal-vsg/Legal-Link'
    },
    {
      name: "Facial Emotion Detection",
      img: `${process.env.PUBLIC_URL}projects/facial.png`,
      description:
        "Tailored for facial expression recognition, this CNN-based system extracts features with three convolutional layers. Dense layers process features for multi-class emotion classification",
        link : 'https://github.com/gopal-vsg/Facial_expression_recognition_Using_CNN'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="mt-16 bg-sky-200 pt-8 pb-10" id="projects">
      <div className="w-11/12 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-3xl font-poppins font-extrabold text-gray-900 mb-8 text-center">
        My <span className="text-sky-600  decoration-sky-500">Work</span>
    </h2>
        <Slider {...settings} className="project-slider">
          {details.map((p, index) => (
            <div key={index} className="px-3">
              <div className="bg-white   rounded-1xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-6">
                  <h3 className=" font-poppins text-xl font-semibold text-gray-900 mb-3">{p.name}</h3>
                  <p className="text-gray-600 mb-4">{p.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" onClick={()=> window.open(p.link,'_blank')}>
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
