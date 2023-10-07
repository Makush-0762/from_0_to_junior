import React from "react";
import Layout from "./layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import Title from './elements/Title';
import SubTitle from "./elements/SubTitle";
import Img from "./elements/Img";
import Logo from './images/logo.png'
import Menu from "./components/header/Menu";


export default function About() {

    return (
        <>
            <Layout>
                <div className="bgColor">
                    <Container>
                        <Row  style={{paddingTop:'20px',paddingBottom:'70px' }}>
                            <Col xs={12}>
                                <Title  text={'About Us'} 
                                        fontSize={'52px'}
                                        fontWeight={'700'}
                                        textAlign={'center'}/> 
                                
                                <SubTitle text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!'} />
                                <Img url={Logo} text={'Logo'} width={'700px'} textAlign={'center'}/>
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