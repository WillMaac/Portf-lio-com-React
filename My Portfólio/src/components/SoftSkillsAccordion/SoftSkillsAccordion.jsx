import { useState } from "react";
import styles from "./SoftSkillsAccordion.module.css";

const softSkills = [
  "Trabalho em Equipe",
  "Comunicação Clara",
  "Pensamento Crítico e Resolução de Problemas",
  "Gestão de Tempo e Prioridades",
  "Flexibilidade e Adaptabilidade",
  "Paciência e Resiliência",
];

export function SoftSkillsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {softSkills.map((skill, index) => (
        <div key={index} className={styles.card}>
          <button
            onClick={() => toggleAccordion(index)}
            className={styles.button}
          >
            <span>{skill}</span>
            <span className={styles.icon}>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className={styles.content}>
              <p></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
