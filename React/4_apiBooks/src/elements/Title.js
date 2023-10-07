import React from "react";


export default function Title ({fontSize, text, fontWeight, textAlign, paddingBottom, padding}){

    return(
        <>
            <p style={{fontSize: fontSize, fontWeight: fontWeight, textAlign: textAlign, paddingBottom: paddingBottom, margin:'0', padding: padding}}>{text}</p>
        </>
    )

}