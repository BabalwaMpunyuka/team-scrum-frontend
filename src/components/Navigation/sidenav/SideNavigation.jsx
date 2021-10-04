import { useState } from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SidebarItems } from "./SidebarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContextGetter from "../../../hooks/useContextGetter";
import Logo_img from "../../../images/logo.png";

const SideNavigation = () => {
  const { logout } = useContextGetter();
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState("1");

  const handleActive = (menu) => {
    setIsActive(menu);
  };
  //className={isMobile?`${styles.side_nav}`:`${styles.side_nav} ${styles.side_nav_hide}`}  onClick={() => setIsMobile(false)}
  return (
    <div className={styles.side_nav}>
      {isMobile ? (
        <FontAwesomeIcon
          icon={["fas", "chevron-right"]}
          className={styles.menu_bars}
          onClick={() => setIsMobile(!isMobile)}
        />
      ) : (
        <img src={Logo_img} alt="side logo" className={`${styles.logo}`} />
      )}
        <ul>
          {SidebarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`${styles.nav_menu_item} ${
                  isActive === item.id ? styles.active_item : ""
                }`}
                onClick={() => {
                  handleActive(item.id);
                }}
              >
                <Link to={item.path}>
                  <span className={styles.icon}>{item.icon} </span>
                  <span className={styles.text}>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li
            className={`${styles.logout}`}
            onClick={() => {
              logout();
            }}
          >
            <Icon icon="ic:baseline-logout" className={styles.icon} />{" "}
            <span className={styles.text}><strong>Logout</strong></span>
          </li>
        </ul>

        {/* <Link to="/support"><div className={styles.support}>
            <Icon icon="whh:headphonesalt" className={styles.support_icon} />
            <span>Support 24/7</span>
          </div>
          </Link> */}
    </div>
  );
};

export default SideNavigation;
