import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H2 from "../../../elements/H2";
import Link from "../../../elements/Link";
import ProductCard from "../../../elements/ProductCard";
import Img1W from '../../../img/product-card/image.webp'
import Img1J from '../../../img/product-card/image.jpg'
import Img2W from '../../../img/product-card/image-02.webp'
import Img2J from '../../../img/product-card/image-02.jpg'
import Span from "../../../elements/Span";

export default function PageNewProducts ({className}){

    return(
        <>
            <Section className={className}>
                <Section className="products-new">
                    <DivBlockOnlyClass className="products-new__inner">
                        <DivBlockOnlyClass className="products-new__container">
                            <DivBlockOnlyClass className="products-new__body">
                                <DivBlockOnlyClass className="products-new__section">
                                    <H2 className="products-new__title" text="New"/>
                                    <DivBlockOnlyClass  className="products-new__text" 
                                                        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident natus deleniti ducimus nihil voluptas ullam autem fugit? Recusandae quo labore odio beatae accusamus voluptas eius debitis cupiditate explicabo at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tempore harum quam voluptas dignissimos error, veniam dolore nulla? Excepturi, id. Commodi mollitia dignissimos ducimus non! Corporis, maxime! Voluptas, doloribus voluptatem." />
                                    <Link href="" className="products-new__link link-arrow _icon-arrow-bottom">
                                        <Span text='More news' />
                                    </Link>
                                </DivBlockOnlyClass>
                            </DivBlockOnlyClass>
                            <DivBlockOnlyClass className="products-new__content">
                                <DivBlockOnlyClass className="products-new__slider">
                                    <DivBlockOnlyClass className="products-new__swiper">
                                        <ProductCard srcSet={Img1W} src={Img1J} textButton='AT basket'/>
                                        <ProductCard srcSet={Img2W} src={Img2J} textButton='AT basket'/>
                                        <ProductCard srcSet={Img1W} src={Img1J} textButton='AT basket'/>
                                        <ProductCard srcSet={Img2W} src={Img2J} textButton='AT basket'/>
                                        <ProductCard srcSet={Img1W} src={Img1J} textButton='AT basket'/>
                                    </DivBlockOnlyClass>
                                    <DivBlockOnlyClass className="products-new__dotts dotts"></DivBlockOnlyClass>
                                </DivBlockOnlyClass>
                            </DivBlockOnlyClass>
                        </DivBlockOnlyClass>
                    </DivBlockOnlyClass>
                </Section>
            </Section>
        </>
    )
}