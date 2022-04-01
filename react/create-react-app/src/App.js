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

const App = () => {
  return (
    <>
      <Loading />
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
