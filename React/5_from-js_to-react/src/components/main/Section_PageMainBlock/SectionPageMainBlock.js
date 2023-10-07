import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import MainBlockSlide from "./MainBlockSlide"
import Span from "../../../elements/Span";
import PictureIMG from "../../../elements/PictureIMG";
import Button from "../../../elements/Button";
import ImgWebr from '../../../img/mainpage/main-block/image.webp'
import ImgPng from '../../../img/mainpage/main-block/image.png'
import AdvantagesMainItem from './AdvantagesMainItem'
import Icon1 from '../../../img/mainpage/main-block/icons/01.svg'
import Icon2 from '../../../img/mainpage/main-block/icons/02.svg'
import Icon3 from '../../../img/mainpage/main-block/icons/03.svg'
import Icon4 from '../../../img/mainpage/main-block/icons/04.svg'

export default function SectionPageMainBlock () {
    
    return(

        <>
            <Section className='page__main-block main-block'>
                <DivBlockOnlyClass className='main-block__container'>
                    <DivBlockOnlyClass className='main-block__body'>
                        <DivBlockOnlyClass className='main-block__slider'>
                            <DivBlockOnlyClass className='main-block__swiper'>
                                <MainBlockSlide/>
                                <MainBlockSlide/>
                                <MainBlockSlide/>
                            </DivBlockOnlyClass>
                            <DivBlockOnlyClass className="main-block__controll controll-main-block">
                                <DivBlockOnlyClass className="controll-main-block__dotts"></DivBlockOnlyClass>
                                <DivBlockOnlyClass className="controll-main-block__fraction fraction-controll">
                                    <Span className="fraction-controll__current" text='01'/> / 
                                    <Span className="fraction-controll__current" text='0'/>
                                </DivBlockOnlyClass>
                            </DivBlockOnlyClass>
                            <DivBlockOnlyClass className='main-block__media media-main-block'>
                                <DivBlockOnlyClass className='media-main-block__body'>
                                    <DivBlockOnlyClass className="media-main-block__image">
                                        <PictureIMG srcSet={ImgWebr} 
                                                    src={ImgPng}
                                                    alt="image"/>
                                    </DivBlockOnlyClass>
                                    <DivBlockOnlyClass>
                                        <Button dataTippyContent="Hint"
                                                type="button"
                                                className="media-main-block__tip media-main-block__tip_1"
                                                text={<span>+</span>}/>
                                        <Button dataTippyContent="Hint"
                                                type="button"
                                                className="media-main-block__tip media-main-block__tip_2"
                                                text={<span>+</span>}/>
                                        <Button dataTippyContent="Hint"
                                                type="button"
                                                className="media-main-block__tip media-main-block__tip_3"
                                                text={<span>+</span>}/>
                                    </DivBlockOnlyClass>
                                </DivBlockOnlyClass>
                            </DivBlockOnlyClass>
                        </DivBlockOnlyClass>
                    </DivBlockOnlyClass>
                    <DivBlockOnlyClass className="main-block__advantages advantages-main">
                        <AdvantagesMainItem Icon={Icon1}/>
                        <AdvantagesMainItem Icon={Icon2}/>
                        <AdvantagesMainItem Icon={Icon3}/>
                        <AdvantagesMainItem Icon={Icon4}/>
                    </DivBlockOnlyClass>
                </DivBlockOnlyClass>
            </Section>
        </>
    )
}