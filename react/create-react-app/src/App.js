import React, { useRef, useState } from "react";

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  function handleClick() {
    if (input === "") return alert("Escreva algo no comentário!");
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputElement}
      />
      <button onClick={handleClick}>Enviar comentário</button>
    </div>
  );
};

export default App;
