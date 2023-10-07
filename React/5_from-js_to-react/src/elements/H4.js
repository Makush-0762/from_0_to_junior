import React from "react";


export default function H4 ({text, className, children}){

    return(
        <>
            <h4 className={className}>{children}{text}</h4>
        </>
    )
}