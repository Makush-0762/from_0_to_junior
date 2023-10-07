import React, {useState} from "react";
import Toyota from './img/toyota.png';
import Audi from './img/audi.png';
import Ferrarri from './img/ferrarri.png';
import Honda from './img/honda.png';
import Hundai from './img/hundai.png';
import Porshe from './img/porshe.png';
import Car from './img/Car.jpg';
import './ComponentStyle.css';

 var arrImg = [Toyota, Audi, Ferrarri, Honda, Hundai, Porshe ];

function CatAndFish(){

    const [mark, setMark] = useState(Porshe);

    const othermark = () => {
        setMark(arrImg[Math.floor(Math.random() * arrImg.length)])
    }

    return(

        <>
            <div className="bodyCar" >
                <div >
                    <img onClick={othermark} src={Car} alt='car' />
                    <img src={mark} className="mark" alt='mark'/>
                </div>
            </div>
        </>
    )
}
export default CatAndFish;