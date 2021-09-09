import Logo from '../../components/Logo/Logo';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sideStyles from './SideNav.module.css';
import dashboard from '../../images/dashboard.png';

const SideNav = () => {

    const clickHandler = (e) => {
        e.target.style.backgroundColor = "background: #4884FB; border-radius: 5px;";
    }

    return (
        <div className={`${sideStyles.navbar_wrapper}`}>
            <div className="container">
                <nav className={`${sideStyles.navbar}`}>
                    <div className={`${sideStyles.logo}`}>
                        <Logo />
                    </div>
                    <ul className={`${sideStyles.nav_links}`}>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/" className="dashboard">
                                <img src={dashboard} alt="Dashboard" className="img-responsive"/>
                                Dashboard
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/account" className="account">
                                <FontAwesomeIcon icon={["far", "user"]} className={sideStyles.icon}/>
                                Account
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/reports" className="reports">
                                <FontAwesomeIcon icon={["fas", "file-contract"]} className={sideStyles.icon}/>
                                Reports
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/business_listing" className="businessListing">
                                <FontAwesomeIcon icon={["fas", "briefcase"]} className={sideStyles.icon}/>
                                Business listing
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/economic_calender" className="economic">
                                <FontAwesomeIcon icon={["fas", "calender-week"]} className={sideStyles.icon}/>
                                Economic calendar
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/settings" className="settings">
                                <FontAwesomeIcon icon={["fas", "cog"]} className={sideStyles.icon}/>
                                Settings
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/" className="dashboard">
                                <FontAwesomeIcon icon={["fas", "headphones"]} className={sideStyles.icon}/>
                                Support 24/7
                            </Link>
                        </li>
                        <li className={`${sideStyles.nav_link}`} onClick={clickHandler}>
                            <Link to="/" className="dashboard">
                            <FontAwesomeIcon icon={["fas", "door-open"]} className={sideStyles.icon}/>
                                Log out
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideNav;