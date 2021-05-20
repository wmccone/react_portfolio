import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";

function Projects(props) {
    return (
        <div>
            <Container>
                {props.projects.map(item => (
                    <Row>
                        <Col size="md-12">
                            <h2>{item.name}</h2>
                            <div className="float-start me-2" key={item.id}>
                                <a href={item.deployment}>
                                    <img className="img-fluid img-thumbnail border-info border-2 mb-2" src={item.image}
                                        alt={item.alt} />
                                </a>
                                <ul className="list-group list-group-flush ms-2">
                                    <li className="list-group-item"><a href={item.deployment}>Deployed Application</a> </li>
                                    <li className="list-group-item"><a href={item.github}>Repository</a></li>
                                </ul>
                            </div>
                            <p className="card-text ms-2">{item.description}</p>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default Projects;