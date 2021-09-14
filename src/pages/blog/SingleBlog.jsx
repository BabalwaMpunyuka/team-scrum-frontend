import blogStyles from "./Blog.module.css";
// import {useParams} from "react-router-dom";
import BlogFooter from "../../components/blog/blogFooter";

//images
import percent_image from "../../images/blog/percent_image.png";

const SingleBlog = () => {
    // let { serviceId } = useParams();
  return (
    <div className={`container ${blogStyles.blog}`}>
      <h1 className={blogStyles.heading}>ITIAA INVESTMENT NEWS BLOG</h1>
      <div className={`${blogStyles.featured_blog} row`}>
        <div className={`col-md-5 ${blogStyles.topic_image}`}>
          <img src={percent_image} alt="Blog news" />
          <h3>Lorem ipsun is the topic of today</h3>
        </div>
        <div className={`col-md-6 ${blogStyles.featured_text_wrapper}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan venenatis in id commodo in eget. Donec amet, lacinia
            vulputate erat gravida lacus aliquam et libero. Senectus accumsan
            amet purus vestibulum condimentum elit nunc at. Semper enim interdum
            velit, dolor tristique augue mauris. Sed vitae, phasellus orci
            aenean. Faucibus ullamcorper purus massa orci tincidunt. Id faucibus
            eget mattis tortor sit viverra velit turpis ullamcorper. Sagittis,
            euismod viverra tincidunt velit morbi vitae. Egestas nisl elit,
            tempus quisque mi nunc volutpat senectus. Ornare urna, condimentum
            tincidunt amet felis. Suscipit massa amet risus in. Turpis nec quis
            aliquet donec lacus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan venenatis in id commodo in eget. Donec amet, lacinia
            vulputate erat gravida lacus aliquam et libero. Senectus accumsan
            amet purus vestibulum condimentum elit nunc at. Semper enim interdum
            velit, dolor tristique augue mauris. Sed vitae, phasellus orci
            aenean. Faucibus ullamcorper purus massa orci tincidunt. Id faucibus
            eget mattis tortor sit viverra velit turpis ullamcorper. Sagittis,
            euismod viverra tincidunt velit morbi vitae. Egestas nisl elit,
            tempus quisque mi nunc volutpat senectus. Ornare urna, condimentum
            tincidunt amet felis. Suscipit massa amet risus in. Turpis nec quis
            aliquet donec lacus.
          </p>
        </div>
        <div className={`col-sm-12 ${blogStyles.featured_text_wrapper}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan venenatis in id commodo in eget. Donec amet, lacinia
            vulputate erat gravida lacus aliquam et libero. Senectus accumsan
            amet purus vestibulum condimentum elit nunc at. Semper enim interdum
            velit, dolor tristique augue mauris. Sed vitae, phasellus orci
            aenean. Faucibus ullamcorper purus massa orci tincidunt. Id faucibus
            eget mattis tortor sit viverra velit turpis ullamcorper. Sagittis,
            euismod viverra tincidunt velit morbi vitae. Egestas nisl elit,
            tempus quisque mi nunc volutpat senectus. Ornare urna, condimentum
            tincidunt amet felis. Suscipit massa amet risus in. Turpis nec quis
            aliquet donec lacus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan venenatis in id commodo in eget. Donec amet, lacinia
            vulputate erat gravida lacus aliquam et libero. Senectus accumsan
            amet purus vestibulum condimentum elit nunc at. Semper enim interdum
            velit, dolor tristique augue mauris. Sed vitae, phasellus orci
            aenean. Faucibus ullamcorper purus massa orci tincidunt. Id faucibus
            eget mattis tortor sit viverra velit turpis ullamcorper. Sagittis,
            euismod viverra tincidunt velit morbi vitae. Egestas nisl elit,
            tempus quisque mi nunc volutpat senectus. Ornare urna, condimentum
            tincidunt amet felis. Suscipit massa amet risus in. Turpis nec quis
            aliquet donec lacus.
          </p>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};
export default SingleBlog;
