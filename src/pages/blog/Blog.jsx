import { Switch, Route, useRouteMatch } from "react-router-dom";
import FeaturedBlog from "./featuredBlog";
import SingleBlog from "./SingleBlog";

const Blog = () => {
    let { path } = useRouteMatch();
  return (
    <Switch>
    <Route exact path={path}>
      <FeaturedBlog />
    </Route>
    <Route path={`${path}/:blogId`}>
      <SingleBlog />
    </Route>
  </Switch>
  );
};
export default Blog;
