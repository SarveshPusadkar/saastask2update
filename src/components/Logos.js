import { memo } from "react";
import styles from "./Logos.module.css";

const Logos = memo(() => {
  return (
    <section className={styles.logos}>
      <div className={styles.rowContainer}>
        <div className={styles.trustedByThe}>
          Trusted by the world’s most innovative teams
        </div>
        <div className={styles.labelDisplay}>
          <div className={styles.selectElement}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1.png"
            />
            <img
              className={styles.quantum1Icon}
              loading="lazy"
              alt=""
              src="/quantum-2.png"
            />
            <img
              className={styles.echo1Icon}
              loading="lazy"
              alt=""
              src="/echovalley-3.png"
            />
          </div>
          <div className={styles.celestia1Parent}>
            <img
              className={styles.celestia1Icon}
              loading="lazy"
              alt=""
              src="/celestial-4.png"
            />
            <img
              className={styles.pulse1Icon}
              loading="lazy"
              alt=""
              src="/pulse-5.png"
            />
            <img
              className={styles.apex1Icon}
              loading="lazy"
              alt=""
              src="/apex-6.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Logos;
