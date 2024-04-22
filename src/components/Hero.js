import { memo } from "react";
import styles from "./Hero.module.css";

const Hero = memo(() => {
  return (
    <section className={styles.hero}>
      <div className={styles.trustedLogos} />
      <div className={styles.heroContentParent}>
        <div className={styles.heroContent}>
          <div className={styles.tag}>
            <div className={styles.accessButton}>
              <input
                className={styles.version20Is}
                placeholder="Version 2.0 is here"
                type="text"
              />
              <div className={styles.helixElement}>
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
          <div className={styles.cursor}>
            <div className={styles.wrapperCursor1}>
              <img
                className={styles.cursor1Icon}
                loading="lazy"
                alt=""
                src="/cursor-11@2x.png"
              />
            </div>
            <img
              className={styles.cursor2Icon}
              alt=""
              src="/cursor-11@2x.png"
            />
          </div>
        </div>
        <div className={styles.shapeSymbolsParent}>
          <div className={styles.shapeSymbols} />
          <div className={styles.message}>
            <div className={styles.wrapperMessage2}>
              <img
                className={styles.message2Icon}
                alt=""
                src="/message-21@2x.png"
              />
            </div>
            <img
              className={styles.message1Icon}
              loading="lazy"
              alt=""
              src="/message-21@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
