import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from './Text.module.css';

export const TextField = ({label, ...props}) => {
    const [field, meta ] = useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>  </label>
            <input 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is invalid'}`}
            {...field} {...props}
            autoComplete="off"
            />
            <span className={styles.error}><ErrorMessage name={field.name}/></span>
        </div>
    )
}
