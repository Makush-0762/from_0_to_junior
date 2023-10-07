import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css'


export default function Genres() {

    return (

        <>
            <ul className="listMenuFooter">
                <Link to='/book/fantasy' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Fantasy</li></Link>
                <Link to='/book/modern-prose' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Modern prose</li></Link>
                <Link to='/book/love-novels' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Love novels</li></Link>
                <Link to='/book/women`s-novel' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Women's novel</li></Link>
                <Link to='/book/youth-prose' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Youth prose</li></Link>
                <Link to='/book/fantasy' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Fantasy</li></Link>
                <Link to='/book/erotica' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Erotica</li></Link>
                <Link to='/book/historical-novel'style={{paddingBottom:'5px'}}  className="linkMenuFooter"><li>Historical novel</li></Link>
                <Link to='/book/fan-fiction' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Fan fiction</li></Link>
                <Link to='/book/detective-thriller'style={{paddingBottom:'5px'}}  className="linkMenuFooter"><li>Detective/Thriller</li></Link>
                <Link to='/book/mysticism-horror' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Mysticism/Horror</li></Link>
                <Link to='/book/not-fiction' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Not fiction</li></Link>
                <Link to='/book/different' style={{paddingBottom:'5px'}} className="linkMenuFooter"><li>Different</li></Link>
            </ul>
        </>
    )
}