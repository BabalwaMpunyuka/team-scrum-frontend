import styles from "./portfolioHero.module.css";

import portfolioImg from "../../../images/portfolio-hero.png";
const PortfolioHero = () => {
  return (
    <div className={`coontainer-fluid ${styles.hero_wrapper}`}>
      <div className={styles.content}>
        <div className={styles.hr}></div>
        <h1>ABOUT ITIAA CONSULTS</h1>
        <p>
          We are fintech entrepreneurs and Consultants combining finance and
          technology to offer solutions to a multivariate stream of users
          needing to make smart, informed and data driven financial decisions
          through our three tier service pack: financial & investment appraisal,
          financial analytics and diagnostics, financial modelling and
          evaluation
        </p>
      </div>
      <div className={styles.img_wrapper}>
        <div className={styles.img_container}>
          <img src={portfolioImg} alt="portfolio" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
