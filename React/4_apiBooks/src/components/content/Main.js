import React from "react";
import Container from 'react-bootstrap-v5/lib/Container';


export default function Main({children}) {

    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}