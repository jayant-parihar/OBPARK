"use client";

import { motion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./Resources.module.css";

const resources = [
  {
    title:
      "Augmented Reality vs. Virtual Reality vs. Mixed Reality: Key Differences.",
    date: "30.07.25",
    image: "/images/hero/resource.png",
  },
  {
    title: "How Spatial Computing is Redefining Business Operation.",
    date: "30.07.25",
    image: "/images/hero/resource2.png",
  },
  {
    title:
      "How AR-Powered Car Parking Systems are Solving Urban Mobility.",
    date: "30.07.25",
    image: "/images/hero/resource3.png",
  },
];

export default function Resources() {
  return (
    <section id="resources" className={styles.section}>
      <motion.p
        className={styles.label}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={easeOut}
      >
        The Resources
      </motion.p>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ ...easeOut, delay: 0.08 }}
      >
        Immersive Tech Resource Library
      </motion.h2>

      <div className={styles.grid}>
        {resources.map((resource, index) => (
          <motion.article
            className={styles.card}
            key={resource.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...easeOut, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={resource.image}
                alt={resource.title}
                className={styles.image}
              />
            </div>
            <div className={styles.meta}>
              <span>BLOG</span>
              <span className={styles.date}>{resource.date}</span>
            </div>
            <h3>{resource.title}</h3>
          </motion.article>
        ))}
      </div>

      <motion.button
        className={styles.viewAllBtn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        View All
      </motion.button>
    </section>
  );
}
