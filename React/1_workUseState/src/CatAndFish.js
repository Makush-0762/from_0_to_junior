import React, {useState} from "react";
import Fish from './img/fish.png';
import CatBefore from './img/catBefore.png';
import CatAfter from './img/CatAfter.png';
import './ComponentStyle.css';


function CatAndFish(){

    const [fullСat, setFullСat] = useState('none');
    const [hungryCat, setHungryCat] = useState('');

    const EatFish = () => {
        setFullСat('block');
        setHungryCat('none');
    }

    return(

        <>
            <div style={{marginTop: '150px'}}>
                <div className="bodyCF" style={{display: hungryCat,}}>
                    <div><img src={Fish} alt="fish"/></div>
                    <div className="CatPH"><img style={{cursor:'pointer'}} onClick={EatFish} src={CatBefore} alt="cat"/></div>
                </div>
                <div className="catCenter" style={{display: fullСat}}><img src={CatAfter} alt="CatAfter"/></div>
            </div>
        </>
    )
}
export default CatAndFish;