import React from "react";
import LogoW from '../../images/LogoWight.png'

export default function Logo (){

    return(
        <>
            <div>
                <img src={LogoW} alt="Logo" style={{width:'56px', paddingBottom: '35px'}}/>
            </div>
        </>
    )
}