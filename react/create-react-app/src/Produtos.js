import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb RAM", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb RAM", "128gb"] },
  ];

  return (
    <section>
      <Titulo titulo="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
}

export default Produtos;
