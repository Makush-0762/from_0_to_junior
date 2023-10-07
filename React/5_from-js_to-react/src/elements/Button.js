import React from "react";


export default function Button ({type, children, dataTippyContent, className, text}) {
    
    
    return(
        <>
            <button data-tippy-content={dataTippyContent} type={type} className={className}>{children}{text}</button>
        </>
    )
}
Button.defaultProps = {
    dataTippyContent: '',
    text: '',
};