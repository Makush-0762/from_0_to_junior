import React from "react";

function Light(props){

    return(
        <>
            <div style={{width:"100px", height: "100px", borderRadius:"50%",background: props.btColor}}></div>
        </>
    )
}
export default Light;