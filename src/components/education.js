import React from "react";

const Education = () => {
    const edu = [
        {
            standard: 'B-Tech CSE AI-ML',
            img: `${process.env.PUBLIC_URL}/education/clg.png`,
            inst: 'SRM Institute of science and technology',
            place: 'Chennai, TamilNadu',
            year: '2022 - 2026'
        },
        {
            standard: '12th Class',
            img: `${process.env.PUBLIC_URL}/education/inter.png`,
            inst: 'SriChaitanya Jr College',
            place: 'Kakinda, Andhra Pradesh',
            year: '2020-2022'
        },
        {
            standard: '10th Class',
            img: `${process.env.PUBLIC_URL}/education/school.png`,
            inst: 'Ashram Public School',
            place: 'Kakinda, Andhra Pradesh',
            year: '2019-2020'
        }
    ]

    return (
        <section id="education" className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-3xl font-poppins font-extrabold text-gray-900 mb-12 text-center">
                    My <span className="text-sky-600">Education</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {edu.map((item, index) => (
                        <div key={index} className="bg-white  rounded-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
                            <div className="p-6">
                                <img src={item.img} alt={item.standard} className="w-28 h-28 mx-auto mb-4 object-contain" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.standard}</h3>
                                <p className="text-gray-600 text-center mb-2">{item.inst}</p>
                                <p className="text-gray-500 text-sm text-center mb-2">{item.place}</p>
                                <p className="text-sky-600 font-medium text-center">{item.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;