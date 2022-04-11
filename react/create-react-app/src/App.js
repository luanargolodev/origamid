import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";

import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) {
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

        {data.map((produto) => (
          <h1 key={produto.id}>{produto.nome}</h1>
        ))}
      </div>
    );
  } else return null;
};

export default App;
