import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import Logo from "../Logo/Logo";
import Button from "../form/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// To be changed when soon
const LoggedInNavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={`${styles.navbar_wrapper}`}>
      <div className="container">
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.logo}`}>
            <Logo />
          </div>
          <ul className={isMobile?`${styles.nav_links_mobile}`:`${styles.nav_links}`}
          onClick={()=>setIsMobile(false)}>
            <li className={`${styles.nav_link}`}>
              <Link to="/" className="about">
                Services
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/" className="blog">
                Blog
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/" className="about">
                About Us
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/" className="support">
                Support
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/" className="login">
                <Button type="button" variant="primary-outline">
                  Login
                </Button>
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/" className="signup">
                <Button type="button"  variant="primary">
                  Signup
                </Button>
              </Link>
            </li>
          </ul>
          <button className={`${styles.mobile_menu_icon}`} onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ? (
                <FontAwesomeIcon icon={["fas", "times"]} className={`${styles.transparent}`}/>
            ) : (
                <FontAwesomeIcon icon={["fas", "bars"]} className={`${styles.transparent}`}/>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default LoggedInNavigationBar;
