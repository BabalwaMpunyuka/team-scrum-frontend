import styles from "./portfolioHero.module.css";

import portfolioImg from "../../../images/portfolio-hero.png";
const PortfolioHero = () => {
  return (
    <div className={`coontainer-fluid ${styles.hero_wrapper}`}>
      <div className={styles.content}>
        <div className={styles.hr}></div>
        <h1>About Our Investments Consulting Company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          nullam gravida at massa, id nisl porttitor..
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
