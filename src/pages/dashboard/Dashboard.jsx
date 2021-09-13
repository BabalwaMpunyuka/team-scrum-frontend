import dashStyles from "./Dashboard.module.css";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import diagnostics from "../../images/diagnostics.png";
import comment from "../../images/comment.png";

const Dashboard = () => {
  return (
    <div className={`container ${dashStyles.dashboard_wrapper}`}>
      <div className={dashStyles.cardGrid}>
        <Card className={dashStyles.service_card}>
          <div className={dashStyles.icon_wrapper}>
            <FontAwesomeIcon icon={["fas", "chart-area"]} className={dashStyles.icon} />
          </div>
          <h2>Financial Appraisals</h2>
          <p className={dashStyles.text}>lorem ipsum take away</p>
        </Card>
        <Card className={dashStyles.service_card}>
          <div className={dashStyles.icon_wrapper}>
            <FontAwesomeIcon
              icon={["fas", "chart-line"]}
              className={dashStyles.icon}
            />
          </div>
          <h2>Financial Modelling</h2>
          <p className={dashStyles.text}>lorem ipsum take away</p>
        </Card>
        <Card className={dashStyles.service_card}>
          <div className={dashStyles.icon_wrapper}>
            <img
              src={diagnostics}
              alt="Diagnostics"
              className={`img-responsive ${dashStyles.icon} `}
            />
          </div>
          <h2>Financial Diagnostics</h2>
          <p className={dashStyles.text}>lorem ipsum take away</p>
        </Card>
        <Card className={dashStyles.service_card}>
          <div className={dashStyles.icon_wrapper}>
            <img
              src={comment}
              alt="Comment"
              className={`img-responsive ${dashStyles.icon} `}
            />
          </div>
          <h2>External Business Requests</h2>
          <p className={dashStyles.text}>lorem ipsum take away</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
