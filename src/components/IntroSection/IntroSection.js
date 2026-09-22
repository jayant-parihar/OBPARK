"use client";

import { motion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  const featuresList = [
    "GPS - Free Indoor Navigation",
    "AI Parking Intelligence",
    "Vehicle Locator",
    "Digital Twin Mapping",
    "Smart Parking Navigation",
    "Real-Time Occupancy",
  ];

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.topContent}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={easeOut}
        >
          <h2>
            The Future of Parking is GPS-Free. Powered by AI & Spatial
            Computing.
          </h2>
          <p>
            Intelligent Indoor Parking Navigation, Smart Occupancy Management &
            Digital Twin Technology. OBPARK transforms conventional parking
            facilities into intelligent digital ecosystems using Spatial
            Computing, Artificial Intelligence, Machine Learning and Augmented
            Reality. Instead of installing thousands of expensive sensors,
            OBPARK creates a digital twin of your parking facility through a
            one-time mapping process, enabling real-time parking guidance,
            occupancy intelligence, booking, navigation, and analytics.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...easeOut, delay: 0.12 }}
        >
          <h3>Trusted by the Future of Smart Infrastructure Designed for</h3>

          <div className={styles.locationsText}>
            Shopping Malls, Airports
            <br />
            Hospitals, Commercial Buildings,
            <br />
            Residential Communities, Smart
            <br />
            Cities, Universities, Hotels, IT
            <br />
            Campuses, Stadiums
          </div>

          <div className={styles.buttons}>
            <motion.button
              className={styles.bookDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              BOOK DEMO
            </motion.button>
            <motion.button
              className={styles.knowHow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              KNOW HOW
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className={styles.pillContainer}>
        {featuresList.map((feature, index) => (
          <motion.div
            key={feature}
            className={styles.pill}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            whileHover={{ x: 5 }}
          >
            <span className={styles.icon}>◈</span>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
