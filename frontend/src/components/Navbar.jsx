import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);
    const handleNavClick = () => {
        setExpanded(false);
    };
    return (
        <Navbar expanded={expanded} className='navbar' bg='light' expand="md" fixed='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">mb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" onClick={handleNavClick}>
                        <Nav.Item id='nav-item-home'>
                            <Nav.Link as={Link} to="/">
                                <FontAwesomeIcon icon={faHome} />
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item id='nav-item-about'>
                            <Nav.Link as={Link} to="/about">
                                <FontAwesomeIcon icon={faUser} />
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item id='nav-item-projects'>
                            <Nav.Link as={Link} to="/projects">
                                <FontAwesomeIcon icon={faProjectDiagram} />
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item id='nav-item-contact'>
                            <Nav.Link as={Link} to="/contact">
                                <FontAwesomeIcon icon={faMessage} />
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;