import React from "react";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H4 from "../../../elements/H4";
import Link from "../../../elements/Link";
import PictureIMG from "../../../elements/PictureIMG";



export default function ProductsBlockItem ({src, srcSet, textTitle}){

    return(
        <>  
            <DivBlockOnlyClass className="products-block__item product-block">
                <DivBlockOnlyClass className="product-block__body">
                    <H4 className="product-block__title">
                        <Link href="" className="product-block__link-title" text={textTitle}/>
                    </H4>
                    <DivBlockOnlyClass className="product-block__text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <Link href="" className="product-block__button button" text="More"/>
                </DivBlockOnlyClass>
                <DivBlockOnlyClass className="product-block__image">
                    <PictureIMG srcSet={srcSet}  src={src}/>
                </DivBlockOnlyClass>
            </DivBlockOnlyClass>
        </>
    )
}