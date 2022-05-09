import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
=======

import './App.css';

import foto from './assets/foto.jpg';
import DogSvg from './assets/DogSvg';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSvg color="#84e" />
      <img src={foto} alt="Cachorro" />
>>>>>>> c44b81d848e8975122f3bbe7fae1d873173a6032
    </div>
  );
};

export default App;
