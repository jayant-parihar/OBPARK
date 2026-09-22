"use client";

import { motion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./FeaturedProduct.module.css";

export default function FeaturedProduct() {
  return (
    <section className={styles.section}>
      <motion.p
        className={styles.featureLabel}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={easeOut}
      >
        Feature Product
      </motion.p>

      <div className={styles.product}>
        <motion.div
          className={styles.productImage}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/images/hero/feature.png"
            alt="Microfiber Cloth"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ ...easeOut, delay: 0.2 }}
        >
          <h2>Microfiber Cloth</h2>
          <p className={styles.description}>
            SOFTSPUN Microfiber Cloth Silk Banded Edges 800 GSM 30X40 cms 3pcs
            Yellow+Grey! Silk Banded Edge Towel Set Extra Thick Microfiber
            Cleaning Cloths Perfect for Bike Auto Cars Both Interior and
            Exterior.
          </p>
          <motion.button
            className={styles.addButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Add
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
