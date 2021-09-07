import btnStyles from './Button.module.css';

const Button=({type, variant="primary", onClick, children, ...rest})=>{
    const handleVariant=()=>{
        if(variant==="primary") return btnStyles.btnPrimary;
        else if(variant==="primary-outline") return btnStyles.btnOutlinePrimary;
    }
    return(
        <button type={type} className={`${btnStyles.btn} ${handleVariant()}`} {...rest} onClick={onClick}>{children}</button>
    );
}

export default Button;