import React from "react";
import faceboock from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import discord from '../../images/discord.png'
import codepen from '../../images/codepen.png'
import github from '../../images/github.png'
import { Link } from "react-router-dom";

export default function Icon() {

    return (
        <>
            <div className="bodyIcon">
                <p><Link to={'/'}><img src={faceboock} alt="faceboock"  className="imgIcon"/></Link></p>
                <p><Link to={'/'}><img src={instagram} alt="instagram"  className="imgIcon"/></Link></p>
                <p><Link to={'/'}><img src={linkedin} alt="linkedin"  className="imgIcon"/></Link></p>
                <p><Link to={'/'}><img src={discord} alt="discord"  className="imgIcon"/></Link></p>
                <p><Link to={'/'}><img src={codepen} alt="codepen" className="imgIcon"/></Link></p>
                <p><Link to={'/'}><img src={github} alt="github"  className="imgIcon"/></Link></p>
            </div>
        </>
    )
}