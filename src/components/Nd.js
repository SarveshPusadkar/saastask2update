import { memo } from "react";
import FeatureCards1 from "./FeatureCards1";
import styles from "./Nd.module.css";

const Nd = memo(() => {
  return (
    <section className={styles.nd}>
      <div className={styles.pageFooter}>
        <div className={styles.pageFooterInner}>
          <div className={styles.h2Parent}>
            <h1 className={styles.h2}>Everything you need</h1>
            <h3 className={styles.body}>
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
          </div>
        </div>
        <div className={styles.featureCardsParent}>
          <FeatureCards1
            integrationEcosystem="Integration ecosystem"
            body="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCards1
            integrationEcosystem="Goal setting and tracking"
            body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            propWidth="210px"
          />
          <FeatureCards1
            integrationEcosystem="Secure data encryption"
            body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
            propWidth="197px"
          />
        </div>
      </div>
    </section>
  );
});

export default Nd;
