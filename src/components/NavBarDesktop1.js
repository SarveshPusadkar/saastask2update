import { memo } from "react";
import styles from "./NavBarDesktop1.module.css";

const NavBarDesktop1 = memo(() => {
  return (
    <header className={styles.navBarDesktop}>
      <div className={styles.logo}>
        <div className={styles.logodefault}>
          <div className={styles.logodefaultChild} />
          <img
            className={styles.logosaasIcon}
            loading="lazy"
            alt=""
            src="/logosaas@2x.png"
          />
        </div>
        <div className={styles.madeBy}>made by</div>
        <img
          className={styles.blackHorizontal1Icon}
          loading="lazy"
          alt=""
          src="/blackhorizontal-1.svg"
        />
      </div>
      <div className={styles.stack}>
        <div className={styles.about}>About</div>
        <div className={styles.features}>Features</div>
        <div className={styles.customers}>Customers</div>
        <div className={styles.updates}>Updates</div>
        <div className={styles.help}>Help</div>
        <button className={styles.buttons}>
          <div className={styles.getForFree}>Get for free</div>
        </button>
      </div>
    </header>
  );
});

export default NavBarDesktop1;
