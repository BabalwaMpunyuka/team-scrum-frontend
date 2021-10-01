import styles from './AdminSideNav.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminTopNav = () => {
    const [search, setSearch] = useState("");

    return (
        <div className={`${styles.top_wrapper}`}>
            <h1 className={`h1 ${styles.users}`}>All Users</h1>
            <div className={`${styles.input_control}`}>
                <input type="search"
                className={`${styles.search}`}
                name="search"
                value={search}
                placeholder="Search"
                onChange={() => setSearch(search)}/>
                <FontAwesomeIcon icon={["fas", "search"]} className={`${styles.icons}`}/>
            </div>
        </div>
    )
}
export default AdminTopNav;