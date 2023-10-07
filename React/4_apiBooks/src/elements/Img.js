import React from "react";


export default function Img({url, text, width, textAlign, bodyWidth, bodyHeight}) {

    return (
        <>
            <div className="bodyImgTotal" style={{textAlign: textAlign, width: bodyWidth, height:bodyHeight}}>
                <img src={url} className="ImgTotal" style={{width: width}} alt={text} />
            </div>
        </>
    )
}