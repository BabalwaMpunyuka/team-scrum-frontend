import styles from "./Layout.module.css";

import LoggedInNavigation from "../Navigation/LoggedInNavigation";
import Footer from "../footer/Footer";
import SideNavigation from "../Navigation/sidenav/SideNavigation";

export default function LoggedInLayout({ children }) {
  return (
    <div>
      <LoggedInNavigation />
      <div className={styles.loggedlayout_wrapper}>
        <div className={styles.side}><SideNavigation /></div>
        <div className={styles.content}>{children}</div>
      </div>

      <Footer />
    </div>
  );
}
