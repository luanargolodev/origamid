import React, { useState } from "react";

import Input from "./components/Input";

const App = () => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="CEP"
          id="cep"
          placeholder="000000-000"
          value={cep}
          onBlur={handleBlur}
          setValue={setCep}
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
