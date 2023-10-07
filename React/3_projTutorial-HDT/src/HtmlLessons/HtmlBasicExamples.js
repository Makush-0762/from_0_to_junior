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

export default function HtmlBasicExamples() {


    const html = <HtmlSideBar />
    const css = <CssSideBar />
    const js = <JsSideBar />

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
                        <Col xs={3}><SideBar Sidebar={html} /></Col>
                        <Col xs={7} style={{backgroundColor: "#fff",}}>
                            <Title  text={'HTML Basic Examples'} 
                                    fontSize={'34px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}
                                    paddingBottom = {'50px'}/>
                            
                            <p style={{padding: '0px', fontSize:'16px'}}>In this chapter we will show some basic HTML examples.</p>
                            <p style={{paddingBottom: '20px', fontSize:'16px'}}>Don't worry if we use tags you have not learned about yet..</p><hr/>


                            <Title  text={'HTML Documents'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>All HTML documents must start with a document type declaration: {'<!DOCTYPE html>'}.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>The HTML document itself begins with {'<html>'} and ends with {'</html>'}.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>The visible part of the HTML document is between {'<body>'} and {'</body>'}.</p>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<!DOCTYPE html>
<html>
<body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

</body>
</html>`}
                            </pre>  <br/><hr/>


                            <Title  text={'The <!DOCTYPE> Declaration'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<!DOCTYPE>'} declaration represents the document type, and helps browsers to display web pages correctly.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>It must only appear once, at the top of the page (before any HTML tags).</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<!DOCTYPE>'} declaration is not case sensitive.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>AThe {'<!DOCTYPE>'} declaration for HTML5 is:</p>




                            <pre style={codeBlockStyle}>
{`<!DOCTYPE html>`}
                            </pre>  
                            

                            <Title  text={'HTML Headings'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>HTML headings are defined with the {'<h1>'} to {'<h6>'} tags.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>{'<h1>'} defines the most important heading. {'<h6>'} defines the least important heading: </p>


                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}
                            </pre>  <br/><hr/>


                            <Title  text={'HTML Paragraphs'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 

                            <p style={{padding: '5px', fontSize:'16px'}}>HTML paragraphs are defined with the {'<p>'} tag:</p>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
                            {`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
                            </pre>  


                            <Title  text={'HTML Links'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 

                            <p style={{padding: '5px', fontSize:'16px'}}>HTML links are defined with the {'<a>'} tag:</p>
                            <pre style={codeBlockStyle}>
                                Example <br/><br/>
                                {`<a href="https://www.w3schools.com">This is a link</a>`}
                            </pre> 
                            <p style={{padding: '0px', fontSize:'16px'}}>The link's destination is specified in the href attribute. </p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Attributes are used to provide additional information about HTML elements.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>You will learn more about attributes in a later chapter.</p><hr/>

                            <Title  text={'HTML Images'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 
                            
                            <p style={{padding: '0px', fontSize:'16px'}}>HTML images are defined with the {'<img>'} tag.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>The source file (src), alternative text (alt), width, and height are provided as attributes:</p>


                            <pre style={codeBlockStyle}>
                                Example <br/><br/>
                                {`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`}
                            </pre><hr/>

                            <Title  text={'How to View HTML Source'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'20px'}/> 

                            <p style={{padding: '0px', fontSize:'16px'}}>Have you ever seen a Web page and wondered "Hey! How did they do that?"</p>

                            <Title  text={'View HTML Source Code:'} 
                                    fontSize={'24px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 
                            <p style={{padding: '0px', fontSize:'16px'}}>Right-click in an HTML page and select "View Page Source" 
                            (in Chrome) or "View Source" (in Edge), or similar in other browsers. This will open 
                            a window containing the HTML source code of the page.</p>
                            
                            
                            <Title  text={'Inspect an HTML Element:'} 
                                    fontSize={'24px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 
                            <p style={{padding: '0px', fontSize:'16px'}}>Right-click on an element (or a blank area), and choose "Inspect" or 
                            "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit 
                            the HTML or CSS on-the-fly in the Elements or Styles panel that opens.</p>
                            
                                </Col>
                        <Col xs={2}>Commerc</Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}