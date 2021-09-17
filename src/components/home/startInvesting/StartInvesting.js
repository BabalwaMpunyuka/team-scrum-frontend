import styles from "./StartInvesting.module.css";

import windows_image from "../../../images/companies/windows_img.png";
import android_image from "../../../images/companies/android_img.png";
import ios_image from "../../../images/companies/ios_img.png";

export default function StartInvesting() {
  return (
    <div className={`container ${styles.StartInvesting}`}>
      <h1>Start investing with any of these platforms</h1>
      <div className={`row ${styles.row}`}>
        
         <div className="col-lg-4 col-md-6 col-sm-12">
        
          <img src={windows_image} alt="news" />

        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"> 
        
          <img src={android_image} alt="percent" />
          
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        
          <img src={ios_image} alt="calculator" />
          
        </div>
      </div>
    </div>
  );
}
