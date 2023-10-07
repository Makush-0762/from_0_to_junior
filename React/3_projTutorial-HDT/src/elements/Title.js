import React from "react";


export default function Title ({fontSize, text, fontWeight, textAlign, paddingBottom}){

    return(
        <>
            <p style={{fontSize: fontSize, fontWeight: fontWeight, textAlign: textAlign, paddingBottom: paddingBottom}}>{text}</p>
        </>
    )

}