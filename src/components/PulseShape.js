import { memo } from "react";
import styles from "./PulseShape.module.css";

const PulseShape = memo(() => {
  return (
    <section className={styles.pulseShape}>
      <div className={styles.hero}>
        <div className={styles.heroChild} />
        <div className={styles.fAQsForm} />
        <div className={styles.heroContent}>
          <div className={styles.tag}>
            <div className={styles.version20IsHereParent}>
              <input
                className={styles.version20Is}
                placeholder="Version 2.0 is here"
                type="text"
              />
              <div className={styles.readMoreParent}>
                <div className={styles.readMore}>Read more</div>
                <img className={styles.icons} alt="" src="/icons-1.svg" />
              </div>
            </div>
          </div>
          <h1 className={styles.h1}>
            <p className={styles.oneTask}>One Task</p>
            <p className={styles.atATime}>at a Time</p>
          </h1>
          <h3 className={styles.body}>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </h3>
          <button className={styles.buttons}>
            <div className={styles.getForFree}>Get for free</div>
          </button>
          <div className={styles.yourCompanyInc}>
            <div className={styles.wrapperCursor1}>
              <img
                className={styles.cursor1Icon}
                loading="lazy"
                alt=""
                src="/cursor-1@2x.png"
              />
            </div>
            <img className={styles.cursor2Icon} alt="" src="/cursor-1@2x.png" />
          </div>
          <div className={styles.wrapperMessage2Parent}>
            <div className={styles.wrapperMessage2}>
              <img
                className={styles.message2Icon}
                alt=""
                src="/message-2@2x.png"
              />
            </div>
            <img
              className={styles.message1Icon}
              loading="lazy"
              alt=""
              src="/message-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default PulseShape;
