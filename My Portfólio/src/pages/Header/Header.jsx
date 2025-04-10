import Perfil from "../../assets/img/perfil.png";
import styles from "./Header.module.css"
import Fundo from "../../components/Background/Background" 


export const Headeader = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.content}>
        <h1 className={styles.title}>Olá Mundo, meu nome é:</h1>
        <p className={styles.title1}>Anderson De Jesus</p>
        <p className={styles.description}>Front-End Web Developer</p>
        <button className={styles.contactBtn}>
          <a href="Willsouzza.333@gmail.com" >Contate-me</a>
          
        </button>
        
      </div>
      <img src={Perfil} alt= "Foto de Perfil" className={styles.fotoPerfil}/>
      <div className={styles.topBlur}/>
      <div className={styles.btn}/>
      
    </section>
    
  );
};
