import React from "react";



export default function PhonesHeaderItems ({className, children}) {
    
    return(

        <>
            <div data-spollers className="phones-header__items">
                {children}
            </div>
        </>
    )
}