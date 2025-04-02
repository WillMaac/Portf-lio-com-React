import styles from "./Skills.module.css";
import html5Image from "../../assets/img/html5.svg";
import Css3Image from "../../assets/img/css3.svg";
import SassImage from "../../assets/img/scss2.svg";
import JavascriptImage from "../../assets/img/Javascript.svg";
import ReactImage from "../../assets/img/react.svg";
import GitImage from "../../assets/img/git.svg";
import GitHubImage from "../../assets/img/github.svg";
import MongoDbImage from "../../assets/img/mongodb.svg";

export const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Hard-Skills</h2>
      <div className={styles.teste}>
        <div className={styles.tec}>
          <img src={html5Image} alt="HTML5" className={styles.skillImage}/>
          <img src={Css3Image} alt="Css3"  className={styles.skillImage}/>
          <img src={SassImage} alt="Sass"  className={styles.skillImage}/>
          <img src={JavascriptImage} alt="JavaScript"  className={styles.skillImage}/>
          <img src={ReactImage} alt="ReactJs"  className={styles.skillImage}/>
          <img src={MongoDbImage} alt="Mongodb"  className={styles.skillImage}/>
          <img src={GitImage} alt="Git"  className={styles.skillImage}/>
          <img src={GitHubImage} alt="GitHub"  className={styles.skillImage}/>
        </div>
        <h2 className={styles.title}>Soft-Skills</h2>
        
      </div>
    </section>
  );
};