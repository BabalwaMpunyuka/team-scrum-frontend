import AdminSideNav from "../../components/Navigation/adminNav/AdminSideNav";
import AdminTopNav from "../../components/Navigation/adminNav/AdminTopNav";
import styles from './Admin.module.css';
import user from '../../images/user.png';

const Admin = () => {

    return (
        <div clasName={`${styles.wrapper}`}>
            <AdminSideNav />
            <AdminTopNav />
            <div className={`${styles.users}`}>
                <div className={`${styles.user}`}>
                    <div className={`${styles.user_image}`}>
                        <img src={user} alt="User" className={`${styles.image}`}/>
                    </div>
                    <div className={`${styles.user_info}`}>
                        <div className={`${styles.user_name}`}>
                            <h3>Florentyna Williams</h3>
                            <p>flora@gmail.com</p>
                        </div>
                        <button className={`${styles.btn}`}>
                            View
                        </button>
                    </div>
                </div>
                 <div className={`${styles.user}`}>
                    <div className={`${styles.user_image}`}>
                        <img src={user} alt="User" className={`${styles.image}`}/>
                    </div>
                    <div className={`${styles.user_info}`}>
                        <div className={`${styles.user_name}`}>
                            <h3>Florentyna Williams</h3>
                            <p>flora@gmail.com</p>
                        </div>
                        <button className={`${styles.btn}`}>
                            View
                        </button>
                    </div>
                </div>
                 <div className={`${styles.user}`}>
                    <div className={`${styles.user_image}`}>
                        <img src={user} alt="User" className={`${styles.image}`}/>
                    </div>
                    <div className={`${styles.user_info}`}>
                        <div className={`${styles.user_name}`}>
                            <h3>Florentyna Williams</h3>
                            <p>flora@gmail.com</p>
                        </div>
                        <button className={`${styles.btn}`}>
                            View
                        </button>
                    </div>
                </div>
                 <div className={`${styles.user}`}>
                    <div className={`${styles.user_image}`}>
                        <img src={user} alt="User" className={`${styles.image}`}/>
                    </div>
                    <div className={`${styles.user_info}`}>
                        <div className={`${styles.user_name}`}>
                            <h3>Florentyna Williams</h3>
                            <p>flora@gmail.com</p>
                        </div>
                        <button className={`${styles.btn}`}>
                            View
                        </button>
                    </div>
                </div>
                 <div className={`${styles.user}`}>
                    <div className={`${styles.user_image}`}>
                        <img src={user} alt="User" className={`${styles.image}`}/>
                    </div>
                    <div className={`${styles.user_info}`}>
                        <div className={`${styles.user_name}`}>
                            <h3>Florentyna Williams</h3>
                            <p>flora@gmail.com</p>
                        </div>
                        <button className={`${styles.btn}`}>
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;