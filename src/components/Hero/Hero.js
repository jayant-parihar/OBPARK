"use client";

import { motion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const trustItems = [
    "GPS-Free Indoor Navigation",
    "AI Parking Intelligence",
    "Vehicle Locator",
    "Digital Twin Mapping",
    "Smart Parking Navigation",
    "Real-Time Occupancy",
  ];

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className={styles.trustBar}>
        {trustItems.map((item, index) => (
          <motion.div
            key={item}
            className={styles.trustItem}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...easeOut, delay: index * 0.08 }}
          >
            <span className={styles.trustIcon}>✦</span>
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
