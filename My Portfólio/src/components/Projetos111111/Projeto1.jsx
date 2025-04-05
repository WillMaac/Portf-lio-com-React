import Projeto1 from "../../assets/img/p1.png";
import Html from "../../assets/img/html5.svg";
import Css from "../../assets/img/css3.svg";
import JavaScript from "../../assets/img/Javascript.svg";


export const Peojeto2 = () => {
    return(
<div>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.containerPhoto}>
          <h2>Landinpage</h2>
          <img src={Projeto1} className={styles.projects} />
          <div className={styles.tec}>
            <img src={Html} className={styles.fotoTec} />
            <img src={Css} className={styles.fotoTec} />
            <img src={JavaScript} className={styles.fotoTec} />
          </div>
          <div className={styles.containerBtn}>
            <button className={styles.btn}>Código</button>
            <button className={styles.btn}>Previw</button>
            <h2>Landinpage</h2>
          <img src={Projeto1} className={styles.projects} />
          <div className={styles.tec}>
            <img src={Html} className={styles.fotoTec} />
            <img src={Css} className={styles.fotoTec} />
            <img src={JavaScript} className={styles.fotoTec} />
          </div>
          <div className={styles.containerBtn}>
            <button className={styles.btn}>Código</button>
            <button className={styles.btn}>Previw</button>
          </div>
        </div>
      </div>
);
      };