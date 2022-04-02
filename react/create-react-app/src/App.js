import React, { useState } from "react";

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        {active ? "Botão Ativo" : "Botão Inativo"}
      </button>
    </div>
  );
};

export default App;
