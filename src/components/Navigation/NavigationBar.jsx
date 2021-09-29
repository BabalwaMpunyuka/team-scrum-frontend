import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import Logo from "../Logo/Logo";
import Button from "../form/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState("Home");
  const handleActive = (menu) => {
    setActive(menu);
  };
  return (
    <div className={`${styles.navbar_wrapper}`}>
      <div className="container">
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.logo}`}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul
            className={
              isMobile ? `${styles.nav_links_mobile} ${styles.nav_links}` : `${styles.nav_links}`
            }
          >
            {isMobile && <li className={styles.nav_link}>
              <div className={styles.menu_close}>
                <FontAwesomeIcon
                  icon={["fas", "times"]}
                  className={styles.mobile_icon}
                  onClick={() => setIsMobile(!isMobile)}
                />
              </div>
            </li>}

            <li
              className={`${styles.nav_link} ${
                active === "Home" ? styles.active : ""
              }`}
              onClick={() => {
                handleActive("Home");
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${styles.nav_link} ${
                active === "Blog" ? styles.active : ""
              }`}
              onClick={() => {
                handleActive("Blog");
              }}
            >
              <Link to="/blog" className="blog">
                Blog
              </Link>
            </li>
            <li
              className={`${styles.nav_link} ${
                active === "Portfolio" ? styles.active : ""
              }`}
              onClick={() => {
                handleActive("Portfolio");
              }}
            >
              <Link to="/portfolio/financial-appraisals" className="about">
                Portfolio
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/login" className="login">
                <Button type="button" variant={isMobile? "white-outline" : "primary-outline"}>
                  Login
                </Button>
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/signup" className="signup">
                <Button type="button" variant={isMobile? "btn-white" : "primary"}>
                  Signup
                </Button>
              </Link>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={["fas", "align-right"]}
            className={`${styles.mobile_menu_icon}`}
            onClick={() => setIsMobile(!isMobile)}
          />
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
