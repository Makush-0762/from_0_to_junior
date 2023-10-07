import React from "react";
import Article from "./Article"
import Link from "./Link";
import Span from "./Span";
import PictureIMG from "./PictureIMG";
import H4 from "./H4";
import DivBlockOnlyClass from "./DivBlockOnlyClass";
import Input from "./Input";
import Button from "./Button";

export default function ProductCard ({srcSet, src, textButton}){

    return(
        <>
            <DivBlockOnlyClass className="products-slider__slider" >
                <Article className="product-card">
                    <Link href="" className="product-card__image">
                        <Span className="product-card__item-image-ibg product-card__item-image-ibg_contain">
                            <PictureIMG srcSet={srcSet} src={src}/>
                        </Span>
                    </Link>
                    <DivBlockOnlyClass className="product-card__body">
                        <H4 className="product-card__title">
                            <Link href="" className="product-card__link-title" text='Knife Fox' />
                        </H4>
                        <DivBlockOnlyClass className="product-card__info info-product-card">
                            <DivBlockOnlyClass className="info-product-card__size">95х18</DivBlockOnlyClass>
                            <DivBlockOnlyClass className="info-product-card__materials">Nut, Aluminum</DivBlockOnlyClass>
                        </DivBlockOnlyClass>
                        <DivBlockOnlyClass className="product-card__rating rating rating_set">
                            <DivBlockOnlyClass className="rating__body">
                                <DivBlockOnlyClass className="rating__active"></DivBlockOnlyClass>
                                <DivBlockOnlyClass className="rating__items">
                                    <Input type="radio" className="rating__item" value="1" name="rating"/>
                                    <Input type="radio" className="rating__item" value="2" name="rating"/>
                                    <Input type="radio" className="rating__item" value="3" name="rating"/>
                                    <Input type="radio" className="rating__item" value="4" name="rating"/>
                                    <Input type="radio" className="rating__item" value="5" name="rating"/>
                                </DivBlockOnlyClass>
                            </DivBlockOnlyClass>
                            <DivBlockOnlyClass className="rating__value">3.6</DivBlockOnlyClass>
                            <DivBlockOnlyClass className="rating__info">12 reviews</DivBlockOnlyClass>
                        </DivBlockOnlyClass>
                        <DivBlockOnlyClass className="product-card__footer">
                            <DivBlockOnlyClass className="product-card__price">2 719 $.</DivBlockOnlyClass>
                            <Link href="" className="product-card__compare _icon-compare"/>
                            <Link href="" className="product-card__compare _icon-compare"/>
                        </DivBlockOnlyClass>
                        <Button type="button" className="product-card__cart button"><Span className="_icon-cart" text={textButton}/></Button>
                    </DivBlockOnlyClass>
                </Article>
            </DivBlockOnlyClass>
            
        </>
    )
}