import React from "react";
import Form from 'react-bootstrap-v5/lib/Form';
import Button from 'react-bootstrap-v5/lib/Button';

export default function Search (){

    return(
        <>
            <Form className="d-flex">
                <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 "
                            aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
            </Form>
        </>
    )
}