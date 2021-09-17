import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../form/button/Button";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header_content}`}>
        <h1>Strategic Financial Decisions Simplified</h1>
        <p>
          ITIAA is bridging the gapby providing our userswith
          Investment appraisal and Analysis services to make informed
          investments decisions.
        </p>
        <Link to="/login">
          <Button type="button" variant="primary">
            Get Started
          </Button>
        </Link>
      </div>
      <div className={`${styles.header_image}`}></div>
    </div>
  );
};

export default Header;
