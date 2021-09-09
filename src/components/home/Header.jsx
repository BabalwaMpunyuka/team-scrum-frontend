import styles from "./Header.module.css";
import Button from "../form/button/Button";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header_content}`}>
        <h1>Investment made easy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          nullam gravida at massa, id nisl porttitor. Non risus in dictum
          tiaenean.
        </p>
        <Button type="button" variant="primary">
            Get Started
        </Button>
      </div>
      <div className={`${styles.header_image}`}></div>
    </div>
  );
};

export default Header;
