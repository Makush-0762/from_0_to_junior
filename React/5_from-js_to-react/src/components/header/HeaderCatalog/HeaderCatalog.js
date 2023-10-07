import React from "react";
import Button from "../../../elements/Button";
import MenuCatalogSubMenu from './MenuCatalogSubMenu'

export default function HeaderCatalog () {
    
    return(

        <>
            <div className="header__catalog catalog-header">
                <div className="catalog-header__container">
                    <nav className="catalog-header__menu menu-catalog">
                        <Button type="button" className="menu-catalog__back _icon-back" text='Back'/>
                        <ul className="menu-catalog__list">
                            <li className="menu-catalog__item"><button data-parent="1" className="menu-catalog__link">Knife catalog</button></li>
                            <li className="menu-catalog__item"><button data-parent="2" className="menu-catalog__link">Blade weapon</button></li>
                            <li className="menu-catalog__item"><a href="" className="menu-catalog__link">Sovereign product</a></li>
                            <li className="menu-catalog__item"><a href="" className="menu-catalog__link">Lanterns</a></li>
                            <li className="menu-catalog__item"><a href="" className="menu-catalog__link">Related Products</a></li>
                        </ul>
                        <MenuCatalogSubMenu/>
                    </nav>
                </div>
            </div>
        </>
    )
}