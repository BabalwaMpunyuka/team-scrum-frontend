import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../form/button/Button";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header_content}`}>
        <h1>Strategic Financial Decisions Simplified</h1>
        <p className="text-bold">
          Have you ever needed to make an investment decision but did not know where to look. Have you been curious about the true financial health of a business venture or fund. Look no further; the multivariate stop to financial choices and capital budgeting decisions is here.
        </p>
        <Link to="/login"><Button type="button" variant="primary" >
            Get Started
          </Button>
        </Link>
      </div>
      <div className={`${styles.header_image}`}></div>
    </div>
  );
};

export default Header;
