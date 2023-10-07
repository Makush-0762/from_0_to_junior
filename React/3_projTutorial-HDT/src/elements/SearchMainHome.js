import React from "react";
import Form from 'react-bootstrap-v5/lib/Form';
import Button from 'react-bootstrap-v5/lib/Button';
import Container from 'react-bootstrap-v5/lib/Container';
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import SearchMainHomeTitle from './SearchMainHomeTitle';
import SearchMainHomeAfterTitle from './SearchMainHomeAfterTitle';
import LanguageBlock from './LanguageBlock';
import Line from './Arrow';

export default function SearchMainHome (){

    return(
        <>
        <Container className="bodySearch">
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>

                    <SearchMainHomeTitle/>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    <SearchMainHomeAfterTitle />
                    <Line />
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>

        </>
    )
}


<Row>
<Col>
<LanguageBlock/>
</Col>
</Row>