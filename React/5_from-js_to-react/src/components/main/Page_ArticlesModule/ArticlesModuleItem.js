import React from "react";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import H4 from "../../../elements/H4";
import Article from "../../../elements/Article";
import Link from "../../../elements/Link";
import PictureIMG from "../../../elements/PictureIMG";

export default function ArticlesModuleItem ({src, srcSet, textTitle}){

    return(
        <>
            <Article className="articles-module__item item-article">
                <Link href="" className="item-article__image-ibg">
                    <PictureIMG srcSet={srcSet} src={src}/>
                </Link>
                <DivBlockOnlyClass className="item-article__body">
                    <H4 className="item-article__title" >
                        <Link href="" className="item-article__link-title" text={textTitle}></Link>
                    </H4>
                    <DivBlockOnlyClass className="item-article__date" text="24.07.2022"/>
                </DivBlockOnlyClass>
            </Article>
        </>
    )
}