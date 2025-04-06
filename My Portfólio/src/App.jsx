import styles from "./App.module.css";
import { About } from "./pages/About/About";
import { Headeader } from "./pages/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Projetos } from "./pages/Projetos/Projetos";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Headeader/>
      <div id="sobre">
        <About />
      </div>
      <Skills/>
      <div id="projetos">
        <Projetos />
      </div>
      <div id="contatos">
        <Contact />
      </div>
    </div>
  );
}
export default App;
