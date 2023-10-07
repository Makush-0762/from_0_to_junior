import React, {useState} from "react";

function InputСmp(){

    const [text, setText] = useState('');
    let tRef = React.createRef();

    const handlerClick = (event) => {
        event.preventDefault();
        setText(tRef.current.value);
    }
    return(
        <>
        <form>
            <input type="text" placeholder="Enter some text" ref={tRef}/>
            <button onClick={handlerClick} >Press me</button>
            <div>{text}</div>
        </form>
        </>
    );
}
export default InputСmp;