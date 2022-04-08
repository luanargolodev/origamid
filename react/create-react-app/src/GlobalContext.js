import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = useState(0);

  return (
    <GlobalContext.Provider value={{ nome: "Luan", contar, setContar }}>
      {children}
    </GlobalContext.Provider>
  );
};
