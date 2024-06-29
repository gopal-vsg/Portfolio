import React from 'react';
import Navbar from './components/navbar';
import Heropage from './components/heropage';
import About from './components/about';
import Skill from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="bg-cover bg-center min-h-screen top-0" style={{ backgroundImage: "url('/bground.jpg')",backgroundAttachment:"fixed" }}>
      <Navbar />
     
      <Heropage/>
      <div className='m-10'></div>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  );
}

export default App;
