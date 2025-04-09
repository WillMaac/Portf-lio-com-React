import styles from "./Skills.module.css";
import html5Image from "../../assets/img/html5.svg";
import Css3Image from "../../assets/img/css3.svg";
import SassImage from "../../assets/img/scss2.svg";
import JavascriptImage from "../../assets/img/Javascript.svg";
import ReactImage from "../../assets/img/react.svg";
import GitImage from "../../assets/img/git.svg";
import GitHubImage from "../../assets/img/github.svg";
import MongoDbImage from "../../assets/img/mongodb.svg";
import { AccordionCard } from "../AccordionCard/AccordionCard";

export const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title1}>Hard-<span>Skills</span></h2>
      <div className={styles.teste}>
        <div className={styles.tec}>
          <img src={html5Image} alt="HTML5" className={styles.skillImage} />
          <img src={Css3Image} alt="Css3" className={styles.skillImage} />
          <img src={SassImage} alt="Sass" className={styles.skillImage} />
          <img
            src={JavascriptImage}
            alt="JavaScript"
            className={styles.skillImage}
          />
          <img src={ReactImage} alt="ReactJs" className={styles.skillImage} />
          <img src={MongoDbImage} alt="Mongodb" className={styles.skillImage} />
          <img src={GitImage} alt="Git" className={styles.skillImage} />
          <img src={GitHubImage} alt="GitHub" className={styles.skillImage} />
        </div>
        <h2 className={styles.title2}>Soft-<span>Skills</span></h2>
        <div>
          <div className={styles.cardSkills}>
      <AccordionCard
        titulo="Trabalho em Equipe"
        conteudo="Saber colaborar com colegas, ouvir opiniões diferentes e trabalhar em conjunto para atingir objetivos comuns."
      />
      <AccordionCard
        titulo="Comunicação Clara"
        conteudo="Expressar ideias de forma objetiva, tanto na fala quanto na escrita, facilita o entendimento e evita mal-entendidos."
      />
      <AccordionCard
        titulo="Pensamento Crítico"
        conteudo="Analisar situações de forma lógica e racional, questionando suposições e avaliando alternativas."
      />
<AccordionCard
        titulo="Criativo"
        conteudo="Saber colaborar com colegas, ouvir opiniões diferentes e trabalhar em conjunto para atingir objetivos comuns."
      />



      <AccordionCard
        titulo="Gestão de Tempo e Prioridades"
        conteudo="Lidar com deadlines, prioridades de tarefas e manter o foco — especialmente importante em ambientes remotos ou com várias entregas."
      />

<AccordionCard
        titulo="Flexibilidade e Adaptabilidade"
        conteudo="O mundo do Front-End muda rápido (novos frameworks, novas técnicas) — é importante saber adaptar-se."
      />

<AccordionCard
        titulo="Paciência e Resiliência"
        conteudo="Nem sempre as coisas funcionam à primeira (quem nunca ficou horas com um bug?), por isso é essencial manter a calma e persistir."
      />
      </div>
    </div>
      </div>
    </section>
  );
};
