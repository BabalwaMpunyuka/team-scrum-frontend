import styles from './Logo.module.css';
import logo from '../../images/footerlogo.png';

const LightLogo=()=>{
    return <img src={logo} alt='ITIAA logo' className={`${styles.LightLogo} d-inline-block`}/>
}

export default LightLogo;