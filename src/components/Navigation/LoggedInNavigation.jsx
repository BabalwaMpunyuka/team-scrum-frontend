import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoggedInNav.module.css";
import Logo from "../Logo/Logo";
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
          <div className={`${styles.logo}`}>
          <Link to="/dashboard"><Logo /></Link>
          </div>
          <ul className={isMobile?`${styles.nav_links_mobile}`:`${styles.nav_links}`}
          onClick={()=>setIsMobile(false)}>
            <li className={`${styles.nav_link}`}>
              <Link to="/dashboard" className="services">
               <div className={styles.avater_wrapper}>
                  <img src={useravater} alt="User avater" className={styles.avater}/>
                  <div className={styles.avater_text}>
                    <span>Hello, {user.firstName} {user.lastName}</span>
                    <h6>Welcome to ITIAA</h6>
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
