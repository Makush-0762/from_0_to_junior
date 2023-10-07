import React from "react";
import Layout from "./layout/Layout";
import Col from 'react-bootstrap-v5/lib/Col';
import Row from 'react-bootstrap-v5/lib/Row';
import Title from "./elements/Title";
import LessonBlock from "./elements/LessonBlock";



export default function JavaScript() {


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
                                         subTitle={`JavaScript Introduction.`}
                                         link={'/tutorial/javascript/introduction'} /></Col>
                <Col xs={4}><LessonBlock title= {"Lesson 2"}  
                                         subTitle={'JavaScript Where To'}
                                         link={'/tutorial/javascript/where-to'}/></Col>
                <Col xs={4}><LessonBlock title= {"Lesson 3"}  
                                         subTitle={'JavaScript Output'}
                                         link={'/tutorial/javascript/output'}/></Col>
            </Row>
            <Row style={{marginTop: '25px',}}>
                <Col xs={4}><LessonBlock title= {"Lesson 4"}  
                                         subTitle={'JavaScript Statements'}
                                         link={'/tutorial/javascript/statements'}/></Col>
                <Col xs={4}><LessonBlock title= {"Lesson 5"}  
                                         subTitle={'JavaScript Syntax'}
                                         link={'/tutorial/javascript/syntax'}/></Col>
            </Row>
        </Layout>
        </>
    )
}