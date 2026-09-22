"use client";

import { useState } from "react";
import { motion } from "motion/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Invest now</a>
        </div>

        <a href="/" className={styles.logo} aria-label="OBPARK home">
          <img
            src="/Group23.svg"
            alt="OBPARK Logo"
            className={styles.logoImage}
          />
        </a>

        <div className={styles.actions}>
          <a href="#contact" className={styles.getApp}>
            <span>●</span> GET APP
          </a>

          <button className={styles.iconButton} aria-label="Call">
            ☎
          </button>

          <button className={styles.iconButton} aria-label="App">
            ◉
          </button>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>
            Solutions
          </a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>
            Invest now
          </a>
        </div>
      )}
    </motion.header>
  );
}
