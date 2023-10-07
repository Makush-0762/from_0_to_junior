import React from "react";

export default function LabelInput ({forId, text}){

    return(
        <>
            <label for={forId} >{text}</label>
        </>
    )
}