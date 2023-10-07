import React from "react";
import '../../App.css';
import '../../elements/Menu.css';
import {Link} from 'react-router-dom';
import './MenuFooter.css'

export default function MenuFooter (){


    return(
        <>
            <div className="bodyMunyList">
                <ul className="MemuListFooter">
                    <li><strong><Link to='/' className="listHomeFooter linkFooter">Home</Link></strong></li>
                    <li class="dropdownFooter"><strong><Link to='/tutorial'  className="dropbtnFooter linkFooter">Tutorial</Link></strong>
                        <ul id="dropdownFooter" className='dropdown-contentFooter'>
                            <li><Link to='/tutorial/html' className="linkFooter">HTML</Link></li>
                            <li><Link to='/tutorial/css' className="linkFooter">CSS</Link></li>
                            <li><Link to='/tutorial/javascript' className="linkFooter">JavaScript</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}