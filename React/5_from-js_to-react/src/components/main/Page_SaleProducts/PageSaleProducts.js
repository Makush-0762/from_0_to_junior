import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H2 from "../../../elements/H2";
import Link from "../../../elements/Link";
import Slider from "../../../elements/Slider";

export default function PageSaleProducts ({className}){

    return(
        <>
            <Section className={className}>
                <Section className="products-slider">
                    <DivBlockOnlyClass className="products-slider__container">
                        <DivBlockOnlyClass className="products-slider__header">
                            <H2 className="products-slider__title" text='Stock'/>
                            <Link href="" className="products-slider__more" text='All Stock'/>
                        </DivBlockOnlyClass>
                        <Slider/>
                    </DivBlockOnlyClass>
                </Section>
            </Section>
        </>
    )
}