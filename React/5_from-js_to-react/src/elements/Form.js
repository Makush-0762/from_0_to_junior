import React from "react";


export default function Form ({className, action, children}) {
    
    return(

        <>
            <form action={action} className={className}>
                {children}
            </form>
        </>
    )
}