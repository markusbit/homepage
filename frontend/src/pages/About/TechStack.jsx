import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import mongoDB from '../../assets/mongodb.svg'; 
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

function TechStack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faHtml5} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faCss3} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faSquareJs} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faNodeJs} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faPhp} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={mongoDB} alt="MongoDB" className="img-fluid"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faReact} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faJava} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faGitAlt} color='white' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FontAwesomeIcon icon={faLinux} color='white' />
            </Col>
        </Row>
    );
}

export default TechStack; 