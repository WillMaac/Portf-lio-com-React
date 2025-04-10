 import styles from "./About.module.css";
 import {Card} from "../../components/Cards/Card"


export const About = () =>{
return(
    <section className={styles.container}>
<h2 className={styles.title}>Sobre <span>Min</span></h2>
<div className={styles.teste}>
    <p className={styles.sobre}>
    Olá, meu nome é Anderson De Jesus, nascido no estado de São Paulo. Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP (Faculdade de Informática e Administração Paulista) e, em 2023, concluí o curso técnico em Mecânica Industrial integrado ao Ensino Médio no IFSP (Instituto Federal de São Paulo). Atualmente, atuo como desenvolvedora Back-end com foco em Java e estou expandindo minhas habilidades para a área de Infraestrutura e DevOps, com conhecimentos em ferramentas como Terraform, Microsoft Azure (Cloud), Docker, entre outras. Ao longo da minha trajetória, tive a oportunidade de desenvolver projetos relevantes para empresas renomadas, como Porto Seguro, FIA, Ultragaz, Ultracargo, Mahindra, Softtek, entre outras. Este portfólio é um espaço onde apresento meus principais projetos e talentos. Convido você a explorar meu trabalho e conhecer mais sobre minha trajetória profissional.
    </p>
    
</div>

<div className={styles.cardsContainer}>
{/* 👇 Seção nova com os Cards */}
      <div id="informacoes" className={styles.cardsContainer}>
        <Card
          titulo="Currículo"
          descricao="Apresento meus conhecimentos adquiridos, formações e experiências práticas."
          textoBotao="Baixar CV"
          onClick={() => alert("Baixando CV...")}
        />
        <Card
          titulo="Certificados"
          descricao="Certificados de plataformas como Alura, FIAP, Udemy, etc."
          textoBotao="Ver Certificados"
          onClick={() => alert("Abrindo certificados...")}
        />
        <Card
          titulo="Experiência"
          descricao="Experiência prática com empresas reais e soluções tecnológicas."
          textoBotao="Ver Experiência"
          onClick={() => alert("Mostrando experiência...")}
        />
      </div>
      </div>
    </section>
)
} 