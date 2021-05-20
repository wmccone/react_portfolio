import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactCard from "../components/contactcard/contact"


function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-8">
                        <ContactCard/>
                    </Col>
                    <Col size="md-4" />
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
