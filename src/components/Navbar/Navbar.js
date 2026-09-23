"use client";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.glassNavbar}>
      <div className={styles.navLinks}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#solutions" className={styles.navLink}>Solutions</a>
        <a href="#resources" className={styles.navLink}>Invest now</a>
      </div>

      <div className={styles.logo}>OBPARK</div>

      <div className={styles.navActions}>
        <button className={styles.getAppBtn}>
          <span className={styles.dot}>●</span> GET APP
        </button>
        <button className={styles.iconBtn} aria-label="Call">☎</button>
        <button className={styles.iconBtn} aria-label="App">◎</button>
      </div>
    </nav>
  );
}