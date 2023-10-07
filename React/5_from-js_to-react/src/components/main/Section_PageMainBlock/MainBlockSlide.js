import React from "react";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import Link from "../../../elements/Link";
import H2 from "../../../elements/H2";



export default function MainBlockSlide () {

    return(

        <>
            <DivBlockOnlyClass className='page__main-block main-block'>
                <DivBlockOnlyClass className="slide-main-block__content">
                    <H2 dataSwiperParallax='-100' className="slide-main-block__title" text='Internet shop certified'/>
                    <DivBlockOnlyClass dataSwiperParallax='-150' className="slide-main-block__sub-title" text="Shop"></DivBlockOnlyClass>
                    <DivBlockOnlyClass dataSwiperParallax='-200' className="slide-main-block__text" 
                                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
                                            saepe. Dolor quidem quo, illo atque eius at voluptates unde soluta
                                            consectetur! Consequatur voluptatibus enim dolore fugit nobis reprehenderit,
                                            voluptatem minus!">
                    </DivBlockOnlyClass>
                </DivBlockOnlyClass>
                <Link href="" dataSwiperParallax="-300" className="slide-main-block__button button" text='More'/>
            </DivBlockOnlyClass>
        </>
    )
}