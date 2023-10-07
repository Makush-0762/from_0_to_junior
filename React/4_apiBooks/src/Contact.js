import React from "react";
import Layout from "./layout/Layout";
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import Title from './elements/Title'
import Input from "./elements/Input";
import LabelInput from "./elements/LabelInput";
import TextareaContact from "./elements/TextareaContact";
import SubTitle from "./elements/SubTitle";
import Menu from "./components/header/Menu";

export default function Contact() {

    return (
        <>
            <Layout>
                <div className="bgColor">
                    <Container style={{padding:'0px 150px 0px 150px'}}>
                        <Row style={{paddingBottom:'40px'}}>
                            <Col>
                                <Title  text={'Contact Us'} 
                                        fontSize={'52px'}
                                        fontWeight={'700'}
                                        textAlign={'center'}
                                        padding={'0px 0px 20px 0px'}/> 
                                <SubTitle text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum '} />

                            </Col>
                        </Row>

                        <Row style={{padding:'20px 0px 0px 0px'}}>
                            <Col tyle={{padding:'20px 20px 0px 20px'}}>
                                <LabelInput forId={"userFName"}  text={'First Name'}/>
                                <Input type={"text"} placeholder={"Enter you First Name"} id={'userFName'}/>
                            </Col>
                            <Col tyle={{padding:'20px 20px 0px 20px'}}>
                                <LabelInput forId={"userLName"}  text={'Last Name'}/>
                                <Input type={"text"} placeholder={"Enter you Last Name"} id={'userLName'}/>
                            </Col>
                        </Row>

                        <Row style={{padding:'20px 0px 0px 0px'}}>
                            <Col tyle={{padding:'20px 20px 0px 20px'}}>
                                <LabelInput forId={"userEmail"}  text={'Email'}/>
                                <Input type={"email"} placeholder={"Enter you email"} id={'userEmail'}/>
                            </Col>
                            <Col tyle={{padding:'20px 20px 0px 20px'}}>
                                <LabelInput forId={"userTel"}  text={'Number'}/>
                                <Input type={"tel"} placeholder={"Enter you Number"} id={'userTel'}/>
                            </Col>
                        </Row>
                        <Row style={{padding:'20px 0px 0px 0px'}}>
                            <Col>
                                <LabelInput forId={"messageText"}  text={'Message'}/>
                                <TextareaContact rows={'10'} placeholder={'Enter your message'} id={'messageText'}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                <Container>
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