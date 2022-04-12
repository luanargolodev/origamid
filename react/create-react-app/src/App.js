import React, { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");

  return (
    <form>
      <Select
        options={["Celular", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
