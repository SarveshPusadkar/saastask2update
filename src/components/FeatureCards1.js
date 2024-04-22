import { memo, useMemo } from "react";
import styles from "./FeatureCards1.module.css";

const FeatureCards1 = memo(({ integrationEcosystem, body, propWidth }) => {
  const integrationEcosystem1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.featureCards}>
      <button className={styles.iconsWrapper}>
        <img className={styles.icons} alt="" src="/icons-21.svg" />
      </button>
      <div className={styles.stackOfBlocks}>
        <b
          className={styles.integrationEcosystem}
          style={integrationEcosystem1Style}
        >
          {integrationEcosystem}
        </b>
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  );
});

export default FeatureCards1;
