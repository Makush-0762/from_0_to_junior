import React from "react";
import Layout from "./layout/Layout";
import Col from 'react-bootstrap-v5/lib/Col';
import Row from 'react-bootstrap-v5/lib/Row';
import Title from "./elements/Title";
import LessonBlock from "./elements/LessonBlock";


export default function HTML() {


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
                                             subTitle={`HTML Introduction`}
                                             link={'/tutorial/html/introduction'} /></Col>
                    <Col xs={4}><LessonBlock title= {"Lesson 2"}  
                                             subTitle={'HTML Editors'}
                                             link={'/tutorial/html/editors'}/></Col>
                    <Col xs={4}><LessonBlock title= {"Lesson 3"}  
                                             subTitle={'HTML Basic Examples'}
                                             link={'/tutorial/html/examples'}/></Col>
                </Row>
                <Row style={{marginTop: '25px',}}>
                    <Col xs={4}><LessonBlock title= {"Lesson 4"}  
                                             subTitle={'HTML Elements'}
                                             link={'/tutorial/html/elements'}/></Col>
                    <Col xs={4}><LessonBlock title= {"Lesson 5"}  
                                             subTitle={'HTML Attributes'}
                                             link={'/tutorial/html/attributes'}/></Col>
                </Row>
            </Layout>
        </>
    )
}