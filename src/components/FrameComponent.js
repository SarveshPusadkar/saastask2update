import { memo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = memo(() => {
  return (
    <section className={styles.nAWrapper}>
      <div className={styles.nA}>
        <div className={styles.nA1}>
          <div className={styles.nA2}>
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
        <img
          className={styles.emojistar1Icon}
          loading="lazy"
          alt=""
          src="/emojistar-1@2x.png"
        />
        <img
          className={styles.helix21Icon}
          loading="lazy"
          alt=""
          src="/helix2-1@2x.png"
        />
      </div>
    </section>
  );
});

export default FrameComponent;
