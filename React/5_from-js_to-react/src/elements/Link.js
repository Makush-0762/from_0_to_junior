import React from "react";


export default function Link ({href, className, dataSwiperParallax, text, children}) {
    
    return(

        <>
            <a href={href} data-swiper-parallax={dataSwiperParallax}  className={className} >{text}{children}</a>
        </>
    )
}
Link.defaultProps ={
    dataSwiperParallax: '',
    href:'#',
};