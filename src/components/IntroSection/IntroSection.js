"use client";

import { motion } from "motion/react";
import { easeOut, hoverGrow, tapShrink, viewportOnce } from "@/lib/motion";
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
              whileHover={hoverGrow}
              whileTap={tapShrink}
            >
              BOOK DEMO
            </motion.button>
            <motion.button
              className={styles.knowHow}
              whileHover={hoverGrow}
              whileTap={tapShrink}
            >
              KNOW HOW
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.pillContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {featuresList.map((feature) => (
          <div key={feature} className={styles.pill}>
            <motion.div
              className={styles.pillInner}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: easeOut },
              }}
            >
              <span className={styles.icon}>◈</span>
              <span>{feature}</span>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
