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

export default function HtmlElements() {


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
                            <Title  text={'HTML Elements    '} 
                                    fontSize={'34px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}
                                    paddingBottom = {'50px'}/>
                            
                            <p style={{padding: '20px', fontSize:'20px', backgroundColor: '#f8ffdd',}}>An HTML element is defined by a start tag, some content, and an end tag.</p><hr/>



                            <p style={{padding: '5px', fontSize:'16px'}}>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>

                            <pre style={codeBlockStyle}>
                            {`<tagname> Content goes here... </tagname>`}
                            </pre>  

                            <p style={{padding: '5px', fontSize:'16px'}}>Examples of some HTML elements:</p>
                                
                            <pre style={codeBlockStyle}>
                            {`<h1>My First Heading</h1>`}<br/>
                            {`<p>My first paragraph.</p>`}
                            </pre> <br/>

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

                            <Title  text={'Nested HTML Elements'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>HTML elements can be nested (this means that elements can contain other elements).</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>All HTML documents consist of nested HTML elements.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>The following example contains four HTML elements ({'<html>'}, {'<body>'}, {'<h1>'}  and {'<p>'}):</p><hr/>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<!DOCTYPE html>
<html>
<body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

</body>
</html>`}
                            </pre> 

                            <Title  text={'Example Explained'} 
                                    fontSize={'24px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<html>'} element is the root element and it defines the whole HTML document.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>It has a start tag {'<html>'} and an end tag {'</html>'}.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Then, inside the {'<html>'} element there is a {'<body>'} element:</p>
                            
                            <pre style={codeBlockStyle}>
{`<body>

    1>My First Heading</h1>
    <p>My first paragraph.</p>

</body>`}
                            </pre>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<body>'} element defines the document's body.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>It has a start tag {'<body>'} and an end tag {'<body>'}.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Then, inside the {'<body>'} element there are two other elements: {'<h1>'} and {'<p>'}:</p>

                            <pre style={codeBlockStyle}>
{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}
                            </pre>


                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<h1>'} element defines a heading.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>It has a start tag {'<h1>'} and an end tag {'</h1>'}:</p>

                            <pre style={codeBlockStyle}>
{`<h1>My First Heading</h1>`}
                            </pre>

                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<p>'} element defines a paragraph.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>It has a start tag {'<p>'} and an end tag {'<p>'}:</p>

                            <pre style={codeBlockStyle}>
{`<p>My first paragraph.</p>`}
                            </pre><hr/>


                            <Title  text={'Never Skip the End Tag'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>Some HTML elements will display correctly, even if you forget the end tag:</p>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<html>
<body>

    <p>This is a paragraph
    <p>This is a paragraph

</body>
</html>`}
                            </pre>
                            <p style={{padding: '0px', fontSize:'16px'}}><strong>However, never rely on this! Unexpected results and errors may occur if you forget the end tag!</strong></p><hr/>


                            <Title  text={'Empty HTML Elements'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 

                            <p style={{padding: '0px', fontSize:'16px'}}>HTML elements with no content are called empty elements.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>The {'<br>'} tag defines a line break, and is an empty element without a closing tag:</p>

                            <pre style={codeBlockStyle}>
                            Example <br/><br/>
{`<p>This is a <br> paragraph with a line break.</p>`}
                            </pre><hr/>


                            <Title  text={'HTML is Not Case Sensitive'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>   

                            <p style={{padding: '0px', fontSize:'16px'}}>HTML tags are not case sensitive: {'<P>'} means the same as {'<p>'}.</p><hr/>

                            </Col>
                        <Col xs={2}>Commerc</Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}