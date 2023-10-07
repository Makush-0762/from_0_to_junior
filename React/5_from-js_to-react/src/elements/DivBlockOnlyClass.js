import React from "react";

export default function DivBlockOnlyClass ({children, id, className, ariaHidden, dataSwiperParallax, text}) {

    return(

        <>
            <div data-swiper-parallax={dataSwiperParallax} aria-hidden={ariaHidden} id={id} className={className}>
                {children}
                {text}
            </div>
        </>
    )
}
DivBlockOnlyClass.defaultProps = {
    dataSwiperParallax: '',
    text: '',
    id: '',
    ariaHidden: '',
};