import React from "react";

function Theerd(props) {

    let {color, text} = props;
    return(
        <>
            <div style={{color:color, textAlign:"center", marginBottom:"15px"}}>{text}</div>
        </>
    )
}
export default Theerd;
Theerd.defaultProps = {color:"blue", text: "It is the last part of our text"};