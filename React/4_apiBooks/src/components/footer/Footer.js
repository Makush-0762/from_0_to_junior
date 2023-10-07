import React from "react";
import Icon from "./Icon"
import Copyright from "./Copyright"
import Logo from "./Logo"
import ListMenuFooter from "./ListMenuFooter";
import Genres from "./Genres";
import Support from "./Support";
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';

export default function Footer() {

    
    return (
        <>
            <div className="bgColorF">

                <Container>
                    <Row>
                        <Col><ListMenuFooter/></Col>
                        <Col><Genres /></Col>
                        <Col  style={{display:'flex', alignItems:'center', justifyContent:'center'}}><Logo /></Col>
                        <Col style={{display:'flex', alignItems:'center', justifyContent:'center'}}><Support/></Col>
                        <Col style={{display:'flex', alignItems:'center', }}><Icon /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr/>
                            <Copyright />
                        </Col>
                    </Row>
                </Container>
                {/* <div className='_container footerBlocks'>
                    <div>
                        <ListMenuFooter/>
                    </div>
                    <div>
                        <Genres />
                    </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Logo />
                    </div>
                     <div>
                         <Support/>
                    </div> 
                    <div>
                        <Icon />
                    </div>
                </div>
                <div className="_container ">
                    <hr/>
                    <Copyright />
                </div> */}
            </div>
        </>
    )
}