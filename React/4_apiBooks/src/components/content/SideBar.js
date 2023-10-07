import React from "react";
import Title from '../../elements/Title'
import Genres from "../footer/Genres";

export default function SideBar() {

    return (
        <>
            <div style={{padding: "25px 25px 0px 55px", backgroundColor:'#daedff'}}>
                <Title  text={'Category'} 
                        fontSize={'24px'}
                        fontWeight={'600'}
                        textAlign={'start'}/>
                <Genres paddingBottom={'55px'} />
            </div>
        </>
    )
}