import React from "react";


export default function Img ({urlImg}){

    return(
        <>
            <div className="bodyImgTutorial">
                <img src={urlImg} alt="img" />
            </div>
        </>
    )

}