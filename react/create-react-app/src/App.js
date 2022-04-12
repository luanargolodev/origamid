import React, { useState } from "react";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Seu nome é " + nome + " e seu e-mail é " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
