import React from "react";
import DivBlockOnlyClass from "../../../elements/DivBlockOnlyClass";
import Img from "../../../elements/Img";



export default function AdvantagesMainItem ({Icon}){

    return(
        <>
            <DivBlockOnlyClass className='advantages-main__item'>
                <DivBlockOnlyClass className='advantages-main__icon'>
                    <Img src={Icon} alt="Иконка"/>
                </DivBlockOnlyClass>
                <DivBlockOnlyClass  className="advantages-main__text" 
                                    text='100% money back guarantee Money' />
            </DivBlockOnlyClass>
        </>
    )
}