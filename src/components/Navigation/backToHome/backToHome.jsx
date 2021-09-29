import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import styles from "./BackToHome.module.css";

const BackToHome =()=>{
    return <span className={`container ${styles.wrapper}`}>
    <Link to="/" className={styles.link}>
        <FontAwesomeIcon icon={["fa","chevron-left"]} className={styles.left_icon}/> <span>Back to Home</span>
    </Link>
    </span>
}

export default BackToHome;