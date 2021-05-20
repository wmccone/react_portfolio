import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BioCard from "../components/biocard/bio"


function About () {
    return (
        <div>
        <Container>
            <Row>
            <Col size="md-8">
            <BioCard/>
            </Col>
            <Col size="md-4"/>
            </Row>
        </Container>
        </div>
        )
}

export default About;


