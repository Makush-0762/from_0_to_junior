import React from "react";


export default function Input ({name, type, autocomplete, dataRequired,  placeholder, className , dataError, value }) {
    
    return(

        <>
            <input autoComplete={autocomplete} data-required={dataRequired} type={type} name={name} data-error={dataError} value={value} placeholder={placeholder} className={className}/>
        </>
    )
}
Input.defaultProps = {
    autoComplete: '',
    value: '',
    name:'',
    placeholder: '',
    dataError:'',
    dataRequired:'',
    className:'',
};