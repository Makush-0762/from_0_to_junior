import React, {useState} from "react";
import CoinF from './img/CoinF.png';
import CoinZ from './img/CoinZ.png';
import './ComponentStyle.css';

var arrImg = [CoinF, CoinZ];

function Coin(){

    const [mark, setMark] = useState(CoinF);

    const FlipACoin = () => {
        setMark(arrImg[Math.floor(Math.random() * arrImg.length)])
    }

    return(

        <>
            <div className="bodyCoin" >
                <div className="wrapCoin">
                    <img className="coin" src={mark} alt="CoiF" onClick={FlipACoin}/>
                    <img className="coin" src={mark} alt="CoiZ" onClick={FlipACoin}/>
                </div>
            </div>
        </>
    )
}
export default Coin;