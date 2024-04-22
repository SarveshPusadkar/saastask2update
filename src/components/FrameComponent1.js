import { memo } from "react";
import FeatureCards from "./FeatureCards";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = memo(() => {
  return (
    <section className={styles.stackInner}>
      <div className={styles.frameParent}>
        <div className={styles.footerInstanceWrapper}>
          <div className={styles.footerInstance}>
            <h1 className={styles.h2}>Everything you need</h1>
            <h3 className={styles.body}>
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
          </div>
        </div>
        <div className={styles.heroContent}>
          <FeatureCards
            icons="/icons-2.svg"
            integrationEcosystem="Integration ecosystem"
            body="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCards
            icons="/icons-3.svg"
            integrationEcosystem="Goal setting and tracking"
            body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            propWidth="210px"
          />
          <FeatureCards
            icons="/icons-4.svg"
            integrationEcosystem="Secure data encryption"
            body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
            propWidth="197px"
          />
        </div>
      </div>
    </section>
  );
});

export default FrameComponent1;
