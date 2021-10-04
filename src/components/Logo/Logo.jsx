import styles from './Logo.module.css';
import logo from '../../images/logo_square.png';

const Logo=()=>{
    return <img src={logo} alt='ITIAA logo' className={`img-fluid ${styles.AppLogo}`}/>
}

export default Logo;