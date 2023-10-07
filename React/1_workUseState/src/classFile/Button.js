import React from "react";

function Button(props) {
    
    const handlerClick = () => {
        props.onClickAct(props.btColor)
    }
    
    return(
        <>
            <button className="input" onClick={handlerClick} style={{background: props.btColor, }}>{props.textColor}</button>
        </>
    );
}
export default Button;