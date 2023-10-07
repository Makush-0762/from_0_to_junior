import React from "react";


export default function SubMenuCatalogContainer ({children, className}) {
    
    return(

        <>
            <div  className={className}>
                {children}
            </div>
        </>
    )
}