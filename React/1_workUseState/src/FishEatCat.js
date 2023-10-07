import React, {useState} from "react";
import Fish from './img/fish.png';
import CatBefore from './img/catBefore.png';
import FisheatCat from './img/FishEatCat.png';
import './ComponentStyle.css';


function FishEatCat(){

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
                    <div className="CatPH"><img src={CatBefore} alt="cat"/></div>
                    <div><img src={Fish}  style={{cursor:'pointer'}} onClick={EatFish} alt="fish"/></div>
                </div>
                <div style={{display: fullСat, width: '500px', margin: "0 auto"}}><img src={FisheatCat} alt="CatAfter"/></div>
            </div>
        </>
    )
}
export default FishEatCat;