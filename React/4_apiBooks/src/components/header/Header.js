import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import './Header.css'
import Search from "./Search";


export default function Header() {

    return (
        <>
            <div className="bgColor">
                <div className='_container' style={{display:'flex', padding: 'auto 25px'}}>
                    <Logo />
                    <Menu />
                    <div style={{display:'flex', alignItems: 'center', marginLeft:'auto'}}>
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}