import { Link } from "react-router-dom";
import dashStyles from "./Dashboard.module.css";
import Card from "../../components/card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContextGetter from "../../hooks/useContextGetter";
import { Icon } from "@iconify/react";

const Dashboard = () => {
  const { user } = useContextGetter();
  return (
    <div className={`container ${dashStyles.dashboard_wrapper}`}>
      <p className={dashStyles.hello}>
        Hello! <span> {user.firstName}</span>
      </p>
      <p>Start your day with the right financial information</p>
      <div className={dashStyles.cardGrid}>
        <Card className={dashStyles.service_card}>
          <FontAwesomeIcon
            icon={["fas", "map-marked"]}
            className={dashStyles.icon}
          />
          <h2>Business reports and history</h2>
          <p className={dashStyles.text}>
            View your business requests and report history
          </p>
          <Link
            to={`/reports`}
            className={`${dashStyles.link}`}
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </Link>
        </Card>

        {/* <Card className={dashStyles.service_card}>
          <FontAwesomeIcon
            icon={["fas", "chart-line"]}
            className={dashStyles.icon}
          />
          <h2>Financial Modelling History</h2>
          <p className={dashStyles.text}>
            View Microsoft an Apple financial modelling
          </p>
          <Link
            to={`/portfolio/financial-diagnostic`}
            className={`${dashStyles.link} `}
          >
            {" "}
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </Link>
        </Card>
        <Card className={dashStyles.service_card}>
          <img
            src={diagnostics}
            alt="Diagnostics"
            className={`img-responsive ${dashStyles.icon} `}
          />
          <h2>Financial Diagnostics</h2>
          <p className={dashStyles.text}>
            View protfolio on financial diagnostics
          </p>
          <Link
            to={`/portfolio/financial-modelling`}
            className={`${dashStyles.link}`}
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </Link>
        </Card> */}
        <Card className={dashStyles.service_card}>
        <FontAwesomeIcon
            icon={["fas", "dungeon"]}
            className={dashStyles.icon}
          />
          <h2>Pricing plans and Payments</h2>
          <p className={dashStyles.text}>
            Subscribe to a pricing plan that best suites you
          </p>
          <Link
            to={`/portfolio/financial-modelling`}
            className={`${dashStyles.link}`}
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </Link>
        </Card>
        <Card className={dashStyles.service_card}>
        <FontAwesomeIcon
            icon={["fas", "chart-line"]}
            className={dashStyles.icon}
          />
          <h2>Make Business Requests</h2>
          <p>Request business service and get feedback in 48hrs</p>
          <Link
            to={`/business-request/add`}
            className={`${dashStyles.link}`}
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </Link>
        </Card>
      </div>
      <div className={dashStyles.support_icon}>
        <Icon icon="whh:headphonesalt" />
      </div>
    </div>
  );
};

export default Dashboard;
