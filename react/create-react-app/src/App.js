import React from "react";

import Input from "./components/Input";
import useForm from "./hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" id="nome" {...nome} />

        <Input
          label="CEP"
          type="text"
          id="cep"
          placeholder="000000-000"
          {...cep}
        />

        <Input label="E-mail" type="email" id="email" {...email} />

        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
