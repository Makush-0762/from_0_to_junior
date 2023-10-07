import React, {useState} from "react";
import Tumba from './img/tumba.png';
import TumbaOpen from './img/tumbaOpen.png';
import './ComponentStyle.css';

function Тightstand(){

    const [closeStand, setCloseStand] = useState(Tumba);
    const [openStand, setOpenStand] = useState(TumbaOpen);

    const OpenNightstand = () => {
        if (closeStand === Tumba) {
            setCloseStand(TumbaOpen);
            setOpenStand(Tumba);
          } else {
            setCloseStand(Tumba);
            setOpenStand(TumbaOpen);
          }
    }

    return(

        <>
            <div className="bodyCoin" >
                <div className="wrapCoin">
                    <img className="coin" src={openStand} alt="Tumba" onClick={OpenNightstand}/>
                    <img className="coin" src={closeStand} alt="TumbaOpen" onClick={OpenNightstand}/>
                </div>
            </div>
        </>
    )
}
export default Тightstand;