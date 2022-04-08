import React, { useContext } from "react";

import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { dados } = useContext(GlobalContext);

  if (dados === null) return null;

  return (
    <div>
      <p>
        Produto:{" "}
        {dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </p>
    </div>
  );
};

export default Produto;
