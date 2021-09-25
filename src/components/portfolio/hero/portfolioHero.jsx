import styles from "./portfolioHero.module.css";

import portfolioImg from "../../../images/portfolio-hero.png";
const PortfolioHero = () => {
  return (
    <div className={`coontainer-fluid ${styles.hero_wrapper}`}>
      <div className={styles.content}>
        <div className={styles.hr}></div>
        <h1>ABOUT ITIAA CONSULTS</h1>
        <p>
<<<<<<< HEAD
          We are fintech entrepreneurs and Consultants combining finance and
          technology to offer solutions to a multivariate stream of users
          needing to make smart, informed and data driven financial decisions
          through our three tier service pack: financial & investment appraisal,
          financial analytics and diagnostics, financial modelling and
          evaluation
=======
          We are fintech entrepreneurs and Consultants combining finance and technology to offer solutions to a multivariate stream of users needing to make smart, informed and data driven financial decisions through our three tier service pack:financial & investment appraisal, financial analytics and diagnostics, financial modelling and evaluation
>>>>>>> 9f99ed45374f2cd38cde63ee94c4f42962817866
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
