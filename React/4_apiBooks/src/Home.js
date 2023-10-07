import React from "react";
import Layout from "./layout/Layout";
import TitleIndex from "./elements/TitleIndex";
import SubTitle from "./elements/SubTitle";
import Search from "./components/header/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import PhotoFon from './images/Mask Group.png';
import Img from './elements/Img';
import Title from './elements/Title';
import ListGanreHome from "./elements/ListGanreHome";
import Button from "./elements/Button";
import FullCard from "./elements/FullCard";


export default function Home() {

    const centerTitle = {
        marginTop: '100px',
        paddingRight:'50px',
        paddingLeft:'50px',
    };

    
    return (
        <>

            <Layout>
                <div className="bgColor">
                    <Container>
                        <Row  style={{paddingTop:'70px',paddingBottom:'70px' }}>
                            <Col xs={6}>
                                <div style={centerTitle}>
                                    <div>
                                        <TitleIndex/>
                                        <SubTitle text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum '} />
                                        <Search/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div>
                                    <Img url={PhotoFon} width={'90%'} text={'Fon'} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            
                <Container>
                    <Row>
                        <Col style={{paddingTop:'170px'}}>
                            <Title  text={'Our library'} 
                                    fontSize={'72px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}/> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGanreHome />
                        </Col>
                    </Row>
                    <Row style={{paddingTop:'45px'}}>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                    </Row>
                    <Row style={{paddingTop:'35px'}}>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                    </Row>
                    <Row style={{padding:'35px 0px 100px 0px' }}>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                        <Col><FullCard /></Col>
                    </Row>
                    <Row>
                        
                        <Col style={{textAlign:'center'}}>
                            <Button text={'Show More'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGanreHome />
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}