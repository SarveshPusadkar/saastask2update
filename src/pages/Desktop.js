import NavBarDesktop from "../components/NavBarDesktop";
import PulseShape from "../components/PulseShape";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FooterSocialLinks from "../components/FooterSocialLinks";
import FrameComponent from "../components/FrameComponent";
import FooterS from "../components/FooterS";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.stack}>
        <div className={styles.bar}>
          <div className={styles.stack1}>
            <div className={styles.thisPageIs}>
              This page is included in a free SaaS Website Kit.
            </div>
            <div className={styles.versionIsHere}>
              <div className={styles.viewTheComplete}>
                View the complete Kit
              </div>
              <img className={styles.icons} alt="" src="/icons.svg" />
            </div>
          </div>
        </div>
        <NavBarDesktop />
        <PulseShape />
        <FrameComponent2 />
        <FrameComponent1 />
        <FooterSocialLinks />
        <FrameComponent />
        <FooterS />
      </main>
    </div>
  );
};

export default Desktop;
