import React from "react";


export default function Label ({className, htmlFor, children, text}) {
    
    return(

        <>
            <label htmlFor={htmlFor} className={className}>{text} {children}</label>
        </>
    )
}
Label.defaultProps = {
    htmlFor: '',
    className: '',
    text: '',
};