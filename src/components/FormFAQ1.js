import { memo, useMemo } from "react";
import styles from "./FormFAQ1.module.css";

const FormFAQ1 = memo(({ vector, propMarginTop, propWidth, propHeight }) => {
  const formFAQ1Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const howToPricingFormStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.formfaq} style={formFAQ1Style}>
      <b className={styles.howDoesThe}>How does the pricing work for teams</b>
      <div className={styles.howToPricingForm} style={howToPricingFormStyle}>
        <img className={styles.vectorIcon} loading="lazy" alt="" src={vector} />
      </div>
    </div>
  );
});

export default FormFAQ1;
