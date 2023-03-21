import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function ImgSample(props)
{
    return(
       <Container fluid>
       <Row><img src={props.source} alt=""></img></Row>
       </Container>
    )
}

export default ImgSample;