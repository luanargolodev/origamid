import React, { useState } from 'react';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const App = () => {
  const [ativo, setAtivo] = useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Title>Meu Título</Title>
          <Paragrafo>Meu Parágrafo</Paragrafo>
          <Preco cor="#84e">R$ 1000</Preco>
        </Produto>
        <Produto>
          <Title>Meu Título</Title>
          <Paragrafo>Meu Parágrafo</Paragrafo>
          <Preco cor="#232">R$ 2000</Preco>
        </Produto>
      </ProdutosContainer>
      <Button ativo={ativo} onClick={handleClick}>
        Ativar
      </Button>
    </div>
  );
};

export default App;
