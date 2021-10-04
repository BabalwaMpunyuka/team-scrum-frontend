import blogStyles from "./Blog.module.css";
import BlogFooter from "../../components/blog/blogFooter";

//images
import logo_image from "../../images/logo.png";

const FeaturedBlog = () => {
  return (
    <div className={`container ${blogStyles.blog}`}>
      <h1 className={blogStyles.heading}>ITIAA INVESTMENT NEWS BLOG</h1>
      <div className={`${blogStyles.featured_blog} row`}>
        <div className={`col-md-5 ${blogStyles.topic_image}`}>
          <img src={logo_image} alt="Blog news" className="img-fluid" />
          <h3 className="text-center">About ITIAA Consults</h3>
        </div>
        <div className={`col-md-6 ${blogStyles.featured_text_wrapper}`}>
          <p>
            Have you ever needed to make an investment decision but did not know
            where to look. Have you been curious about the true financial health
            of a business venture or fund. Look no further; the multivariate
            stop to financial choices and capital budgeting decisions is here
          </p>
          <p>
            Financial appraisal involves the use of discounted cash flow
            techniques and other approaches used to assess a business problem in
            financial terms, such as ratio analysis, profitability index, or
            risk analysis. Compare economic appraisal.Investment appraisal
            involves analysis done to consider the profitability of an
            investment over the life of an asset alongside considerations of
            affordability and strategic fit. Financial analysis is the process
            of evaluating businesses, projects, budgets, and other
            finance-related transactions to determine their performance and
            suitability. Typically, financial analysis is used to analyze
            whether an entity is stable, solvent, liquid, or profitable enough
            to warrant a monetary investment. If conducted internally, financial
            analysis can help managers make future business decisions or review
            historical trends for past successes.
          </p>
        </div>
        <div className={`col-sm-12 ${blogStyles.featured_text_wrapper}`}>
          <p>
            Financial analytics involves providing differing perspectives on the
            financial data of a given business, giving insights that can
            facilitate strategic decisions and actions that improve the overall
            performance of the business. Related to business intelligence and
            enterprise performance management, finance analytics impacts
            virtually all aspects of a business, playing a critical role in
            calculating profit, answering questions about a business, and
            enabling future business forecasting.
          </p>
          <p>
            Financial modeling is a representation in numbers of a company's
            operations in the past, present, and the forecasted future. Such
            models are intended to be used as decision-making tools. In
            Financial analysis they are used to explain or anticipate the impact
            of events on a company's stock, from internal factors, such as a
            change of strategy or business model to external factors such as a
            change in economic policy or regulation. Financial models are used
            to estimate the valuation of a business or to compare businesses to
            their peers in the industry. They also are used in strategic
            planning to test various scenarios, calculate the cost of new
            projects, decide on budgets, and allocate corporate resources.
          </p>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};
export default FeaturedBlog;
