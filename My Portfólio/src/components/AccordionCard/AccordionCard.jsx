import { useState } from "react";
import styles from "./AccordionCard.module.css";

export function AccordionCard({ titulo, conteudo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={toggleAccordion}>
        <span>{titulo}</span>
        <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>{conteudo}</p>
        </div>
      )}
    </div>
  );
}
