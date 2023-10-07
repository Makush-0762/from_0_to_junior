import React from "react";

export default function Span ({className, text, children}){

    return(
        <>
            <span className={className}>{children}{text}</span>
        </>
    )
};
Span.defaultProps = {
    className: '',
    text: '',
};