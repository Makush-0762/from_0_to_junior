import React from "react";


export default function H1 ({text, className, children}){

    return(
        <>
            <h1 className={className}>{children} {text}</h1>
        </>
    )
}
