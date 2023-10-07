import React, {useState} from "react";
import './ComponentStyle.css';

function ImgRandPos(){

const [positionX, setPositionX] = useState('');
const [positionY, setPositionY] = useState('');

const arrProperty = ['top', 'right', 'left', 'bottom'];
var randNum = (Math.random() * 500)

const randProp = () => {
    return arrProperty[Math.floor(Math.random() * arrProperty.length)];
}

const positionPhoto = () => {
    setPositionX({ [randProp()]: randNum });
    setPositionY({ [randProp()]: randNum });
}
    return (
        <>
           <div className="imgBody">
                <img src="http://placekitten.com/300/150" style={{ ...positionX , ...positionY, cursor: 'pointer'}} onClick={positionPhoto} alt="cat"/>
            </div> 
        </>
    )
}
export default ImgRandPos;