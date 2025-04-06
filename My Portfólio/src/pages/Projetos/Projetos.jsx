import styles from "./Projetos.module.css";
import Projeto1 from "../../assets/img/p1.png";
import Html from "../../assets/img/html5.svg";
import Css from "../../assets/img/css3.svg";
import JavaScript from "../../assets/img/Javascript.svg";

export const Projetos = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.gridProjetos}>
        {[...Array(6)].map((_, index) => (
          <div className={styles.containerPhoto} key={index}>
            <h2>Landing Page</h2>
            <img src={Projeto1} className={styles.projects} alt="Projeto" />
            <div className={styles.tec}>
              <img src={Html} className={styles.fotoTec} alt="HTML5" />
              <img src={Css} className={styles.fotoTec} alt="CSS3" />
              <img src={JavaScript} className={styles.fotoTec} alt="JavaScript" />
            </div>
            <div className={styles.containerBtn}>
              <button className={styles.btn}>Código</button>
              <button className={styles.btn}>Preview</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};