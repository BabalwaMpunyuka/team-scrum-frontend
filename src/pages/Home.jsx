import Header from "../components/home/Header";
import Contact from "../components/contact/Contact";
import AreaExpertise from "../components/home/area-expertise/AreaExpertise";
import SecuritySection from "../components/home/security/Security";
import TipsSection from "../components/home/tips-section/TipsSection";
import BlogSection from "../components/home/blogs-section/BlogSection";
import StartInvesting from "../components/home/startInvesting/StartInvesting";
import Icons from "../components/icons/Icons";

const Home = () => {
  return (
    <div>
      <Header />
      <AreaExpertise />
      <SecuritySection />
      <TipsSection />
      <BlogSection />
      <StartInvesting />
      <Contact />
      <Icons />
    </div>
  );
};

export default Home;
