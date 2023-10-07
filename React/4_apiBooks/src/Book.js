import React from "react";
import Layout from "./layout/Layout";
import Title from "./elements/Title";
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import SideBar from "./components/content/SideBar";
import Search from "./components/header/Search";
import PaginatiOn from "./elements/Pagination";
import Menu from "./components/header/Menu";
import FullCard from "./elements/FullCard";


export default function Book() {

    return (
        <>
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            <Title  text={'Our Books'} 
                                fontSize={'52px'}
                                fontWeight={'700'}
                                textAlign={'center'}
                                padding={'0px 0px 45px 0px'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <SideBar />
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={6} style={{ display:'flex', alignItems:'center'}}>
                                    <PaginatiOn />
                                </Col>
                                <Col xs={6} style={{marginRight:'0'}}>
                                    <Search />
                                </Col>
                            </Row>
                            <Row style={{padding:'70px 0px 80px 0px'}}>
                            <Row style={{paddingTop:'45px'}}>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                            </Row>
                            <Row style={{paddingTop:'45px'}}>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                            </Row>
                            <Row style={{paddingTop:'45px'}}>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                            </Row>
                            <Row style={{paddingTop:'45px'}}>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                                <Col><FullCard /></Col>
                            </Row>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <PaginatiOn />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign:'center', padding:'25px 0px'}}>
                            <Menu/>
                        </Col>
                    </Row>
                </Container>



            </Layout>
        </>
    )
}