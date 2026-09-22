import styles from "./Features.module.css";

const features = [
  "GPS-Free Indoor Navigation",
  "AI Parking Intelligence",
  "Vehicle Locator",
  "Digital Twin Mapping",
  "Smart Parking Navigation",
  "Real-Time Occupancy",
];

export default function Features() {
  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.intro}>
        <div>
          <p>The Future of Parking</p>

          <h2>
            GPS-Free. Powered by AI
            <br />
            & Spatial Computing.
          </h2>

          <p className={styles.description}>
            Intelligent parking technology designed to transform
            how people navigate, locate and interact with parking
            infrastructure.
          </p>
        </div>

        <div className={styles.trusted}>
          <span>TRUSTED BY THE FUTURE OF</span>

          <h3>
            Smart Infrastructure
            <br />
            Designed for
          </h3>

          <p>
            Shopping Malls, Airports,
            Hospitals, Commercial Buildings,
            Residential Communities, Smart
            Cities, Universities, Hotels and
            IT Campuses.
          </p>

          <div>
            <button>SEE SOLUTIONS</button>
            <button>MEET OBPARK</button>
          </div>
        </div>
      </div>

      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <div
            key={feature}
            className={`${styles.featureItem} ${
              index % 2 === 0 ? styles.light : styles.dark
            }`}
          >
            <span>{index + 1}</span>
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}