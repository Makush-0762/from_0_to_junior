import React, {useState} from "react";
import Button from "./Button.js"
import Light from "./Light.js"

// function Button(props) {
    
//     const handlerClick = () => {
//         props.onClickAct(props.btColor)
//     }
    
//     return(
//         <>
//             <button onClick={handlerClick} style={{background: props.btColor, }}>{props.textColor}</button>
//         </>
//     );
// }

// function Light(props){

//     return(
//         <>
//             <div style={{width:"100px", height: "100px", borderRadius:"50%",background: props.btColor}}></div>
//         </>
//     )
// }

function TrafficLight(){

    const [lightColor, setLightColor] = useState('green');

    const handColor = (color) => {
        setLightColor(color);
    }

    return(
        <>
            <Button btColor="red" textColor="red" onClickAct={handColor}/>
            <Button btColor="yellow" textColor="red" onClickAct={handColor}/>
            <Button btColor="green" textColor="red" onClickAct={handColor}/>
            <Light btColor={lightColor}/>
        </>
    );
}
export default TrafficLight;