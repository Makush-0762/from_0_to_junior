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
import Image from 'react-bootstrap-v5/lib/Image';

export default function HtmlEditors() {


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
                            <Title  text={'HTML Editors'} 
                                    fontSize={'34px'}
                                    fontWeight={'700'}
                                    textAlign={'center'}
                                    paddingBottom = {'50px'}/>
                            
                            <p style={{padding: '20px', fontSize:'20px', backgroundColor: '#f8ffdd',}}>A simple text editor is all you need to learn HTML.</p>

                            <Title  text={'Learn HTML Using Notepad or TextEdit'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>Web pages can be created and modified by using professional HTML editors.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>We believe that using a simple text editor is a good way to learn HTML.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
                            


                            <Title  text={'Step 1: Open Notepad (PC)'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}><strong>Windows 8 or later:</strong></p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Open the <strong>Start Screen </strong>(the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>Notepad.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}><strong>Windows 7 or earlier:</strong></p>
                            <p style={{paddingBottom: '20px', fontSize:'16px'}}>Open <strong>Start {'>'} Programs {'>'} Accessories {'>'} Notepad</strong></p><hr/>


                            <Title  text={'Step 1: Open TextEdit (Mac)'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>Open <strong>Finder {'>'} Applications {'>'} TextEdit</strong></p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Also change some preferences to get the application to save files correctly. In <strong>Preferences {'>'} Format {'>'}</strong> choose <strong>"Plain Text"</strong></p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</p>
                            <p style={{paddingBottom: '20px', fontSize:'16px'}}><strong>Then open a new document to place the code.</strong></p><hr/>


                            <Title  text={'Step 2: Write Some HTML'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '20px', fontSize:'16px'}}>Write or copy the following HTML code into Notepad:</p>

                            <pre style={codeBlockStyle}>
{`<!DOCTYPE html>
<html>
<body>

    <h1>My First Heading</h1>

    <p>My first paragraph.</p>

</body>
</html>`}
                            </pre>  
                            

                            <Image src="https://www.w3schools.com/html/img_notepad.png" fluid /><hr/>


                            <Title  text={'Step 3: Save the HTML Page'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/>

                            <p style={{padding: '0px', fontSize:'16px'}}>Save the file on your computer. Select <strong>File {'>'} Save as</strong> in the Notepad menu.</p>
                            <p style={{padding: '0px', fontSize:'16px'}}>Name the file <strong>"index.htm"</strong> and set the encoding to <strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>

                            <Image src="https://www.w3schools.com/html/img_saveas.png" fluid />

                            <p style={{padding: '20px',marginTop:'20px' , fontSize:'16px', backgroundColor: '#f8ff90',}}>
                                <strong>Tip:</strong> You can use either .htm or .html as file extension. There is no difference; it is up to you.
                            </p><hr/>


                            <Title  text={'Step 4: View the HTML Page in Your Browser'} 
                                    fontSize={'28px'}
                                    fontWeight={'400'}
                                    textAlign={'center'}
                                    paddingBottom = {'0px'}/> 

                            <p style={{padding: '5px', fontSize:'16px'}}>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
                            <p style={{padding: '5px', fontSize:'16px'}}>The result will look much like this:</p>

                            <Image src="https://www.w3schools.com/html/img_chrome.png" fluid />

                            </Col>
                        <Col xs={2}>Commerc</Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}




