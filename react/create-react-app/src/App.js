import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("Seu nome é " + form.nome + " e seu e-mail é " + form.email);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
