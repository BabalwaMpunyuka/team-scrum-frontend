import PortfolioHero from "../../components/portfolio/hero/portfolioHero";
import Tabs from "../../components/portfolio/tabs/Tabs";

function Portfolio() {
  return (
    <div>
      <PortfolioHero />
      <div className="container">
        <h1 className="my-4">What we do</h1>
      </div>
      <Tabs active={"/portfolio/financial-appraisals"}/>
      {/* Tab content */}
      <div className="tab-content">
        <h2>Portfolio</h2>
      </div>
    </div>
  );
}

export default Portfolio;
