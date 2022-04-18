import React from 'react';

import './App.css';

import foto from './assets/foto.jpg';
import DogSvg from './assets/DogSvg';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSvg color="#84e" />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;
