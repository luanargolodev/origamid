import React, { useContext } from "react";

import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }

  return (
    <div>
      <p>Nome: {global.nome}</p>
      <p>Produto: {global.contar}</p>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default Produto;
