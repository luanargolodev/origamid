import React, { useState } from "react";

const App = () => {
  const [cores, setCores] = useState([""]);

  function handleChange({ target }) {
    if (target.checked) setCores([...cores, target.value]);
    else setCores(cores.filter((cor) => cor !== target.value));
  }

  return (
    <form>
      <label htmlFor="termos">
        <input
          type="checkbox"
          value="azul"
          checked={cores.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>

      <label htmlFor="termos">
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
