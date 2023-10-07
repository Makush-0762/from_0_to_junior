import React from "react";
import Layout from "./layout/Layout";
import Title from "./elements/Title";
import Img from "./elements/Img";
import Button from 'react-bootstrap-v5/lib/Button';
import Card from 'react-bootstrap-v5/lib/Card';
import JSTut from './images/JSTut.png';
import CSSTut from './images/CSSTut.png';
import HTML from './images/HTMLTut.png';
import {Link} from 'react-router-dom';

export default function Tutorial (){

    return(
        <>
            <Layout>
                    <Title  text={'Choose a language and learn'} 
                            fontSize={'34px'}
                            fontWeight={'700'}
                            textAlign={'center'}/> 

                    <Card style={{border:'none', marginBottom: '40px'}}>
                        <Card.Body >
                            <Card.Title style={{textAlign: 'center', fontSize: '28px', margin: '0'}}>HTML</Card.Title>
                            <Card.Body style={{display:'flex',}}>
                                <Card.Text style={{paddingRight: '50px', width: '60%', margin: 'auto 0'}}>
                                    HTML (from the English HyperText Markup Language - “hypertext markup language”) is 
                                    a standardized hypertext markup language for viewing web pages in a browser. Web
                                     browsers receive an HTML document from a server via HTTP/HTTPS protocols or open 
                                     it from a local disk, then interpret the code into an interface that will be displayed on the monitor screen.
                                </Card.Text>
                                <Img urlImg = {HTML}/>
                            </Card.Body>
                            <Link to='/tutorial/html' ><Button variant="info" size="lg" style={{width:'100%'}}>Repeat&#8212;Learn&#8212;Improve ;)</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{border:'none', marginBottom: '40px'}}>
                        <Card.Body >
                            <Card.Title style={{textAlign: 'center', fontSize: '28px', margin: '0'}}>CSS</Card.Title>
                            <Card.Body style={{display:'flex',}}>
                                <Card.Text style={{paddingRight: '50px', width: '60%', margin: 'auto 0'}}>
                                    CSS (/siːɛsɛs/ English Cascading Style Sheets) is a formal language for decorating and describing the appearance of a document (web page) written using a markup language (most often HTML or XHTML). It can also be applied to any XML document, such as SVG or XUL.
                                </Card.Text>
                                <Img urlImg = {CSSTut}/>
                            </Card.Body>
                            <Link to='/tutorial/css' ><Button variant="info" size="lg" style={{width:'100%'}}>Repeat&#8212;Learn&#8212;Improve ;)</Button></Link>
                        </Card.Body>
                    </Card>


                    <Card style={{border:'none',marginBottom: '40px'}}>
                        <Card.Body >
                            <Card.Title style={{textAlign: 'center', fontSize: '28px', margin: '0'}}>JavaScript</Card.Title>
                            <Card.Body style={{display:'flex',}}>
                                <Card.Text style={{paddingRight: '50px', width: '60%', margin: 'auto 0'}}>
                                <p>JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; abbr. JS /ˈdʒeɪ.ɛs./) is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. It is an implementation of the ECMAScript specification (ECMA-262[ standard).</p>
                                JavaScript is commonly used as an embeddable language for programmatic access to application objects. It is most widely used in browsers as a scripting language for making web pages interactive.
                                </Card.Text>
                                <Img urlImg = {JSTut}/>
                            </Card.Body>
                            <Link to='/tutorial/javascript' ><Button variant="info" size="lg" style={{width:'100%'}}>Repeat&#8212;Learn&#8212;Improve ;)</Button></Link>
                        </Card.Body>
                    </Card>

            </Layout>
        </>
    )

}