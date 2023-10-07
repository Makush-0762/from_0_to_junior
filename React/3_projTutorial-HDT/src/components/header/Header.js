import React from "react";
import '../../App.css';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';

export default function Header (){

    return(
        <>
        <div className="bgcolorHeader">
            <Container className="bgcolorHeader pdHeader" >
                <Row>
                    <Col xs={1} className="alignLogo"><Logo /></Col>
                    <Col xs={8}><Menu /></Col>
                    <Col xs={3}><Search /></Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

