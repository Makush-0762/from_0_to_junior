import React from "react";
import {Link} from 'react-router-dom';


export default function JsSideBar() {

    return(
        <>
            <ul className="sideBar">
                <li><Link className="sideBarLink" to={'/tutorial/javascript/introduction'}>JavaScript Introduction</Link></li>
                <li><Link className="sideBarLink" to={'/tutorial/javascript/where-to'}>JavaScript Where To</Link></li>
                <li><Link className="sideBarLink" to={'/tutorial/javascript/output'}>JavaScript Output</Link></li>
                <li><Link className="sideBarLink" to={'/tutorial/javascript/statements'}>JavaScript Statements</Link></li>
                <li><Link className="sideBarLink" to={'/tutorial/javascript/syntax'}>JavaScript Syntax</Link></li>
            </ul>

        </>
    )
}