import React from "react";
import {Link} from 'react-router-dom';


export default function ListGanreHome ({paddingBottom}){

    return(
        <>
            <ul className="listMenuHome">
                <Link to='/book/fantasy' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Fantasy</li></Link>
                <Link to='/book/modern-prose' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Modern prose</li></Link>
                <Link to='/book/love-novels' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Love novels</li></Link>
                <Link to='/book/women`s-novel' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Women's novel</li></Link>
                <Link to='/book/youth-prose' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Youth prose</li></Link>
                <Link to='/book/fantasy' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Fantasy</li></Link>
                <Link to='/book/erotica' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Erotica</li></Link>
                <Link to='/book/historical-novel' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Historical novel</li></Link>
                <Link to='/book/fan-fiction' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Fan fiction</li></Link>
                <Link to='/book/detective-thriller' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Detective/Thriller</li></Link>
                <Link to='/book/mysticism-horror' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Mysticism/Horror</li></Link>
                <Link to='/book/not-fiction' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Not fiction</li></Link>
                <Link to='/book/different' style={{paddingBottom: paddingBottom}} className="linkMenuHome"><li>Different</li></Link>
            </ul>
        </>
    )

}