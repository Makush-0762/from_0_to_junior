import React from "react";
import {Link} from 'react-router-dom';
import IconReverse from '../images/IconCard.png'

export default function IconCard() {

    return (
        <>
            <div style={{width:'45px'}}>
               <Link to={'/#'}><img src={IconReverse} style={{width:'100%', }} alt="Reverse"/></Link>
            </div>
        </>
    )
}