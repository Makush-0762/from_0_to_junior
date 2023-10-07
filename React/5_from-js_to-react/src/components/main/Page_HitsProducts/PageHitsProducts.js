import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H2 from "../../../elements/H2";
import Link from "../../../elements/Link";
import "../main.css"
import Slider from "../../../elements/Slider";

export default function PageHitsProducts ({titleProducts}){

    return(
        <>
            <Section className="page__hits-products hits-products" style={{backgroundColor:'#000'}}>
                <Section className="products-slider">
                    <DivBlockOnlyClass className="products-slider__container">
                        <DivBlockOnlyClass className="products-slider__header">
                            <H2 className="products-slider__title" text={titleProducts}/>
                            <Link href="" className="products-slider__more" text='Go to catalog'/>
                        </DivBlockOnlyClass>
                        <Slider/>
                    </DivBlockOnlyClass>
                </Section>
            </Section>
        </>
    )
}