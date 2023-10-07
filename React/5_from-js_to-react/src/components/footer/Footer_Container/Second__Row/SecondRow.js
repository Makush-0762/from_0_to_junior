import React from "react";
import BodyFooterItem from "../BodyFooterItem";
import Link from "../../../../elements/Link";
import DivBlockOnlyClass from "../../../../elements/DivBlockOnlyClass";
import PictureIMG from "../../../../elements/PictureIMG";
import IconFW from "../../../../img/icons/social/facebook.webp"
import IconFP from "../../../../img/icons/social/facebook.png"
import IconVW from "../../../../img/icons/social/viber.webp"
import IconVP from "../../../../img/icons/social/viber.png"
import IconTW from "../../../../img/icons/social/telegram.webp"
import IconTP from "../../../../img/icons/social/telegram.png"
import IconWW from "../../../../img/icons/social/whatsapp.webp"
import IconWP from "../../../../img/icons/social/whatsapp.png"
import Form from "../../../../elements/Form";
import Label from "../../../../elements/Label";
import Input from "../../../../elements/Input";
import Button from "../../../../elements/Button";

export default function SecondRow () {

    return(

        <>
            <div className="body-footer__row">
                <BodyFooterItem textButton="CONTACTS" >
                    <nav className="menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <Link href="tel:08007774967" className="menu-footer__link _icon-footer-phone" text='0 (800) 777-49-67' />
                                </li>
                                <li className="menu-footer__item _icon-footer-clock">
                                    <DivBlockOnlyClass>
                                        <p>No days off</p>
                                        <p>24/7</p>
                                    </DivBlockOnlyClass>
                                </li>
                                <li className="menu-footer__item _icon-footer-location">
                                    <DivBlockOnlyClass>
                                        <p>6 Pl. Saint-Germain des Prés, 75006 Paris</p>
                                    </DivBlockOnlyClass>
                                </li>
                                <li className="menu-footer__item">
                                    <Link href="mailto:info@zlatmax.ru" className="menu-footer__link _icon-footer-email" text="mail@gmail.com" />
                                </li>
                            </ul>
                    </nav>
                    <ul className="social-footer">
                            <li className="social-footer__item">
                                <Link href="" className="social-footer__link">
                                   <PictureIMG srcSet={IconFW} src={IconFP} alt="iconFacebook"/>
                                </Link>
                            </li>
                            <li className="social-footer__item">
                                <Link href="" className="social-footer__link">
                                    <PictureIMG srcSet={IconVW} src={IconVP} alt="iconViber"/>
                                </Link>
                            </li>
                            <li className="social-footer__item">
                                <Link href="" className="social-footer__link">
                                    <PictureIMG srcSet={IconTW} src={IconTP} alt="iconTelegram"/>
                                </Link>
                            </li>
                            <li className="social-footer__item">
                                <Link href="" className="social-footer__link">
                                    <PictureIMG srcSet={IconWW} src={IconWP} alt="iconWhatsapp"/>
                                </Link>
                            </li>
                    </ul>
                </BodyFooterItem>
                <BodyFooterItem textButton="USEFUL LINKS" >
                    <nav className="menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <Link href="" className="menu-footer__link" text="Privacy Policy" />
                                </li>
                            </ul>
                    </nav>
                </BodyFooterItem>
                <BodyFooterItem textButton="OUR WARRANTY" >
                    <DivBlockOnlyClass className="spoller-item-footer__text">
                            Unhappy with your purchase?
                            You can return it within
                            30 days from the date of receipt,
                            according to <Link href="">our rules</Link>
                    </DivBlockOnlyClass>
                </BodyFooterItem>
                <BodyFooterItem textButton="NEWS NEWSLETTER" >
                    <Form action="#" className="spoller-item-footer__body footer-subscribe">
                        <Label htmlFor="subscribe-input" className="footer-subscribe__label" text="Subscribe directly now!" />
                        <DivBlockOnlyClass className="footer-subscribe__line">
                            <Input dataRequired="email" id="subscribe-input" autoComplete="off" type="text" name="form[]" dataError="Error" placeholder="Enter your email" className="footer-subscribe__input form__input" />
                            <Button type="submit" className="footer-subscribe__button _icon-arrow-bottom" />
                        </DivBlockOnlyClass>
                    </Form>
                </BodyFooterItem>
            </div>
        </>
    )
}