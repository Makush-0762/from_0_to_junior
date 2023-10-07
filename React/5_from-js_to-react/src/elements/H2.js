import React from "react";


export default function H2 ({dataSwiperParallax, text, className, children}){

    return(
        <>
            <h2 data-swiper-parallax={dataSwiperParallax} className={className}>{children} {text}</h2>
        </>
    )
}
H2.defaultProps = {
    dataSwiperParallax: '',
};