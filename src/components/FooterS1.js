import { memo } from "react";
import styles from "./FooterS1.module.css";

const FooterS1 = memo(() => {
  return (
    <div className={styles.footerS}>
      <div className={styles.companyCopyright}>
        <div className={styles.yourCompanyInc}>
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className={styles.footerCompanyInfo}>
        <img
          className={styles.socialsIcon}
          loading="lazy"
          alt=""
          src="/socials.svg"
        />
        <img className={styles.socialsIcon1} alt="" src="/socials-1.svg" />
        <img className={styles.socialsIcon2} alt="" src="/socials-2.svg" />
        <img className={styles.socialsIcon3} alt="" src="/socials-3.svg" />
        <img className={styles.socialsIcon4} alt="" src="/socials-41.svg" />
        <img className={styles.socialsIcon5} alt="" src="/socials-5.svg" />
      </div>
    </div>
  );
});

export default FooterS1;
