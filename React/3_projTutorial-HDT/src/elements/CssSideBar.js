import React from "react";
import {Link} from 'react-router-dom';


export default function CssSideBar() {

    return(
        <>
            <ul className="sideBar">
                <li><Link className="sideBarLink"  to={'/tutorial/css/introduction'}>CSS Introduction</Link></li>
                <li><Link className="sideBarLink"  to={'/tutorial/css/syntax'}>CSS Syntax</Link></li>
                <li><Link className="sideBarLink"  to={'/tutorial/css/selectors'}>CSS Selectors</Link></li>
                <li><Link className="sideBarLink"  to={'/tutorial/css/how-to-add-css'}>How To Add CSS</Link></li>
                <li><Link className="sideBarLink"  to={'/tutorial/css/comments'}>CSS Comments</Link></li>
            </ul>

        </>
    )
}