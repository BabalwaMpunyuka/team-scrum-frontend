import styles from "./StartInvesting.module.css";

import windows_image from "../../../images/companies/windows_icon.svg";
import android_image from "../../../images/companies/android_icon.svg";
import ios_image from "../../../images/companies/apple_icon.svg";

export default function StartInvesting() {
  return (
    <div className={`container ${styles.StartInvesting}`}>
      <h1>Start investing with any of these platforms</h1>
      <div className={`row ${styles.row}`}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={windows_image} alt="windows" />
          <span>WINDOWS</span>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={android_image} alt="android" />
          <span>ANDROID</span>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={ios_image} alt="apple" />
          <span>APPLE</span>
        </div>
      </div>
    </div>
  );
}
