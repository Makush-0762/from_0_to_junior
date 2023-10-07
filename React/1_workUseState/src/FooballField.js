import React, {useState} from "react";
import './ComponentStyle.css';

function FooballField () {

const [flyBall, setFlyBall] = useState('');

const ballInAir = () => {
    setFlyBall('Fball')
}

    return(
        <>
            <div className= {flyBall + ' ball'} onClick={ballInAir}></div>
            <div className="footballGates">Ворота</div>
        </>
    )
}
export default FooballField;