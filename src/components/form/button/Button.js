import btnStyles from './Button.module.css';

const Button=({type, variant="primary", onClick, children, ...rest})=>{
    const handleVariant=()=>{
        if(variant==="primary") return btnStyles.btnPrimary;
        else if(variant==="primary-outline") return btnStyles.btnOutlinePrimary;
        else if(variant==="btn-white") return btnStyles.btnWhite;
        else if(variant==="white-outline") return btnStyles.btnOutlineWhite;
    }
 
    return(
        <button type={type} className={`${btnStyles.btn} ${handleVariant()}`} {...rest} onClick={onClick}>{children}</button>
    );
}

export default Button;