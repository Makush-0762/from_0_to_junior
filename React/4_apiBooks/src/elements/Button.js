import React from "react";
import {Link} from 'react-router-dom';


export default function Button({text, textAlign}) {

    return (
        <>
            <p style={{margin:'0', display:'flex',textAlign: textAlign, display: 'inline-block'}}>
                <Link to="/#" className="buttonCard">{text}</Link>
            </p>
        </>
    )
}