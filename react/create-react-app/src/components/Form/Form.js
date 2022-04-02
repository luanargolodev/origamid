import React from "react";
import Button from "./Button";

import Input from "./Input";

const Form = () => {
  return (
    <form>
      <p>
        <Input
          label="E-mail"
          id="email"
          type="email"
          placeholder="seuemail@provedor.com"
          required
        />
      </p>
      <p>
        <Input
          label="Senha"
          id="password"
          type="password"
          placeholder="******"
          required
        />
      </p>
      <Button />
    </form>
  );
};

export default Form;
