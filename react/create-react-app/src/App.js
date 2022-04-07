import React, { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
