import React from "react";
import Layout from "./layout/Layout";
import Col from 'react-bootstrap-v5/lib/Col';
import Row from 'react-bootstrap-v5/lib/Row';
import Title from "./elements/Title";
import LessonBlock from "./elements/LessonBlock";

export default function CSS() {


    return(
        <>
        
        <Layout>
        <Row >
                    <Col style={{padding: '0'}}>
                        <Title  text={'Initial level'} 
                                fontSize={'34px'}
                                fontWeight={'700'}
                                textAlign={'center'}/> 
                    </Col>
                </Row>
                <Row style={{marginTop: '25px',}}>
                    <Col xs={4}><LessonBlock title= {"Lesson 1"}  
                                             subTitle={`CSS Introduction`}
                                             link={'/tutorial/css/introduction'} /></Col>
                    <Col xs={4}><LessonBlock title= {"Lesson 2"}  
                                             subTitle={'CSS Syntax'}
                                             link={'/tutorial/css/syntax'}/></Col>
                    <Col xs={4}><LessonBlock title= {"Lesson 3"}  
                                             subTitle={'CSS Selectors'}
                                             link={'/tutorial/css/selectors'}/></Col>
                </Row>
                <Row style={{marginTop: '25px',}}>
                    <Col xs={4}><LessonBlock title= {"Lesson 4"}  
                                             subTitle={'How To Add CSS'}
                                             link={'/tutorial/css/how-to-add-css'}/></Col>
                    <Col xs={4}><LessonBlock title= {"Lesson 5"} 
                                             subTitle={'CSS Comments'}
                                             link={'/tutorial/css/comments'}/></Col>
                </Row>
        </Layout>
        </>
    )
}