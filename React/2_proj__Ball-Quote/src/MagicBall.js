import React from "react";
import MagBall from './img/Magic-Ball.png'

var arrAnsBall = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes — definitely", "You may rely on it",
    "As I see it, yes", "Most likely", "Outlook good", "Signs point to yes", "Yes",
    "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don’t count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"
]
 
class MagicBall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: ""
        }
    }

    render(){
        const ask = (event) => {
            event.preventDefault();
            let input = document.getElementById('inputQuestion');
            if (input.value === ""){
                this.setState({answer: null})
            }else{
                const randAnswer = arrAnsBall[Math.floor(Math.random() * arrAnsBall.length)];
                this.setState({answer: randAnswer})
            }
        }

        return(
            <>

                <div className="bodyImg">
                    <img src={MagBall} style={{width:"500px"}} alt="MagicBall"/>
                    <span className="textBall">{this.state.answer}</span>
                </div>
                    <form className="inputBody" action="">
                        <input type="text" className="buttonQuote input" id="inputQuestion" placeholder="Enter you question"/>
                        <button className="buttonQuote" onClick={ask}>Ask</button>
                    </form>
            </>
        )
    }

}
export default MagicBall;