import React from "react";
import HtmlSideBar from '../../elements/HtmlSideBar'
import CssSideBar from '../../elements/CssSideBar'
import JsSideBar from '../../elements/JsSideBar'


export default function SideBar ({Sidebar}){

    const sBar = {
        backgroundColor: '#fff',
        height: '100vh',
        padding: '15px',
    }


    return(
        <>
            <div style={sBar}>
                {Sidebar}
            </div>
        </>
    )
}