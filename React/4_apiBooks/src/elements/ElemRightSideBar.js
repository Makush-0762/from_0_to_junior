import React from "react";
import Img from "./Img";
import Title from './Title'


export default function ElemRightSideBar() {

    return (
        <>
            <div style={{position:'relative', margin:'35px 0px', display:'flex', justifyContent:'center',}}>
                <Img url={"https://bit.ua/wp-content/uploads/2017/12/13516403_1080424095383676_7574896948807595370_n.jpg"}  
                             bodyWidth={'250px'}
                             bodyHeight={'200px'}
                             text={'ImgBlog'}/>
                
                <div style={{backgroundColor:'rgba(211, 211, 211, 0.9)', width:'250px', position:"absolute", bottom:"24px"}}>
                    <Title  text={'Some Title'} 
                            fontSize={'16px'}
                            fontWeight={'700'}
                            textAlign={'start'}
                            padding={'20px'}/>
                </div>
            </div>
        </>
    )
}