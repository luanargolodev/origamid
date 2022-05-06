import React from 'react';
import styles from './styles.module.css';
import foto from '../../assets/contato.jpg';
import Head from '../../components/Head';

const Contact = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>ipsluan@icloud.com</li>
          <li>73 9 9193-3732</li>
          <li>Ilhéus, Bahia</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
