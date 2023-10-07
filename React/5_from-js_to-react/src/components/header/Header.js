import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBody from "./HeaderBody/HeaderBody";
import HeaderCatalog from "./HeaderCatalog/HeaderCatalog";
import './Header.css'

export default function Header () {

    return(

        <>
        <header className="header">
            <HeaderTop />
            <HeaderBody/>
            <HeaderCatalog />
        </header>

        </>
    )
}