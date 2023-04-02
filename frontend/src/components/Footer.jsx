import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Quote from "./Quote";

import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ quote }) => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Quote quote={quote} />
            <br />
            <Row>
                <Col md='4' className="footer-line">
                    By Markus Brandstetter
                </Col>
                <Col md='4'>
                    <ul className="footer-icons">
                        <li className="social-icon">
                            <a href="https://github.com/markusbit" target={"_blank"}><FontAwesomeIcon icon={faGithub} /></a>
                        </li>
                        <li className="social-icon">
                            <a href="https://www.linkedin.com/in/markus-brandstetter-bbb242247/" target={"_blank"}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                        <li className="social-icon">
                            <a href="https://instagram.com/mxrkus.b" target={"_blank"}><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                    </ul>
                </Col>
                <Col md='4'>
                    Copyright © {year}
                </Col>
            </Row>
        </Container>
    );
}

export default Footer; 