import React from "react";
import DivBlockOnlyClass from "../../../../elements/DivBlockOnlyClass";
import Span from "../../../../elements/Span";

export default function ThirdRow () {

    return(

        <>
            <DivBlockOnlyClass className="body-footer__bottom">
                <DivBlockOnlyClass className="body-footer__rules">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa odit vel quam unde, esse consequuntur
                quas totam sed deleniti rem nisi, id aliquam magnam? Maxime, nisi! Doloribus ducimus adipisci
                voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ducimus, laborum eos
                dicta sunt atque dolore nesciunt aliquid. Unde harum dolorum non sint nisi cupiditate illo
                consequatur, sit perspiciatis iusto?
                </DivBlockOnlyClass>
                <DivBlockOnlyClass className="body-footer__copy">
                    <Span>www.shop.com ©</Span>
                </DivBlockOnlyClass>
            </DivBlockOnlyClass>
        </>
    )
}