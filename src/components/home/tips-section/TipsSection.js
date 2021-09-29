import styles from "./Tips.module.css";
import Button from "../../form/button/Button";
import { Link } from "react-router-dom";
// import play_icon from "../../../images/Play_icon.png";

const TipsSection = () => {
  return (
    <div className={`${styles.tips_wrapper}`}>
      <div className={`${styles.tips_content}`}>
        <h1>
          “We truly believe that giving back is a key component of a great
          company ”
        </h1>
        <p>
          Every ITIAA purchase made makes a large impact in promoting
          sustainable changes in alleviation. Our goal is to support women
          empowerments efforts in Africa.
        </p>
        <Link to={`/blog`}>
          <Button type="button" variant="primary-outline">
            Learn more
          </Button>
        </Link>
      </div>
      <div className={`${styles.tips_image}`}>
        {/* <span></span> */}
        {/* <img src={play_icon} alt="play button" /> */}
      </div>
    </div>
  );
};

export default TipsSection;
