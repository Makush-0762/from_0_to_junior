import React from "react";
import './ImgMainHomeFon.css';
import Fon from "../images/Book Mockup-copy.jpg"


export default function ImgMainHomeFon (){

    return(
        <>
            <div className="bodyFon">
                <div className="opasity"></div>
                <img src={Fon} alt="fon" className="fonImg"/>
            </div>
        </>
    )

}