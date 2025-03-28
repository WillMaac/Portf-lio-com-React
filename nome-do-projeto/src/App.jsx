import styles from "./App.module.css";
import { Headeader } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Headeader/>
    </div>
  );
}
export default App;
