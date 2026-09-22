"use client";

import { motion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./Market.module.css";

const products = [
  {
    title: "Car Accessories",
    bottomText: "Must have car care essentials",
    icon: "♟",
    img: "/images/hero/car-accessories.png",
  },
  {
    title: "Car Care Detailing",
    bottomText: "Comfort, Style & Protection",
    icon: "◖",
    img: "/images/hero/car-accessories.png",
  },
  {
    title: "Electronic Smart Gadgets",
    bottomText: "Shine, Protect & Impress",
    icon: "▣",
    img: "/images/hero/image16.png",
  },
];

export default function Market() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={easeOut}
      >
        <p>Obpark Market</p>
        <h2>Everything Your Car Needs.</h2>
      </motion.div>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <motion.article
            className={`${styles.card} image-${index}`}
            key={product.title}
            style={{ backgroundImage: `url(${product.img})` }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...easeOut, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.topLabel}>{product.title}</div>
            <div className={styles.bottomInfo}>
              <div className={styles.iconCircle}>
                <span>{product.icon}</span>
              </div>
              <span className={styles.bottomText}>{product.bottomText}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
