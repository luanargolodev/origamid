import React from "react";

const App = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  const livros = [
    {
      nome: "A Game of Thrones",
      ano: 1996,
    },
    {
      nome: "A Clash of Kings",
      ano: 1998,
    },
    {
      nome: "A Storm of Swords",
      ano: 2000,
    },
  ];

  return (
    <>
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>

      <ul>
        {livros
          // Filtrando os livros que possuem o ano maior ou igual a 1998
          .filter((livro) => livro.ano >= 1998)
          // Percorrendo todos os livros e desestruturando o nome e o ano da array livros
          .map(({ nome, ano }) => (
            // Criando uma li
            <li key={nome}>
              {/* Exibindo o nome do livro e o ano */}
              {nome}, {ano}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
