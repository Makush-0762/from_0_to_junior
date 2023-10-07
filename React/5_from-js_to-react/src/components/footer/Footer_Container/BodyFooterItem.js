import React from "react";
import Button from "../../../elements/Button";


export default function BodyFooterItem ({children, textButton}){

    return(
        <>
            <div className="body-footer__item item-footer">
                <div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
                    <div className="spoller-item-footer__item">
                        <Button type="button" data-spoller className="spoller-item-footer__title" text={textButton}/>
                        <div className="spoller-item-footer__body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// 