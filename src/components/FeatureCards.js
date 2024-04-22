import { memo, useMemo } from "react";
import styles from "./FeatureCards.module.css";

const FeatureCards = memo(
  ({ icons, integrationEcosystem, body, propWidth }) => {
    const integrationEcosystemStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div className={styles.featureCards}>
        <button className={styles.iconsWrapper}>
          <img className={styles.icons} alt="" src={icons} />
        </button>
        <div className={styles.fAQs}>
          <b
            className={styles.integrationEcosystem}
            style={integrationEcosystemStyle}
          >
            {integrationEcosystem}
          </b>
          <div className={styles.body}>{body}</div>
        </div>
      </div>
    );
  }
);

export default FeatureCards;
