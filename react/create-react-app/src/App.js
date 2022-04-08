import React, { useCallback, useState } from "react";

const App = () => {
  const [contar, setContar] = useState(0);

  const handleClick = useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
