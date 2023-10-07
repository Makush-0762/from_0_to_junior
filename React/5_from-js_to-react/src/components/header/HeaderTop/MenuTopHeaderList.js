import React from "react";


export default function MenuTopHeaderList () {
    
    return(

        <>
            <nav className="top-header__menu menu-top-header">
                <ul data-da=".menu__body,991.98" className="menu-top-header__list">
                  <li className="menu-top-header__item menu-top-header__item_catalog"><a href="" className="menu-top-header__link menu-top-header__link_catalog _icon-arrow-bottom">Каталог товаров</a></li>
                  <li className="menu-top-header__item"><a href="" className="menu-top-header__link">About Us</a></li>
                  <li className="menu-top-header__item"><a href="" className="menu-top-header__link">Payment and delivery</a></li>
                  <li className="menu-top-header__item"><a href="" className="menu-top-header__link">News</a></li>
                  <li className="menu-top-header__item"><a href="" className="menu-top-header__link">Contacts</a></li>
                </ul>
            </nav>
        </>
    )
}