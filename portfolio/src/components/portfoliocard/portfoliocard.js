import React from "react";
import Container from "../components/Container";




function PortfolioCard(props) {
    return (
        <div>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default PortfolioCard;