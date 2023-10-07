import React from "react";
import BodyFooterItem from "../BodyFooterItem";
import Link from "../../../../elements/Link";

export default function FirstRow () {

    return(

        <>
        
                <div className="body-footer__row">
                    <BodyFooterItem textButton="INFORMATION" >
                        <nav className="menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="We accept orders throughout Europe" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Knife steels" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="About Us" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Terms of payment and delivery" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Privacy Policy" />
                                </li>
                            </ul>
                        </nav>
                    </BodyFooterItem>
                    <BodyFooterItem textButton="SUPPORT" >
                        <nav className="menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="We accept orders throughout Europe" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Knife steels" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="About Us" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Terms of payment and delivery" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Privacy Policy" />
                                </li>
                            </ul>
                        </nav>
                    </BodyFooterItem>
                    <BodyFooterItem textButton="ADDITIONALLY" >
                        <nav className="menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="We accept orders throughout Europe" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Knife steels" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="About Us" />
                                </li>
                            </ul>
                        </nav>
                    </BodyFooterItem>
                    <BodyFooterItem textButton="PERSONAL AREA" >
                        <nav className="menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="We accept orders throughout Europe" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Knife steels" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="About Us" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Terms of payment and delivery" />
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Privacy Policy" />
                                </li>
                            </ul>
                        </nav>
                    </BodyFooterItem>
                </div>
        </>
    )
}