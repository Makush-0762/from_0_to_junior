import React from "react";


export default function SubMenuCatalogCategory ({children, className}) {
    
    return(

        <>
            <div className={className}>
                {children}
            </div>
        </>
    )
}