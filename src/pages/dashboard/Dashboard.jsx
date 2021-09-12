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
        <div className={`container-fluid ${sideStyles.dashboard_wrapper}`}>
            
        </div>
    )
}

export default Dashboard;