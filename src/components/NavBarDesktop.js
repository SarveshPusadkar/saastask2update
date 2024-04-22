import { memo } from "react";
import styles from "./NavBarDesktop.module.css";

const NavBarDesktop = memo(() => {
  return (
    <header className={styles.navBarDesktop}>
      <div className={styles.logo}>
        <div className={styles.logodefault}>
          <div className={styles.logoInstance} />
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
        
        <a className={styles.about}>About</a>
        <a className={styles.features}>Features</a>
        <a className={styles.customers}>Customers</a>
        <a className={styles.updates}>Updates</a>
        <a className={styles.help}>Help</a>

        <div className={styles.buttons}>
          <div className={styles.getForFree}>Get for free</div>
        </div>

      </div>
    </header>
  );
});

export default NavBarDesktop;
