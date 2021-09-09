import styles from "./Security.module.css";
import Button from "../../form/button/Button";

const SecuritySection = () => {
  return (
    <div className={`${styles.security_wrapper}`}>
        <div className={`${styles.security_image}`}></div>
      <div className={`${styles.security_content}`}>
        <h1>Security and encryption</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          nullam gravida at massa, id nisl porttitor. Non risus in dictum
          tiaenean.
        </p>
        <Button type="button" variant="primary">
            Learn More
        </Button>
      </div>
    </div>
  );
};

export default SecuritySection;
