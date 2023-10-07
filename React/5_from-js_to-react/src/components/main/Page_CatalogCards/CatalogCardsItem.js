import React from "react";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H3 from "../../../elements/H3";
import Link from "../../../elements/Link";
import PictureIMG from "../../../elements/PictureIMG";

export default function CatalogCardsItem ({IconW, IconJ, title}){

    return(
        <>
            <DivBlockOnlyClass className="catalog-cards__item item-catalog-cards">
                <DivBlockOnlyClass className="item-catalog-cards__body">
                    <H3 className='item-catalog-cards__title' >
                        <Link href="" className="item-catalog-cards__link-title" text={title}/>
                    </H3>
                    <ul className="item-catalog-cards__list">
                        <li className="item-catalog-cards__item"><a href="" className="item-catalog-cards__link">Chopping</a></li>
                        <li className="item-catalog-cards__item"><a href="" className="item-catalog-cards__link">Tourist</a></li>
                        <li className="item-catalog-cards__item"><a href="" className="item-catalog-cards__link">Hunting</a></li>
                    </ul>
                </DivBlockOnlyClass>
                <DivBlockOnlyClass className="item-catalog-cards__image">
                    <PictureIMG srcSet={IconW}
                                src={IconJ}
                                alt="image"/>
                </DivBlockOnlyClass>
            </DivBlockOnlyClass>
        </>
    )
}