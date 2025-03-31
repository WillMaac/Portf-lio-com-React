import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Headeader } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Headeader/>
      <About/>
    </div>
  );
}
export default App;
