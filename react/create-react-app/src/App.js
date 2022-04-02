import React from "react";

import Footer from "./components/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header";

const Loading = () => {
  const active = true;
  if (active) {
    return <p>Carregando...</p>;
  } else {
    return null;
  }
};

const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <>
      <Loading />
      <Header />
      <Form />
      <Footer />
      <Titulo texto="Meu Primeiro Titulo" cor="grey" />
      <Titulo texto="Meu Segundo Titulo" cor="blue" />
    </>
  );
};

export default App;
