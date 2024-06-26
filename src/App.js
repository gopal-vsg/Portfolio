import React from 'react';
import Navbar from './components/navbar';
import Heropage from './components/heropage';

function App() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/bground.jpg')" }}>
      <Navbar />
      <Heropage/>
    </div>
  );
}

export default App;
