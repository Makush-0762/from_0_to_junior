import React from "react";
import Section from "../../elements/Section";
import DivBlockOnlyClass from "../../elements/DivBlockOnlyClass";
import H1 from "../../elements/H1";

export default function SectionFooterText () {

    return(

        <>
             <Section className="footer__text text-footer">
                <DivBlockOnlyClass className="text-footer__container">
                    <H1 className="text-footer__title" text="Knives online store"/>
                    <DivBlockOnlyClass className="text-footer__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, soluta nulla neque tempore ut est quod ab magnam voluptates ipsam nemo inventore dignissimos enim sunt, similique id nesciunt dolorum architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores delectus inventore sapiente voluptatem recusandae perferendis voluptatum dolore labore. Nihil nesciunt eligendi repellendus eum quae provident sequi rem recusandae et corporis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate quibusdam pariatur totam. Ducimus veritatis repudiandae excepturi quos aliquam, ad mollitia nesciunt beatae? Cumque minus minima illo maiores ex expedita?</DivBlockOnlyClass>
                </DivBlockOnlyClass>
            </Section>
        </>
    )
}