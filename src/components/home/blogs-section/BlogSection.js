import Card from "../../card/Card";
import Button from "../../form/button/Button";
import styles from "./BlogSection.module.css";

import news_image from "../../../images/blog/news_image.png";
import percent_image from "../../../images/blog/percent_image.png";
import calculator_image from "../../../images/blog/calculator_image.png";

export default function BlogSection() {
  return (
    <div className={`container ${styles.BlogSection}`}>
      <h1>Investment News Blog</h1>
      <div className={`row ${styles.row} my-1`}>
         <div className="col-lg-4 col-md-6 col-sm-12">
        <Card
          className=""
          width="310.51px"
          height="407px"
        >
          <img src={news_image} alt="news" />
          <p className="my-3 mx-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"> 
        <Card
          className=""
          width="310.51px"
          height="407px"
        >
          <img src={percent_image} alt="percent" />
          <p className="my-3 mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card
          className=""
          width="310.51px"
          height="407px"
        >
          <img src={calculator_image} alt="calculator" />
          <p className="my-3 mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Card>
        </div>
      </div>
      <div className="d-block mt-4 pt-3">
        <Button type="button" variant="primary">
          More News
        </Button>
      </div>
    </div>
  );
}
