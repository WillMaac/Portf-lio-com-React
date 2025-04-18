import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Headeader } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Headeader/>
      <About/>
      <Skills/>
    </div>
  );
}
export default App;
