import React from "react";
import Button from "../../../elements/Button";
import SubMenuCatalogContainer from './SubMenuCatalogContainer';
import SubMenuCatalogBlock from './SubMenuCatalogBlock';
import SubMenuCatalogCategory from './SubMenuCatalogCategory';
import SubMenuCatalogFooter from './SubMenuCatalogFooter';
import Link from "../../../elements/Link";

export default function MenuCatalogSubMenu () {
    
    return(

        <>
            <div className="menu-catalog__sub-menu sub-menu-catalog">
                <Button type="button" className="menu-catalog__back _icon-back" text='Back'/>
                <SubMenuCatalogContainer className="sub-menu-catalog__container">
                    <SubMenuCatalogBlock dataSubmenu='1' className='sub-menu-catalog__block'>
                            <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                                <Link href="#" className="sub-menu-catalog__link-category" text='Category of knives'/>
                            </SubMenuCatalogCategory>
                            <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                                <Link href="#" className="sub-menu-catalog__link-category" text='Knife production'/>
                            </SubMenuCatalogCategory>
                            <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                                <Link href="#" className="sub-menu-catalog__link-category" text='Knives by steel grade'/>
                            </SubMenuCatalogCategory>
                            <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                                <Link href="#" className="sub-menu-catalog__link-category" text='Sharpening and polishing knives'/>
                            </SubMenuCatalogCategory>
                            <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                                <Link href="#" className="sub-menu-catalog__link-category" text='Knife workshop'/>
                            </SubMenuCatalogCategory>
                            <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Carving knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Tourist knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Hunting knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Damascus knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Carving knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Tourist knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Hunting knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Damascus knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Kitchen knives</a></li>
                        </ul>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                        </ul>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 40х102С2М</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 95х18</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 100х13м</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 110х18</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 107</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 50х14</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives AUS-8</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives К340</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives M390</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Steel knives 766</a></li>
                        </ul>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                        </ul>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knife blades</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Blanks for knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Casting for knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Handle materials</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knife handle care</a></li>
                        </ul>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                    </SubMenuCatalogBlock>
                    <SubMenuCatalogBlock dataSubmenu='2' className='sub-menu-catalog__block'>
                        <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                            <Link href="#" className="sub-menu-catalog__link-category" text='Category of knives'/>
                        </SubMenuCatalogCategory>
                        <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                            <Link href="#" className="sub-menu-catalog__link-category" text='Knife production'/>
                        </SubMenuCatalogCategory>
                        <SubMenuCatalogCategory className='sub-menu-catalog__category'>
                            <Link href="#" className="sub-menu-catalog__link-category" text='Sharpening and polishing knives'/>
                        </SubMenuCatalogCategory>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Carving knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Tourist knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Hunting knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Damascus knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Carving knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Tourist knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Hunting knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Damascus knives</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Kitchen knives</a></li>
                        </ul>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Knives A&R</a></li>
                        </ul>
                        <ul className="sub-menu-catalog__list">
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                            <li className="sub-menu-catalog__item"><a href="#" className="sub-menu-catalog__link">Diamond paste</a></li>
                        </ul>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                        <SubMenuCatalogFooter>
                            <Link href="#" className="sub-menu-catalog__all" text='See all'/>
                        </SubMenuCatalogFooter>
                    </SubMenuCatalogBlock>
                </SubMenuCatalogContainer>
            </div>
        </>
    )
}