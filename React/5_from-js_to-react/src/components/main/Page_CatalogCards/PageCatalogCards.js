import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import Icon1w from '../../../img/mainpage/catalog-cards/01.webp'
import Icon1j from '../../../img/mainpage/catalog-cards/01.jpg'
import Icon2w from '../../../img/mainpage/catalog-cards/02.webp'
import Icon2j from '../../../img/mainpage/catalog-cards/02.jpg'
import Icon3w from '../../../img/mainpage/catalog-cards/03.webp'
import Icon3j from '../../../img/mainpage/catalog-cards/03.jpg'
import Icon4w from '../../../img/mainpage/catalog-cards/04.webp'
import Icon4j from '../../../img/mainpage/catalog-cards/04.jpg'
import Icon5w from '../../../img/mainpage/catalog-cards/05.webp'
import Icon5j from '../../../img/mainpage/catalog-cards/05.jpg'
import Icon6w from '../../../img/mainpage/catalog-cards/06.webp'
import Icon6j from '../../../img/mainpage/catalog-cards/06.jpg'
import CatalogCardsItem from "./CatalogCardsItem";

export default function PageCatalogCards (){

    return(
        <>
            <Section className="page__catalog-cards catalog-cards">
                <DivBlockOnlyClass className="catalog-cards__container">
                    <CatalogCardsItem title='Knife catalog' IconW={Icon1w} IconJ={Icon1j}/>
                    <CatalogCardsItem title='Medium bladed weapon' IconW={Icon2w} IconJ={Icon2j}/>
                    <CatalogCardsItem title='Long bladed weapons' IconW={Icon3w} IconJ={Icon3j}/>
                    <CatalogCardsItem title='Souvenirs' IconW={Icon4w} IconJ={Icon4j}/>
                    <CatalogCardsItem title='Related products' IconW={Icon5w} IconJ={Icon5j}/>
                    <CatalogCardsItem title='Knife workshop' IconW={Icon6w} IconJ={Icon6j}/>
                </DivBlockOnlyClass>
            </Section>
        </>
    )
}