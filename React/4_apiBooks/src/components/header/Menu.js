import React from "react";
import {Link} from 'react-router-dom';


export default function Menu() {

    return (
        <>
            <ul className="listMenu">
                <Link to='/' className="linkMenu"><li>Home</li></Link>
                <Link to='/about' className="linkMenu"><li>About</li></Link>
                <Link to='/books' className="linkMenu"><li>Books</li></Link>
                <Link to='/blog' className="linkMenu"><li>Blog</li></Link>
                <Link to='/contact' className="linkMenu"><li>Contact</li></Link>
            </ul>
        </>
    )
}