import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Head from '../../components/Head';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((res) => res.json())
      .then((json) => setProdutos(json))
      .catch((err) => console.log(err));
  }, []);

  if (produtos === null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek | Produtos" description="Descrição do site Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
