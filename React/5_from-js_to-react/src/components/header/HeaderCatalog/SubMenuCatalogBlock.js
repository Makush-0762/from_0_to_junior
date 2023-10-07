import React from "react";


export default function SubMenuCatalogBlock ({children, className, dataSubmenu}) {
    
    return(

        <>
            <div hidden data-submenu={dataSubmenu} className={className}>
                {children}
            </div>
        </>
    )
}