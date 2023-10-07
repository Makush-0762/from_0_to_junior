import React from "react";
import Layout from "../layout/Layout";
import Col from 'react-bootstrap-v5/lib/Col';
import Row from 'react-bootstrap-v5/lib/Row';
import Container from 'react-bootstrap-v5/lib/Container';
import SideBar from "../components/content/SideBar";
import CssSideBar from '../elements/CssSideBar'
import Title from '../elements/Title'

export default function CssSyntax() {


    const css = <CssSideBar />

    const codeBlockStyle = {
        backgroundColor: "#f4f4f4",
        padding: "1rem",
        borderRadius: "5px",
        fontFamily: "monospace",
        fontSize: "1.2rem",
      };

    return(
        <>
            <Layout>

                <Container>
                <Row>
                        <Col xs={3}><SideBar Sidebar={css} /></Col>
                        <Col xs={7} style={{backgroundColor: "#fff",}}>
                            <Title  text={'HTML Attributes'} 
                                    fontSize={'34px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}
                                    paddingBottom = {'50px'}/>
                            
                            <p style={{padding: '20px', fontSize:'20px', backgroundColor: '#f8ffdd',}}>HTML attributes provide additional information about HTML elements.</p>

                            <Title  text={'HTML Attributes'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <ul style={{paddingBottom: '20px', fontSize:'16px'}}>
                                <li>All HTML elements can have attributes</li>
                                <li>Attributes provide additional information about elements</li>
                                <li>Attributes are always specified in the start tag</li>
                                <li>Attributes usually come in name/value pairs like: name="value"</li>
                            </ul><hr/>


                            <Title  text={'The href Attribute'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<a>'} tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:</p>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<a href="https://www.w3schools.com">Visit W3Schools</a>`}
                            </pre><hr/>


                            <Title  text={'The src Attribute'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<img>'} tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:</p>
                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<img src="img_girl.jpg">`}
                            </pre>

                            <p style={{padding: '0px', fontSize:'16px',}}>There are two ways to specify the URL in the src attribute:</p>

                            <p style={{padding: '0px', fontSize:'16px'}}><strong>1. Absolute URL </strong>- Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".</p>
                            <p style={{padding: '0px', fontSize:'16px'}}><strong>Notes:</strong>External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}><strong>2. Relative URL</strong> - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".</p>
                            <p style={{padding: '0px', fontSize:'16px'}}><strong>Tip:</strong>It is almost always best to use relative URLs. They will not break if you change domain.</p><hr/>

                            <Title  text={'The width and height Attributes'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<img>'} tag should also contain the width and height attributes, which specify the width and height of the image (in pixels):</p><hr/>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<img src="img_girl.jpg">`}
                            </pre><hr/>
                            </Col>
                        <Col xs={2}>Commerc</Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}