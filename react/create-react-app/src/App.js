import React, { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Input
        id="password"
        label="Senha"
        value={password}
        setValue={setPassword}
      />
    </div>
  );
};

export default App;
