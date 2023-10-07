import React from "react";
import Button from 'react-bootstrap-v5/lib/Button';
import Card from 'react-bootstrap-v5/lib/Card';
import {Link} from 'react-router-dom';



export default function LessonBlock({title, subTitle,link}) {


    return(
        <>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title style={{textAlign: 'center', fontSize: '24px', fontWeight: '500' }}>{title}</Card.Title>
                    <Card.Text style={{textAlign: 'center', fontSize: '18px', fontWeight: '500',  }}>
                        {subTitle}
                    </Card.Text>
                    <Link to={link} ><Button variant="info" size="lg" style={{width:'100%'}}>Check</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}