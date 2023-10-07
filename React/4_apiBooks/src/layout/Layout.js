import React from "react";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
// import Main from '../components/content/Main'


export default function Layout ({children}) {

    return (
        <>
            <Header/>
                {/* <Main> */}
                    {children}
                {/* </Main> */}
            <Footer/>
        </>
    )
}