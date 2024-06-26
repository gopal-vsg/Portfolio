import React from 'react';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/Block-Background-Large.jpg')" }}>
      <Navbar />
      <div className="container mx-auto mt-4 bg-white bg-opacity-0 p-4 rounded">
        <h1 className="text-2xl font-poppins font-bold">Welcome to MyWebsite</h1>
        <p className="mt-2">This is a simple React app with a Tailwind CSS Navbar.</p>
      </div>
    </div>
  );
}

export default App;
