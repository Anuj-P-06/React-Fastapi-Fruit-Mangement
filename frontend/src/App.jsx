// App.jsx
import React from 'react';
import FruitList from './components/Fruits';

import appleImg from './images/apple.jpg';
import orangeImg from './images/oranges.jpg';
import bananaImg from './images/bananas.jpg';
import grapesImg from './images/grapes.jpg';
import kiwiImg from './images/kiwi.png';
import strawberryImg from './images/strawberry.jpg';

const App = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - 20% */}
      <div className="w-1/5 bg-gradient-to-b from-green-500 to-green-200 p-4 flex flex-col items-center justify-center">
        <img 
          src={appleImg} 
          alt="Apple" 
          className="w-32 h-32 rounded-lg shadow-md mb-4"
        />
        <img 
          src={orangeImg} 
          alt="Orange" 
          className="w-32 h-32 rounded-lg shadow-md mb-4"
        />
        <img 
          src={bananaImg} 
          alt="Banana" 
          className="w-32 h-32 rounded-lg shadow-md"
        />
      </div>

      {/* Main Content - 60% */}
      <div className="w-3/5 bg-cyan-200 flex flex-col">
        <header className="bg-cyan-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold text-cyan-200">Fruit Management App</h1>
        </header>
        <main className="flex-1 p-8">
          <FruitList />
        </main>
      </div>

      {/* Right Panel - 20% */}
      <div className="w-1/5 bg-gradient-to-b from-green-500 to-green-200 p-4 flex flex-col items-center justify-center">
        <img 
          src={grapesImg} 
          alt="Grapes" 
          className="w-32 h-32 rounded-lg shadow-md mb-4"
        />
        <img 
          src={kiwiImg} 
          alt="Kiwi" 
          className="w-32 h-32 rounded-lg shadow-md mb-4"
        />
        <img 
          src={strawberryImg} 
          alt="Strawberry" 
          className="w-32 h-32 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default App;
