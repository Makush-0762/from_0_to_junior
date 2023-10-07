import React from "react";
import {Link} from 'react-router-dom';


export default function HtmlSideBar() {

    return(
        <>
            <ul className="sideBar" >
                <Link className="sideBarLink" to={'/tutorial/html/introduction'}><li>HTML Introduction</li></Link>
                <Link className="sideBarLink"  to={'/tutorial/html/editors'}><li>HTML Editor</li></Link>
                <Link className="sideBarLink"  to={'/tutorial/html/examples'}><li>HTML Examples</li></Link>
                <Link className="sideBarLink"  to={'/tutorial/html/elements'}><li>HTML Elements</li></Link>
                <Link className="sideBarLink"  to={'/tutorial/html/attributes'}><li>HTML Attributes</li></Link>
            </ul>

        </>
    )
}