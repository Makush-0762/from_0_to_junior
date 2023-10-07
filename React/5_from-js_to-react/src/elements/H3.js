import React from "react";


export default function H3 ({dataSwiperParallax, text, className, children}){

    return(
        <>
            <h3 data-swiper-parallax={dataSwiperParallax} className={className}>{children} {text}</h3>
        </>
    )
}
H3.defaultProps = {
    dataSwiperParallax: '',
};