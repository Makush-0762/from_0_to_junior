import React from "react";
import ElemRightSideBar from './ElemRightSideBar'
import Title from './Title'

export default function SideBarBlogRight() {

    return (
        <>
            <div className="bgColor" style={{margin:'35px 0px 0px 0px', padding:'0px 0px 35px 0px'}}>
                <Title  text={'People see too'} 
                                fontSize={'24px'}
                                fontWeight={'700'}
                                textAlign={'center'}
                                padding={'30px 0px 0px 0px'}/>
                <ElemRightSideBar/>
                <ElemRightSideBar/>
                <ElemRightSideBar/>
                <ElemRightSideBar/>
                <ElemRightSideBar/>

            </div>
        </>
    )
}