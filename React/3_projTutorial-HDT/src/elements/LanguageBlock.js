import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';


export default function LanguageBlock ({urlH, urlC, urlJ}){



    return(
        <>
            <div style={{   textAlign:"center", 
                            fontFamily:'Montserrat, sans-serif', 
                            paddingTop:'180px',
                            paddingBottom:'180px',}}
                 className="languageBlock">

                <Link to='/tutorial/html' ><img src={urlH} alt='html' className="imgLanBlock"/></Link>
                <Link to='/tutorial/css'><img src={urlC} alt='css' className="imgLanBlock"/></Link>
                <Link to='/tutorial/javascript'><img src={urlJ} alt='js'  className="imgLanBlock"/></Link>
            </div>
        </>
    )
}