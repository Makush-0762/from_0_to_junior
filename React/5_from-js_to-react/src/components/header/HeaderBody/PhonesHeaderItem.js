import React from "react";
import Link from "../../../elements/Link";
import Button from "../../../elements/Button";



export default function PhonesHeaderItem () {
    
    return(

        <>
            <div className="phones-header__item">
                <Link href="tel:08007774967" className="phones-header__phone" text={<span>0-800-777-49-67</span>}/>
                <Button type="button" data-spoller className="phones-header__arrow _icon-arrow-bottom" text=''/>
                <ul className="phones-header__list">
                    <li><a href="tel:08007774968" className="phones-header__phone">0-800-777-49-68</a></li>
                    <li><a href="tel:08007774969" className="phones-header__phone">0-800-777-49-69</a></li>
                    <li><a href="tel:08007774970" className="phones-header__phone">0-800-777-49-70</a></li>
                </ul>
            </div>
        </>
    )
}