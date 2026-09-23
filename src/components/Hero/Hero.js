"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./Hero.module.css";

const trustItems = [
  "GPS-Free Indoor Navigation",
  "AI Parking Intelligence",
  "Vehicle Locator",
  "Digital Twin Mapping",
  "Smart Parking Navigation",
  "Real-Time Occupancy",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 160, damping: 28, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 160, damping: 28, mass: 0.2 });

  useEffect(() => {
    const mq = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 901px)",
    );
    const update = () => setEnableParallax(mq.matches && !reduceMotion);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduceMotion]);

  function onMouseMove(event) {
    if (!enableParallax) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx * 5);
    rawY.set(ny * 4);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <section
      id="home"
      className={styles.hero}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ x, y }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className={styles.scanLine} aria-hidden="true" />
      </motion.div>

      <motion.div
        className={styles.trustBar}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
        }}
      >
        {trustItems.map((item) => (
          <motion.div
            key={item}
            className={styles.trustItem}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: easeOut },
            }}
          >
            <span className={styles.trustIcon}>✦</span>
            <span>{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
