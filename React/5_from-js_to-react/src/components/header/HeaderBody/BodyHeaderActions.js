import React from "react";
import Link from "../../../elements/Link";
import ActionsHeaderPhones from "./ActionsHeaderPhones";
import Button from "../../../elements/Button";
import PhonesHeaderItems from './PhonesHeaderItems'
import PhonesHeaderItem from "./PhonesHeaderItem";

export default function BodyHeaderActions () {
    
    return(

        <>
            <div className="body-header__actions actions-header">
              <Link href="" className="actions-header__location _icon-location" text={<span>City</span>}/>
              <ActionsHeaderPhones  dataDa=".top-header__container,991.98,first"
                                      className="actions-header__phones phones-header">
                  <PhonesHeaderItems className="phones-header__items">
                    <PhonesHeaderItem/>
                  </PhonesHeaderItems>
                  <Button type="button" data-spoller className="phones-header__arrow _icon-arrow-bottom" text=''/>
              </ActionsHeaderPhones>
              
              <Link href="" data-da=".top-header__container,991.98,2" className="actions-header__favorite _icon-favorite" text=''/>
              <Link href="" data-da=".top-header__container,991.98,2" className="actions-header__cart cart-header" text=''>
                <div className="cart-header__icon _icon-cart"><span>0</span></div>
                <div className="cart-header__body">
                  <div className="cart-header__summ">0 $.</div>
                  <div className="cart-header__link">Arrange delivery</div>
                </div>
              </Link>
            </div>
        </>
    )
}