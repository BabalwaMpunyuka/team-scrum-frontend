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
              isMobile ? `${styles.nav_links_mobile}` : `${styles.nav_links}`
            }
            onClick={() => setIsMobile(false)}
          >
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
            <li  className={`${styles.nav_link} ${
                active === "Services" ? styles.active : ""
              }`}
              onClick={() => {
                handleActive("Services");
              }}>
              <Link to="/portfolio/financial-appraisals" className="services">
                Services
              </Link>
            </li>
            <li className={`${styles.nav_link} ${
                active === "Blog" ? styles.active : ""
              }`}
              onClick={() => {
                handleActive("Blog");
              }}>
              <Link to="/blog" className="blog">
                Blog
              </Link>
            </li>
            <li className={`${styles.nav_link} ${
                active === "Portfolio" ? styles.active : ""
              }`}
              onClick={() => {
                handleActive("Portfolio");
              }}>
              <Link to="/portfolio/financial-appraisals" className="about">
                Portfolio
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/login" className="login">
                <Button type="button" variant="primary-outline">
                  Login
                </Button>
              </Link>
            </li>
            <li className={`${styles.nav_link}`}>
              <Link to="/signup" className="signup">
                <Button type="button" variant="primary">
                  Signup
                </Button>
              </Link>
            </li>
          </ul>
          <button
            className={`${styles.mobile_menu_icon}`}
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <FontAwesomeIcon
                icon={["fas", "times"]}
                className={`${styles.transparent}`}
              />
            ) : (
              <FontAwesomeIcon
                icon={["fas", "bars"]}
                className={`${styles.transparent}`}
              />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
