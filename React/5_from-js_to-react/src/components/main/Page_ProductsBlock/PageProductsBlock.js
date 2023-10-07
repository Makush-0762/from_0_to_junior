import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import ProductsBlockItem from "./ProductsBlockItem";
import Img1W from "../../../img/products-block/01.webp"
import Img1J from "../../../img/products-block/01.jpg"
import Img2W from "../../../img/products-block/02.webp"
import Img2J from "../../../img/products-block/02.jpg"


export default function PageProductsBlock (){

    return(
        <>  
            <Section className="page__products-block products-block">
                <DivBlockOnlyClass className="products-block__container">
                    <ProductsBlockItem srcSet={Img1W} src={Img1J} textTitle="Tactical flashlights"/>
                    <ProductsBlockItem srcSet={Img2W} src={Img2J} textTitle="Deck multi-flashlights"/>
                </DivBlockOnlyClass>
            </Section>
        </>
    )
}