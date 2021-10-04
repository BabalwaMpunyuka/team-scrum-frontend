import { Link } from "react-router-dom";
import blogStyles from "./blogFooter.module.css";

//images
import { news_image,calculator_image ,percent_image } from "../../pages/blog/blogItems";

const BlogFooter = () => {
  return (
    <div>
      <div className={`${blogStyles.blog_grid}`}>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={calculator_image} alt="Blog news" />
            <p className={`${blogStyles.para} `}>
            What is Financial appraisal?
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/2">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para} text-center`}>
            Financial analytics and diagnostics: what you should know
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/3">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para} text-center`}>
            Financial modeling defined for a layman
            </p>
          </Link>
        </div>
      </div>
      <div className={`${blogStyles.blog_grid}`}>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/1">
            <img src={news_image} alt="Blog news" />
            <p className={`${blogStyles.para} text-center`}>
            What is Financial appraisal?
            </p>
          </Link>
        </div>
        <div className={`${blogStyles.news_margin}`}>
          <Link to="/blog/2">
            <img src={calculator_image} alt="Blog news" />
            <p className={`${blogStyles.para} text-center`}>
            Financial analytics and diagnostics: what you should know
            </p>
          </Link>
        </div>
        <div className={` ${blogStyles.news_margin}`}>
          <Link to="/blog/3">
            <img src={percent_image} alt="Blog news" />
            <p className={`${blogStyles.para} text-center`}>
            Financial modeling defined for a layman
            </p>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default BlogFooter;
