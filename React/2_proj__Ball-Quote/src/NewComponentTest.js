import React from "react";

class Button extends React.Component {

    render(){

      const handleClick = () => {
        this.props.onClickAct(this.props.btText)
      }

      return(
            <>
                <button onClick={handleClick}> + {this.props.btText}</button>
            </>
        );
    }
}

class Display extends React.Component {

    render(){

        return(
            <>
                <div>{this.props.displayText}</div>
            </>
        );
    }
}

class NewComponentTest extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            crValue: 0
        }
    }
    render(){
        const oneStep = 2;
        const startClick = (intValue) => {
            this.setState({
                crValue:this.state.crValue + intValue
            });
        };
            return(
                <>
                    <Button btText={oneStep}  onClickAct={startClick}/>
                    <Display displayText={this.state.crValue}/>
                </>
            );
        }
    }


















// class NewComponentTest extends React.Component {

//     constructor (props){
//         super(props);
//     }

//     render(){
//         return(
//             <>
//             </>
//         );
//     }

//         }
export default NewComponentTest;