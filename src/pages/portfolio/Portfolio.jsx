import PortfolioHero from "../../components/portfolio/hero/portfolioHero";
import useContextGetter from "../../hooks/useContextGetter";
import Tabs from "../../components/portfolio/tabs/Tabs";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Service from "./Service";


function Portfolio() {
  const { isAuth} = useContextGetter();
  let { path,url } = useRouteMatch();
  return (
    <div>
      {!isAuth ? <>
      <PortfolioHero />
      <div className="container">
        <h1 className="mt-4">What we do</h1>
      </div></>:<div className="container">
        <h1 className="mt-4">Portfolio</h1>
      </div>
      }
      <Tabs url={url} />

      <Switch>
        <Route exact path={path}>
          <Service />
        </Route>
        <Route path={`${path}/:serviceId`}>
          <Service />
        </Route>
      </Switch>
      {/* Tab content */}
      
    </div>
  );
}

export default Portfolio;
