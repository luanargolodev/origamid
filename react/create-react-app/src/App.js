import React, { useState } from "react";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");
  const [frutas, setFrutas] = useState("");
  const [linguagens, setLinguagens] = useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={["Limão", "Laranja", "Uva"]}
        value={frutas}
        setValue={setFrutas}
      />

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
