import { Link } from "react-router-dom";
import styles from "./AreaExpertise.module.css";

import arrow_slant from "../../../images/icons/arrow_slant_icon.svg";
import bar_chart from "../../../images/icons/bar_chart_icon.svg";
import cartesan from "../../../images/icons/cartesan_icon.svg";
import dash_icon from "../../../images/icons/dash_icon.svg";
import line_graph from "../../../images/icons/line_graph_up_icon.svg";
import stroke from "../../../images/icons/stroke_icon.svg";
import Button from "../../../components/form/button/Button";

function AreaExpertise() {
  return (
    <div className={`${styles.expertise_wrapper}`}>
      <h1>Area of Expertise</h1>
      <div className={`container ${styles.expertise_grid_container}`}>
        <div className={styles.expertise_grid_item}>
          <div className={styles.grid_item_icon}>
            <img src={stroke} alt="stroke icon" className={styles.stroke} />
            <img
              src={arrow_slant}
              alt="stroke icon"
              className={styles.arrow_slant}
            />
            <img
              src={dash_icon}
              alt="stroke icon"
              className={styles.dash_icon}
            />
            <img
              src={line_graph}
              alt="stroke icon"
              className={styles.line_graph}
            />
          </div>
          <h2 className="capitalize">Financial & Investment Appraisal</h2>
          <p>
            Financial appraisal involves the use of discounted cash flow techniques and other approaches used to assess a business problem in financial terms, such as ratio analysis, profitability index, or risk analysis. Compare economic appraisal.Investment appraisal involves analysis done to consider the profitability of an investment over the life of an asset alongside considerations of affordability and strategic fit.
          </p>
          <Link to={`/portfolio/financial-appraisals`}>
            <Button type="button" variant="primary">
              Learn More
            </Button>
          </Link>
        </div>

        <div className={styles.expertise_grid_item}>
          <div className={styles.grid_item_icon}>
            <img src={cartesan} alt="Cartesan" className={styles.cartesan} />
            <img
              src={line_graph}
              alt="Line graph"
              className={styles.line_graph_two}
            />
          </div>
          <h2 className="capitalize">Financial Analytics & Diagnostics</h2>
          <p>
            Financial analysis is the process of evaluating businesses, projects, budgets, and other finance-related transactions to determine their performance and suitability. Typically, financial analysis is used to analyze whether an entity is stable, solvent, liquid, or profitable enough to warrant a monetary investment.
            If conducted externally, financial analysis can help investors choose the best possible investment opportunities. </p>
          {/* <p className="show-mobile"> If conducted internally, financial analysis can help managers make future business decisions or review historical trends for past successes. </p> */}

           {/* <p className="show-mobile">Financial analytics involves providing differing perspectives on the financial data of a given business, giving insights that can facilitate strategic decisions and actions that improve the overall performance of the business. Related to business intelligence and enterprise performance management, finance analytics impacts virtually all aspects of a business, playing a critical role in calculating profit, answering questions about a business, and enabling future business forecasting. </p>
           */}
          <Link to={`/portfolio/financial-diagnostic`}>
            <Button type="button" variant="primary">
              Learn More
            </Button>
          </Link>
        </div>

        <div className={styles.expertise_grid_item}>
          <div className={styles.grid_item_icon}>
            <img
              src={bar_chart}
              alt="Line graph"
              className={styles.bar_chart}
            />
          </div>
          <h2 className="capitalize">Financial Modelling and Evaluation</h2>
          <p>
            Financial modeling is a representation in numbers of a company's operations in the past, present, and the forecasted future. Such models are intended to be used as decision-making tools. In Financial analysis they are used to explain or anticipate the impact of events on a company's stock, from internal factors, such as a change of strategy or business model to external factors such as a change in economic policy or regulation. </p>
            {/* <p className="show-mobile">Financial models are used to estimate the valuation of a business or to compare businesses to their peers in the industry. They also are used in strategic planning to test various scenarios, calculate the cost of new projects, decide on budgets, and allocate corporate resources.
          </p> */}
          <Link to={`/portfolio/financial-modelling`}>
            <Button type="button" variant="primary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AreaExpertise;
