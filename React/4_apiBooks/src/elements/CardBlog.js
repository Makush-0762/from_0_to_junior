import React from "react";
import Img from "./Img";
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import Title from './Title'
import SubTitle from './SubTitle'
import Button from './Button'
import DateBlog from "./DateBlog";


export default function CardBlog() {



    return (
        <>
            <Container>
                <Row style={{margin:'35px 0px 35px 0px', padding:'25px'  ,  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)'}}>
                    <Col xs={4}>
                        <Img url={"https://bit.ua/wp-content/uploads/2017/12/13516403_1080424095383676_7574896948807595370_n.jpg"}  
                             bodyWidth={'300px'}
                             bodyHeight={'250px'}
                             text={'ImgBlog'}/>
                    </Col>
                    <Col style={{padding:'20px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        <div>
                            <Title  text={'Some Title '} 
                                            fontSize={'24px'}
                                            fontWeight={'700'}
                                            textAlign={'start'}
                                            padding={'0px 0px 20px 40px'}/>
                            <SubTitle text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandaea, molestiae quas vel sint commodi repudiandae consequuntur voluptatum Lorem ipsum dolor sit amet consectet'} />
                        </div>
                        
                        <div style={{display:'flex', justifyContent:'space-between', marginTop: 'auto'}}>
                            <DateBlog />
                            
                            <Button text={'Check'}  
                                    textAlign={"end"} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}