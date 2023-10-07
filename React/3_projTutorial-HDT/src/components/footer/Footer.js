import React from "react";
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import MenuFooter from './MenuFooter'
import SupportLinck from './SupportLinck'
import Icon from './Icon'
import Copyright from './Copyright'
import './Footer.css'


export default function Footer (){

    return(
        <>
        <div className="bgcolorFooter">
            <Container className="bgcolorFooter pdFooter" >
                <Row>
                    <Col xs={4} style={{margin: 'auto 0'}}><MenuFooter /></Col>
                    <Col xs={4} style={{display:'flex', alignItems:'center'}}><SupportLinck /></Col>
                    <Col xs={4}><Icon/></Col>
                </Row>
                <Row>
                    <Col><Copyright /></Col>
                </Row>
            </Container>
        </div>
            
        </>
    )
}