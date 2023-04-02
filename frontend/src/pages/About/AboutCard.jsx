import React from "react";
import Card from "react-bootstrap/Card";

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
            <ul>
                <li className="about-activity">
                    Sports
                </li>
                <li className="about-activity">
                    Writing Blogs
                </li>
                <li className="about-activity">
                    Reading
                </li>
            </ul>
        </div>
    );
}

export default AboutCard;
