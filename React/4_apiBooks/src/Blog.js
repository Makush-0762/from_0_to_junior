import React from "react";
import Layout from "./layout/Layout";
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import Title from './elements/Title'
import CardBlog from "./elements/CardBlog";
import SideBarBlogRight from "./elements/SideBarBlogRight";
import Menu from './components/header/Menu'


export default function Blog() {

    return (
        <>
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            <Title  text={'Our Blog'} 
                                    fontSize={'52px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}/> 
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={9}>
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                            <CardBlog />
                        </Col>
                        <Col>
                            <SideBarBlogRight/>
                        </Col>

                    </Row>

                </Container>
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