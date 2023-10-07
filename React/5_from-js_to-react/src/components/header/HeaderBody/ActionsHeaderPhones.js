import React from "react";



export default function BodyHeaderActions ({dataDa, className, children}) {
    
    return(

        <>
            <div data-da=".top-header__container,991.98,first" className="actions-header__phones phones-header">
                {children}
            </div>
        </>
    )
}