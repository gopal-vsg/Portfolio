import React from "react";

const Skill = () => {
    const titles = [
        { name: 'React', image: `${process.env.PUBLIC_URL}/Skills/react.png` },
        { name: 'JS', image: `${process.env.PUBLIC_URL}/Skills/js.png` },
        { name: 'Tailwind', image: `${process.env.PUBLIC_URL}/Skills/tailwind.png` },
        { name: 'Svelte', image: `${process.env.PUBLIC_URL}/Skills/svelte.png` },
        { name: 'Sveltekit', image: `${process.env.PUBLIC_URL}/Skills/sveltekit.png` },
        { name: 'Supabase', image: `${process.env.PUBLIC_URL}/Skills/supabase.png` },
        { name: 'Tensorflow', image: `${process.env.PUBLIC_URL}/Skills/tensorflow.png` },
        { name: 'Scikit', image: `${process.env.PUBLIC_URL}/Skills/scikit.png` },
        { name: 'Git', image: `${process.env.PUBLIC_URL}/Skills/git.png` },
        { name: 'Mysql', image: `${process.env.PUBLIC_URL}/Skills/mysql.png` },
        
        
    ];

    return (
        <section id="skills"> 
        <div className="mr-10 ml-10 mt-10 p-8  md:p-16 rounded-xl ">
    <h2 className="text-3xl sm:text-4xl md:text-3xl font-poppins font-extrabold text-gray-900 mb-12 text-center">
        Skill <span className="text-sky-600  decoration-sky-500">Set</span>
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {titles.map((title, index) => (
            <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 flex flex-col items-center">
                    <img src={title.image} alt={title.name} className="w-20 h-20 mb-4 object-contain" />
                    <p className="text-center font-poppins font-semibold text-gray-800">{title.name}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
    </section>
    );
}

export default Skill;
