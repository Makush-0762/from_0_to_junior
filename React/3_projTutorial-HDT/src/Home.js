import React from "react";
import Layout from "./layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap-v5/lib/Col';
import ImgMainHomeFon from './elements/ImgMainHomeFon';
import SearchMainHome from './elements/SearchMainHome';
import LanguageBlock from './elements/LanguageBlock';
import JavaScript from './images/js.png';
import Css from './images/css.png';
import Html from './images/html.png';

export default function Home ({urlH, urlJ, urlC}){

    return(
        <>
            <Layout>
                    <Col style={{padding: '0'}}>
                        <ImgMainHomeFon className='fonSearch' />
                        <SearchMainHome className='bodySearch' />
                        <LanguageBlock urlH={Html}  urlJ={JavaScript} urlC={Css}/>
                    </Col>
            </Layout>
        </>
    )
}