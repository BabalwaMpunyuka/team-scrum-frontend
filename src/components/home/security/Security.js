import styles from "./Security.module.css";
import Button from "../../form/button/Button";
import { Link } from "react-router-dom";

const SecuritySection = () => {
  return (
    <div className={`${styles.security_wrapper}`}>
      <div className={`${styles.security_image}`}></div>
      <div className={`${styles.security_content}`}>
        <h1>Security and encryption</h1>
        <p>
          ITIAA consults offer secure data access and information retrieval.
          Data encription is utilized for transmition of financial data accross
          our servers.
        </p>
        <Link to="/signup">
          <Button type="button" variant="primary-outline">
            Join us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SecuritySection;
