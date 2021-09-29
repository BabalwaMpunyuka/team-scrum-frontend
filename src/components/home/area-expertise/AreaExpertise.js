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
      <h1>Our Area of expertise</h1>
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
          <h2>Financial & Investment appraisal</h2>
          <p>
            Financial appraisal involves the use of discounted cash flow
            techniques and other approaches used to assess a business problem in
            financial terms, such as ratio analysis, profitability index, or
            risk analysis. Compare economic appraisal. Investment appraisal involves analysis done to consider the profitability of an investment.
          </p>
          <Link to={`/portfolio/financial-appraisals`}>
            <Button type="button" variant="primary-outline">
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
          <h2>Financial analytics and diagnostics</h2>
          <p>
            Financial analysis is the process of evaluating businesses,
            projects, budgets, and other finance-related transactions to
            determine their performance and suitability. Typically, financial
            analysis is used to analyze whether an entity is stable, solvent,
            liquid, or profitable enough to warrant a monetary investment.
          </p>
          <Link to={`/portfolio/financial-diagnostic`}>
            <Button type="button" variant="primary-outline">
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
          <h2>Financial modelling and evaluation</h2>
          <p>
            Financial modeling is a representation in numbers of a company's
            operations in the past, present, and the forecasted future. Such
            models are intended to be used as decision-making tools. In
            Financial analysis they are used to explain or anticipate the impact
            of events on a company's stock, from internal factors.
          </p>
          <Link to={`/portfolio/financial-modelling`}>
            <Button type="button" variant="primary-outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AreaExpertise;
