import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from './Text.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TextField = ({label,className,inputClassName,placeholder,fontAwesomeIcon,iconClick, ...props}) => {
    const [field, meta ] = useField(props);
    return (
        <><div className={className}>
            <input 
            className={`${inputClassName} ${meta.touched && meta.error && 'is invalid'}`}
            {...field} {...props}
            autoComplete="off"
            placeholder={placeholder}
            />
            {fontAwesomeIcon && <FontAwesomeIcon icon={fontAwesomeIcon} className={styles.icon} onClick={iconClick}/>}
        </div><span className={styles.error}><ErrorMessage name={field.name}/></span></>
    )
}
