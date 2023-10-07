import React from "react";

export default function TextareaContact ({cols, id, rows, placeholder}){

    return(
        <>
            <textarea cols={cols} rows={rows} id={id} className="textareaInput" placeholder={placeholder}>

            </textarea>
        </>
    )
}