import { memo } from "react";
import styles from "./InstantAccess.module.css";

const InstantAccess = memo(() => {
  return (
    <div className={styles.instantAccess}>
      <div className={styles.inputForm}>
        <div className={styles.nameFieldParent}>
          <div className={styles.nameField}>
            <h1 className={styles.h2}>Get instant access</h1>
            <div className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className={styles.form}>
            <input
              className={styles.form1}
              placeholder="name@email.com"
              type="text"
            />
            <button className={styles.buttons}>
              <div className={styles.getForFree}>Get access</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.graphIcon}
        loading="lazy"
        alt=""
        src="/graph@2x.png"
      />
      <img
        className={styles.helixIcon}
        loading="lazy"
        alt=""
        src="/helix2-1@2x.png"
      />
    </div>
  );
});

export default InstantAccess;
