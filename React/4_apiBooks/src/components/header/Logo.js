import React from "react";
import Img from '../../elements/Img';
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';

export default function Logo() {

    return (
        <>
            <div className='stLogo'>
                <Link to='/'><Img url={logo} width='84px' text = "Logo"/></Link>
            </div>
        </>
    )
}