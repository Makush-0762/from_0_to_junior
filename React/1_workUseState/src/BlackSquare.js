import React, {useState} from "react";
import './ComponentStyle.css';

var arrSquare = ['black', 'deeppink', 'antiquewhite', 'aqua', 'blueviolet', 'cadetblue', 'chartreuse'];

function BlackSquare(){

    const randomColorArr = () => {
         return arrSquare[Math.floor(Math.random() * arrSquare.length)];
    }

    const [backFone, setBackFone] = useState('');
    const [backSquare, setBackSquare] = useState('black');
    const [prevSquareColor, setPrevSquareColor] = useState('');

    const otherColor = () => {
        const newColor = randomColorArr();
        setBackFone(prevSquareColor);
        setPrevSquareColor(newColor);
        setBackSquare(newColor);
        // setBackFone([randomColorArr()]);
        // setBackSquare([randomColorArr()]);
    }

    return(
        <>
            <div className="bodySquare"  style={{backgroundColor: backFone}}>   
                <div className="Square" onClick={otherColor} style={{backgroundColor: backSquare}}></div>
            </div>
        </>
    )
}
export default BlackSquare;
