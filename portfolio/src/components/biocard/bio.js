import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function BioCard() {
    return (
        <div>
            <h2>Walter McCone
                <span className="links">
                    <a href="https://github.com/wmccone">Github</a>
                    <a href="https://www.linkedin.com/in/walter-mccone/">LinkedIn</a>
                    <a href="./assets/WalterMcConeResume2021.pdf">Resume</a>
                </span>
            </h2>
            <div className="float-start me-2" >
                <img className="img-fluid img-thumbnail" src="assets/Headshot.jpg" alt="Picture of Walter McCone" />
                <ul className="list-group list-group-flush links">
                    <li className="list-group-item">Waltermccone88@gmail.com</li>
                    <li className="list-group-item">512-296-3234</li>
                </ul>
            </div>
            <p className="card-text ms-2"> My name is Walter McCone, I am currently a coding student at the Coding
            Bootcamp at the University of Texas.
            I have 10+ years in the SaaS industry with 8 of those years in recruiting software.

            I currently work for a Company called CareerPlug. CareerPlug’s innovative hiring solutions help over
            10,000 companies attract, evaluate and retain high-quality team members. CareerPlug provides
            recruiting software to help small, medium and franchise businesses hire top talent.

            While I am currently a Sales person at CareerPlug, I look forward to growing my skillsets in the
            software industry as I learn to code. I hope that one day I will be able to code full time.
            </p>
        </div>

    )

}

export default BioCard;