import React from "react";
import Container from "../Container";




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