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
            <img src={stroke} alt="stroke icon" className={styles.stroke}/>
            <img src={arrow_slant} alt="stroke icon" className={styles.arrow_slant}/>
            <img src={dash_icon} alt="stroke icon" className={styles.dash_icon}/>
            <img src={line_graph} alt="stroke icon" className={styles.line_graph}/>
          </div>
          <h2>Financial Appraisals</h2>
          <p>
            Turpis lorem hendrerit metus vestibulum nisl. Id turpis massa urna
            cursus porta aliquam. Vulputate lacus, ut pellentesque sociis eu
            placerat integer. Mattis ut hac aliquam porttitor mauris. Ultrices
            aenean hendrerit rutrum condimentum vitae sagittis, cras. Nunc
          </p>
          <Button type="button" variant="primary">
            Learn More
        </Button>
        </div>

        <div className={styles.expertise_grid_item}>
          <div className={styles.grid_item_icon}>
            <img src={cartesan} alt="Cartesan" className={styles.cartesan}/>
            <img src={line_graph} alt="Line graph" className={styles.line_graph_two}/>
          </div>
          <h2>Financial Diagnostics</h2>
          <p>
            Turpis lorem hendrerit metus vestibulum nisl. Id turpis massa urna
            cursus porta aliquam. Vulputate lacus, ut pellentesque sociis eu
            placerat integer. Mattis ut hac aliquam porttitor mauris. Ultrices
            aenean hendrerit rutrum condimentum vitae sagittis, cras. Nunc
          </p>
          <Button type="button" variant="primary">
            Learn More
        </Button>
        </div>

        <div className={styles.expertise_grid_item}>
          <div className={styles.grid_item_icon}>
          <img src={bar_chart} alt="Line graph" className={styles.bar_chart}/>
          </div>
          <h2>Financial Modelling and evaluation</h2>
          <p>
            Turpis lorem hendrerit metus vestibulum nisl. Id turpis massa urna
            cursus porta aliquam. Vulputate lacus, ut pellentesque sociis eu
            placerat integer. Mattis ut hac aliquam porttitor mauris. Ultrices
            aenean hendrerit rutrum condimentum vitae sagittis, cras. Nunc
          </p>
          <Button type="button" variant="primary">
            Learn More
        </Button>
        </div>
      </div>
    </div>
  );
}

export default AreaExpertise;
