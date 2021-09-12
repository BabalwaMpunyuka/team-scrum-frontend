import { useState } from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SidebarItems } from "./SidebarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContextGetter from "../../../hooks/useContextGetter";

//ion:toggle-outline
// la:toggle-off

const SideNavigation = () => {
    const {logout}=useContextGetter();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <div className={styles.top} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <FontAwesomeIcon
            icon={["fas", "times"]}
            className={styles.menu_bars}
          />
        ) : (
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            className={styles.menu_bars}
          />
        )}
      </div>
      <div  className={isMobile?`${styles.side_nav}`:`${styles.side_nav} ${styles.side_nav_hide}`}  onClick={() => setIsMobile(false)}>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_items} onClick="">
            {SidebarItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${styles.nav_menu_item} ${item.cName}`}
                >
                  <Link to={item.path}>
                    <span className={styles.icon}>{item.icon} </span>
                    <span className={styles.text}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.theme_wrapper}>
            <Icon icon="carbon:light-filled" className={styles.theme_toggle} />
          </div>
          <div className={styles.support}>
            <Icon icon="whh:headphonesalt" className={styles.support_icon} />
            <span>Support 24/7</span>
          </div>
          <ul className={`${styles.nav_menu_items} ${styles.logout}`}>
            <li className={`${styles.nav_menu_item}`} onClick={()=>{logout()}}>
              <Icon icon="ic:baseline-logout" className={styles.icon} />{" "}
              <span className={styles.text}>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideNavigation;
