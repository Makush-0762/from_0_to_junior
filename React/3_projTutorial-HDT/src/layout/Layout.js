import React from "react";
import Header from "../components/header/Header";
import Main from "../components/content/Main";
import Footer from "../components/footer/Footer";
import '../App.css';

export default function Layout ({children}){

    return(
        <>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>    
    )

}