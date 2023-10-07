import React, {useState} from "react";

function OtherColor (){
    
    const [colorText, setColorText] = useState('')

    const ChangeColor = () => {
        setColorText('red')
    }
    
    return(
        <>
            <p onClick={ChangeColor} style={{color: colorText, cursor: 'pointer'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! </p>    
        </>
    )
}
export default OtherColor;