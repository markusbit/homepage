import React from "react";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faDumbbell, faHandPointRight, faSwimmer } from '@fortawesome/free-solid-svg-icons';

function AboutCard() {
    return (
        <div>
            <h2>
                About me
            </h2>
            <p style={{ textAlign: "center" }}>
                Hi, I am <span className="blue">Markus Brandstetter </span>
                from <span className="blue"> Hollabrunn, Austria.</span>
                <br />I am a student at HTL Hollabrunn.
                <br />
                <br />
                Apart from coding, some other activities that I love to do:
            </p>

            <div className="about-activity">
                <h3><FontAwesomeIcon icon={faHandPointRight} /> Sports</h3>
                <ul>
                    <li>
                        Weight lifting <FontAwesomeIcon icon={faDumbbell} />
                    </li>
                    <li>
                        Swimming <FontAwesomeIcon icon={faSwimmer} />
                    </li>
                    <li>
                        Cycling Swimming <FontAwesomeIcon icon={faBicycle} />
                    </li>
                </ul>
            </div>
            <div className="about-activity">
                <FontAwesomeIcon icon={faHandPointRight} /> Cooking
                <ul>
                    <li>
                        BBQ <FontAwesomeIcon />
                    </li>
                    <li>
                        Smoking <FontAwesomeIcon />
                    </li>
                </ul>
            </div>
            <p className="text-box-shadow-blue-dark">
                Check out my <a href="https://instagram.com/mxrkus.b" target="_blank">Instagram</a> to view my private activities
            </p>
        </div>
    );
}

export default AboutCard;
