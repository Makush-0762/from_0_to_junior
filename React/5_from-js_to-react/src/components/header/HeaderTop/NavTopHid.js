import React from "react";
import Button from "../../../elements/Button";


export default function NavTopHid () {
    
    return(

        <>
            <nav hidden className="menu">
                <Button type='button'  className='menu__icon icon-menu' text={<span></span>}  />
                <div className="menu__body">
                </div>
            </nav>
        </>
    )
}