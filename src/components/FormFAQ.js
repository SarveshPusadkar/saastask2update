import { memo, useMemo } from "react";
import styles from "./FormFAQ.module.css";

const FormFAQ = memo(({ appNameLogo, propMarginTop }) => {
  const formFAQStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className={styles.formfaq} style={formFAQStyle}>
      <b className={styles.howDoesThe}>How does the pricing work for teams</b>
      <div className={styles.frame}>
        <img
          className={styles.appNameLogo}
          loading="lazy"
          alt=""
          src={appNameLogo}
        />
      </div>
    </div>
  );
});

export default FormFAQ;
