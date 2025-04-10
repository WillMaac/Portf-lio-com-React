import styles from "./Contact.module.css"
import Email from "../../assets/img/emailcon.png"
import Linkedin from "../../assets/img/linkedincon.png"
import GitHub from "../../assets/img/githubcon.png"
export const Contact = () =>{
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Contatos</h1>
        <div className={styles.containerIcone}>
            <ul>
            <li>
    <a 
        href="mailto:will.salvatore98@gmail.com" 
        className={styles.link}
    >
        <img src={Email} alt="Ícone do email" className={styles.icone} />
        <span className={styles.label}>Will.salvatore98@gmail.com</span>
    </a>

</li>
                <li>
    <a 
        href="https://www.linkedin.com/in/anderson-de-jesus-480b2a309/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.link}
    >
        <img src={Linkedin} alt="Ícone do LinkedIn" className={styles.icone} />
        <span className={styles.label}>Anderson De Jesus</span>
    </a>
</li>
                <li>
    <a 
        href="https://github.com/WillMaac" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.link}
    >
        <img src={GitHub} alt="Ícone do LinkedIn" className={styles.icone} />
        <span className={styles.label}>WillMaac</span>
    </a>
</li>
            </ul>
        </div>
        <div>
            <p className={styles.footer}>&copy;2025 Anderson De Jesus. Todos os direitos reservados.</p>
        </div>
        </section>
    )
}