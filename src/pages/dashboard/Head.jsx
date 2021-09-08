import user from '../../images/user.png';
import headStyles from './Head.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sideStyles from './SideNav.module.css';

const Head = () => {

    return (
        <div>
            <img src={user} alt="User" className={headStyles.user}/>
            <h3 className={headStyles.h3}>Hello, Williams</h3>
            <h1 className={headStyles.h1}>Welcome to ITIAA</h1>
            <Link to="/" className='home'>
                <FontAwesomeIcon icon={["fas", "home"]} className={sideStyles.icon}/>
            </Link>
            <Link to="/" className='home'>
                <FontAwesomeIcon icon={["fas", "bell"]} className={sideStyles.icon}/>
            </Link>
        </div>
    )
}

export default Head;