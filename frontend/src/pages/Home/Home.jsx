import React, { useState, useEffect, useRef } from "react";
import './home.css';
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


function Home(props) {
    const title = <h1>Hello, I am Markus</h1>;
    const subtitle = 'Student and Developer';

    const [showImageAnimation, setShowImageAnimation] = useState(false);
    const [showTextAnimation, setShowTextAnimation] = useState(false);

    const handleTypingComplete = () => {
        sessionStorage.setItem('animationPlayed', true);
        setShowImageAnimation(true);
        setTimeout(() => {
            setShowTextAnimation(true);
        }, 300);
    };

    return (
        <Container fluid className="page-content">
            <div className="row center-content">
                <div className="col-md-6 typewriter-container">
                    {!props.loading && (
                        <>
                            {sessionStorage.getItem('animationPlayed') ? (
                                <div>
                                    {title}
                                    {subtitle}
                                </div>
                            ) : (
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("<h1>Hello, I am Markus</h1>")
                                            .pauseFor(650)
                                            .typeString("Student and Developer")
                                            .start()
                                            .callFunction(() => {
                                                handleTypingComplete(typewriter);
                                            });
                                    }}
                                    options={{ autoStart: true, cursor: "", delay: 65 }}
                                />
                            )}</>
                    )

                    }
                    <br />
                </div>
                <div className="col-md-4">
                    {
                        (sessionStorage.getItem('animationPlayed') && !showImageAnimation) && (
                            <img
                                className="img-fluid mx-auto rounded"
                                src="https://via.placeholder.com/300"
                                alt="image"
                                style={{ maxWidth: 'fit-content' }}
                            />
                        )
                    }
                    {showImageAnimation && (
                        <img
                            className="img-fluid fade-in mx-auto rounded"
                            src="https://via.placeholder.com/300"
                            alt="image"
                            style={{ maxWidth: 'fit-content' }}
                        />
                    )}

                </div>

            </div>
            <div className="row center-content">
                <div className="mt-5 mx-auto p-5 homepage-text">
                    {
                        (sessionStorage.getItem('animationPlayed') && !showTextAnimation) && (
                            <div>
                                Welcome to my portfolio website! <br />
                                My name is Markus Brandstetter, and I am a programmer.
                                I am passionate about creating elegant, efficient, and functional solutions to complex problems.
                                I have 3 years of experience in the field. <FontAwesomeIcon icon={faCalendarAlt} /> <hr />
                                My programming journey began with a fascination for the power of technology to change the world. <hr />
                                On this website, you will find examples of my <Link to="projects">previous work</Link>, showcasing my expertise in various <Link to="about">programming languages, frameworks, and tools</Link>.
                                I strive to create software that not only meets the needs of users but also exceeds their expectations. <hr />
                                Whether it's building:
                                <ul className="homepage-list">
                                    <li> <FontAwesomeIcon icon={faHandPointRight} /> web applications</li>
                                    <li> <FontAwesomeIcon icon={faHandPointRight} /> mobile apps</li>
                                    <li> <FontAwesomeIcon icon={faHandPointRight} /> custom software</li>
                                </ul>
                                I am always up for the challenge.
                                I hope you enjoy exploring my portfolio and feel free to contact me.
                            </div>
                        )
                    }
                    {showTextAnimation && (
                        <div className="fade-in">
                            Welcome to my portfolio website! <br />
                            My name is Markus Brandstetter, and I am a programmer.
                            I am passionate about creating elegant, efficient, and functional solutions to complex problems.
                            I have 3 years of experience in the field. <FontAwesomeIcon icon={faCalendarAlt} /> <hr />
                            My programming journey began with a fascination for the power of technology to change the world. <hr />
                            On this website, you will find examples of my <Link to="about">previous work</Link>, showcasing my expertise in various programming languages, frameworks, and tools.
                            I strive to create software that not only meets the needs of users but also exceeds their expectations.
                            Whether it's building:
                            <ul className="homepage-list">
                                <li> <FontAwesomeIcon icon={faHandPointRight} /> web applications</li>
                                <li> <FontAwesomeIcon icon={faHandPointRight} /> mobile apps</li>
                                <li> <FontAwesomeIcon icon={faHandPointRight} /> custom software</li>
                            </ul>
                            I am always up for the challenge.
                            I hope you enjoy exploring my portfolio and feel free to contact me.
                        </div>
                    )
                    }
                </div>
            </div>

        </Container>
    )
}

export default Home; 