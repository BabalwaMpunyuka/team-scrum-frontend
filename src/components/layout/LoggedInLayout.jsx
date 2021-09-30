import styles from "./Layout.module.css";

import LoggedInNavigation from "../Navigation/LoggedInNavigation";
import SideNavigation from "../Navigation/sidenav/SideNavigation";

export default function LoggedInLayout({ children }) {
  return (
      <div className={styles.loggedlayout_wrapper}>
        <div className={styles.side}><SideNavigation /></div>
        <div className={styles.content}><LoggedInNavigation />{children}</div>
      </div>
  );
}
