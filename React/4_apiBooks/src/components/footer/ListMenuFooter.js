import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css'


export default function ListMenuFooter() {

    return (

        <>
            <ul className="listMenuFooter">
                <Link to='/' className="linkMenuFooter"><li>Home</li></Link>
                <Link to='/about' className="linkMenuFooter"><li>About</li></Link>
                <Link to='/book' className="linkMenuFooter"><li>Books</li></Link>
                <Link to='/blog' className="linkMenuFooter"><li>Blog</li></Link>
                <Link to='/contact' className="linkMenuFooter"><li>Contact</li></Link>
            </ul>
        </>
    )
}