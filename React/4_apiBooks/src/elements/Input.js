import React from "react";

export default function Input ({type, name, placeholder, id}){

    return(
        <>
            <input type={type} name={name} className="inputContact" placeholder={placeholder} id={id} />
        </>
    )
}