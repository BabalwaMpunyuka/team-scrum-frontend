import styles from "./Card.module.css";

const Card=({children, className, width ="100%", height="100%"})=>{
    return(
        <div className={`${styles.card} ${className}`} style={{width, height}}>
            {children}
        </div>
    )
}

export default Card;