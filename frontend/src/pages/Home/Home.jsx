import React, { useState, useEffect } from "react";
import './home.css';
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";


function Home(props) {
    const title = <h1>Hello, I am Markus</h1>;
    const subtitle = 'Student and Developer';

    const [showImageAnimation, setShowImageAnimation] = useState(false);

    const handleTypingComplete = () => {
        localStorage.setItem('animationPlayed', true);
        setShowImageAnimation(true);
    };

    return (
        <Container fluid className="page-content">
            <div className="row center-content">
                <div className="col-md-6 typewriter-container">
                    {!props.loading && (
                        <>
                            {localStorage.getItem('animationPlayed') ? (
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
                        (localStorage.getItem('animationPlayed') && !showImageAnimation) && (
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
        </Container>
    )
}

export default Home; 