import NavigationBar from '../../components/Navigation/NavigationBar';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';
import news_image from '../../components/images/blog/news_image.png';
import calculator_image from '../../components/images/blog/calculator_image.png';
import percent_image from '../../components/images/blog/percent_image.png';
import blogStyles from './Blog.module.css';

const Blog = () => {

    return (
        <div className='container-fluid'>
            <NavigationBar />
            <h1 className='h1'>ITIAA INVESTMENT NEWS BLOG</h1>
            <div>
                <div className={`${blogStyles.topic_image}`}>
                    <img src={percent_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                    <h3 className={`${blogStyles.h3}`}>Lorem ipsun is the topic of today</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                    accumsan venenatis in id commodo in eget. Donec amet, lacinia 
                    vulputate erat gravida lacus aliquam et libero. Senectus accumsan 
                    amet purus vestibulum condimentum elit nunc at. Semper enim 
                    interdum velit, dolor tristique augue mauris. Sed vitae, phasellus 
                    orci aenean. Faucibus ullamcorper purus massa orci tincidunt. Id faucibus 
                    eget mattis tortor sit viverra velit turpis ullamcorper. Sagittis, euismod 
                    viverra tincidunt velit morbi vitae. Egestas nisl elit, tempus quisque mi 
                    nunc volutpat senectus. Ornare urna, condimentum tincidunt amet felis. 
                    Suscipit massa amet risus in. Turpis nec quis aliquet donec lacus.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                    accumsan venenatis in id commodo in eget. Donec amet, lacinia 
                    vulputate erat gravida lacus aliquam et libero. Senectus accumsan 
                    amet purus vestibulum condimentum elit nunc at. Semper enim 
                    interdum velit, dolor tristique augue mauris. Sed vitae, phasellus 
                    orci aenean. Faucibus ullamcorper purus massa orci tincidunt. Id 
                    faucibus eget mattis tortor sit viverra velit turpis ullamcorper. 
                    Sagittis, euismod viverra tincidunt velit morbi vitae. Egestas nisl elit, 
                    tempus quisque mi nunc volutpat senectus. Ornare urna, condimentum tincidunt 
                    amet felis. Suscipit massa amet risus in. Turpis nec quis aliquet donec lacus.
                </p>
            </div>
            <div className={`row ${blogStyles.row}`}>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={calculator_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={percent_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
            </div>
            <div className={`row ${blogStyles.row}`}>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={news_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={calculator_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={percent_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
            </div>
            <div className={`row ${blogStyles.row}`}>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={news_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={calculator_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
                <div className={`col-md-4 ${blogStyles.news_margin}`}>
                    <Link to='/'>
                        <img src={percent_image} alt='Blog news' className={`img-responsive ${blogStyles.img}`}/>
                        <p className={`${blogStyles.para}`}>Lorem ipsum it's past midnight, don't stay up too late</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Blog;