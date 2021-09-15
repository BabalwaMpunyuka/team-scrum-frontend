import { Link } from "react-router-dom";
import blogStyles from "./blogFooter.module.css";

//images
import news_image from "../../images/blog/news_image.png";
import calculator_image from "../../images/blog/calculator_image.png";
import percent_image from "../../images/blog/percent_image.png";
const BlogFooter = () => {
  return (
    <div>
      <div className={`${blogStyles.blog_grid}`}>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={calculator_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
      </div>
      <div className={`${blogStyles.blog_grid}`}>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={news_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={calculator_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
        <div className={` ${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
      </div>
      <div className={`${blogStyles.blog_grid}`}>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={news_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={calculator_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para}`}>
              Lorem ipsum it's past midnight, don't stay up too late
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;