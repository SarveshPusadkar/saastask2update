import { memo } from "react";
import styles from "./FooterS.module.css";

const FooterS = memo(() => {
  return (
    <footer className={styles.footerS}>
      <div className={styles.nA}>
        <div className={styles.yourCompanyInc}>
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className={styles.nA1}>
        <img
          className={styles.socialsIcon}
          loading="lazy"
          alt=""
          src="/socials.svg"
        />
        <img
          className={styles.socialsIcon1}
          loading="lazy"
          alt=""
          src="/socials-1.svg"
        />
        <img
          className={styles.socialsIcon2}
          loading="lazy"
          alt=""
          src="/socials-2.svg"
        />
        <img
          className={styles.socialsIcon3}
          loading="lazy"
          alt=""
          src="/socials-3.svg"
        />
        <img
          className={styles.socialsIcon4}
          loading="lazy"
          alt=""
          src="/socials-4.svg"
        />
        <img
          className={styles.socialsIcon5}
          loading="lazy"
          alt=""
          src="/socials-5.svg"
        />
      </div>
    </footer>
  );
});

export default FooterS;
