"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";
import styles from "./Enterprise.module.css";

const questions = [
  {
    title: "Faster Deployment",
    answer:
      "OBPARK maps a facility once instead of installing thousands of sensors, so operators can launch faster with less on-site hardware work.",
  },
  {
    title: "Better Customer Experience",
    answer:
      "Drivers get indoor navigation, occupancy visibility, and vehicle location support, which reduces search time and congestion inside the garage.",
  },
  {
    title: "Higher Parking Revenue",
    answer:
      "Real-time occupancy and analytics help operators fill more spaces, reduce leakage, and improve turnover without extra sensor maintenance.",
  },
  {
    title: "Scalable Smart Platforms",
    answer:
      "The platform is software-first and cloud-managed, so additional sites can be added without repeating a large hardware rollout.",
  },
];

export default function Enterprise() {
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className={styles.section}>
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={easeOut}
      >
        <p>A Product By Obrive</p>
        <h2>Why Enterprise Customers Choose OBPARK</h2>
      </motion.div>

      <div className={styles.problemGrid}>
        <motion.div
          className={`${styles.infoCard} ${styles.problem}`}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ ...easeOut, delay: 0 }}
        >
          <div className={styles.enterpriseLabel}>
            <span className={styles.toggle}>
              <span></span>
            </span>
            <span>Enterprise</span>
          </div>
          <h3>The Problem</h3>
          <p>
            Traditional parking systems are expensive and inefficient. Parking
            operators often struggle with: Drivers wasting time searching for
            spaces, Traffic congestion inside parking structures, High
            installation costs, Sensor maintenance, Poor customer experience,
            Revenue leakage, Limited occupancy visibility, Lack of real-time
            analytics
          </p>
        </motion.div>

        <motion.div
          className={`${styles.infoCard} ${styles.solution}`}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ ...easeOut, delay: 0.12 }}
        >
          <div className={styles.enterpriseLabel}>
            <span className={styles.toggle}>
              <span></span>
            </span>
            <span>Enterprise</span>
          </div>
          <h3>The Solution</h3>
          <p>
            Instead of deploying thousands of physical parking sensors, OBPARK
            digitizes your parking facility using a one-time Spatial Mapping
            process. Once mapped, the platform continuously manages occupancy,
            navigation, booking, and analytics through AI and user interaction.
          </p>
          <p className={styles.benefits}>
            Benefits: No GPS Required, Low Installation Cost, Fast Deployment,
            Cloud Managed, Highly Scalable
          </p>
        </motion.div>
      </div>

      <div className={styles.customer}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={easeOut}
        >
          <p className={styles.brand}>OBPARK</p>
          <h3>
            Why Enterprise Customers
            <br />
            Choose OBPARK
          </h3>

          <div className={styles.customerText}>
            <p>Lower infrastructure Costs</p>
            <br />
            <p>Eliminates Expensive Hardware Investments.</p>
            <br />
            <p>
              Unlike traditional parking management systems that depend on
              thousands of IoT sensors, cameras, loops, or beacon installations,
              OBPARK uses AI-powered Spatial Computing to create a digital twin
              of your parking facility with a one-time mapping process.
            </p>
            <br />
            <p>
              Benefits: No parking sensor installation, No GPS infrastructure
              required, Minimal maintenance costs, Lower Total Cost of Ownership
              (TCO), Faster ROI, Software-first architecture
            </p>
          </div>

          <div className={styles.questions}>
            {questions.map((question, index) => {
              const isOpen = openIndex === index;

              return (
                <div className={styles.question} key={question.title}>
                  <button
                    type="button"
                    className={styles.questionToggle}
                    aria-expanded={isOpen}
                    aria-controls={`enterprise-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{question.title}</span>
                    <motion.span
                      className={styles.plus}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`enterprise-answer-${index}`}
                        className={styles.answer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <p>{question.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/images/hero/enterprise.png"
            alt="OBPARK Smart Parking Enterprise Infrastructure"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
