import React, { useState } from "react";

const App = () => {
  const [textarea, setTextarea] = useState("");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      {textarea}

      <button>Enviar</button>
    </form>
  );
};

export default App;
