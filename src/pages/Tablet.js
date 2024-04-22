import NavBarDesktop1 from "../components/NavBarDesktop1";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Nd from "../components/Nd";
import FrameComponent3 from "../components/FrameComponent3";
import InstantAccess from "../components/InstantAccess";
import FooterS1 from "../components/FooterS1";
import styles from "./Tablet.module.css";

const Tablet = () => {
  return (
    <div className={styles.tablet}>
      <div className={styles.bar}>
        <div className={styles.thisPageIsIncludedInAFreParent}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.viewTheCompleteKitParent}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop1 />
      <Hero />
      <Logos />
      <Nd />
      <section className={styles.accessButtonInstance}>
        <FrameComponent3 />
        <InstantAccess />
      </section>
      <FooterS1 />
    </div>
  );
};

export default Tablet;
