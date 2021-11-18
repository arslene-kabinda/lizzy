import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div
      className={
        colorChange
          ? `${styles.mainWrapper} ${styles.active}`
          : `${styles.mainWrapper}`
      }
    >
      <div className={styles.navLogo}> Lizzy</div>
      <nav className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Accueil</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Accueil</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Accueil</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>
                <Button variant="outlined">Outlined</Button>
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Accueil</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
