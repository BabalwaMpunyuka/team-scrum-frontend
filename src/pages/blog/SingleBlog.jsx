import { useEffect, useState } from "react";
import blogStyles from "./Blog.module.css";
import { useParams } from "react-router-dom";
import BlogFooter from "../../components/blog/blogFooter";
import { blogItems } from "./blogItems";
import ScrollToTop from "../../components/ScrollToTop";

const initialState = {
  id: "1",
  title: "",
  featureP1: "",
  featureImage: "",
  featureP2: "",
  paragraphs: [],
};

const SingleBlog = () => {
  let { blogId } = useParams();
  console.log(blogId);
  console.log(blogItems);
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setStateValue("id", blogId ? blogId : "1");
    loadState();
    // eslint-disable-next-line
  }, [blogId, state.id]);

  const setStateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const loadState = () => {
    const blog = blogItems.find((blogItem) => blogItem.id === state.id);
    setState((prevState) => ({
      ...prevState,
      title: blog ? blog.title : "",
      featureP1: blog ? blog.featureP1 : "",
      featureP2: blog ? blog.featureP2 : "",
      featureImage: blog ? blog.featureImage : "",
    }));
  };

  return (
    <div className={`container ${blogStyles.blog}`}>
      <ScrollToTop />
      <h1 className={blogStyles.heading}>{state.title}</h1>
      <div className={`${blogStyles.featured_blog} row`}>
        <div className={`col-md-5 ${blogStyles.topic_image} img-fluid`}>
          <img src={state.featureImage} alt="Blog news" />
          <h3>{state.title}</h3>
        </div>
        <div className={`col-md-6 ${blogStyles.featured_text_wrapper}`}>
          <p>{state.featureP1}</p>
          <p>{state.featureP2}</p>
        </div>
        <div className={`col-sm-12 ${blogStyles.featured_text_wrapper}`}>
          <p></p>
          <p></p>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};
export default SingleBlog;
