import React from 'react';
import {ErrorMessage} from "formik";

const MyInputFormik = ({form, field, ...rest}) => {
    const {name} = field;

    return (
        <>
            <input {...field} {...rest}/>
            {/*<ErrorMessage name={name}/>*/}
            {
                form.touched[name]
                && form.errors[name]
                && <span>{form.errors[name]}</span>
            }
        </>
    );
};

export default MyInputFormik;