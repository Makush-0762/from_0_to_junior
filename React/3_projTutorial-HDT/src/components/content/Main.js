import React from "react";
import '../../App.css';
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';



export default function Main ({children}){

    return(
        <>
        <div className="bgcolorHeader ">
            <Container className="bgcolorHeader pdHeader" style={{paddingBottom: '380'}}>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
        </>
    )

}