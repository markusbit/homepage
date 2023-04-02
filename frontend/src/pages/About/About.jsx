import React from "react";
import './about.css';
import Container from "react-bootstrap/esm/Container";
import AboutCard from "./AboutCard";
import codingImage from '../../assets/coding.png'
import TechStack from "./TechStack";


function About() {
    return (
        <Container fluid className="page-content">
            <div className="row content mx-1">
                <div className="col-md-5 rounded text-box-shadow-blue-dark">
                    <AboutCard />
                </div>
                <br />
                <div className="col-md-5">
                    <img className="img-fluid mt-5" src={codingImage} alt='about'></img>
                </div>
            </div>
            <h1 className="stack-heading">
                My <strong className="purple">Skillset </strong>
            </h1>
            <TechStack />
        </Container>
    )
}

export default About; 