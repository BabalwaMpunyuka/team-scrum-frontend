import NavigationBar from '../../components/Navigation/NavigationBar';
import SideNav from "../dashboard/SideNav";
import Footer from '../../components/footer/Footer';
import user from '../../images/user.png';
import accountStyles from './Account.module.css';
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <div className='container-fluid'>
            <NavigationBar />
            <SideNav />
            <div className={`${accountStyles.account_wrapper}`}>
                <img src={user} alt="User" className={`img-responsive ${accountStyles.user_image}`}/>
                <h2 className={`${accountStyles.h2}`}>Florentyna William</h2>
                <h3 className={`${accountStyles.h3}`}>Email address:</h3>
                <p className={`${accountStyles.p}`}>florentyna.william@example.com</p>
                <h3 className={`${accountStyles.h3}`}>Phone number:</h3>
                <p className={`${accountStyles.p}`}>+23397968048304</p>
                <button className="btn btn-md btn-primary">
                    <Link to="/edit_profile" className="edit">
                    Edit profile
                    </Link>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Account;