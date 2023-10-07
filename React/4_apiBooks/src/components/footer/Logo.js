import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'
import Img from '../../elements/Img';

export default function Logo() {

    return (
        <>
            <div className='stLogoF'>
                <Link to='/'><Img url={logo} width='184px' text = "Logo"/></Link>
            </div>
        </>
    )
}