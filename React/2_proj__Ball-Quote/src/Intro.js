import React from "react";

function Intro (props) {

    let {color, text} = props;
    return(
        <>
            <div style={{color:color, textAlign:"center", marginBottom:"15px"}}>{text}</div>
        </>
    )
}
export default Intro;
Intro.defaultProps = {color:"green", text: "Some intro text"};