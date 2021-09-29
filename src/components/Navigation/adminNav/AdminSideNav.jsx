import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import styles from './AdminSideNav.module.css';

const AdminSideNav = () => {

    return (
        <div className={`${styles.wrapper}`}>
            <Logo />
            <ul className={`${styles.navlinks}`}>
                <li className={`${styles.navlink}`}>
                    <FontAwesomeIcon icon={["fas", "users"]} className={`${styles.icon}`}/>
                    <Link to="/users" className={`${styles.link}`}>
                        Users
                    </Link>
                </li>
                <li className={`${styles.navlink}`}>
                    <FontAwesomeIcon icon={["fas", "bell"]} className={`${styles.icon}`}/>
                    <Link to="/users" className={`${styles.link}`}>
                        Notifications
                    </Link>
                </li>
                <li className={`${styles.navlink}`}>
                    <FontAwesomeIcon icon={["fas", "cog"]} className={`${styles.icon}`}/>
                    <Link to="/users" className={`${styles.link}`}>
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default AdminSideNav;