import React from "react";


export default function PictureIMG ({srcSet, src, alt}){

    return(
        <>
            <picture>
                <source srcSet={srcSet} type="image/webp" />
                <img src={src} alt={alt} />
            </picture>
        </>
    )
}
PictureIMG.defaultProps ={
    alt: 'image',
};