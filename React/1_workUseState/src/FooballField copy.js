import React, {useState} from "react";

function FooballField () {

const ball = document.getElementById("ball");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let randomX = Math.floor(Math.random() * (windowWidth - 50));
let randomY = Math.floor(Math.random() * (windowHeight - 50));

const [flyBall, setFlyBall] = useState('');

const ballInAir = () => {
    setFlyBall('Fball')
}

    return(
        <>
        <style>
            .ball{{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: '0',
                    cursor: 'pointer',
                    backgroundColor: 'violet'
            }}
            .Fball{{
                    animationDuration: '3s',
                    animationName:'food',
                    animationTimingFunction: 'linear',
            }}
            @keyframes move {{
                    from {
                        left:  ,
                        top: ,
                    }

                    to {
                        left: ,/* нове рандомне значення left */;
                        top: ,/* нове рандомне значення top */;
                    }
            }}
        </style>
            <div className= {flyBall + ' ball'} id="ball" style={{

            }} onClick={ballInAir}></div>
        </>
    )
}
export default FooballField;