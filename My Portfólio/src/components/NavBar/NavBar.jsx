import React, { useState } from "react";
import styles from "./NavBar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Anderson
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.items} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#experiencia">Experiência</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
