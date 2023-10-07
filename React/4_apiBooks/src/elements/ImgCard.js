import React from "react";


export default function ImgcCard({url}) {

    return (
        <>
            <div className="bodyCardImg">
                <img src={url} className="cardImg" alt='CardImg' />
            </div>
        </>
    )
}