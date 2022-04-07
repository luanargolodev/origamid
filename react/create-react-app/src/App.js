import React, { useEffect, useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [produto, setProduto] = useState(null);
  const key = "app";

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    const produtoLocal = localStorage.getItem(key);
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) localStorage.setItem(key, produto);
  }, [produto]);

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
