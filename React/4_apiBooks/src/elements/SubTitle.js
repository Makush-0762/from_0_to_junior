import React from "react";

export default function SubTitle({text, fontSize }) {

    return (
        <>
           <p style={{fontSize: fontSize }}>{text}</p>
        </>
    )
}