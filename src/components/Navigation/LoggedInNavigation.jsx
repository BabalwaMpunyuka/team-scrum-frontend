import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoggedInNav.module.css";
import useContextGetter from "../../hooks/useContextGetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useravater from "../../images/user.png";

const LoggedInNavigation = () => {
  const { user } = useContextGetter();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={`${styles.navbar_wrapper}`}>
      <div className="container">
        <nav className={`${styles.navbar}`}>
        <ul className={styles.nav_links}>
          <li></li>
        </ul>
          <ul className={isMobile?`${styles.nav_links_mobile}`:`${styles.nav_links}`}
          onClick={()=>setIsMobile(false)}>
            <li className={`${styles.nav_link}`}>
              <Link to="/dashboard" className="services">
               <div className={styles.avater_wrapper}>
                  <img src={useravater} alt="User avater" className={styles.avater}/>
                  <div className={styles.avater_text}>
                    <span> {user.firstName} {user.lastName}</span>
                  </div>
               </div>
              </Link>
            </li>
          </ul>
          <button className={`${styles.mobile_menu_icon}`} onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ? (
                <FontAwesomeIcon icon={["fas", "times"]} className={`${styles.transparent}`}/>
            ) : (
                <FontAwesomeIcon icon={["fas", "user"]} className={`${styles.transparent}`}/>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default LoggedInNavigation;
