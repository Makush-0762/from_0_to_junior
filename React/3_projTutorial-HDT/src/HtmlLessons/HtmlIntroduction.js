import React from "react";
import Layout from "../layout/Layout";
import Col from 'react-bootstrap-v5/lib/Col';
import Row from 'react-bootstrap-v5/lib/Row';
import Container from 'react-bootstrap-v5/lib/Container';
import SideBar from "../components/content/SideBar";
import HtmlSideBar from '../elements/HtmlSideBar'
import CssSideBar from '../elements/CssSideBar'
import JsSideBar from '../elements/JsSideBar'
import Title from '../elements/Title'
import Table from 'react-bootstrap-v5/lib/Table';
import Image from 'react-bootstrap-v5/lib/Image';
import Structure from "../images/Structure.jpg"



export default function HtmlIntroduction() {


    const html = <HtmlSideBar />
    const css = <CssSideBar />
    const js = <JsSideBar />

    const codeBlockStyle = {
        backgroundColor: "#f0f0f0",
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
                        <Col xs={3}><SideBar Sidebar={html} /></Col>
                        <Col xs={7} style={{backgroundColor: "#fff",}}>
                            <Title  text={'HTML Introduction'} 
                                    fontSize={'34px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}
                                    paddingBottom = {'50px'}/>
                            
                            <p style={{padding: '20px', fontSize:'20px', backgroundColor: '#f8ffdd',}}>HTML is the standard markup language for creating Web pages.</p>

                            <Title  text={'What is HTML?'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <ul style={{paddingBottom: '20px', fontSize:'16px'}}>
                                <li>HTML stands for Hyper Text Markup Language</li>
                                <li>HTML is the standard markup language for creating Web pages</li>
                                <li>HTML describes the structure of a Web page</li>
                                <li>HTML consists of a series of elements</li>
                                <li>HTML elements tell the browser how to display the content</li>
                                <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                            </ul>


                            <Title  text={'A Simple HTML Document'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<!DOCTYPE html>  
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}
                            </pre>  
                            

                            <Title  text={'Example Explainedt'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <ul style={{paddingBottom: '20px', fontSize:'16px'}}>
                                <li>HTML stands for Hyper Text Markup Language</li>
                                <li>HTML is the standard markup language for creating Web pages</li>
                                <li>HTML describes the structure of a Web page</li>
                                <li>HTML consists of a series of elements</li>
                                <li>HTML elements tell the browser how to display the content</li>
                                <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                            </ul>

                            <Title  text={'What is an HTML Element?'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 

                            <p style={{padding: '5px', fontSize:'16px'}}>An HTML element is defined by a start tag, some content, and an end tag:</p>

                            <pre style={codeBlockStyle}>
                            {`<tagname> Content goes here... </tagname>`}
                            </pre>  

                            <p style={{padding: '5px', fontSize:'16px'}}>The HTML element is everything from the start tag to the end tag:</p>
                                
                            <pre style={codeBlockStyle}>
                            {`<h1>My First Heading</h1>`}<br/>
                            {`<p>My first paragraph.</p>`}
                            </pre> <br/> <br/><br/>
                            <Table striped  style={{paddingTop:'20px'}}>
                                <thead>
                                    <tr>
                                        <th><strong>Start tag</strong></th>
                                        <th><strong>Element content</strong></th>
                                        <th><strong>End tag</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{'<h1>'}</td>
                                        <td>My First Heading</td>
                                        <td>{'</h1>'}</td>
                                    </tr>
                                    <tr>
                                        <td>{'<p>'}</td>
                                        <td>My first paragraph.</td>
                                        <td>{'</p>'}</td>
                                    </tr>
                                    <tr>
                                        <td >{'<br>'}</td>
                                        <td>none</td>
                                        <td>none</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <p style={{padding: '20px',marginTop:'50px' , fontSize:'16px', backgroundColor: '#f8ff90',}}>
                                <strong>Note:</strong> Some HTML elements have no content (like the {`<br>`} element). 
                                These elements are called empty elements. Empty elements do not have an end tag!
                            </p>


                            <Title  text={'Web Browsers'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 
                            
                            <p style={{padding: '0px', fontSize:'16px'}}>The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>A browser does not display the HTML tags, but uses them to determine how to display the document:</p>

                            <Image src="https://www.w3schools.com/html/img_chrome.png" fluid />

                            <Title  text={'HTML Page Structure'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'20px'}/> 

                            <p style={{padding: '0px', fontSize:'16px'}}>Below is a visualization of an HTML page structure:</p>


                            <Image src={Structure} fluid />
                            

                            <p style={{padding: '20px',marginTop:'50px' , fontSize:'16px', backgroundColor: '#f8ff90',}}>
                                <strong>Note:</strong>Note: The content inside the {`<body>`} section will be displayed in a browser. 
                                    The content inside the {'<title>'} element will be shown in the browser's title bar or in the 
                                        page's tab.
                            </p>
                            
                            </Col>
                        <Col xs={2}>Commerc</Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}