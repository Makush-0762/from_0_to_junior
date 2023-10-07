import React from "react";
import Section from "../../../elements/Section";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H2 from "../../../elements/H2";
import ArticlesModuleItem from "./ArticlesModuleItem";
import icon1W from "../../../img/articles-module/01.webp"
import icon1J from "../../../img/articles-module/01.jpg"
import icon2W from "../../../img/articles-module/02.webp"
import icon2J from "../../../img/articles-module/02.jpg"
import icon3W from "../../../img/articles-module/03.webp"
import icon3J from "../../../img/articles-module/03.jpg"
import icon4W from "../../../img/articles-module/04.webp"
import icon4J from "../../../img/articles-module/04.jpg"

export default function PageArticlesModule (){

    return(
        <>
            <Section className="page__articles-module articles-module">
                <DivBlockOnlyClass className="articles-module__container">
                    <H2 className="articles-module__title" text='Our articles' />
                    <DivBlockOnlyClass className="articles-module__items">
                        <ArticlesModuleItem srcSet={icon1W} src={icon1J} textTitle="All about knives: how to choose the right one"  />
                        <ArticlesModuleItem srcSet={icon2W} src={icon2J} textTitle="How to choose the right flashlight"  />
                        <ArticlesModuleItem srcSet={icon3W} src={icon3J} textTitle="Kitchen knives for housewives"  />
                        <ArticlesModuleItem srcSet={icon4W} src={icon4J} textTitle="Kitchen knives for housewives"  />
                    </DivBlockOnlyClass>
                </DivBlockOnlyClass>
            </Section>
        </>
    )
}