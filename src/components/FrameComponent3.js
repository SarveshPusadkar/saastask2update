import { memo } from "react";
import FormFAQ1 from "./FormFAQ1";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = memo(() => {
  return (
    <div className={styles.purpleGradientParent}>
      <div className={styles.purpleGradient} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.h2Parent}>
            <h1 className={styles.h2}>Intuitive interface</h1>
            <h3 className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </h3>
          </div>
        </div>
        <div className={styles.wrapperAppNight}>
          <img
            className={styles.appNightIcon}
            loading="lazy"
            alt=""
            src="/app-night1@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.h2Wrapper}>
            <h1 className={styles.h21}>Frequently asked questions</h1>
          </div>
          <div className={styles.faqs}>
            <FormFAQ1 vector="/vector.svg" />
            <div className={styles.footer}>
              <FormFAQ1
                vector="/vector-1.svg"
                propMarginTop="unset"
                propWidth="unset"
                propHeight="unset"
              />
              <FormFAQ1
                vector="/vector-2.svg"
                propMarginTop="-0.1px"
                propWidth="unset"
                propHeight="unset"
              />
            </div>
            <FormFAQ1
              vector="/vector-3.svg"
              propMarginTop="unset"
              propWidth="unset"
              propHeight="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent3;
