"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const questions = [
  "How Does OBPARK Work?",
  "Can We Trust OBPARK?",
  "How Do I Contact OBPARK?",
  "What Is The Difference Between Smart Parking And Traditional Parking?",
  "How Much Does OBPARK Cost?",
  "Can I Use OBPARK For My Business?",
  "How Can I Get Started?",
  "What Is OBPARK Secure?",
  "Do You Provide Support?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.section}>
      <h2>Frequently Asked Questions (FAQ)</h2>

      <div className={styles.grid}>
        {questions.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div className={styles.item} key={question}>
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className={styles.question}
              >
                <span>{question}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className={styles.answer}>
                  <p>
                    OBPARK provides smart parking infrastructure
                    and connected mobility solutions designed to
                    improve parking experiences and operational
                    efficiency.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}