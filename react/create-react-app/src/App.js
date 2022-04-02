import React, { useState } from "react";

import Modal from "./Modal";
import ButtonModal from "./ButtonModal";

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>{modal ? "Modal aberto" : "Modal fechado"}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
