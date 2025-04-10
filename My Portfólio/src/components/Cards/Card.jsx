// src/components/Card.jsx
import styles from './Card.module.css';

 export const Card = ({ titulo, descricao, textoBotao, onClick }) => {
  return (
    <div className={styles.cardsContainer}>
    <div className={styles.card}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.descricao}>{descricao}</p>
      <button className={styles.botao} onClick={onClick}>
        {textoBotao}
      </button>
    </div>
    </div>
  );
}

