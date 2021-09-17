import styles from "./Tips.module.css";
import Button from "../../form/button/Button";
import { Link } from "react-router-dom";
import play_icon from "../../../images/Play_icon.png";

const TipsSection = () => {
  return (
    <div className={`${styles.tips_wrapper}`}>
      <div className={`${styles.tips_content}`}>
        <h1>Learn tips and gain more knowldge</h1>
        <p>
          Do you have little or no financial knowledge and want to know more? We
          offer information on diverse and distinc financial topics to keep you
          informed and empowered in handling your finances
        </p>
        <Link to={`/blog`}>
          <Button type="button" variant="primary">
            Watch Videos
          </Button>
        </Link>
      </div>
      <div className={`${styles.tips_image}`}>
        <span></span>
        <img src={play_icon} alt="play button" />
      </div>
    </div>
  );
};

export default TipsSection;
