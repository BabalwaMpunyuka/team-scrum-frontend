import styles from "./Tips.module.css";
import Button from "../../form/button/Button";

import play_icon from "../../../images/Play_icon.png";

const TipsSection = () => {
  return (
    <div className={`${styles.tips_wrapper}`}>   
      <div className={`${styles.tips_content}`}>
        <h1>Learn tips and gain more knowldge</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nullam gravida at massa, id nisl porttitor. Non risus in dictum tiaenean.
        </p>
        <Button type="button" variant="primary">
            Watch Videos
        </Button>
      </div>
      <div className={`${styles.tips_image}`}>
          <span></span>
          <img src={play_icon} alt="play button"/>
      </div>
    </div>
  );
};

export default TipsSection;
