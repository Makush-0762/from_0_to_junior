import React, {useState} from "react";

var arrIMG = [
    'http://surl.li/gmljt', 
    'http://surl.li/gmljw', 
    'http://surl.li/gmljy', 
    'http://surl.li/gmlka', 
    'http://surl.li/gmlkb', 
    'http://surl.li/gmlkd',
    'http://surl.li/gmlkh',
    'http://surl.li/gmlkr',
    'http://surl.li/gmlkt',
    'http://surl.li/gmlkw'
]

function showRandImg(){

const [image, setImage] = useState('#');

const showImage = () => {
    setImage(arrIMG[Math.floor(Math.random() * arrIMG.length)])
}
    return(
        <div> 
            <img src={image} alt="showImage"/>
            <button type="sybmit" onClick={showImage}>Show Image</button>
        </div>
    )
}
export default showRandImg;