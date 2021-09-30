import { useState } from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SidebarItems } from "./SidebarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContextGetter from "../../../hooks/useContextGetter";
import Logo from "../../Logo/Logo";
import signupStyles from "../../../pages/signup/SignUp.module.css";

const SideNavigation = () => {
  const {logout}=useContextGetter();
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState("1");

  const handleActive=(menu)=>{
    setIsActive(menu);
  }
  return (
  <div  className={isMobile?`${styles.side_nav}`:`${styles.side_nav} ${styles.side_nav_hide}`}  onClick={() => setIsMobile(false)}>
      {isMobile ? (
          <FontAwesomeIcon
          icon={["fas", "chevron-right"]}
          className={styles.menu_bars}
          onClick={() => setIsMobile(!isMobile)}
        />
        ) : (
         
          <div className={`${signupStyles.logo}`}>
          <Link to="/dashboard"><Logo /></Link>
        </div>
        )}
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_items} >
            {SidebarItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${styles.nav_menu_item} ${isActive===item.id?styles.active_item:""}`} onClick={()=>{handleActive(item.id)}}
                >
                  <Link to={item.path}>
                    <span className={styles.icon}>{item.icon} </span>
                    <span className={styles.text}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
             <li className={`${styles.nav_menu_item}`} onClick={()=>{logout()}}>
              <Icon icon="ic:baseline-logout" className={styles.icon} />{" "}
              <span className={styles.text}>Logout</span>
            </li>
          </ul>

         
          {/* <Link to="/support"><div className={styles.support}>
            <Icon icon="whh:headphonesalt" className={styles.support_icon} />
            <span>Support 24/7</span>
          </div>
          </Link> */}
        </nav>
      </div>
  );
};

export default SideNavigation;
