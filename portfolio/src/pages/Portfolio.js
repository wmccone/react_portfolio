import React from "react";
import PortfolioCard from "../components/portfoliocard/portfoliocard";
import Projects from "../components/projectitem/projects";

function Portfolio () {
    return (
        <div>
            <PortfolioCard>
                <Projects
                />
            </PortfolioCard>
        </div>
        )
}

export default Portfolio;
