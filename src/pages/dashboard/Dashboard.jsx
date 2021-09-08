import dashStyles from './Dashboard.module.css';
import sideStyles from './SideNav.module.css';
import diagnostics from '../../images/diagnostics.png';
import comment from '../../images/comment.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from './SideNav';
import { useState } from 'react';
import Head from './Head';
import Footer from '../../components/footer/Footer';

const Dashboard = () => {
    const [width, setWidth] = useState(false);

    return (
        <div className="container-fluid">
            <button className="btn btn-primary btn-md" onClick={()=>setWidth(false)}>
                <FontAwesomeIcon icon={["fas", "bars"]}/>
            </button>
            <SideNav className={width?`${sideStyles.navbar_width}`:`${sideStyles.navbar_width2}`}/>
            <Head />
            <div className='container-fluid'>
                <button className='btn btn-primary btn-md p-5'>
                    <Link to="/add">
                    Add Business
                    <FontAwesomeIcon icon={["fas", "plus-circle"]} className={dashStyles.icon}/>
                    </Link>
                </button>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={dashStyles.icon}>
                            <FontAwesomIcon icon={[""]}/>
                        </div>
                        <h2 className={dashStyles.h2}>Financial Appraisals</h2>
                        <p className={dashStyles.text}>lorem ipsum take away</p>
                        <button className="btn btn-primary btn-lg">Request Appraisal</button>
                    </div>
                    <div className='col-md-6'>
                        <div className={dashStyles.icon}>
                            <FontAwesomIcon icon={["fas", "chart-line"]}/>
                        </div>
                        <h2 className={dashStyles.h2}>Financial Modelling</h2>
                        <p className={dashStyles.text}>lorem ipsum take away</p>
                        <button className="btn btn-primary btn-lg">
                            <Link to="/modelling">
                                View
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={dashStyles.icon}>
                            <img src={diagnostics} alt="Diagnostics" className="img-responsive"/>
                        </div>
                        <h2 className={dashStyles.h2}>Financial Diagnostics</h2>
                        <p className={dashStyles.text}>lorem ipsum take away</p>
                        <button className="btn btn-primary btn-lg">
                            <Link to="/diagnostics">
                                View
                            </Link></button>
                    </div>
                    <div className='col-md-6'>
                        <div className={dashStyles.icon}>
                        <img src={comment} alt="Comment" className="img-responsive"/>
                        </div>
                        <h2 className={dashStyles.h2}>External Business Requests</h2>
                        <p className={dashStyles.text}>lorem ipsum take away</p>
                        <button className="btn btn-primary btn-lg">
                            <Link to="/requests">
                                Make Requests
                            </Link></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;