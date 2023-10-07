import React from "react";
import MenuTopHeaderList from './MenuTopHeaderList'
import Link from "../../../elements/Link";
import NavTopHid from "./NavTopHid";

export default function HeaderTop () {
    
    return(

        <>
            <div className="header__top top-header">
                <div className='top-header__container'>
                    <MenuTopHeaderList />
                    <Link href='#' className='top-header__user _icon-user' text='Personal Area' />
                    <NavTopHid />
                </div>
            </div>
        </>
    )
}